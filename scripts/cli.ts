import { execSync } from "node:child_process";
import path from "node:path";
import {
  resolveFilePath,
  getOriginContent,
  getTranslatedContent,
  getReferenceFiles,
  parseFileFromIssueTitle,
  saveTranslation,
  extractStructure,
  compareStructures,
} from "./lib/detect.js";
import { translateFile } from "./lib/translate.js";
import { createPr } from "./lib/pr.js";
import type { TranslationMode, TranslationTask } from "./lib/types.js";

function parseArgs(argv: string[]) {
  const args = {
    issueNumber: undefined as number | undefined,
    files: undefined as string[] | undefined,
    dryRun: false,
    maxFiles: 5,
  };

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--issue":
        args.issueNumber = parseInt(argv[++i], 10);
        break;
      case "--files":
        args.files = argv[++i].split(",").map((f) => f.trim());
        break;
      case "--dry-run":
        args.dryRun = true;
        break;
      case "--max-files":
        args.maxFiles = parseInt(argv[++i], 10);
        break;
    }
  }

  return args;
}

function getFileFromIssue(issueNumber: number): string {
  const title = execSync(`gh issue view ${issueNumber} --json title --jq '.title'`, {
    encoding: "utf-8",
  }).trim();

  console.log(`📋 이슈 제목: ${title}`);
  const file = parseFileFromIssueTitle(title);
  if (!file) {
    throw new Error(
      `이슈 #${issueNumber}의 제목에서 파일 경로를 추출할 수 없습니다: "${title}"`
    );
  }
  return file;
}

function determineMode(filePath: string): TranslationMode {
  const existing = getTranslatedContent(filePath);
  return existing ? "sync" : "new";
}

async function main() {
  // Ensure we're at repo root
  const repoRoot = execSync("git rev-parse --show-toplevel", {
    encoding: "utf-8",
  }).trim();
  process.chdir(repoRoot);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌ ANTHROPIC_API_KEY 환경변수가 필요합니다.");
    process.exit(1);
  }

  const args = parseArgs(process.argv);

  // Determine files to translate
  let inputFiles: string[];
  if (args.files) {
    inputFiles = args.files;
  } else if (args.issueNumber) {
    inputFiles = [getFileFromIssue(args.issueNumber)];
  } else {
    console.error("❌ --files 또는 --issue 인자가 필요합니다.");
    process.exit(1);
  }

  // Resolve and limit
  const resolvedFiles = inputFiles
    .map((f) => {
      const resolved = resolveFilePath(f);
      if (!resolved) {
        console.warn(`⚠️  파일을 찾을 수 없습니다: ${f}`);
      }
      return resolved;
    })
    .filter((f): f is string => f !== null)
    .slice(0, args.maxFiles);

  if (resolvedFiles.length === 0) {
    console.error("❌ 처리할 파일이 없습니다.");
    process.exit(1);
  }

  console.log(`\n🔍 처리할 파일 (${resolvedFiles.length}개):`);
  for (const f of resolvedFiles) {
    console.log(`   - ${f}`);
  }

  const referenceFiles = getReferenceFiles();

  let skipped = 0;

  for (const filePath of resolvedFiles) {
    const mode = determineMode(filePath);
    const originContent = getOriginContent(filePath);
    const existingTranslation = getTranslatedContent(filePath) ?? undefined;

    // Skip if already translated and structure matches
    if (mode === "sync" && existingTranslation) {
      const originStructure = extractStructure(originContent);
      const translatedStructure = extractStructure(existingTranslation);
      const diffs = compareStructures(originStructure, translatedStructure);
      if (diffs.length === 0) {
        console.log(`\n⏭️  스킵: ${filePath} (구조 차이 없음, 번역 완료 상태)`);
        skipped++;
        continue;
      }
      console.log(`\n📝 동기화 시작: ${filePath}`);
      for (const d of diffs) {
        console.log(`   - ${d}`);
      }
    } else {
      console.log(`\n📝 번역 시작: ${filePath}`);
    }

    const task: TranslationTask = {
      filePath,
      mode,
      originContent,
      existingTranslation,
      referenceFiles,
    };

    if (args.dryRun) {
      console.log(`   [dry-run] 번역 API 호출을 건너뜁니다.`);
      console.log(`   모드: ${mode}`);
      console.log(`   원본 길이: ${originContent.length}자`);
      if (existingTranslation) {
        console.log(`   기존 번역 길이: ${existingTranslation.length}자`);
      }
      continue;
    }

    // Translate
    const result = await translateFile(task, apiKey);
    console.log(
      `   ✅ 번역 완료 (${result.translatedContent.length}자)`
    );

    // Save
    const translatedFilePath = path.join("src", "content", filePath);
    saveTranslation(filePath, result.translatedContent);
    console.log(`   💾 저장 완료: ${translatedFilePath}`);

    // Create PR
    console.log(`   🔀 PR 생성 중...`);
    const pr = createPr(filePath, translatedFilePath, mode, args.issueNumber);
    console.log(`   🎉 PR 생성 완료: ${pr.prUrl}`);
  }

  if (skipped > 0) {
    console.log(`\n📊 ${skipped}개 파일 스킵 (이미 번역 완료)`);
  }
  console.log("\n✨ 모든 작업이 완료되었습니다.");
}

main().catch((err) => {
  console.error("❌ 오류 발생:", err);
  process.exit(1);
});
