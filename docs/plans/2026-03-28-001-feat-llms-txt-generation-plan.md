---
title: "feat: llms.txt 및 llms-full.txt 자동 생성"
type: feat
status: active
date: 2026-03-28
origin: docs/brainstorms/2026-03-28-llms-txt-generation-requirements.md
---

# feat: llms.txt 및 llms-full.txt 자동 생성

## Enhancement Summary

**Deepened on:** 2026-03-28
**Sections enhanced:** 6
**Research agents used:** JSX stripping best practices, llms.txt Next.js patterns, architecture review, MDX edge case analysis, code simplicity review

### Key Improvements
1. **코드 펜스 보호 패턴 추가** — regex가 코드 블록 내 `<form>`, `<input>` 등을 잘못 스트리핑하는 치명적 버그 방지
2. **2-pass 범용 스트리핑으로 단순화** — 11개 컴포넌트별 전략에서 2-pass 범용 접근으로 변경, 구현 복잡도 ~40% 감소
3. **단일 파일 구조** — 별도 `strip-jsx.ts` 모듈 불필요. 단일 스크립트로 충분
4. **하드 빌드 게이트** — 잔여 JSX 검출 시 스크립트가 비정상 종료하여 배포 방지
5. **.gitignore 및 Content-Type 헤더** — 빌드 아티팩트 관리 및 한국어 인코딩 보장

### New Considerations Discovered
- MDX 파일 내 JSX 대부분(form, input, Controller 등)은 **코드 펜스 내부**에 존재 — 코드 펜스 보호 없이는 대규모 오작동
- `<PrettyObject>`는 register.mdx 한 파일에 6회만 등장 — 전용 처리 대신 범용 스트리핑 후 수동 검증으로 충분
- `.contentlayer/` 의존 없이 원본 MDX 직접 읽기는 타이밍 의존성도 제거하는 부가 이점

---

## Overview

