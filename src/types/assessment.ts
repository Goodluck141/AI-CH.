export type DimensionKey =
  | 'workflow_integration'
  | 'prompt_sophistication'
  | 'tool_breadth'
  | 'output_quality_focus'
  | 'strategic_application';

export interface DimensionInfo {
  key: DimensionKey;
  label: string;
  shortLabel: string;
  description: string;
  weight: number;
}

export const DIMENSIONS: Record<DimensionKey, DimensionInfo> = {
  workflow_integration: {
    key: 'workflow_integration',
    label: 'Workflow Integration',
    shortLabel: 'Integration',
    description: 'How deeply AI is embedded into recurring daily workflows and operational habits.',
    weight: 0.2,
  },
  prompt_sophistication: {
    key: 'prompt_sophistication',
    label: 'Prompt Sophistication',
    shortLabel: 'Prompting',
    description: 'Structure, persona boundaries, XML tagging, system directives, and chain-of-thought instructions.',
    weight: 0.2,
  },
  tool_breadth: {
    key: 'tool_breadth',
    label: 'Tool Breadth & Ecosystem',
    shortLabel: 'Tool Breadth',
    description: 'Deployment of multi-layered toolchains (IDEs, CLI, specialized agents, frontier models).',
    weight: 0.2,
  },
  output_quality_focus: {
    key: 'output_quality_focus',
    label: 'Output Quality & Taste',
    shortLabel: 'Quality Focus',
    description: 'Human-in-the-loop review, anti-homogenization rigor, fact-checking, and editorial taste.',
    weight: 0.2,
  },
  strategic_application: {
    key: 'strategic_application',
    label: 'Strategic Application',
    shortLabel: 'Strategy',
    description: 'Leveraging AI for high-leverage architectural thinking, simulation, and autonomous execution.',
    weight: 0.2,
  },
};

export type QuestionType = 'single_choice' | 'multi_select';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  score: number; // 0 to 4
}

export interface Question {
  id: string;
  dimension: DimensionKey;
  type: QuestionType;
  title: string;
  subtitle?: string;
  options: QuestionOption[];
}

export interface RoleBenchmark {
  workflow_integration: number; // 0-100
  prompt_sophistication: number; // 0-100
  tool_breadth: number; // 0-100
  output_quality_focus: number; // 0-100
  strategic_application: number; // 0-100
}

export interface RoleDefinition {
  id: string;
  title: string;
  shortTitle: string;
  category: 'leadership' | 'product_tech' | 'growth_sales' | 'operations';
  description: string;
  iconName: string;
  benchmark: RoleBenchmark;
  topHabits: string[];
  elitePracticesSummary: string;
  averageIndustryScore: number;
  topPractitionerScore: number;
}

export interface UserAnswer {
  questionId: string;
  selectedOptionIds: string[];
  rawScore: number; // 0 to 4
}

export interface TierInfo {
  tier: number;
  label: string;
  badgeClass: string;
  colorHex: string;
  rangeLabel: string;
  description: string;
}

export interface DimensionScoreResult {
  dimension: DimensionKey;
  label: string;
  userScore: number; // 0 to 100
  benchmarkScore: number; // 0 to 100
  gap: number; // userScore - benchmarkScore
  questionCount: number;
}

export interface AssessmentResult {
  roleId: string;
  role: RoleDefinition;
  compositeScore: number; // 0 to 100
  tier: TierInfo;
  percentileRank: number; // e.g. 88 means top 12%
  dimensionScores: Record<DimensionKey, DimensionScoreResult>;
  dimensionList: DimensionScoreResult[];
  strengths: {
    dimension: DimensionKey;
    label: string;
    score: number;
    explanation: string;
  }[];
  growthAreas: {
    dimension: DimensionKey;
    label: string;
    gap: number;
    recommendation: string;
    eliteHabit: string;
  }[];
  summaryText: string;
  completedAt: string;
}
