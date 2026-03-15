import { execSync } from "node:child_process";
import type { TranslationMode, PrResult } from "./types.js";

function exec(cmd: string): string {
  return execSync(cmd, { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] }).trim();
}

export function generateBranchName(filePath: string): string {
  // "docs/useform/register.mdx" → "docs/docs-useform-register"
  const slug = filePath
    .replace(/\.mdx$/, "")
    .replace(/\//g, "-");
  return `docs/${slug}`;
}

export function generateCommitMessage(
  filePath: string,
  mode: TranslationMode
): string {
  const name = filePath.replace(/\.mdx$/, "");
  if (mode === "sync") {
    return `docs: sync ${name}`;
  }
  return `docs: translate ${name}`;
}

export function createPr(
  filePath: string,
  translatedFilePath: string,
  mode: TranslationMode,
  issueNumber?: number
): PrResult {
  const branch = generateBranchName(filePath);
  const commitMsg = generateCommitMessage(filePath, mode);

  // Set git identity (for CI)
  try {
    exec('git config user.name "github-actions[bot]"');
    exec('git config user.email "github-actions[bot]@users.noreply.github.com"');
  } catch {
    // May already be configured
  }

  // Create branch from origin/master-ko
  try {
    exec(`git fetch origin master-ko`);
  } catch {
    // Already fetched
  }
  exec(`git checkout -B ${branch} origin/master-ko`);

  // Stage the translated file
  exec(`git add ${translatedFilePath}`);

  // Commit
  exec(`git commit -m "${commitMsg}"`);

  // Push (force to handle re-runs)
  exec(`git push --force origin ${branch}`);

  // Build PR body
  const modeLabel = mode === "sync" ? "동기화" : "번역";
  let body = `## ${modeLabel}: \`${filePath}\`\n\nAnthropic API를 사용하여 자동 ${modeLabel}되었습니다.\n리뷰 후 머지해 주세요.`;
  if (issueNumber) {
    body += `\n\nCloses #${issueNumber}`;
  }

  // Create PR
  let prUrl: string;
  try {
    // Check if PR already exists for this branch
    const existing = exec(
      `gh pr list --head ${branch} --json url --jq '.[0].url'`
    );
    if (existing) {
      // Update existing PR
      exec(
        `gh pr edit ${existing} --title "${commitMsg}" --body "${body.replace(/"/g, '\\"')}"`
      );
      prUrl = existing;
    } else {
      throw new Error("No existing PR");
    }
  } catch {
    prUrl = exec(
      `gh pr create --title "${commitMsg}" --body "${body.replace(/"/g, '\\"')}" --head ${branch} --base master-ko`
    );
  }

  return { branch, prUrl, filePath };
}
