import React from 'react';
import { X, ExternalLink, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl border border-white/[0.1] bg-[#0C0E12] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-blue-400">
              Scientific Baseline & Research
            </div>
            <h2 className="font-display text-lg font-bold text-white">
              The Architecture of Co-Intelligence
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/[0.05] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 overflow-y-auto p-6 text-xs text-slate-300 leading-relaxed max-h-[75vh]">
          {/* Section 1: The Jagged Technological Frontier */}
          <div className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4">
            <div className="flex items-center gap-2 text-blue-400 mb-2 font-semibold">
              <Zap className="h-4 w-4" />
              <span className="text-white text-sm">1. The Jagged Technological Frontier (HBS & BCG)</span>
            </div>
            <p>
              Academic research conducted jointly by <strong>Harvard Business School</strong> and the{' '}
              <strong>Boston Consulting Group (BCG)</strong> across 758 consultants demonstrated that
              AI capability is not linear—it is "jagged". Tasks inside the frontier receive a +25.1% speed
              boost and +40% quality increase. Tasks outside the frontier suffer a <strong>19-percentage-point
              drop in accuracy</strong> when workers blindly trust articulate model hallucinations. Top
              practitioners systematically map this boundary.
            </p>
          </div>

          {/* Section 2: Centaur vs Cyborg Integration Models */}
          <div className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4">
            <div className="flex items-center gap-2 text-emerald-400 mb-2 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-white text-sm">2. Centaur vs. Cyborg Collaboration Archetypes</span>
            </div>
            <p>
              Elite professionals adopt two distinct operational structures:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-300">
              <li>
                <strong>The Centaur Model:</strong> Strategic, macro-level division of labor. Delegating
                inside-the-frontier data synthesis to AI while strictly reserving final judgment, empathy,
                and legal accountability for humans.
              </li>
              <li>
                <strong>The Cyborg Model:</strong> Micro-level continuous collaboration, seamlessly handing
                sub-tasks back and forth within a single paragraph or code module in seconds.
              </li>
            </ul>
          </div>

          {/* Section 3: The 10-Hour Experimentation Rule */}
          <div className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4">
            <div className="flex items-center gap-2 text-amber-400 mb-2 font-semibold">
              <Layers className="h-4 w-4" />
              <span className="text-white text-sm">3. The Ten-Hour Experimentation Rule (Wharton / Mollick)</span>
            </div>
            <p>
              Wharton Professor Ethan Mollick establishes that reaching intuitive mastery requires a
              minimum of 10 hours of focused experimentation on tasks you already master. By generating
              outputs where you have ground-truth expertise, you uncover the model's subtle failure
              modes without risking professional liability.
            </p>
          </div>

          {/* Section 4: Karpathy 4-Layer Toolchain & Ephemeral Code */}
          <div className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4">
            <div className="flex items-center gap-2 text-indigo-400 mb-2 font-semibold">
              <Cpu className="h-4 w-4" />
              <span className="text-white text-sm">4. Multi-Layer Toolchains & The Allocator Economy</span>
            </div>
            <p>
              Industry leaders (Andrej Karpathy, Simon Willison) reject single-interface reliance.
              Elite practitioners deploy multi-layered toolchains: ghost-text autocomplete for flow,
              targeted in-line diffs, terminal CLI agents for autonomous feature builds, and frontier
              reasoning models for intractable architecture. As the cost of creating code and copy drops
              to near-zero, the remaining premium is <strong>taste, judgment, and architectural vision</strong>.
            </p>
          </div>

          {/* Citations Footer */}
          <div className="border-t border-white/[0.06] pt-4 text-[11px] text-slate-400">
            Research citations: Dell'Acqua et al. (Harvard/BCG, 2023) "Navigating the Jagged Frontier";
            Brynjolfsson et al. (NBER, 2023); Mollick (Wharton, 2024) "Co-Intelligence"; Karpathy (2024);
            Anthropic Prompt Engineering Research (2024).
          </div>
        </div>
      </div>
    </div>
  );
};