AI 코딩 도구(Cursor, Windsurf 등)에서 react-ko-form 한국어 문서를 참조 자료로 활용할 수 있도록, [llmstxt.org](https://llmstxt.org/) 표준을 따르는 `llms.txt`(인덱스)와 `llms-full.txt`(전체 콘텐츠)를 빌드 시 자동 생성한다.

## Problem Statement / Motivation

현재 `src/content/`의 MDX 파일은 JSX 컴포넌트(`<TypeText>`, `<Admonition>`, `<TabGroup>` 등)가 혼합되어 있어 LLM이 직접 소비하기 어렵다. llmstxt.org 표준에 맞는 정제된 마크다운 파일을 제공하면, AI 도구에서 `@Docs` 기능 등으로 한국어 React Hook Form 문서를 즉시 참조할 수 있다.

(see origin: `docs/brainstorms/2026-03-28-llms-txt-generation-requirements.md`)

## Proposed Solution

`scripts/generate-llms-txt.ts` 단일 postbuild 스크립트를 만들어, `src/content/` MDX 파일을 읽고 frontmatter 파싱 + JSX 스트리핑을 거쳐 `public/llms.txt`와 `public/llms-full.txt`를 생성한다.

## Technical Approach

### Architecture

```
pnpm build
  └─ next build (Contentlayer + Next.js)
  └─ postbuild: next-sitemap && npx tsx scripts/generate-llms-txt.ts
                                   │
                                   ├─ src/content/**/*.mdx 읽기
                                   ├─ frontmatter 인라인 파싱 (title, description, sidebar)
                                   ├─ 코드 펜스 보호 (placeholder 추출)
                                   ├─ 2-pass JSX 스트리핑
                                   ├─ 코드 펜스 복원 + 메타데이터 정리
                                   ├─ 섹션별 분류 및 정렬
                                   ├─ public/llms.txt 생성
                                   ├─ public/llms-full.txt 생성
                                   └─ 잔여 JSX 하드 검증 (실패 시 exit 1)
```

### 핵심: 코드 펜스 보호 패턴 (Placeholder-Protect)

MDX 파일의 JSX 대부분은 React 코드 예제(코드 펜스 내부)에 존재한다: `<form>`, `<input>`, `<Controller>`, `<FormProvider>` 등. **regex 스트리핑 전에 코드 펜스를 반드시 보호해야** 이들이 잘못 제거되지 않는다.

```typescript
// 1. 코드 펜스 추출 → 플레이스홀더로 교체
const blocks: string[] = [];
let safe = content.replace(/^(```[^\n]*\n[\s\S]*?^```)/gm, (match) => {
  blocks.push(match);
  return `%%CODE_BLOCK_${blocks.length - 1}%%`;
});

// 2. JSX 스트리핑 (safe 문자열에서만)
safe = stripJsx(safe);

// 3. 코드 펜스 복원
blocks.forEach((block, i) => {
  safe = safe.replace(`%%CODE_BLOCK_${i}%%`, block);
});

// 4. 코드 펜스 메타데이터 정리 (```tsx copy sandbox="..." → ```tsx)
safe = safe.replace(/^(```\w+)\s+copy(?:\s+sandbox="[^"]*")?/gm, '$1');
```

> **Research insight**: 이 프로젝트의 MDX 파일에는 코드 펜스 내부에 `<form>`, `<input>`, `<Controller>`, `<Select>`, `<MenuItem>`, `<View>`, `<Text>` 등 수백 개의 JSX 태그가 존재한다. 코드 펜스 보호 없이는 이 모든 태그가 스트리핑 대상이 되어 코드 예제가 파괴된다.

### 2-Pass JSX 스트리핑 (단순화)

11개 컴포넌트별 전략 대신, **2-pass 범용 접근**으로 구현한다:

```typescript
function stripJsx(content: string): string {
  // Pass 1: 셀프 클로징 커스텀 컴포넌트 제거
  // <YouTube youTubeId="..." />, <CodeSandbox .../>, <SelectNav .../>, <PrettyObject .../>
  content = content.replace(/<[A-Z]\w+\s[^>]*\/>/g, '');

  // Pass 2: 래핑 커스텀 컴포넌트의 태그만 제거, 내부 콘텐츠 유지
  // <TypeText>content</TypeText> → content
  // <Admonition type="note">content</Admonition> → content
  // <TabGroup buttonLabels={[...]}>content</TabGroup> → content
  content = content.replace(/<[A-Z]\w+[^>]*>/g, '');  // 여는 태그
  content = content.replace(/<\/[A-Z]\w+>/g, '');       // 닫는 태그

  // Pass 3 (보조): HTML 래퍼 제거
  content = content.replace(/<div\s+style=\{\{[^}]*\}\}\s*>/g, '');
  content = content.replace(/<\/div>/g, '');

  // Pass 4 (보조): 기본 HTML → 마크다운
  content = content.replace(/<br\s*\/?>/g, '\n');

  // Pass 5 (보조): import/export 문 제거
  content = content.replace(/^import\s+.*\n?/gm, '');
  content = content.replace(/^export\s+.*\n?/gm, '');

  // 정리: 과도한 빈 줄 축소
  content = content.replace(/\n{3,}/g, '\n\n');

  return content;
}
```

> **Simplicity insight**: `<TypeText>` 내부 텍스트, `<Admonition>` 내부 콘텐츠, `<TabGroup>` 내부 모든 탭은 태그만 제거하면 자연스럽게 보존된다. Blockquote 변환이나 라벨 추출 같은 추가 변환은 LLM 소비 시 실질적 가치가 없다.

### Frontmatter 파싱

32개 MDX 파일 모두 동일한 3필드 구조. 의존성 없이 인라인 파싱:

```typescript
function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error('Frontmatter not found');
  const fm = match[1];
  return {
    title: fm.match(/title:\s*(.+)/)?.[1]?.trim() ?? '',
    description: fm.match(/description:\s*(.+)/)?.[1]?.trim() ?? '',
    sidebar: fm.match(/sidebar:\s*(.+)/)?.[1]?.trim() ?? '',
    body: content.slice(match[0].length).trim(),
  };
}
```

### 섹션 구조 및 정렬

**llms.txt 섹션 순서** (학습 여정 순서):
1. 시작하기 (getStartedLinks)
2. API (apiLinks) — MDX 파일의 flattenedPath에서 계층 구조 추출
3. 고급 사용법 (advancedLinks)
4. FAQ (faqLinks)
5. TypeScript (tsLinks)

### URL 구성

**절대 URL** 사용. `SITE_URL`을 `next-sitemap.config.js`에서 추출하여 중복 방지:

```typescript
// next-sitemap.config.js의 siteUrl 재사용
const SITE_URL = 'https://react-ko-form.netlify.app';

