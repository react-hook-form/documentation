# 번역 자동화 CLI 아키텍처

## 디렉토리 구조

```
scripts/
  cli.ts              # 진입점 — 인자 파싱, 메인 루프
  lib/
    types.ts           # 공유 타입 정의
    detect.ts          # 파일 탐지, 구조 비교, 읽기/쓰기
    translate.ts       # Anthropic API 호출, 프롬프트 구성, 번역 검증
    pr.ts              # Git 브랜치/커밋/PR 자동 생성
```

---

## 실행 흐름

```
cli.ts main()
  │
  ├─ 1. 환경 검증
  │     ANTHROPIC_API_KEY 확인, git repo root로 이동
  │
  ├─ 2. 대상 파일 결정
  │     --files "a,b,c"  →  직접 지정
  │     --issue 123      →  gh issue 제목에서 파일 경로 파싱
  │
  ├─ 3. 파일 경로 해석 (resolveFilePath)
  │     정확한 경로 → 있으면 반환
  │     짧은 이름   → origin-src/content/ 재귀 탐색
  │
  ├─ 4. 파일별 처리 루프
  │     │
  │     ├─ 모드 결정: 기존 번역 파일 있으면 "sync", 없으면 "new"
  │     │
  │     ├─ sync 모드 스킵 판단
  │     │   원본 vs 번역 구조(헤딩/코드블록/테이블) 비교
  │     │   → 차이 없으면 스킵
  │     │
  │     ├─ --dry-run이면 정보 출력 후 스킵
  │     │
  │     ├─ translateFile() — Anthropic API 호출
  │     │
  │     ├─ saveTranslation() — src/content/에 저장
  │     │
  │     └─ createPr() — 브랜치 생성 → 커밋 → 푸시 → PR
  │
  └─ 5. 완료 요약 출력
```

---

## 타입 정의 (`types.ts`)

| 타입 | 용도 |
|---|---|
| `StructureInfo` | MDX 파일의 구조 정보 (헤딩 수, 코드블록 수, 테이블 행 수) |
| `TranslationMode` | `"new"` (신규 번역) \| `"sync"` (기존 번역 동기화) |
| `TranslationTask` | 번역 작업 단위 — 파일 경로, 모드, 원본/기존 번역 내용, 레퍼런스 |
| `TranslationResult` | 번역 결과 — 파일 경로, 번역된 내용, 모드 |
| `ValidationReport` | 번역 검증 결과 — 통과 여부, 경고 목록 |
| `TranslateConfig` | CLI 설정 (현재 미사용, 향후 확장용) |
| `PrResult` | PR 생성 결과 — 브랜치명, PR URL, 파일 경로 |

---

## 모듈별 상세

### `detect.ts` — 파일 탐지 및 구조 비교

#### `extractStructure(content) → StructureInfo`

MDX 문자열을 한 줄씩 순회하며 구조 정보를 추출한다.

