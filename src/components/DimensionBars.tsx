import React from 'react';
import { DimensionScoreResult } from '../types/assessment';

interface DimensionBarsProps {
  dimensions: DimensionScoreResult[];
}

export const DimensionBars: React.FC<DimensionBarsProps> = ({ dimensions }) => {
  return (
    <div className="space-y-4">
      {dimensions.map((dim) => {
        const isAhead = dim.gap >= 0;
        const gapText = isAhead ? `+${dim.gap}` : `${dim.gap}`;

        return (
          <div
            key={dim.dimension}
            className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4 transition-colors hover:border-white/[0.12]"
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-medium text-slate-200">{dim.label}</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-slate-400">
                  You: <strong className="text-blue-400">{dim.userScore}%</strong>
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">
                  Elite: <strong className="text-slate-200">{dim.benchmarkScore}%</strong>
                </span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                    isAhead
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}
                >
                  {gapText} pts
                </span>
              </div>
            </div>

            {/* Overlapping or dual-bar display */}
            <div className="relative h-3 w-full rounded-full bg-white/[0.06] overflow-hidden">
              {/* Benchmark marker line */}
              <div
                className="absolute top-0 bottom-0 z-10 w-0.5 bg-slate-300 shadow"
                style={{ left: `${dim.benchmarkScore}%` }}
                title={`Elite Benchmark: ${dim.benchmarkScore}%`}
              />

              {/* User fill */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"
                style={{ width: `${dim.userScore}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>
                {dim.gap >= 0
                  ? 'Exceeding elite benchmark baseline'
                  : `${Math.abs(dim.gap)} points below top-practitioner standard`}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                Gap: {dim.gap > 0 ? `+${dim.gap}%` : `${dim.gap}%`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
