import React, { useEffect } from 'react';
import { DIMENSIONS, Question } from '../types/assessment';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionIds: string[];
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionIds,
  onSelectOption,
  onNext,
  onPrev,
}) => {
  const dimensionInfo = DIMENSIONS[question.dimension];
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const canProceed = selectedOptionIds.length > 0;

  // Keyboard shortcut listener: numbers 1..4 select option, Enter advances if option is chosen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (canProceed) {
          e.preventDefault();
          onNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          e.preventDefault();
          onPrev();
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const num = parseInt(e.key, 10);
        if (question.options[num - 1]) {
          onSelectOption(question.options[num - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canProceed, currentIndex, onNext, onPrev, onSelectOption, question.options]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Top Progress bar and metadata */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-300 font-medium">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-blue-400 font-medium">{dimensionInfo.label}</span>
          </div>
          <span className="font-mono text-slate-400">{progressPercent}%</span>
        </div>

        {/* Thin progress track */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card Box */}
      <div className="rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 sm:p-8 shadow-xl shadow-black/40">
        <div className="mb-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
          Dimension: {dimensionInfo.shortLabel}
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
          {question.title}
        </h2>

        {question.subtitle && (
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            {question.subtitle}
          </p>
        )}

        {/* Options list */}
        <div className="mt-6 space-y-2.5">
          {question.options.map((option, idx) => {
            const isSelected = selectedOptionIds.includes(option.id);
            const keyLabel = idx + 1;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelectOption(option.id)}
                className={`group relative flex w-full items-start gap-3.5 rounded-xl border p-4 text-left transition-all duration-150 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-500/[0.08] shadow-md shadow-blue-500/5'
                    : 'border-white/[0.06] bg-[#12161E] hover:border-white/[0.18] hover:bg-[#161B25]'
                }`}
              >
                {/* Numeric key indicator */}
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-mono font-medium transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'border border-white/[0.1] bg-white/[0.03] text-slate-400 group-hover:border-white/[0.2] group-hover:text-slate-200'
                  }`}
                >
                  {isSelected ? <Check className="h-3.5 w-3.5" /> : keyLabel}
                </div>

                <div className="flex-1 pr-2">
                  <div
                    className={`text-sm leading-relaxed transition-colors ${
                      isSelected ? 'font-medium text-white' : 'text-slate-200 group-hover:text-white'
                    }`}
                  >
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="mt-1 text-xs text-slate-400 leading-normal">
                      {option.description}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              currentIndex === 0
                ? 'cursor-not-allowed text-slate-600'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
              Press <kbd className="rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 text-[10px]">1-4</kbd> to select, <kbd className="rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-0.5 text-[10px]">Enter</kbd> to continue
            </span>

            <button
              type="button"
              onClick={onNext}
              disabled={!canProceed}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                canProceed
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20 hover:bg-blue-500 cursor-pointer'
                  : 'cursor-not-allowed bg-white/[0.04] text-slate-500 border border-white/[0.05]'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Analyze Results' : 'Next Question'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
