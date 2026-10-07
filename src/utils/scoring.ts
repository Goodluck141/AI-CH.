import {
  AssessmentResult,
  DIMENSIONS,
  DimensionKey,
  DimensionScoreResult,
  Question,
  RoleDefinition,
  TierInfo,
  UserAnswer,
} from '../types/assessment';
import {
  DIMENSION_GROWTH_RECOMMENDATIONS,
  DIMENSION_STRENGTH_INSIGHTS,
  getPersonalizedSummary,
  getPercentileRank,
} from '../data/insights';

export function getTierInfo(score: number): TierInfo {
  if (score >= 80) {
    return {
      tier: 5,
      label: 'Elite / World-Class',
      badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      colorHex: '#3D7EFF',
      rangeLabel: '80–100%',
      description: 'Master of the allocator economy, operating as a strategic orchestrator with multi-layered toolchains and rigorous quality verification.',
    };
  }
  if (score >= 60) {
    return {
      tier: 4,
      label: 'Advanced Practitioner',
      badgeClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      colorHex: '#10B981',
      rangeLabel: '60–79%',
      description: 'AI is deeply woven into daily workflows, generating consistent speed and structural efficiency with emerging agentic habits.',
    };
  }
  if (score >= 40) {
    return {
      tier: 3,
      label: 'Active User',
      badgeClass: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      colorHex: '#F59E0B',
      rangeLabel: '40–59%',
      description: 'Regular conversational usage, with solid task assistance but untapped potential in structured prompt boundaries and multi-model ecosystems.',
    };
  }
  if (score >= 20) {
    return {
      tier: 2,
      label: 'Emerging Adopter',
      badgeClass: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
      colorHex: '#FB923C',
      rangeLabel: '20–39%',
      description: 'Sporadic experimentation and basic drafting. High risk of falling victim to the jagged frontier and hallucinated outputs.',
    };
  }
  return {
    tier: 1,
    label: 'AI Novice',
    badgeClass: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    colorHex: '#F43F5E',
    rangeLabel: '0–19%',
    description: 'Primarily unassisted or minimal exposure. Ready for high-velocity gains by establishing foundational human-AI co-work habits.',
  };
}

export function scoreAnswer(question: Question, selectedOptionIds: string[]): number {
  if (!selectedOptionIds || selectedOptionIds.length === 0) {
    return 0;
  }
  if (question.type === 'single_choice') {
    const opt = question.options.find((o) => o.id === selectedOptionIds[0]);
    return opt ? opt.score : 0;
  }
  // multi_select: sum scores of selected options, capped at 4
  const sum = selectedOptionIds.reduce((acc, id) => {
    const opt = question.options.find((o) => o.id === id);
    return acc + (opt ? opt.score : 0);
  }, 0);
  return Math.min(4, sum);
}

export function computeDimensionScores(
  role: RoleDefinition,
  answers: Record<string, string[]>,
  questions: Question[]
): Record<DimensionKey, DimensionScoreResult> {
  const dimensionKeys: DimensionKey[] = [
    'workflow_integration',
    'prompt_sophistication',
    'tool_breadth',
    'output_quality_focus',
    'strategic_application',
  ];

  const results: Partial<Record<DimensionKey, DimensionScoreResult>> = {};

  dimensionKeys.forEach((key) => {
    const dimQuestions = questions.filter((q) => q.dimension === key);
    let totalScore = 0;
    const count = dimQuestions.length || 1;

    dimQuestions.forEach((q) => {
      const selected = answers[q.id] || [];
      const score = scoreAnswer(q, selected);
      totalScore += score;
    });

    // Score out of (count * 4) converted to 0-100%
    const rawAverage = totalScore / (count * 4);
    const userScore = Math.round(rawAverage * 100);
    const benchmarkScore = role.benchmark[key] || 80;
    const gap = userScore - benchmarkScore;

    results[key] = {
      dimension: key,
      label: DIMENSIONS[key].label,
      userScore,
      benchmarkScore,
      gap,
      questionCount: dimQuestions.length,
    };
  });

  return results as Record<DimensionKey, DimensionScoreResult>;
}

export function computeCompositeScore(dimensionScores: Record<DimensionKey, DimensionScoreResult>): number {
  const keys = Object.keys(dimensionScores) as DimensionKey[];
  if (keys.length === 0) return 0;
  const sum = keys.reduce((acc, k) => acc + dimensionScores[k].userScore, 0);
  return Math.round(sum / keys.length);
}

export function calculateAssessmentResult(
  role: RoleDefinition,
  answers: Record<string, string[]>,
  questions: Question[]
): AssessmentResult {
  const dimensionScores = computeDimensionScores(role, answers, questions);
  const compositeScore = computeCompositeScore(dimensionScores);
  const tier = getTierInfo(compositeScore);
  const percentileRank = getPercentileRank(compositeScore);

  const dimensionList = Object.values(dimensionScores);

  // Strengths: top 3 dimensions by user score
  const sortedByScore = [...dimensionList].sort((a, b) => b.userScore - a.userScore);
  const strengths = sortedByScore.slice(0, 3).map((d) => ({
    dimension: d.dimension,
    label: d.label,
    score: d.userScore,
    explanation: DIMENSION_STRENGTH_INSIGHTS[d.dimension],
  }));

  // Growth areas: 3 dimensions furthest below the benchmark (most negative gap)
  const sortedByGap = [...dimensionList].sort((a, b) => a.gap - b.gap);
  const growthAreas = sortedByGap.slice(0, 3).map((d) => {
    const recommendationObj =
      DIMENSION_GROWTH_RECOMMENDATIONS[d.dimension]?.[role.id] ||
      DIMENSION_GROWTH_RECOMMENDATIONS[d.dimension]?.default || {
        recommendation: `Elevate your ${d.label} by benchmarking against documented top-tier routines.`,
        eliteHabit: `Adopt disciplined human-in-the-loop workflows for ${d.label}.`,
      };
    return {
      dimension: d.dimension,
      label: d.label,
      gap: d.gap,
      recommendation: recommendationObj.recommendation,
      eliteHabit: recommendationObj.eliteHabit,
    };
  });

  const summaryText = getPersonalizedSummary(role, compositeScore, tier.label);

  return {
    roleId: role.id,
    role,
    compositeScore,
    tier,
    percentileRank,
    dimensionScores,
    dimensionList,
    strengths,
    growthAreas,
    summaryText,
    completedAt: new Date().toISOString(),
  };
}