const SIDEBAR_BASE_PATH: Record<string, string> = {
  getStartedLinks: '/get-started',
  advancedLinks: '/advanced-usage',
  faqLinks: '/faqs',
  tsLinks: '/ts',
};
```

> **Architecture insight**: `getStartedLinks`, `advancedLinks`, `faqLinks`, `tsLinks`는 단일 페이지에 앵커 섹션이므로 llms.txt에서는 **페이지 단위 링크만** 제공한다.

### TSX 전용 페이지 처리

`useFieldArray`과 `useController`는 MDX가 아닌 TSX 컴포넌트로 렌더링된다.

**결정**: llms.txt 인덱스에 링크는 포함하되, llms-full.txt 콘텐츠에서는 제외한다.

### 잔여 JSX 하드 검증

생성 완료 후 자동 검증. 실패 시 `exit 1`로 빌드 중단:

```typescript
const residual = output.match(/<[A-Z]\w+[\s>]/g);
if (residual && residual.length > 0) {
  console.error(`❌ Residual JSX found (${residual.length} occurrences):`);
  residual.forEach(tag => console.error(`  ${tag}`));
  process.exit(1);
}
```

> **Architecture insight**: 수동 확인이 아닌 하드 게이트로 만들어, 새로운 JSX 컴포넌트가 추가되어도 자동으로 감지된다.

## Acceptance Criteria

- [ ] `pnpm run build` 실행 후 `public/llms.txt`와 `public/llms-full.txt`가 생성된다
- [ ] `llms.txt`가 llmstxt.org 표준 형식을 따른다 (H1 + blockquote + H2 섹션별 링크)
- [ ] `llms.txt`의 모든 링크가 유효한 절대 URL이다
- [ ] `llms-full.txt`에 커스텀 JSX 태그가 포함되지 않는다 (하드 게이트 통과)
- [ ] `llms-full.txt`에서 `<TypeText>` 내부의 타입 정보 텍스트가 보존된다
- [ ] 코드 블록 내 JSX(`<form>`, `<input>` 등)가 원본 그대로 보존된다
- [ ] 콘텐츠가 한국어로 출력된다
- [ ] 섹션이 sidebar 분류에 따라 정렬된다
- [ ] 스크립트 실패 시 명확한 에러 메시지와 함께 비정상 종료한다

## Success Metrics

- AI 코딩 도구(Cursor 등)에서 `https://react-ko-form.netlify.app/llms-full.txt`를 참조 문서로 등록 가능
- `llms-full.txt`의 내용으로 React Hook Form 한국어 API 질문에 정확한 답변 가능

## Dependencies & Risks

- **의존성**: root `package.json`에 `tsx` devDependency 추가 필요 (scripts/package.json에만 존재)
- **리스크**: 새로운 JSX 컴포넌트가 MDX에 추가되면 스트리핑 누락 → 하드 게이트가 감지
- **리스크**: 코드 펜스 보호 regex가 비표준 코드 펜스 형식을 놓칠 수 있음 → 전체 파일 테스트로 검증

## Implementation Phases

### Phase 1: 단일 스크립트 구현

**파일**: `scripts/generate-llms-txt.ts` (단일 파일, 별도 lib 모듈 없음)

- [ ] MDX 파일 탐색 (`src/content/**/*.mdx` via `fs.readdirSync` 재귀)
- [ ] 인라인 frontmatter 파싱 (title, description, sidebar)
- [ ] 코드 펜스 보호 (placeholder 추출/복원)
- [ ] 2-pass JSX 스트리핑 (셀프 클로징 제거 → 래핑 태그 제거)
- [ ] HTML 래퍼/기본 HTML 정리
- [ ] import/export 문 제거
- [ ] 코드 펜스 메타데이터 정리 (copy, sandbox 속성)
- [ ] sidebar별 분류 및 섹션 순서 정렬
- [ ] `public/llms.txt` 생성 (llmstxt.org 형식)
- [ ] `public/llms-full.txt` 생성 (문서 간 `---` + H1 구분)
- [ ] 잔여 JSX 하드 검증 (실패 시 exit 1)
- [ ] 생성 결과 로그 출력 (파일 수, 출력 크기)

<details>
<summary>llms.txt 예상 출력</summary>

