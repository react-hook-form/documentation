# /translate - React Hook Form 문서 번역 자동화

인자: $ARGUMENTS

## 번역 규칙

CLAUDE.md의 번역 규칙을 반드시 따르세요:

- 표준 번역어: form→폼, method→메서드, submission→제출, input→인풋/입력, error→에러, send→전달, submit→전송, prop→속성, rerendering→리렌더링
- 이중 표기: register→등록(register), blur→블러(blur), optional array→의존성 배열(optional array), flat field array→평면 필드 배열(flat field array), properties→속성(properties), props→속성(props), touched→터치된(touched), dirty→변경된(dirty), render phase→렌더 단계(render phase), export→내보내기(export), dependency array→의존성 배열(dependency array)
- 영문 유지: flush, import, dispatch
- 섹션 제목(Props, Examples, Rules, TypeScript, API 등)은 영문 유지
- 섹션 아래 설명적 부제목은 번역
- 코드 블록 내 코드는 절대 변경 금지 (단, 주석은 한국어로 번역)
- 마크다운 구조(테이블, 헤딩 레벨, HTML 태그 등)는 원본과 동일하게 유지
- 기존 번역된 파일의 스타일과 톤을 참고하여 일관성 유지

## 실행 로직

`$ARGUMENTS` 값을 분석하세요:

### 모드 1: 인자가 비어있거나 없는 경우 → 인터랙티브 모드

자동으로 번역이 필요한 파일 목록을 감지하여 사용자에게 보여줍니다.

#### Step A: 미머지 PR 감지

1. `gh pr list --repo hamsurang/react-ko-form --state open --search "Update origin-src for translation" --json number,title` 실행
2. 열린 "Update origin-src for translation" PR이 있으면:
   - 사용자에게 알림: `"origin-src 업데이트 PR #{번호}가 아직 머지되지 않았습니다. 이 PR 기준으로 변경 파일을 감지할까요?"`
   - 사용자가 동의하면 → `gh pr diff {번호}`로 변경 파일을 추출하여 아래 Step B의 목록에 추가합니다.
   - 사용자가 거부하면 → 로컬 파일 비교만으로 진행합니다.
3. 열린 PR이 없으면 → 로컬 파일 비교만으로 진행합니다.

#### Step B: 로컬 파일 비교

1. **파일 목록 스캔**: `origin-src/content/` 아래의 모든 `.mdx` 파일을 glob으로 탐색합니다.

2. **상태 분류**: 각 파일에 대해 `src/content/` 대응 파일과 비교하여 상태를 판단합니다:

   - **신규 (New)**: `origin-src/content/{path}.mdx`는 있지만 `src/content/{path}.mdx`가 없는 경우
   - **동기화 필요 (Sync)**: 양쪽 다 있지만 마크다운 구조가 다른 경우 (코드 블록, 테이블 행 수, 섹션 헤딩 등의 구조적 차이로 판단)
   - **완료 (Done)**: 양쪽 다 있고, 구조적으로 동일한 경우

   **동기화 필요 판단 방법**: 영문 원본과 한국어 번역의 구조를 비교합니다. 다음 중 하나라도 다르면 동기화가 필요합니다:
   - 테이블 행 개수 (데이터 행 기준, `|`로 시작하는 행에서 구분선 `---` 행 제외)
   - 헤딩(`#`, `##`, `###` 등) 개수나 레벨
   - 코드 블록 개수
   - 전체 줄 수 차이가 10줄 이상

3. **Step A에서 PR diff가 있는 경우**: diff에서 변경된 파일도 "동기화 필요" 목록에 포함합니다 (중복 제거). 변경 사유에 `(PR #{번호} 기준)` 을 표기합니다.

#### Step C: 결과 출력 및 선택

1. **결과 출력**: 아래 형식으로 사용자에게 보여줍니다:

   ```markdown
   ## 번역 현황

   ### 신규 번역 필요 (N개)
   1. docs/some/newfile.mdx

   ### 동기화 필요 (N개)
   1. docs/usecontroller/controller.mdx — 테이블 행 추가 감지
   2. docs/useform/register.mdx — 섹션 구조 변경 감지 (PR #280 기준)

   ### 번역 완료 (N개)
   (생략 또는 접기)
   ```

