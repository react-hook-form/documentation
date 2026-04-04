/**
 * llms.txt / llms-full.txt 생성 스크립트
 *
 * postbuild 단계에서 실행되어 src/content/ MDX 파일을 읽고
 * llmstxt.org 표준에 맞는 인덱스(llms.txt)와 전체 콘텐츠(llms-full.txt)를 생성한다.
 *
 * Usage: npx tsx scripts/generate-llms-txt.ts
 */

import fs from "fs";
import path from "path";

// ── Config ──────────────────────────────────────────────────────────────────

const SITE_URL = "https://react-ko-form.netlify.app";
const CONTENT_DIR = path.resolve(import.meta.dirname, "../src/content");
const OUTPUT_DIR = path.resolve(import.meta.dirname, "../public");

const SECTION_ORDER = [
  "getStartedLinks",
  "apiLinks",
  "advancedLinks",
  "faqLinks",
  "tsLinks",
] as const;

const SECTION_LABELS: Record<string, string> = {
  getStartedLinks: "시작하기",
  apiLinks: "API",
  advancedLinks: "고급 사용법",
  faqLinks: "FAQ",
  tsLinks: "TypeScript",
};

const SIDEBAR_BASE_PATH: Record<string, string> = {
  getStartedLinks: "/get-started",
  advancedLinks: "/advanced-usage",
  faqLinks: "/faqs",
  tsLinks: "/ts",
};

// API 계층 구조 (MenuLinks.ts 기반)
const API_HIERARCHY: { pathname: string; name: string; pages?: { pathname: string; name: string }[] }[] = [
  {
    pathname: "/docs/useform",
    name: "useForm",
    pages: [
      { pathname: "/docs/useform/register", name: "register" },
      { pathname: "/docs/useform/unregister", name: "unregister" },
      { pathname: "/docs/useform/formstate", name: "formState" },
      { pathname: "/docs/useform/watch", name: "watch" },
      { pathname: "/docs/useform/subscribe", name: "subscribe" },
      { pathname: "/docs/useform/handlesubmit", name: "handleSubmit" },
      { pathname: "/docs/useform/reset", name: "reset" },
      { pathname: "/docs/useform/resetfield", name: "resetField" },
      { pathname: "/docs/useform/seterror", name: "setError" },
      { pathname: "/docs/useform/clearerrors", name: "clearErrors" },
      { pathname: "/docs/useform/setvalue", name: "setValue" },
      { pathname: "/docs/useform/setfocus", name: "setFocus" },
      { pathname: "/docs/useform/getvalues", name: "getValues" },
      { pathname: "/docs/useform/getfieldstate", name: "getFieldState" },
      { pathname: "/docs/useform/trigger", name: "trigger" },
      { pathname: "/docs/useform/control", name: "control" },
      { pathname: "/docs/useform/form", name: "Form" },
    ],
  },
  {
    pathname: "/docs/usecontroller",
    name: "useController",
    pages: [{ pathname: "/docs/usecontroller/controller", name: "Controller" }],
  },
  {
    pathname: "/docs/useformcontext",
    name: "useFormContext",
    pages: [{ pathname: "/docs/formprovider", name: "FormProvider" }],
  },
  {
    pathname: "/docs/usewatch",
    name: "useWatch",
    pages: [{ pathname: "/docs/usewatch/watch", name: "Watch" }],
  },
  {
    pathname: "/docs/useformstate",
    name: "useFormState",
    pages: [
      { pathname: "/docs/useformstate/errormessage", name: "ErrorMessage" },
      { pathname: "/docs/useformstate/formstatesubscribe", name: "FormStateSubscribe" },
    ],
  },
  { pathname: "/docs/usefieldarray", name: "useFieldArray" },
  { pathname: "/docs/uselens", name: "useLens" },
  { pathname: "/docs/createFormControl", name: "createFormControl" },
];

// TSX 전용 페이지 (MDX 없음, llms.txt 링크만 포함)
const TSX_ONLY_PAGES = new Set(["/docs/usefieldarray", "/docs/usecontroller"]);

const TSX_ONLY_DESCRIPTIONS: Record<string, string> = {
  "/docs/usefieldarray": "필드 배열(동적 필드) 관리를 위한 커스텀 훅",
  "/docs/usecontroller": "제어 컴포넌트를 위한 React 훅",
};

