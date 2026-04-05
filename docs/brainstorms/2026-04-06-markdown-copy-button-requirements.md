---
date: 2026-04-06
topic: markdown-copy-button
---

# Markdown Copy 버튼

## Problem Frame

react-hook-form 한국어 문서 사용자가 특정 페이지의 내용을 마크다운으로 복사하고 싶을 때 (LLM 컨텍스트 활용, 노트 정리 등) 수동으로 소스를 찾아야 한다. 각 MDX 페이지에 "Copy Markdown" 버튼을 제공하여 클린 마크다운을 한 번의 클릭으로 클립보드에 복사할 수 있게 한다.

## Requirements

- R1. 모든 MDX 문서 페이지(`src/content/docs/`)에 "Copy Markdown" 버튼을 표시한다
- R2. 버튼은 페이지 상단(제목 + description 아래)에 배치한다
- R3. 버튼 클릭 시 해당 페이지의 클린 마크다운을 클립보드에 복사한다
  - JSX 컴포넌트 태그, import/export 문 제거
  - 코드 블록 언어 힌트 보존
  - 페이지 제목과 설명 포함
- R4. 복사 완료 시 시각적 피드백을 제공한다 (기존 ClipBoard 컴포넌트의 "Copied" 패턴 재활용)
- R5. 다크/라이트 테마 모두에서 정상 동작한다

## Success Criteria

- 모든 MDX 문서 페이지에 버튼이 노출된다
- 복사된 마크다운에 JSX 태그나 import 문이 포함되지 않는다
- 복사된 마크다운을 LLM에 바로 붙여넣기하여 컨텍스트로 사용할 수 있다

## Scope Boundaries

- TSX 전용 페이지(`/docs/usefieldarray`, `/docs/usecontroller`)는 MDX 소스가 없으므로 제외
- 홈페이지, get-started 등 비-문서 페이지는 대상 아님 → 기존 MDX 문서 페이지만 대상
- 마크다운 파일 다운로드 기능은 포함하지 않음 (클립보드 복사만)

## Key Decisions

- **접근법 C (빌드 타임 사전 생성) 채택**: 기존 `generate-llms-txt.ts`의 `processBody()` 파이프라인 재활용. 빌드 시 `public/md/{slug}.md` 파일 생성, 런타임에 fetch → 복사
- **새 의존성 0**: 기존 코드 인프라만 활용
- **버튼 위치**: 페이지 상단 (description 아래)

## Dependencies / Assumptions

- `generate-llms-txt.ts`의 `processBody()` + `stripJsx()` 함수가 안정적으로 동작한다 (이미 `llms-full.txt` 생성에서 검증됨)
- `postbuild` 훅에서 per-page `.md` 생성을 함께 처리한다

## Outstanding Questions

### Deferred to Planning

- [Affects R2][Technical] 버튼 스타일링 세부사항 (크기, 아이콘, hover 상태) — 기존 ClipBoard 컴포넌트 패턴 참고하여 결정
- [Affects R1][Technical] `public/md/` 디렉토리의 gitignore 처리 여부
- [Affects R3][Technical] get-started, advanced-usage, faqs, ts 같은 단일 페이지 문서도 per-page md 생성 대상에 포함할지

## Next Steps

→ `/ce:plan` for structured implementation planning
