import React from 'react';
import { RoleDefinition } from '../types/assessment';
import { RoleIcon } from './RoleIcon';
import { ArrowRight, Trophy } from 'lucide-react';

interface RoleCardProps {
  role: RoleDefinition;
  onSelect: (role: RoleDefinition) => void;
  isSelected?: boolean;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onSelect, isSelected }) => {
  return (
    <div
      onClick={() => onSelect(role)}
      className={`group relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-blue-500 bg-[#111726] shadow-lg shadow-blue-500/10'
          : 'border-white/[0.08] bg-[#0E1116] hover:border-white/[0.2] hover:bg-[#131720]'
      }`}
    >
      <div>
        {/* Top header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-blue-400 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
            <RoleIcon name={role.iconName} className="h-5 w-5" />
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <Trophy className="h-3 w-3 text-amber-400/80" />
            <span>Benchmark:</span>
            <span className="font-semibold text-slate-200">{role.topPractitionerScore}%</span>
          </div>
        </div>

        {/* Title and metadata */}
        <div className="mt-3.5">
          <h3 className="font-display text-base font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors">
            {role.title}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
            <span className="capitalize">{role.category.replace('_', ' & ')}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>20 Adaptive Questions</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2.5 text-xs leading-relaxed text-slate-300/80 line-clamp-2">
          {role.description}
        </p>
      </div>

      {/* Card footer CTA */}
      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs">
        <span className="font-mono text-[11px] text-slate-400">
          Peer avg: {role.averageIndustryScore}%
        </span>

        <span className="flex items-center gap-1 font-medium text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all">
          <span>Start Diagnostic</span>
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
};