// ── Frontmatter Parser ──────────────────────────────────────────────────────

interface DocMeta {
  title: string;
  description: string;
  sidebar: string;
  body: string;
  slug: string; // URL path: /docs/useform/register
}

function parseFrontmatter(content: string, filePath: string): DocMeta {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`Frontmatter not found: ${filePath}`);
  const fm = match[1];
  const rel = path.relative(CONTENT_DIR, filePath).replace(/\.mdx$/, "");
  return {
    title: fm.match(/title:\s*(.+)/)?.[1]?.trim() ?? "",
    description: fm.match(/description:\s*(.+)/)?.[1]?.trim() ?? "",
    sidebar: fm.match(/sidebar:\s*(.+)/)?.[1]?.trim() ?? "",
    body: content.slice(match[0].length).trim(),
    slug: `/${rel}`,
  };
}

// ── Code Fence Protection ───────────────────────────────────────────────────

function protectCodeFences(content: string): { safe: string; blocks: string[] } {
  const blocks: string[] = [];
  const safe = content.replace(/^(```[^\n]*\n[\s\S]*?^```)/gm, (match) => {
    blocks.push(match);
    return `%%CODE_BLOCK_${blocks.length - 1}%%`;
  });
  return { safe, blocks };
}

function restoreCodeFences(content: string, blocks: string[]): string {
  let result = content;
  for (let i = 0; i < blocks.length; i++) {
    result = result.replace(`%%CODE_BLOCK_${i}%%`, blocks[i]);
  }
  return result;
}

// ── JSX Stripping ───────────────────────────────────────────────────────────

function stripJsx(content: string): string {
  // Pass 1: 셀프 클로징 커스텀 컴포넌트 제거 (<YouTube .../>, <PrettyObject .../>)
  content = content.replace(/<[A-Z]\w+\s[^>]*\/>/g, "");

  // Pass 2: 래핑 커스텀 컴포넌트의 태그만 제거, 내부 콘텐츠 유지
  content = content.replace(/<[A-Z]\w+[^>]*>/g, "");
  content = content.replace(/<\/\s*[A-Z]\w+>/g, "");  // </ TabGroup> 같은 공백 포함 처리

  // Pass 2.5: JSX 주석 제거 {/* ... */}
  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

  // Pass 3: HTML 래퍼 제거 (<div style={...}>)
  content = content.replace(/<div\s+style=\{\{[^}]*\}\}\s*>/g, "");
  content = content.replace(/<\/div>/g, "");

  // Pass 4: 기본 HTML → 마크다운
  content = content.replace(/<br\s*\/?>/g, "\n");

  // Pass 5: import/export 문 제거
  content = content.replace(/^import\s+.*\n?/gm, "");
  content = content.replace(/^export\s+.*\n?/gm, "");

  // 정리: 과도한 빈 줄 축소
  content = content.replace(/\n{3,}/g, "\n\n");

  return content;
}