```markdown
# React Hook Form (한국어)

> React Hook Form 공식 문서의 한국어 번역입니다. 폼 유효성 검사를 위한 React 훅 라이브러리의 API 레퍼런스, 시작 가이드, 고급 사용법을 제공합니다.

## 시작하기

- [Get Started](https://react-ko-form.netlify.app/get-started): 리액트 훅 form으로 간단한 양식 유효성 검사.

## API

- [useForm](https://react-ko-form.netlify.app/docs/useform): 폼 유효성 검사를 위한 리액트 훅
  - [register](https://react-ko-form.netlify.app/docs/useform/register): 비제어/제어 입력 필드 등록(register)
  - [unregister](https://react-ko-form.netlify.app/docs/useform/unregister): 비제어, 제어 입력 등록 해제(Unregister)
  - [formState](https://react-ko-form.netlify.app/docs/useform/formstate): 폼의 상태
  - [watch](https://react-ko-form.netlify.app/docs/useform/watch): 입력 변경 사항 구독
  - [subscribe](https://react-ko-form.netlify.app/docs/useform/subscribe): 리렌더링 없이 폼 상태 업데이트 구독
  - [handleSubmit](https://react-ko-form.netlify.app/docs/useform/handlesubmit): 서버로 전송 준비
  - [reset](https://react-ko-form.netlify.app/docs/useform/reset): 폼 상태와 값을 초기화
  - [resetField](https://react-ko-form.netlify.app/docs/useform/resetfield): 필드 상태 및 값 재설정
  - [setError](https://react-ko-form.netlify.app/docs/useform/seterror): 입력 에러를 수동으로 설정하기
  - [clearErrors](https://react-ko-form.netlify.app/docs/useform/clearerrors): 폼 에러 제거
  - [setValue](https://react-ko-form.netlify.app/docs/useform/setvalue): 필드 값 업데이트
  - [setFocus](https://react-ko-form.netlify.app/docs/useform/setfocus): 입력 포커스 수동 설정
  - [getValues](https://react-ko-form.netlify.app/docs/useform/getvalues): 폼 값 가져오기
  - [getFieldState](https://react-ko-form.netlify.app/docs/useform/getfieldstate): 필드의 상태
  - [trigger](https://react-ko-form.netlify.app/docs/useform/trigger): 폼 전체에서 유효성 검사 트리거
  - [control](https://react-ko-form.netlify.app/docs/useform/control): 폼을 제어
  - [Form](https://react-ko-form.netlify.app/docs/useform/form): 폼 submission 관리
- [useController](https://react-ko-form.netlify.app/docs/usecontroller): 제어 입력 필드 래퍼
  - [Controller](https://react-ko-form.netlify.app/docs/usecontroller/controller): 제어 입력 필드를 위한 래퍼(Wrapper) 컴포넌트
- [useFormContext](https://react-ko-form.netlify.app/docs/useformcontext): 훅 폼을 위한 React Context API
  - [FormProvider](https://react-ko-form.netlify.app/docs/formprovider): React 컨텍스트를 제공하는 컴포넌트
- [useWatch](https://react-ko-form.netlify.app/docs/usewatch): 입력의 변경을 구독하기 위한 React 훅
  - [Watch](https://react-ko-form.netlify.app/docs/usewatch/watch): 입력 변경 사항을 구독하는 Watch 컴포넌트
- [useFormState](https://react-ko-form.netlify.app/docs/useformstate): 폼 상태 업데이트를 구독
  - [ErrorMessage](https://react-ko-form.netlify.app/docs/useformstate/errormessage): 에러를 처리하는 메시지 컴포넌트
  - [FormStateSubscribe](https://react-ko-form.netlify.app/docs/useformstate/formstatesubscribe): 폼 상태 업데이트를 구독하는 컴포넌트
- [useFieldArray](https://react-ko-form.netlify.app/docs/usefieldarray): 필드 배열 관리
- [useLens](https://react-ko-form.netlify.app/docs/uselens): React Hook Form을 위한 타입 안전한 함수형 렌즈
- [createFormControl](https://react-ko-form.netlify.app/docs/createformcontrol): 폼 상태를 생성하고 구독할 수 있도록 준비합니다.

## 고급 사용법

- [고급 사용법](https://react-ko-form.netlify.app/advanced-usage): 복잡하면서도 접근성 높은 폼 만들기

## FAQ

- [FAQs](https://react-ko-form.netlify.app/faqs): 자주 묻는 질문

## TypeScript

- [Typescript Support](https://react-ko-form.netlify.app/ts): 내보내기(exported)한 Typescript 타입 목록입니다.
```

</details>

### Phase 2: 빌드 통합 및 검증