2. **사용자 선택**: AskUserQuestion 도구를 사용하여 사용자에게 작업할 파일을 선택하도록 합니다. "신규 번역 필요" 와 "동기화 필요" 목록을 옵션으로 제공합니다. 사용자가 여러 개를 선택할 수도 있고, 하나만 선택할 수도 있습니다.

3. **선택된 파일 번역**: 사용자가 선택한 파일에 대해 아래 "단일 파일 번역 로직"을 수행합니다.

### 모드 2: 숫자인 경우 → PR 번호 모드

1. `gh pr diff $ARGUMENTS --repo hamsurang/react-ko-form` 실행하여 diff를 가져옵니다.
2. diff에서 `origin-src/content/` 아래 `.mdx` 파일의 변경 사항만 필터링합니다.
3. 변경된 파일 목록을 추출합니다 (diff 헤더의 `--- a/origin-src/content/...` 또는 `+++ b/origin-src/content/...` 패턴).
4. 변경된 파일 목록을 사용자에게 보여주고, AskUserQuestion 도구로 번역할 파일을 선택하도록 합니다.
5. 선택된 파일에 대해 아래 "단일 파일 번역 로직"을 수행합니다.
6. **파일 1개 = 브랜치 1개 = PR 1개**로 생성합니다.

### 모드 3: 문자열인 경우 → 단일 파일 모드

인자를 파일 경로로 해석합니다:

- `register` → glob으로 `origin-src/content/**/register.mdx` 탐색
- `docs/useform/register` → `origin-src/content/docs/useform/register.mdx`
- 확장자 `.mdx`가 없으면 자동으로 추가

해당 파일에 대해 아래 "단일 파일 번역 로직"을 바로 수행합니다.

## 단일 파일 번역 로직

### Step 1: 파일 읽기

- 영문 원본: `origin-src/content/{path}.mdx` 읽기
- 기존 한국어 번역: `src/content/{path}.mdx` 읽기 (존재하면)

### Step 2: 번역 모드 판단

- **기존 번역이 없는 경우 → 신규 번역**
  - 영문 원본 전체를 한국어로 번역합니다.
  - 위 번역 규칙을 적용합니다.
  - 기존에 번역된 다른 파일들을 참고하여 스타일과 톤을 맞춥니다.

- **기존 번역이 있는 경우 → 동기화 번역**
  - 영문 원본과 기존 한국어 번역을 비교합니다.
  - 영문 원본에서 추가/변경된 부분만 한국어로 번역하여 업데이트합니다.
  - 이미 번역된 부분은 그대로 유지합니다.
  - 영문 원본에서 삭제된 부분은 한국어 번역에서도 삭제합니다.
  - 구조적 변경(테이블 행 추가, 섹션 추가 등)도 반영합니다.

### Step 3: 번역 결과 저장

- `src/content/{path}.mdx`에 번역 결과를 저장합니다.

### Step 4: 브랜치 + 커밋 + PR 생성

1. 현재 브랜치에서 `master-ko` 기반으로 새 브랜치를 생성합니다:
   - 브랜치 이름: `docs/{slug}` (예: `docs/usecontroller-controller`)
   - slug는 상위 폴더명과 파일명을 `-`로 연결한 것 (예: `usecontroller-controller`)

2. 변경 파일을 커밋합니다:
   - 신규 번역: `docs: translate {파일명}`
   - 동기화: `docs: sync {파일명}`

3. PR을 생성합니다 (`hamsurang/react-ko-form` 대상, base: `master-ko`):
   - 신규 번역 제목: `docs: {파일명} 번역`
   - 동기화 제목: `docs: {파일명} 번역 동기화`
   - 본문에 변경 사항 요약 포함

4. PR 생성 후 `master-ko` 브랜치로 돌아갑니다.

## 주의사항

- 번역 중 확신이 없는 부분이 있으면, 사용자에게 확인 후 진행합니다.
- 코드 블록 안의 코드는 절대 변경하지 않습니다. 단, 주석(`//`, `/* */`, `{/* */}` 등)은 한국어로 번역합니다.
- JSX/MDX 컴포넌트 태그(`<TypeText>`, `<Admonition>` 등)는 그대로 유지합니다.
- 링크 URL은 변경하지 않습니다.
- frontmatter의 `title`은 영문 유지, `description`은 한국어로 번역합니다.
