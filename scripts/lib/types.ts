export interface StructureInfo {
  headingCount: number;
  codeBlockCount: number;
  tableRowCount: number;
}

export type TranslationMode = "new" | "sync";

export interface TranslationTask {
  filePath: string;
  mode: TranslationMode;
  originContent: string;
  existingTranslation?: string;
  referenceFiles?: { path: string; content: string }[];
}

export interface TranslationResult {
  filePath: string;
  translatedContent: string;
  mode: TranslationMode;
}

export interface ValidationReport {
  passed: boolean;
  warnings: string[];
}

export interface TranslateConfig {
  maxFiles: number;
  dryRun: boolean;
  issueNumber?: number;
  inputFiles?: string[];
  anthropicApiKey: string;
}

export interface PrResult {
  branch: string;
  prUrl: string;
  filePath: string;
}
