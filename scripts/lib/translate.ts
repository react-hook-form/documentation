import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import type {
  TranslationTask,
  TranslationResult,
  ValidationReport,
} from "./types.js";
import { extractStructure, compareStructures } from "./detect.js";

const ROOT = process.cwd();

export function loadTranslationRules(): string {
  const agentsPath = path.join(ROOT, "AGENTS.md");
  if (!fs.existsSync(agentsPath)) {
    throw new Error(`AGENTS.md not found at ${agentsPath}`);
  }
  return fs.readFileSync(agentsPath, "utf-8");
}

export function buildSystemPrompt(
  referenceFiles?: { path: string; content: string }[]
): string {
  const rules = loadTranslationRules();

  let prompt = `You are an expert Korean translator specializing in React Hook Form documentation.
Follow the translation rules below EXACTLY.

<translation-rules>
${rules}
</translation-rules>

CRITICAL INSTRUCTIONS:
- Output ONLY the translated MDX content. Do NOT wrap it in code fences.
- Preserve all frontmatter (YAML between ---) exactly, but translate the "title" and "description" fields to Korean.
- Keep all code blocks, JSX, imports, and component tags unchanged.
- Maintain the exact same markdown structure (headings, lists, tables, blank lines).
- Do NOT add any explanations, notes, or commentary before or after the translation.`;

  if (referenceFiles && referenceFiles.length > 0) {
    prompt += "\n\nHere are existing translated files for tone/style reference:";
    for (const ref of referenceFiles) {
      prompt += `\n\n<reference-file path="${ref.path}">\n${ref.content}\n</reference-file>`;
    }
  }

  return prompt;
}

export function buildNewTranslationPrompt(originContent: string): string {
  return `Translate the following React Hook Form documentation from English to Korean.

<source-document>
${originContent}
</source-document>`;
}

export function buildSyncTranslationPrompt(
  originContent: string,
  existingTranslation: string
): string {
  return `The original English documentation has been updated. Update the existing Korean translation to match the new original while preserving the existing translation style and terminology.

<updated-original>
${originContent}
</updated-original>

<existing-translation>
${existingTranslation}
</existing-translation>

Output the FULL updated Korean translation. Preserve parts that haven't changed in the original.`;
}

export function validateTranslation(
  originContent: string,
  translatedContent: string
): ValidationReport {
  const warnings = compareStructures(
    extractStructure(originContent),
    extractStructure(translatedContent)
  );

  // Check frontmatter title exists
  const frontmatterMatch = translatedContent.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    if (!/^title:/m.test(frontmatterMatch[1])) {
      warnings.push("프론트매터에 title 필드가 없습니다");
    }
  } else if (/^---\n/.test(originContent)) {
    warnings.push("번역 결과에 프론트매터가 없습니다");
  }

  return {
    passed: warnings.length === 0,
    warnings,
  };
}

function stripCodeFenceWrapper(content: string): string {
  // Remove wrapping code fence if the model added one
  const trimmed = content.trim();
  const fencePattern = /^```(?:mdx|markdown|md)?\n([\s\S]*?)\n```$/;
  const match = trimmed.match(fencePattern);
  if (match) {
    return match[1];
  }
  return trimmed;
}

export async function translateFile(
  task: TranslationTask,
  apiKey: string
): Promise<TranslationResult> {
  const client = new Anthropic({ apiKey });

  const systemPrompt = buildSystemPrompt(task.referenceFiles);
  const userMessage =
    task.mode === "sync" && task.existingTranslation
      ? buildSyncTranslationPrompt(task.originContent, task.existingTranslation)
      : buildNewTranslationPrompt(task.originContent);

  const response = await client.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 16384,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const { input_tokens, output_tokens } = response.usage;
  const costInput = (input_tokens / 1_000_000) * 3;
  const costOutput = (output_tokens / 1_000_000) * 15;
  const totalCost = costInput + costOutput;

  console.log(`   📊 토큰 사용량: input ${input_tokens.toLocaleString()} / output ${output_tokens.toLocaleString()}`);
  console.log(`   💰 예상 비용: $${totalCost.toFixed(4)} (input $${costInput.toFixed(4)} + output $${costOutput.toFixed(4)})`);

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Anthropic API returned no text content");
  }

  const translatedContent = stripCodeFenceWrapper(textBlock.text);

  const validation = validateTranslation(task.originContent, translatedContent);
  if (validation.warnings.length > 0) {
    console.warn(`⚠️  검증 경고 (${task.filePath}):`);
    for (const w of validation.warnings) {
      console.warn(`   - ${w}`);
    }
  }

  return {
    filePath: task.filePath,
    translatedContent,
    mode: task.mode,
  };
}