- [ ] root `package.json`에 `tsx` devDependency 추가
- [ ] `package.json`의 `postbuild` 수정: `"next-sitemap && npx tsx scripts/generate-llms-txt.ts"`
- [ ] `.gitignore`에 `public/llms.txt`와 `public/llms-full.txt` 추가 (빌드 아티팩트)
- [ ] `public/_headers`에 Content-Type 설정 추가:
  ```
  /llms.txt
    Content-Type: text/plain; charset=utf-8
  /llms-full.txt
    Content-Type: text/plain; charset=utf-8
  ```
- [ ] `pnpm run build` 전체 실행하여 E2E 검증
- [ ] 생성된 llms-full.txt를 수동 검토하여 edge case 확인 (특히 register.mdx의 중첩 JSX)
- [ ] edge case 발견 시 타겟 수정 (범용 스트리핑으로 처리 안 되는 패턴만)

## Alternative Approaches Considered

| 접근 방식 | 선택 여부 | 이유 |
|-----------|-----------|------|
| `vitepress-plugin-llms` 사용 | 불가 | 프로젝트가 Next.js + Contentlayer 기반, VitePress 아님 |
| Contentlayer 출력 사용 | 기각 | `.contentlayer/generated/`의 JSON에서 JSX 스트리핑이 더 복잡 |
| remark/unified AST 파서 사용 | 기각 | 의존성 추가 대비 이점 부족. 2-pass 범용 regex로 충분. 코드 펜스 보호로 주요 리스크 해소 |
| Next.js 정적 페이지로 서빙 | 기각 | HTML이 아닌 순수 텍스트가 필요. 정적 파일이 더 적합 |
| Chakra UI식 주제별 분리 | 기각 | 32개 MDX 파일 규모에서 과도. llms-full.txt로 충분 |
| 컴포넌트별 11개 전략 (원래 계획) | 단순화 | 2-pass 범용 접근이 충분. 6회 등장하는 PrettyObject 전용 파서 등은 YAGNI |
| gray-matter 의존성 | 기각 | 3필드 고정 구조에 인라인 regex 파싱으로 충분. 제로 의존성 |

(see origin: `docs/brainstorms/2026-03-28-llms-txt-generation-requirements.md` — Key decisions: postbuild 스크립트, 원본 MDX 직접 읽기, 한국어 전용, llms.txt + llms-full.txt)

## Sources & References

### Origin

- **Origin document:** [docs/brainstorms/2026-03-28-llms-txt-generation-requirements.md](docs/brainstorms/2026-03-28-llms-txt-generation-requirements.md) — 핵심 결정 사항: postbuild 스크립트 방식, 원본 MDX 직접 파싱, 한국어 전용, AI 도구 연동 목적

### Internal References

- `src/content/**/*.mdx` — 콘텐츠 소스 (32개 파일)
- `src/components/Menu/MenuLinks.ts` — sidebar 섹션 구조 및 계층
- `src/components/mdx/mdx.tsx` — MDX 커스텀 컴포넌트 매핑 (TypeText, Admonition, TabGroup 등 9종)
- `package.json:70` — 현재 postbuild 스크립트 (`next-sitemap`)
- `next-sitemap.config.js` — 사이트 URL (`https://react-ko-form.netlify.app`)
- `scripts/cli.ts` — 기존 TypeScript 스크립트 패턴
- `src/content/docs/useform/register.mdx` — 가장 복잡한 JSX 구조 (중첩 TypeText > PrettyObject, 테이블 셀 내 JSX)

### External References

- [llmstxt.org](https://llmstxt.org/) — llms.txt 표준 사양
- [es-toolkit/llms.txt](https://es-toolkit.dev/llms.txt) — 참조 구현 (vitepress-plugin-llms)
- [Chakra UI AI/LLMs](https://chakra-ui.com/docs/get-started/ai/llms) — 모듈러 접근 참조

### Research Insights

- **코드 펜스 보호**: placeholder-protect 패턴은 regex 기반 JSX 스트리핑의 필수 전제조건. code fence 내 `<form>`, `<input>`, `<Controller>` 등 수백 개의 JSX 태그가 코드 예제에 존재
- **2-pass 범용 접근**: 셀프 클로징 대문자 태그 제거 → 래핑 대문자 태그 제거(내부 유지). 컴포넌트별 전략보다 단순하고 유지보수 용이
- **@icyjoseph/mdx2md**: WASM 기반 MDX→MD 변환기가 존재하나, 이 프로젝트 규모에서는 과도. 커스텀 regex가 더 적합
- **잔여 JSX 하드 게이트**: 빌드 시 자동 검증으로 새로운 JSX 컴포넌트 추가 시에도 안전망 제공
