import { DimensionKey, RoleDefinition } from '../types/assessment';

export const DIMENSION_STRENGTH_INSIGHTS: Record<DimensionKey, string> = {
  workflow_integration:
    'You have embedded AI into your regular operational cadence, moving past sporadic experimentation into continuous habit loops that compound daily speed.',
  prompt_sophistication:
    'Your prompting transcends conversational prose, utilizing structured boundary markers, role constraints, and chain-of-thought scratchpads to guarantee high-yield responses.',
  tool_breadth:
    'You actively deploy a multi-layered ecosystem of tools rather than relying on a single web interface, matching cognitive tasks to optimal models and modalities.',
  output_quality_focus:
    'You maintain rigorous human-in-the-loop oversight, fiercely defending quality against hallucinations and resisting the homogenization effect that blunts standard AI outputs.',
  strategic_application:
    'You leverage AI for high-leverage architectural thinking, simulation, and organizational moats rather than merely speeding up routine commodity tasks.',
};

export const DIMENSION_GROWTH_RECOMMENDATIONS: Record<DimensionKey, Record<string, { recommendation: string; eliteHabit: string }>> = {
  workflow_integration: {
    default: {
      recommendation:
        'Transition from reactive, isolated prompt sessions to systemic workflows. Build recurring trigger-based routines where AI receives standardized inputs (e.g. meeting transcripts, draft tickets) automatically.',
      eliteHabit: 'The Ten-Hour Experimentation Rule: spend 10 focused hours deliberately using frontier AI on tasks you already master to map its jagged frontier.',
    },
  },
  prompt_sophistication: {
    default: {
      recommendation:
        'Abandon zero-shot paragraphs. Adopt structured XML tags (<instructions>, <context>, <constraints>) and mandate scratchpad chain-of-thought reasoning before the model emits answers.',
      eliteHabit: 'Adversarial Prompting: instruct models to play the role of your most skeptical executive stakeholder or counterparty before finalizing any deliverable.',
    },
  },
  tool_breadth: {
    default: {
      recommendation:
        'Break out of single-tab browser reliance. Explore multi-layered toolchains combining frontier reasoning models, local terminal tools or IDE extensions, and vector-indexed knowledge repositories.',
      eliteHabit: 'Multi-Layer Toolchain: separate high-speed autocomplete from localized in-line edits and deep autonomous agent execution.',
    },
  },
  output_quality_focus: {
    default: {
      recommendation:
        'Enforce anti-homogenization discipline. Large language models inherently gravitate toward the statistical mean; inject proprietary data, contrarian perspectives, and authentic voice into every draft.',
      eliteHabit: 'The Centaur Standard: let the machine handle 80% of structural synthesis, but reserve 100% of final editorial veto and domain judgment for human verification.',
    },
  },
  strategic_application: {
    default: {
      recommendation:
        'Shift your focus from operational execution ("Do this task for me") to cognitive leverage ("Help me stress-test this strategy"). Use AI to simulate trade-offs, model downside risks, and plan multi-step initiatives.',
      eliteHabit: 'Allocator Mindset: view your professional value not as a manual producer of words or code, but as a systems gardener directing cognitive resources.',
    },
  },
};

export function getPersonalizedSummary(role: RoleDefinition, compositeScore: number, tierLabel: string): string {
  if (compositeScore >= 80) {
    return `Your AI readiness places you in the elite upper tier of ${role.title} professionals globally. You operate with an allocator mindset, leveraging multi-layered toolchains, rigorous boundary constraints, and deep human-in-the-loop judgment. While peers struggle with generic outputs, your workflows compound velocity and strategic leverage across the organization.`;
  }
  if (compositeScore >= 60) {
    return `You have achieved advanced proficiency as an active AI practitioner in ${role.title}. AI is deeply embedded in your recurring tasks, providing substantial speed gains. To cross the threshold into world-class practice, focus on eliminating reliance on general-purpose chat interfaces, formalizing your prompt engineering with strict boundary tags, and deploying domain-specific agentic pipelines.`;
  }
  if (compositeScore >= 40) {
    return `You are an active user who understands the productivity potential of generative AI for ${role.title}, but your usage remains primarily ad-hoc and conversational. You frequently operate inside the "jagged technological frontier" without a structured safety harness, leaving you vulnerable to subtle hallucinations and the homogenization effect. Transitioning from basic chatting to systematic workflow integration will unlock 3–5x greater leverage.`;
  }
  if (compositeScore >= 20) {
    return `You are in the emerging adoption stage for ${role.title}. While you have experimented with conversational tools like ChatGPT, AI is not yet an organic component of your core professional output. By implementing structured prompts and identifying 2–3 recurring tasks to automate this month, you can quickly double your operational throughput.`;
  }
  return `You are currently at the AI Novice stage for ${role.title}. The rapid shift toward AI-assisted workflows presents an enormous opportunity: modern AI tools can immediately elevate foundational competencies and liberate hundreds of hours from administrative drudgery once initial routines are established.`;
}

export function getPercentileRank(score: number): number {
  // Calibrated so that 80%+ is top 5%, 65% is top 18%, 50% is top 45%, 30% is top 75%
  if (score >= 90) return 98; // top 2%
  if (score >= 85) return 96; // top 4%
  if (score >= 80) return 93; // top 7%
  if (score >= 75) return 88; // top 12%
  if (score >= 70) return 82; // top 18%
  if (score >= 65) return 75; // top 25%
  if (score >= 60) return 68; // top 32%
  if (score >= 50) return 55; // top 45%
  if (score >= 40) return 40; // top 60%
  if (score >= 30) return 25; // top 75%
  if (score >= 20) return 15; // top 85%
  return Math.max(5, Math.round(score * 0.7));
}
