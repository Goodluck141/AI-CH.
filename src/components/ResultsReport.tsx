import React, { useState } from 'react';
import { AssessmentResult } from '../types/assessment';
import { RadarChart } from './RadarChart';
import { DimensionBars } from './DimensionBars';
import { RoleIcon } from './RoleIcon';
import {
  RotateCcw,
  Share2,
  Copy,
  Printer,
  Check,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Award,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResultsReportProps {
  result: AssessmentResult;
  onRetake: () => void;
  onOpenExplorer: () => void;
}

export const ResultsReport: React.FC<ResultsReportProps> = ({
  result,
  onRetake,
  onOpenExplorer,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'radar' | 'bars'>('radar');

  // Trigger subtle celebratory confetti if tier 4 or 5
  React.useEffect(() => {
    if (result.compositeScore >= 60) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#3D7EFF', '#60A5FA', '#93C5FD', '#F59E0B'],
        });
      } catch {
        // ignore in non-browser envs
      }
    }
  }, [result.compositeScore]);

  const handleCopySummary = async () => {
    const summary = `🏆 AI Readiness Index Report
Role: ${result.role.title}
Score: ${result.compositeScore}% (${result.tier.label})
Peer Percentile: Top ${100 - result.percentileRank}%
Key Strengths: ${result.strengths.map((s) => s.label).join(', ')}
Benchmark Gap: ${result.compositeScore - result.role.topPractitionerScore} pts from world-class benchmark.`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      {/* 1. Header Banner & Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>BENCHMARK DIAGNOSTIC REPORT</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{new Date(result.completedAt).toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
          </div>
          <h1 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            AI Readiness Assessment
          </h1>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Report</span>
          </button>

          <button
            onClick={onRetake}
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-blue-500 shadow-sm shadow-blue-500/20"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>

      {/* 2. Overall Score Card */}
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 sm:p-8 shadow-xl shadow-black/30">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          {/* Large prominent composite score */}
          <div className="flex flex-col items-center justify-center text-center md:col-span-4 md:border-r md:border-white/[0.08] md:pr-8">
            <div className="relative flex h-36 w-36 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-white/[0.06]"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke={result.tier.colorHex}
                  strokeWidth="8"
                  strokeDasharray={`${(result.compositeScore / 100) * 264} 264`}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-4xl font-extrabold tracking-tight text-white tabular-nums">
                  {result.compositeScore}%
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Readiness
                </span>
              </div>
            </div>

            {/* Tier label badge */}
            <div className={`mt-3 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold ${result.tier.badgeClass}`}>
              <Award className="h-3.5 w-3.5" />
              <span>{result.tier.label}</span>
            </div>

            <div className="mt-2 text-[11px] font-mono text-slate-400">
              Tier {result.tier.tier} of 5 · {result.tier.rangeLabel}
            </div>
          </div>

          {/* Role and Personalized Summary */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-blue-400">
                <RoleIcon name={result.role.iconName} className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Target Role Benchmark</span>
                <h2 className="font-display text-lg font-semibold text-white">
                  {result.role.title}
                </h2>
              </div>
            </div>

            {/* Peer comparison statement */}
            <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-3.5 text-xs leading-relaxed text-blue-200">
              <strong className="font-semibold text-white">Peer Comparison: </strong>
              Among {result.role.title} professionals globally, your score places you in the{' '}
              <strong className="underline decoration-blue-400 font-bold text-white">
                top {100 - result.percentileRank}%
              </strong>{' '}
              of AI adopters. The average industry score for this role is{' '}
              <strong className="text-white">{result.role.averageIndustryScore}%</strong>, while top
              practitioners average{' '}
              <strong className="text-white">{result.role.topPractitionerScore}%</strong>.
            </div>

            {/* Personalized summary paragraph */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              {result.summaryText}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Dimension Breakdown Section (Radar + Bar tabs) */}
      <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 sm:p-8 shadow-xl shadow-black/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-white">
              Dimension Breakdown vs. Elite Benchmark
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Comparing your 5 core competencies against the world's top {result.role.title} practitioners.
            </p>
          </div>

          {/* Segmented view switcher */}
          <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-black/40 p-1 text-xs">
            <button
              onClick={() => setActiveTab('radar')}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                activeTab === 'radar'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Radar Spider Chart
            </button>
            <button
              onClick={() => setActiveTab('bars')}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                activeTab === 'bars'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gap Analysis Bars
            </button>
          </div>
        </div>

        <div className="mt-6">
          {activeTab === 'radar' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex justify-center py-2">
                <RadarChart dimensions={result.dimensionList} />
              </div>
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Dimensional Delta Scores
                </div>
                {result.dimensionList.map((dim) => (
                  <div
                    key={dim.dimension}
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#12161E] px-3.5 py-2.5 text-xs"
                  >
                    <span className="text-slate-300 font-medium">{dim.label}</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-blue-400 font-bold">{dim.userScore}%</span>
                      <span className="text-slate-600">/</span>
                      <span className="text-slate-400">{dim.benchmarkScore}%</span>
                      <span
                        className={`text-[10px] font-semibold px-1 rounded ${
                          dim.gap >= 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'
                        }`}
                      >
                        {dim.gap >= 0 ? `+${dim.gap}` : dim.gap}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <DimensionBars dimensions={result.dimensionList} />
          )}
        </div>
      </div>

      {/* 4. Top 3 Strengths & Top 3 Growth Areas Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Strengths */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 shadow-lg">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <TrendingUp className="h-4 w-4" />
            <h3 className="font-display text-base font-semibold text-white">
              Top 3 Strengths
            </h3>
          </div>

          <div className="space-y-4">
            {result.strengths.map((str, idx) => (
              <div
                key={str.dimension}
                className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-4 text-xs"
              >
                <div className="flex items-center justify-between font-medium">
                  <span className="text-white text-sm">
                    {idx + 1}. {str.label}
                  </span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">
                    {str.score}%
                  </span>
                </div>
                <p className="mt-1.5 leading-relaxed text-slate-300">
                  {str.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Areas */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 shadow-lg">
          <div className="flex items-center gap-2 text-amber-400 mb-4">
            <AlertCircle className="h-4 w-4" />
            <h3 className="font-display text-base font-semibold text-white">
              Top 3 Growth Areas
            </h3>
          </div>

          <div className="space-y-4">
            {result.growthAreas.map((growth, idx) => (
              <div
                key={growth.dimension}
                className="rounded-xl border border-amber-500/10 bg-amber-500/[0.02] p-4 text-xs"
              >
                <div className="flex items-center justify-between font-medium">
                  <span className="text-white text-sm">
                    {idx + 1}. {growth.label}
                  </span>
                  <span className="font-mono text-amber-400 font-bold text-sm">
                    {growth.gap} pts gap
                  </span>
                </div>
                <p className="mt-1.5 leading-relaxed text-slate-300">
                  {growth.recommendation}
                </p>
                <div className="mt-2 text-[11px] text-amber-300/80 bg-amber-500/10 rounded px-2 py-1">
                  <strong>Elite practice: </strong>
                  {growth.eliteHabit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. What Top Practitioners Do That You Don't Yet */}
      <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 sm:p-8 shadow-xl shadow-black/20">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Lightbulb className="h-4 w-4" />
          <h3 className="font-display text-lg font-semibold text-white">
            What Top {result.role.title} Practitioners Do That You Don't Yet
          </h3>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Research-backed behavioral habits of the top 5% adopters in your exact domain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {result.role.topHabits.map((habit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#12161E] p-4 text-xs leading-relaxed text-slate-300"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-bold">
                {idx + 1}
              </div>
              <p>{habit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Footer Navigation & Re-benchmarking */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
        <button
          onClick={onRetake}
          className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Retake assessment with a different role</span>
        </button>

        <button
          onClick={onOpenExplorer}
          className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.07] hover:text-white transition-colors"
        >
          <BookOpen className="h-3.5 w-3.5 text-blue-400" />
          <span>View All 12 Role Benchmark Profiles</span>
        </button>
      </div>
    </div>
  );
};
