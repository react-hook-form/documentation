import fs from "node:fs";
import path from "node:path";
import type { StructureInfo } from "./types.js";

const ROOT = process.cwd();
const ORIGIN_DIR = path.join(ROOT, "origin-src", "content");
const TRANSLATED_DIR = path.join(ROOT, "src", "content");

export function extractStructure(content: string): StructureInfo {
  const lines = content.split("\n");

  let headingCount = 0;
  let codeBlockCount = 0;
  let tableRowCount = 0;
  let inCodeBlock = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (!inCodeBlock) {
        codeBlockCount++;
      }
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    if (/^#{1,6}\s/.test(trimmed)) {
      headingCount++;
    }

    // Table row: starts with | and is not a separator line (---|---)
    if (trimmed.startsWith("|") && !/^\|[\s-:|]+\|$/.test(trimmed)) {
      tableRowCount++;
    }
  }

  return {
    headingCount,
    codeBlockCount,
    tableRowCount,
  };
}

export function compareStructures(
  origin: StructureInfo,
  translated: StructureInfo
): string[] {
  const reasons: string[] = [];

  if (origin.tableRowCount !== translated.tableRowCount) {
    reasons.push(
      `테이블 행 차이 (원본: ${origin.tableRowCount}, 번역: ${translated.tableRowCount})`
    );
  }
  if (origin.headingCount !== translated.headingCount) {
    reasons.push(
      `헤딩 수 차이 (원본: ${origin.headingCount}, 번역: ${translated.headingCount})`
    );
  }
  if (origin.codeBlockCount !== translated.codeBlockCount) {
    reasons.push(
      `코드 블록 수 차이 (원본: ${origin.codeBlockCount}, 번역: ${translated.codeBlockCount})`
    );
  }
  return reasons;
}

export function parseFileFromIssueTitle(title: string): string | null {
  // Issue title format: "[Docs] content/path/to/file.mdx — Add"
  const match = title.match(/^\[Docs\]\s+(.+?)\s+—\s+(Add|Sync|Migrate|Remove)$/);
  if (!match) return null;
  return match[1];
}

export function resolveFilePath(input: string): string | null {
  // Try exact path first
  let candidate = input;
  if (!candidate.endsWith(".mdx")) {
    candidate += ".mdx";
  }

  const fullPath = path.join(ORIGIN_DIR, candidate);
  if (fs.existsSync(fullPath)) {
    return candidate;
  }

  // Try glob match for short names (e.g. "register")
  const baseName = path.basename(candidate);

  function findRecursive(dir: string): string | null {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = findRecursive(full);
        if (found) return found;
      } else if (entry.name === baseName) {
        return path.relative(ORIGIN_DIR, full);
      }
    }
    return null;
  }

  return findRecursive(ORIGIN_DIR);
}

export function getOriginContent(filePath: string): string {
  return fs.readFileSync(path.join(ORIGIN_DIR, filePath), "utf-8");
}

export function getTranslatedContent(filePath: string): string | null {
  const p = path.join(TRANSLATED_DIR, filePath);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf-8");
}

export function getReferenceFiles(): { path: string; content: string }[] {
  // Find up to 2 existing translated files for tone reference
  const refs: { path: string; content: string }[] = [];

  function walk(dir: string) {
    if (refs.length >= 2) return;
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (refs.length >= 2) return;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".mdx")) {
        const content = fs.readFileSync(full, "utf-8");
        if (content.length > 200) {
          refs.push({
            path: path.relative(TRANSLATED_DIR, full),
            content: content.slice(0, 3000),
          });
        }
      }
    }
  }

  walk(TRANSLATED_DIR);
  return refs;
}

export function saveTranslation(filePath: string, content: string): void {
  const fullPath = path.join(TRANSLATED_DIR, filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, "utf-8");
}
