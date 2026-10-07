import React, { useState } from 'react';
import { ROLES } from '../data/roles';
import { RoleDefinition } from '../types/assessment';
import { RoleIcon } from './RoleIcon';
import { X, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BenchmarkExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: RoleDefinition) => void;
}

export const BenchmarkExplorer: React.FC<BenchmarkExplorerProps> = ({
  isOpen,
  onClose,
  onSelectRole,
}) => {
  const [selectedRole, setSelectedRole] = useState<RoleDefinition>(ROLES[1]); // Default to PM

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col rounded-2xl border border-white/[0.1] bg-[#0C0E12] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-blue-400">
              Comparative Intelligence
            </div>
            <h2 className="font-display text-lg font-bold text-white">
              Global Role Benchmark Profiles (All 12 Roles)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/[0.05] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content body: 2-column layout (Roles list on left, Details on right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Left: Role selector list */}
          <div className="md:col-span-4 border-r border-white/[0.08] p-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {ROLES.map((role) => {
              const isCurrent = role.id === selectedRole.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors ${
                    isCurrent
                      ? 'bg-blue-600/10 border border-blue-500/30 text-white font-medium'
                      : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <RoleIcon
                      name={role.iconName}
                      className={`h-4 w-4 ${isCurrent ? 'text-blue-400' : 'text-slate-400'}`}
                    />
                    <span className="truncate">{role.title}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    {role.topPractitionerScore}%
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Role Deep Dive */}
          <div className="md:col-span-8 p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-blue-400">
                    <RoleIcon name={selectedRole.iconName} className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {selectedRole.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {selectedRole.description}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectRole(selectedRole);
                  onClose();
                }}
                className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500 transition-colors shrink-0"
              >
                <span>Take This Role</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Benchmark Scores Overview */}
            <div className="rounded-xl border border-white/[0.06] bg-[#12161E] p-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1 text-slate-200">
                  <Trophy className="h-3.5 w-3.5 text-amber-400" />
                  Elite Practitioner Target: <strong className="text-white">{selectedRole.topPractitionerScore}%</strong>
                </span>
                <span>Industry Average: {selectedRole.averageIndustryScore}%</span>
              </div>

              {/* 5 dimension bars */}
              <div className="space-y-2.5 text-xs">
                {Object.entries(selectedRole.benchmark).map(([dimKey, score]) => {
                  const label = dimKey
                    .replace('_', ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <div key={dimKey} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-mono text-slate-400 font-semibold">{score}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Habits of Top Practitioners */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Key Behaviors of Top 5% Practitioners
              </h4>
              <div className="space-y-2">
                {selectedRole.topHabits.map((habit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-[#10131A] p-3 text-xs text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{habit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elite Summary Box */}
            <div className="rounded-xl border border-white/[0.06] bg-blue-950/20 p-4 text-xs text-blue-200 leading-relaxed">
              <strong className="text-white block mb-1">Architectural Insight:</strong>
              {selectedRole.elitePracticesSummary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
