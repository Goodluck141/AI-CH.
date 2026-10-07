import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import { RoleDefinition } from '../types/assessment';

interface CalculatingScreenProps {
  role: RoleDefinition;
  onComplete: () => void;
}

const STAGES = [
  'Auditing workflow integration & daily task cadence...',
  'Evaluating prompt sophistication & boundary constraints...',
  'Benchmarking tool breadth against top-tier practitioner datasets...',
  'Analyzing quality rigor, taste filters, and verification protocols...',
  'Synthesizing personalized dimensional gaps and habit roadmap...',
];

export const CalculatingScreen: React.FC<CalculatingScreenProps> = ({ role, onComplete }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        }
        clearInterval(stageInterval);
        return prev;
      });
    }, 550);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      {/* Central glowing indicator */}
      <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl animate-pulse" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-[#0E131F] text-blue-400 shadow-xl shadow-blue-500/10">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
        </div>
      </div>

      <div className="font-mono text-xs font-medium uppercase tracking-widest text-blue-400">
        Diagnostic Engine
      </div>

      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
        Calculating Your AI Readiness Index
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Comparing your profile against documented top-tier <span className="text-slate-200 font-medium">{role.title}</span> benchmarks.
      </p>

      {/* Stage indicators */}
      <div className="mt-8 w-full max-w-md rounded-xl border border-white/[0.08] bg-[#0E1116] p-5 text-left shadow-lg">
        <div className="space-y-3">
          {STAGES.map((stage, idx) => {
            const isDone = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;

            return (
              <div
                key={stage}
                className={`flex items-center gap-3 text-xs transition-opacity duration-300 ${
                  isDone
                    ? 'text-slate-300'
                    : isCurrent
                    ? 'text-blue-300 font-medium'
                    : 'text-slate-600 opacity-40'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                ) : isCurrent ? (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-blue-400" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-slate-700 ml-1" />
                )}
                <span>{stage}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