- 코드블록(```) 내부는 무시 (헤딩/테이블 오탐 방지)
- `# ~ ######` 패턴으로 헤딩 카운트
- `|`로 시작하되 구분선(`---|---`)이 아닌 줄을 테이블 행으로 카운트

#### `compareStructures(origin, translated) → string[]`

두 `StructureInfo`를 비교하여 차이가 있는 항목을 한국어 메시지 배열로 반환한다.
빈 배열이면 구조 일치.

**사용처:**
- `cli.ts` — sync 모드에서 스킵 여부 판단
- `translate.ts` — 번역 결과 검증 (`validateTranslation`)

#### `parseFileFromIssueTitle(title) → string | null`

이슈 제목에서 파일 경로를 추출한다.

```
"[Docs] docs/useform/register.mdx — Add"  →  "docs/useform/register.mdx"
"[Docs] docs/useform.mdx — Sync"          →  "docs/useform.mdx"
"관련 없는 제목"                             →  null
```

#### `resolveFilePath(input) → string | null`

사용자 입력을 `origin-src/content/` 기준 상대 경로로 해석한다.

1. `.mdx` 확장자가 없으면 자동 추가
2. 정확한 경로로 존재하면 그대로 반환
3. 없으면 파일명만으로 디렉토리 재귀 탐색

```
"docs/useform/register.mdx"  →  정확 매칭
"register"                   →  "docs/useform/register.mdx" (재귀 탐색)
"없는파일"                    →  null
```

#### `getOriginContent(filePath) → string`

`origin-src/content/{filePath}` 파일을 읽어 반환한다.

#### `getTranslatedContent(filePath) → string | null`

`src/content/{filePath}` 파일을 읽어 반환한다. 없으면 `null`.

#### `getReferenceFiles() → { path, content }[]`

`src/content/`에서 기존 번역 파일 최대 2개를 수집한다.
톤/스타일 레퍼런스로 system prompt에 포함시키기 위한 용도.

- 200자 미만 파일은 제외 (내용이 너무 적은 파일 필터)
- 각 파일의 앞 3000자만 잘라서 전달 (토큰 절약)

#### `saveTranslation(filePath, content) → void`

번역 결과를 `src/content/{filePath}`에 저장한다.
디렉토리가 없으면 자동 생성.

---

### `translate.ts` — 번역 API 호출

#### `loadTranslationRules() → string`

프로젝트 루트의 `AGENTS.md`를 읽어 번역 규칙으로 사용한다.

#### `buildSystemPrompt(referenceFiles?) → string`

system prompt를 조립한다:
1. 번역 규칙 (`AGENTS.md` 내용)
2. 핵심 지시사항 (코드/구조 보존, frontmatter 처리 등)
3. 레퍼런스 파일 (있으면 톤 참고용으로 첨부)

#### `buildNewTranslationPrompt(originContent) → string`

신규 번역용 user prompt. 원본 전체를 `<source-document>` 태그로 감싸서 전달.

#### `buildSyncTranslationPrompt(originContent, existingTranslation) → string`

동기화 번역용 user prompt. 업데이트된 원본 + 기존 번역을 함께 전달하여,
변경된 부분만 업데이트하도록 지시.

#### `validateTranslation(originContent, translatedContent) → ValidationReport`

번역 결과의 무결성을 검증한다:

1. **구조 비교** — `extractStructure` + `compareStructures` 재사용
   - 헤딩 수, 코드블록 수, 테이블 행 수 일치 확인
2. **frontmatter 검증**
   - 원본에 frontmatter(`---` 블록)가 있으면 번역에도 있어야 함
   - frontmatter 안에 `title:` 필드가 존재해야 함

경고가 있어도 번역은 저장되며, 콘솔에 경고만 출력한다.

#### `stripCodeFenceWrapper(content) → string`

LLM이 응답을 코드펜스(````mdx ... ````)로 감쌀 경우 자동 제거한다.

#### `translateFile(task, apiKey) → TranslationResult`

번역의 핵심 함수. 전체 흐름:

1. Anthropic 클라이언트 생성
2. 모드에 따라 프롬프트 구성 (`new` / `sync`)
3. `claude-sonnet-4-5-20250929` 모델로 API 호출
4. 토큰 사용량 및 예상 비용 출력
5. 응답에서 코드펜스 래핑 제거
6. `validateTranslation`으로 결과 검증
7. 경고가 있으면 출력 (에러는 아님)

---

### `pr.ts` — PR 자동 생성

#### `generateBranchName(filePath) → string`

파일 경로를 브랜치명으로 변환한다.

```
"docs/useform/register.mdx"  →  "docs/docs-useform-register"
```

#### `generateCommitMessage(filePath, mode) → string`

모드에 따라 커밋 메시지를 생성한다.

```
new  →  "docs: translate docs/useform/register"
sync →  "docs: sync docs/useform/register"
```

#### `createPr(filePath, translatedFilePath, mode, issueNumber?) → PrResult`

Git + GitHub CLI로 PR을 자동 생성한다:

1. git identity 설정 (CI용 — `github-actions[bot]`)
2. `origin/master-ko` 기준으로 브랜치 생성
3. 번역 파일 stage → commit → force push
4. 기존 PR이 있으면 업데이트, 없으면 새로 생성
5. `--issue` 지정 시 PR body에 `Closes #N` 추가

---

## CLI 사용법

```bash
# 파일 직접 지정
npx tsx scripts/cli.ts --files "docs/useform/register.mdx"

# 여러 파일
npx tsx scripts/cli.ts --files "docs/useform.mdx,docs/useform/register.mdx"

# 짧은 이름 (자동 탐색)
npx tsx scripts/cli.ts --files "register"

# GitHub 이슈에서 파일 추출
npx tsx scripts/cli.ts --issue 42

# 실제 API 호출 없이 테스트
npx tsx scripts/cli.ts --files "register" --dry-run

# 최대 처리 파일 수 제한
npx tsx scripts/cli.ts --files "a,b,c,d,e,f" --max-files 3
```

### 필수 환경변수

| 변수 | 설명 |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic API 키 |

### 필수 외부 도구

| 도구 | 용도 |
|---|---|
| `gh` (GitHub CLI) | 이슈 조회, PR 생성/수정 |
| `git` | 브랜치/커밋/푸시 |

---

## 검증 체계 요약

번역 품질을 두 단계에서 검증한다:

| 단계 | 위치 | 역할 |
|---|---|---|
| **번역 전** (스킵 판단) | `cli.ts` 메인 루프 | 원본 vs 기존 번역 구조 비교 → 차이 없으면 스킵 |
| **번역 후** (결과 검증) | `translate.ts` `validateTranslation` | 원본 vs 새 번역 구조 비교 + frontmatter 존재 확인 |

두 단계 모두 `extractStructure` + `compareStructures`를 공유하여 동일한 기준으로 검증한다.
