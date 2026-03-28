---
date: 2026-03-28
topic: llms-txt-generation
---

# llms.txt 자동 생성

## Problem Frame

AI 코딩 도구(Cursor, Windsurf 등)에서 react-ko-form 한국어 문서를 참조 자료로 활용하려면, LLM이 쉽게 소비할 수 있는 정제된 텍스트 형식이 필요하다. 현재는 MDX + JSX 컴포넌트가 혼합된 형태라 AI 도구가 직접 파싱하기 어렵다.

[llmstxt.org](https://llmstxt.org/) 표준을 따르는 `/llms.txt`와 `/llms-full.txt`를 docs 빌드 시 자동 생성하여, AI 도구에서 한국어 React Hook Form 문서를 즉시 활용할 수 있도록 한다.

## Requirements

- R1. `next build` 완료 후 postbuild 단계에서 `public/llms.txt`와 `public/llms-full.txt`를 자동 생성한다
- R2. `llms.txt`는 llmstxt.org 표준을 따르는 인덱스 파일이다
  - H1: 프로젝트명
  - blockquote: 프로젝트 요약
  - H2 섹션별 링크 목록 (API, 시작하기, 고급 사용법, FAQ, TypeScript 등)
  - 각 링크에 title과 description 포함
- R3. `llms-full.txt`는 모든 문서의 마크다운 콘텐츠를 하나의 파일로 합친다
  - 문서 간 구분을 위한 H1 헤딩과 구분선 포함
  - JSX 컴포넌트(`<TypeText>`, `<Admonition>`, `<TabGroup>` 등)를 제거하거나 순수 텍스트로 변환
  - frontmatter(YAML)는 제거하고 제목/설명은 본문 헤딩으로 반영
  - 코드 블록은 그대로 유지
- R4. 콘텐츠는 한국어로 생성한다 (원본 MDX가 한국어이므로 그대로 활용)
- R5. `src/content/` 디렉토리의 MDX 파일을 소스로 사용한다. Contentlayer 빌드 출력이 아닌 원본 MDX를 직접 읽는다
- R6. 섹션 구조는 기존 sidebar 분류(apiLinks, getStartedLinks, advancedLinks, faqLinks, tsLinks)를 따른다

## Success Criteria

- `pnpm run build` 실행 후 `public/llms.txt`와 `public/llms-full.txt`가 존재한다
- `llms.txt`가 llmstxt.org 표준 마크다운 형식을 따른다
- `llms-full.txt`에 JSX 태그가 포함되지 않는다
- AI 코딩 도구에서 URL로 참조하면 정상적으로 문서 내용을 활용할 수 있다

## Scope Boundaries

- 주제별 분리 파일(llms-api.txt 등)은 생성하지 않는다. 32개 MDX 파일 규모에서는 불필요
- 영어 버전 llms.txt는 생성하지 않는다. 이 프로젝트는 한국어 번역 전용
- `.md` URL 엔드포인트(개별 페이지의 마크다운 버전)는 이 작업 범위에 포함하지 않는다
- Contentlayer 플러그인 확장이 아닌, 독립 postbuild 스크립트로 구현한다

## Key Decisions

- **postbuild 스크립트 방식**: next-sitemap과 동일한 패턴. 빌드 파이프라인에 자연스럽게 통합되고 Contentlayer 의존 없이 동작
- **원본 MDX 직접 읽기**: Contentlayer 빌드 출력(.contentlayer/generated)보다 원본 MDX를 직접 파싱하는 것이 JSX 처리에 더 투명하고 단순
- **한국어 전용**: 프로젝트 성격에 맞게 한국어 콘텐츠만 포함
- **llms.txt + llms-full.txt**: AI 도구 대부분이 llms-full.txt를 선호하므로 둘 다 생성

## Dependencies / Assumptions

- `src/content/` MDX 파일의 frontmatter에 `title`, `description`, `sidebar` 필드가 항상 존재한다고 가정
- 사이트 배포 시 `public/` 디렉토리의 파일이 루트 경로로 서빙된다고 가정 (Netlify)

## Outstanding Questions

### Deferred to Planning

- [Affects R3][Technical] MDX에서 JSX 컴포넌트를 제거할 때 단순 regex 제거로 충분한지, 또는 MDX 파서(remark/unified)를 사용해야 하는지
- [Affects R2][Technical] llms.txt의 링크 URL을 상대 경로(`/docs/useform/register`)로 할지 절대 URL(`https://react-ko-form.vercel.app/docs/useform/register`)로 할지
- [Affects R6][Needs research] MenuLinks.ts의 sidebar 분류와 실제 MDX frontmatter의 sidebar 값이 일관되게 매핑되는지 확인 필요

## Next Steps

→ `/ce:plan` for structured implementation planning
