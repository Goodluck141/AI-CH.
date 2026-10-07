/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ROLES } from './data/roles';
import { getQuestionsForRole } from './data/questions';
import { AssessmentResult, RoleDefinition } from './types/assessment';
import { calculateAssessmentResult } from './utils/scoring';
import { Navbar } from './components/Navbar';
import { RoleCard } from './components/RoleCard';
import { QuestionCard } from './components/QuestionCard';
import { CalculatingScreen } from './components/CalculatingScreen';
import { ResultsReport } from './components/ResultsReport';
import { BenchmarkExplorer } from './components/BenchmarkExplorer';
import { MethodologyModal } from './components/MethodologyModal';
import { RoleIcon } from './components/RoleIcon';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  BarChart,
  CheckCircle2,
  Users,
  Compass,
  BookOpen,
} from 'lucide-react';

type Step = 'landing' | 'intro' | 'quiz' | 'calculating' | 'results';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [selectedRole, setSelectedRole] = useState<RoleDefinition | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  // Modals
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);

  // Filtered roles
  const filteredRoles = useMemo(() => {
    if (categoryFilter === 'all') return ROLES;
    return ROLES.filter((r) => r.category === categoryFilter);
  }, [categoryFilter]);

  // Questions for active role
  const activeQuestions = useMemo(() => {
    if (!selectedRole) return [];
    return getQuestionsForRole(selectedRole.id);
  }, [selectedRole]);

  // Handlers
  const handleSelectRole = (role: RoleDefinition) => {
    setSelectedRole(role);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setCurrentStep('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOptionToggle = (optionId: string) => {
    if (!activeQuestions[currentQuestionIndex]) return;
    const currentQ = activeQuestions[currentQuestionIndex];

    if (currentQ.type === 'single_choice') {
      setAnswers((prev) => ({
        ...prev,
        [currentQ.id]: [optionId],
      }));
    } else {
      setAnswers((prev) => {
        const existing = prev[currentQ.id] || [];
        const next = existing.includes(optionId)
          ? existing.filter((id) => id !== optionId)
          : [...existing, optionId];
        return { ...prev, [currentQ.id]: next };
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Finished all 20 questions -> Calculating screen
      setCurrentStep('calculating');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCalculationComplete = () => {
    if (selectedRole && activeQuestions.length > 0) {
      const result = calculateAssessmentResult(selectedRole, answers, activeQuestions);
      setAssessmentResult(result);
      setCurrentStep('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setCurrentStep('landing');
    setSelectedRole(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setAssessmentResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Bar Contract (3 zones) */}
      <Navbar
        currentStep={currentStep}
        onReset={handleReset}
        onOpenExplorer={() => setIsExplorerOpen(true)}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
      />

      <main className="flex-1">
        {/* STEP 1: Landing Page */}
        {currentStep === 'landing' && (
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            {/* Hero Section */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium text-blue-300 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <span>Empirical AI Adoption Diagnostic</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                How does your use of AI compare to the best in the world at your role?
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
                Benchmark your daily AI workflows against documented behaviors of top-tier practitioners across 5 dimensions: workflow integration, prompt sophistication, tool breadth, output quality focus, and strategic application.
              </p>

              {/* Research trust banner */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 border-y border-white/[0.06] py-3.5">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-blue-400" />
                  Calibrated against HBS & BCG Jagged Frontier Research
                </span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <span>12 Role-Specific Question Banks</span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <span>20 Diagnostic Questions</span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <span>100% In-Browser Privacy</span>
              </div>
            </div>

            {/* Role Filter & Selection Grid */}
            <div className="mt-14">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight text-white">
                    Select Your Professional Role
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Each role has a bespoke 20-question bank and empirical benchmark profile.
                  </p>
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.02] p-1 text-xs">
                  {[
                    { id: 'all', label: 'All 12 Roles' },
                    { id: 'leadership', label: 'Leadership & Legal' },
                    { id: 'product_tech', label: 'Product & Tech' },
                    { id: 'growth_sales', label: 'Growth & Sales' },
                    { id: 'operations', label: 'Operations & People' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setCategoryFilter(tab.id)}
                      className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
                        categoryFilter === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roles grid: 3-4 columns desktop, 2 columns tablet/mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredRoles.map((role) => (
                  <RoleCard
                    key={role.id}
                    role={role}
                    onSelect={handleSelectRole}
                    isSelected={selectedRole?.id === role.id}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Methodology Callout */}
            <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0E1116] p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      5 Core Dimensions
                    </h3>
                    <p className="text-slate-400">
                      Evaluates Workflow Integration, Prompt Sophistication, Tool Breadth, Output Quality Rigor, and Strategic Allocator Leverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      Honesty Over Flattery
                    </h3>
                    <p className="text-slate-400">
                      Scores are calibrated to rigorous industry research. Most practitioners score in Tiers 2–3, making Tier 4–5 genuinely world-class.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      Actionable Growth Playbook
                    </h3>
                    <p className="text-slate-400">
                      Receive concrete recommendations on what top practitioners do differently, tailored to your biggest gaps and role needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Brief Intro Screen */}
        {currentStep === 'intro' && selectedRole && (
          <div className="mx-auto max-w-2xl px-4 py-16 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10">
                <RoleIcon name={selectedRole.iconName} className="h-7 w-7" />
              </div>
            </div>

            <div className="font-mono text-xs uppercase tracking-wider text-blue-400">
              Role Confirmed
            </div>

            <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {selectedRole.title} AI Readiness Diagnostic
            </h1>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              You will answer <strong className="text-white">20 adaptive questions</strong> evaluating how you integrate AI into your daily responsibilities. Be honest—there are no wrong answers. The diagnostic is calibrated to separate superficial chatting from elite co-intelligence.
            </p>

            {/* Checklist of what will be measured */}
            <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#0E1116] p-5 text-left text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2.5 font-medium text-white text-sm mb-1">
                <span>Assessment Structure:</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                <span>20 role-specific scenarios, depth probes, and workflow inventories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Estimated time: 4 to 6 minutes (one question per screen)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Instant radar chart & peer percentile comparison against {selectedRole.topPractitionerScore}% benchmark</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Choose another role
              </button>

              <button
                onClick={handleStartQuiz}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all cursor-pointer"
              >
                <span>Begin Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Quiz Screen (1 Question at a time) */}
        {currentStep === 'quiz' && selectedRole && activeQuestions[currentQuestionIndex] && (
          <QuestionCard
            question={activeQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={activeQuestions.length}
            selectedOptionIds={answers[activeQuestions[currentQuestionIndex].id] || []}
            onSelectOption={handleOptionToggle}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
          />
        )}

        {/* STEP 4: Animated Calculating Screen */}
        {currentStep === 'calculating' && selectedRole && (
          <CalculatingScreen
            role={selectedRole}
            onComplete={handleCalculationComplete}
          />
        )}

        {/* STEP 5: Results Report */}
        {currentStep === 'results' && assessmentResult && (
          <ResultsReport
            result={assessmentResult}
            onRetake={handleReset}
            onOpenExplorer={() => setIsExplorerOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#08090A] py-8 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">AI Readiness Index</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Empirical Benchmarking Engine</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setIsMethodologyOpen(true)}
              className="hover:text-slate-300 transition-colors"
            >
              Methodology & Sources
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => setIsExplorerOpen(true)}
              className="hover:text-slate-300 transition-colors"
            >
              All 12 Roles
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Zero Data Storage</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BenchmarkExplorer
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
        onSelectRole={handleSelectRole}
      />

      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />
    </div>
  );
}
