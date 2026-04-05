---
title: "feat: Add Markdown Copy Button to Doc Pages"
type: feat
status: active
date: 2026-04-06
origin: docs/brainstorms/2026-04-06-markdown-copy-button-requirements.md
---

# feat: Add Markdown Copy Button to Doc Pages

## Overview

모든 MDX 문서 페이지에 "Copy Markdown" 버튼을 추가하여 페이지 내용을 클린 마크다운으로 클립보드에 복사할 수 있게 한다. LLM 컨텍스트 활용, 노트 정리 등에 유용.

## Problem Statement

사용자가 문서 내용을 마크다운으로 복사하려면 수동으로 MDX 소스를 찾아야 한다. JSX 컴포넌트, import 문 등이 포함된 raw MDX는 바로 사용하기 어렵다. (see origin: `docs/brainstorms/2026-04-06-markdown-copy-button-requirements.md`)

## Proposed Solution

**빌드 타임 사전 생성 (접근법 C)**:
1. `scripts/generate-llms-txt.ts`를 확장하여 빌드 시 페이지별 `.md` 파일을 `public/md/{flattenedPath}.md`에 생성
2. 새 `CopyMarkdownButton` 컴포넌트가 런타임에 해당 `.md`를 fetch → 클립보드에 복사

새 의존성 0, 런타임 번들 영향 0.

## Acceptance Criteria

- [ ] **Step 1: 빌드 스크립트 확장** — `scripts/generate-llms-txt.ts`
  - `generatePerPageMd(docs)` 함수 추가
  - 각 doc에 대해 `processBody(doc.body)` 실행, `# {title}\n\n> {description}\n\n{body}` 형식으로 `public/md/{flattenedPath}.md`에 저장
  - 중첩 경로는 `fs.mkdirSync(dir, { recursive: true })`로 처리
  - 모든 32개 MDX 파일 대상 (top-level 4개 포함: get-started, advanced-usage, faqs, ts)
  - TSX 전용 페이지(`/docs/usefieldarray`, `/docs/usecontroller`)는 제외
  - 생성된 파일 수와 크기를 콘솔에 로그
  - `public/md/` 를 `.gitignore`에 추가

- [ ] **Step 2: CopyMarkdownButton 컴포넌트** — `src/components/CopyMarkdownButton.tsx` + `CopyMarkdownButton.module.css`
  - Props: `slug: string` (doc의 `flattenedPath`, 예: `docs/useform/register`)
  - 4-state 상태 머신: `idle` → `loading` → `copied` → `idle` (3초 후), 에러 시 `error` → `idle` (3초 후)
  - 클릭 시: `fetch(/md/${slug}.md)` → `copyToClipboard(text)` (기존 `copyClipBoard` 유틸리티 재활용)
  - fetch 실패 또는 clipboard 실패 시 에러 상태 표시 (misleading "Copied" 방지)
  - `aria-label` 상태별 업데이트
  - 다크/라이트 테마 모두 지원 (CSS 변수 활용)

- [ ] **Step 3: 페이지 통합** — `src/pages/[...slug].tsx`
  - description `<p>` 아래, wrapper `<div>` 위에 `CopyMarkdownButton` 배치
  - `doc._raw.flattenedPath`를 `slug` prop으로 전달

- [ ] **Step 4: i18n 라벨** — `src/data/generic.tsx`
  - `copyMarkdown`, `markdownCopied`, `copyFailed` 등 라벨 추가 (기존 `copy`/`codeCopied` 패턴 따름)

- [ ] **Step 5: 검증**
  - `pnpm run build` 성공 확인 (postbuild에서 per-page .md 생성)
  - 생성된 `.md` 파일에 잔여 JSX 태그 없음 확인
  - dev 서버에서 버튼 클릭 → 클립보드에 클린 마크다운 복사 확인
  - 다크/라이트 테마 전환 시 버튼 스타일 정상 확인

## Key Implementation Notes

**Slug → 파일 경로 매핑:**
- `flattenedPath: "docs/useform/register"` → `public/md/docs/useform/register.md`
- `flattenedPath: "get-started"` → `public/md/get-started.md`
- 런타임 fetch: `/md/${slug}.md`

**기존 `ClipBoard` 컴포넌트를 수정하지 않음:**
기존 컴포넌트는 동기 `onClick` 패턴이고 에러 무시. 새 `CopyMarkdownButton`은 async fetch + 에러 처리가 필요하므로 별도 컴포넌트로 생성. `copyToClipboard` 유틸리티만 공유. (SpecFlow 분석 Q4)

**Top-level 4개 페이지 포함:**
`get-started`, `advanced-usage`, `faqs`, `ts`도 동일한 `[...slug].tsx` 렌더러를 사용하므로 버튼 포함. 제외하면 UX 불일치 발생. (SpecFlow 분석 Q3)

## Sources

- **Origin document:** [docs/brainstorms/2026-04-06-markdown-copy-button-requirements.md](docs/brainstorms/2026-04-06-markdown-copy-button-requirements.md) — 접근법 C 채택, 빌드 타임 사전 생성, 버튼 상단 배치
- Key files:
  - `scripts/generate-llms-txt.ts` — `processBody()` pipeline 재활용
  - `src/components/ClipBoard.tsx` — 기존 copy 패턴 참고
  - `src/components/utils/copyClipBoard.ts` — clipboard 유틸리티 재활용
  - `src/pages/[...slug].tsx:42-72` — 버튼 삽입 위치
  - `src/data/generic.tsx:4-5` — i18n 라벨 패턴
  - `.gitignore` — `public/llms.txt` 패턴 참고
