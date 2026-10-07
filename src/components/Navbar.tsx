import React from 'react';
import { Sparkles, Compass, BookOpen, RotateCcw } from 'lucide-react';

interface NavbarProps {
  onOpenMethodology: () => void;
  onOpenExplorer: () => void;
  onReset: () => void;
  currentStep: 'landing' | 'intro' | 'quiz' | 'calculating' | 'results';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMethodology,
  onOpenExplorer,
  onReset,
  currentStep,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#08090A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onReset}
          className="group flex items-center gap-2.5 text-left transition-opacity hover:opacity-90"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            AI Readiness Index
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-400 md:flex">
          <button
            onClick={onOpenExplorer}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Role Benchmarks</span>
          </button>
          <button
            onClick={onOpenMethodology}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Empirical Methodology</span>
          </button>
          <span className="text-slate-600">·</span>
          <span className="font-mono text-[11px] text-slate-500">
            HBS · BCG · Anthropic Baseline
          </span>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {currentStep !== 'landing' && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Change Role</span>
            </button>
          )}

          <button
            onClick={onOpenExplorer}
            className="rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
          >
            Compare Benchmarks
          </button>
        </div>
      </div>
    </header>
  );
};