function cleanCodeFenceMeta(content: string): string {
  return content.replace(/^(```\w+)\s+copy(?:\s+sandbox="[^"]*")?/gm, "$1");
}

function processBody(body: string): string {
  const { safe, blocks } = protectCodeFences(body);
  let result = stripJsx(safe);
  result = restoreCodeFences(result, blocks);
  result = cleanCodeFenceMeta(result);
  return result.trim();
}

// ── File Discovery ──────────────────────────────────────────────────────────

function findMdxFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(full));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(full);
    }
  }
  return files;
}

// ── llms.txt Generation ─────────────────────────────────────────────────────

function generateLlmsTxt(docs: DocMeta[]): string {
  const lines: string[] = [];

  lines.push("# React Hook Form (한국어)");
  lines.push("");
  lines.push(
    "> React Hook Form 공식 문서의 한국어 번역입니다. 폼 유효성 검사를 위한 React 훅 라이브러리의 API 레퍼런스, 시작 가이드, 고급 사용법을 제공합니다."
  );
  lines.push("");

  const docBySlug = new Map(docs.map((d) => [d.slug, d]));

  for (const sidebarKey of SECTION_ORDER) {
    lines.push(`## ${SECTION_LABELS[sidebarKey]}`);
    lines.push("");

    if (sidebarKey === "apiLinks") {
      for (const hook of API_HIERARCHY) {
        const doc = docBySlug.get(hook.pathname);
        const desc = doc?.description ?? TSX_ONLY_DESCRIPTIONS[hook.pathname] ?? "";
        lines.push(`- [${hook.name}](${SITE_URL}${hook.pathname}): ${desc}`);

        if (hook.pages) {
          for (const sub of hook.pages) {
            const subDoc = docBySlug.get(sub.pathname);
            const subDesc = subDoc?.description ?? "";
            lines.push(`  - [${sub.name}](${SITE_URL}${sub.pathname}): ${subDesc}`);
          }
        }
      }
    } else {
      const basePath = SIDEBAR_BASE_PATH[sidebarKey];
      const doc = docs.find((d) => d.sidebar === sidebarKey);
      if (doc) {
        lines.push(`- [${doc.title}](${SITE_URL}${basePath}): ${doc.description}`);
      }
    }

    lines.push("");
  }

  return lines.join("\n");
}

// ── llms-full.txt Generation ────────────────────────────────────────────────

function generateLlmsFullTxt(docs: DocMeta[]): string {
  const sections: string[] = [];
  const docBySlug = new Map(docs.map((d) => [d.slug, d]));

  // 섹션 순서에 따라 문서 정렬
  const orderedDocs: DocMeta[] = [];

  for (const sidebarKey of SECTION_ORDER) {
    if (sidebarKey === "apiLinks") {
      for (const hook of API_HIERARCHY) {
        const doc = docBySlug.get(hook.pathname);
        if (doc && !TSX_ONLY_PAGES.has(hook.pathname)) {
          orderedDocs.push(doc);
        }
        if (hook.pages) {
          for (const sub of hook.pages) {
            const subDoc = docBySlug.get(sub.pathname);
            if (subDoc) orderedDocs.push(subDoc);
          }
        }
      }
    } else {
      const doc = docs.find((d) => d.sidebar === sidebarKey);
      if (doc) orderedDocs.push(doc);
    }
  }

  for (const doc of orderedDocs) {
    const body = processBody(doc.body);
    sections.push(`# ${doc.title}\n\n> ${doc.description}\n\n${body}`);
  }

  return sections.join("\n\n---\n\n");
}

// ── Validation ──────────────────────────────────────────────────────────────

function validateNoResidualJsx(content: string): void {
  // 코드 펜스 내부는 검사 제외
  const { safe } = protectCodeFences(content);
  const residual = safe.match(/<[A-Z]\w+[\s>]/g);
  if (residual && residual.length > 0) {
    const unique = [...new Set(residual)];
    console.error(`\n❌ Residual JSX found (${residual.length} occurrences):`);
    unique.forEach((tag) => console.error(`  ${tag}`));
    process.exit(1);
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log("📄 Generating llms.txt and llms-full.txt...\n");

  // 1. MDX 파일 탐색 및 파싱
  const mdxFiles = findMdxFiles(CONTENT_DIR);
  const docs: DocMeta[] = mdxFiles.map((f) =>
    parseFrontmatter(fs.readFileSync(f, "utf-8"), f)
  );
  console.log(`  Found ${docs.length} MDX files`);

  // 2. llms.txt 생성
  const llmsTxt = generateLlmsTxt(docs);
  fs.writeFileSync(path.join(OUTPUT_DIR, "llms.txt"), llmsTxt, "utf-8");
  console.log(`  ✅ public/llms.txt (${(Buffer.byteLength(llmsTxt) / 1024).toFixed(1)} KB)`);

  // 3. llms-full.txt 생성
  const llmsFullTxt = generateLlmsFullTxt(docs);
  fs.writeFileSync(path.join(OUTPUT_DIR, "llms-full.txt"), llmsFullTxt, "utf-8");
  console.log(`  ✅ public/llms-full.txt (${(Buffer.byteLength(llmsFullTxt) / 1024).toFixed(1)} KB)`);

  // 4. 잔여 JSX 검증
  validateNoResidualJsx(llmsFullTxt);
  console.log("  ✅ No residual JSX tags found");

  console.log("\n✨ Done!");
}

main();
