import { Question } from '../../types/assessment';

export const LEADERSHIP_QUESTIONS: Record<string, Question[]> = {
  ceo_executive: [
    // Dimension 1: workflow_integration (4 questions)
    {
      id: 'ceo_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently is AI integrated into your executive routine and decision-making?',
      subtitle: 'From daily briefing preparation to board deck strategy.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasional ad-hoc research or light drafting', score: 1 },
        { id: 'c', label: 'Several times a week for memos, research synthesis, and executive summaries', score: 2 },
        { id: 'd', label: 'Daily: AI is a continuous strategic sounding board and cognitive partner', score: 4 },
      ],
    },
    {
      id: 'ceo_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you process voluminous briefings, board packets, or earnings reports?',
      options: [
        { id: 'a', label: 'Manual reading and physical highlighter/notes', score: 0 },
        { id: 'b', label: 'Rely solely on human executive assistants or chief of staff summaries', score: 1 },
        { id: 'c', label: 'Paste text into public chat interfaces for quick bullet summaries', score: 2 },
        { id: 'd', label: 'Systemic synthesis: feeding full filings into long-context models with customized executive lenses', score: 4 },
      ],
    },
    {
      id: 'ceo_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you capture and structure your strategic thoughts and vision?',
      options: [
        { id: 'a', label: 'Pen, paper, or standard word processor', score: 0 },
        { id: 'b', label: 'Sporadic voice memos or raw email drafts', score: 1 },
        { id: 'c', label: 'Dictation transformed by basic AI speech-to-text without deep restructuring', score: 2 },
        { id: 'd', label: 'High-bandwidth voice dictation processed through structured personas into executive memos and OKRs', score: 4 },
      ],
    },
    {
      id: 'ceo_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How are meeting transcripts and town hall takeaways processed across your leadership team?',
      options: [
        { id: 'a', label: 'No structured recording or manual notes only', score: 0 },
        { id: 'b', label: 'Automated recording bot with unread raw transcripts', score: 1 },
        { id: 'c', label: 'Reviewing automated meeting action item summaries', score: 2 },
        { id: 'd', label: 'Automated synthesis pipeline extracting commitments, sentiment shifts, and cross-team blockers directly into CRM/notion', score: 4 },
      ],
    },

    // Dimension 2: prompt_sophistication (4 questions)
    {
      id: 'ceo_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'When prompting AI for executive communication, what approach do you use?',
      options: [
        { id: 'a', label: 'Short 1-line conversational queries (e.g., "Draft an email to all staff")', score: 0 },
        { id: 'b', label: 'Descriptive paragraphs explaining what you need', score: 1 },
        { id: 'c', label: 'Specifying tone, audience, key constraints, and 2-3 sample bullets', score: 2 },
        { id: 'd', label: 'Calibrated persona directives, strict boundaries, anti-cliché constraints, and few-shot exemplary outputs', score: 4 },
      ],
    },
    {
      id: 'ceo_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you use adversarial simulation ("red teaming") in your prompting?',
      options: [
        { id: 'a', label: 'Never heard of or never tried this', score: 0 },
        { id: 'b', label: 'Occasionally ask AI: "What could go wrong with this plan?"', score: 1 },
        { id: 'c', label: 'Assign specific counterparty personas (e.g. activist investor, skeptical customer) to attack hypotheses', score: 3 },
        { id: 'd', label: 'Multi-round stress-testing with adversarial personas, probing hidden blindspots before high-stakes meetings', score: 4 },
      ],
    },
    {
      id: 'ceo_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you handle context window management for company documents?',
      options: [
        { id: 'a', label: 'I do not upload or provide internal context', score: 0 },
        { id: 'b', label: 'Copy-pasting small snippets when needed', score: 1 },
        { id: 'c', label: 'Uploading entire PDFs or strategy files as context attachments', score: 2 },
        { id: 'd', label: 'Structured enterprise workspaces / tagged markdown repositories with zero data leakage', score: 4 },
      ],
    },
    {
      id: 'ceo_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you structure instructions for complex, multi-variable analyses?',
      options: [
        { id: 'a', label: 'A single block of prose asking for everything at once', score: 0 },
        { id: 'b', label: 'Sequential questions one by one in chat', score: 1 },
        { id: 'c', label: 'Numbered multi-step instructions with requested output formatting', score: 3 },
        { id: 'd', label: 'XML-tagged system architectures with explicit chain-of-thought scratchpad requirements and JSON/table schema', score: 4 },
      ],
    },

    // Dimension 3: tool_breadth (4 questions)
    {
      id: 'ceo_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'Which AI interfaces and model tiers do you actively employ?',
      options: [
        { id: 'a', label: 'Free standard web chat (e.g. ChatGPT free tier) only', score: 0 },
        { id: 'b', label: 'One paid frontier subscription (e.g. ChatGPT Plus or Claude Pro)', score: 2 },
        { id: 'c', label: 'Multiple frontier models selected based on specific cognitive tasks (e.g., Claude for writing, o3/Gemini for reasoning)', score: 3 },
        { id: 'd', label: 'Multi-model suite + enterprise-grade secure workspaces + voice dictation + specialized executive tools', score: 4 },
      ],
    },
    {
      id: 'ceo_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How does your executive team utilize voice and multimodal AI capabilities?',
      options: [
        { id: 'a', label: 'Text-only; never use voice or image inputs', score: 0 },
        { id: 'b', label: 'Basic mobile voice-to-text typing', score: 1 },
        { id: 'c', label: 'Interactive voice mode for brainstorms during commutes or walks', score: 3 },
        { id: 'd', label: 'Multimodal analysis: feeding whiteboard photos, organizational charts, and voice debriefs into vision models', score: 4 },
      ],
    },
    {
      id: 'ceo_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What specialized tools do you use for market intelligence and competitive monitoring?',
      options: [
        { id: 'a', label: 'Standard Google Search and manual newsletters', score: 0 },
        { id: 'b', label: 'General chatbots asking for competitor news', score: 1 },
        { id: 'c', label: 'Deep research tools (Perplexity Pro, Gemini Deep Research) for cited competitive dossiers', score: 3 },
        { id: 'd', label: 'Automated intelligence feeds combining web scrapers, LLM synthesis, and executive digest alerts', score: 4 },
      ],
    },
    {
      id: 'ceo_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you manage company AI policies and enterprise tooling adoption?',
      options: [
        { id: 'a', label: 'No formal policy; shadow AI usage across departments', score: 0 },
        { id: 'b', label: 'Blanket restrictive guidelines warning against data leaks', score: 1 },
        { id: 'c', label: 'Provided paid enterprise licenses with approved data privacy boundaries', score: 3 },
        { id: 'd', label: 'Company-wide AI literacy programs, custom internal secure enterprise copilots, and measurable ROI benchmarks', score: 4 },
      ],
    },

    // Dimension 4: output_quality_focus (4 questions)
    {
      id: 'ceo_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you prevent the "homogenization effect" (sounding generic or like typical AI-generated copy)?',
      options: [
        { id: 'a', label: 'I accept outputs as-is with minimal edits', score: 0 },
        { id: 'b', label: 'I manually delete obvious buzzwords ("delve", "testament")', score: 1 },
        { id: 'c', label: 'I provide negative prompt guidelines and mandate my personal authentic tone', score: 3 },
        { id: 'd', label: 'Rigorous editorial pass: using AI only for structure/arguments while infusing unique executive conviction, zing, and lived anecdotes', score: 4 },
      ],
    },
    {
      id: 'ceo_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you audit factual claims and numbers generated in AI summaries?',
      options: [
        { id: 'a', label: 'Trust the AI output if it appears articulate and confident', score: 0 },
        { id: 'b', label: 'Quick skim to see if numbers sound plausible', score: 1 },
        { id: 'c', label: 'Spot-check key figures against source financial files', score: 3 },
        { id: 'd', label: 'Mandate cited source attribution and dual-pass validation, recognizing the "jagged technological frontier"', score: 4 },
      ],
    },
    {
      id: 'ceo_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'When an AI model produces a strategic recommendation, how do you evaluate it?',
      options: [
        { id: 'a', label: 'Treat it as an authoritative answer', score: 0 },
        { id: 'b', label: 'Take what sounds agreeable and discard the rest', score: 1 },
        { id: 'c', label: 'Ask follow-up questions to understand its reasoning chain', score: 3 },
        { id: 'd', label: 'Synthesize across multiple viewpoints, testing underlying assumptions and evaluating asymmetric downside risk', score: 4 },
      ],
    },
    {
      id: 'ceo_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure confidential company data is protected during AI usage?',
      options: [
        { id: 'a', label: 'Unsure if data is private or stored by providers', score: 0 },
        { id: 'b', label: 'Avoid using AI for anything remotely sensitive', score: 1 },
        { id: 'c', label: 'Use enterprise tiers with zero-retention and non-training guarantees', score: 3 },
        { id: 'd', label: 'Formal data classification framework, sanitized prompts, and signed enterprise data privacy agreements', score: 4 },
      ],
    },

    // Dimension 5: strategic_application (4 questions)
    {
      id: 'ceo_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you view AI in relation to your overall company business model?',
      options: [
        { id: 'a', label: 'A trendy technology that does not affect our core industry', score: 0 },
        { id: 'b', label: 'A cost-reduction tool for customer support or copywriting', score: 1 },
        { id: 'c', label: 'A core operational productivity multiplier across all knowledge work', score: 3 },
        { id: 'd', label: 'A fundamental shift to the "allocator economy" that transforms unit economics, product architectures, and moat defense', score: 4 },
      ],
    },
    {
      id: 'ceo_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI for scenario planning and strategic war-gaming?',
      options: [
        { id: 'a', label: 'Do not use AI for strategic scenarios', score: 0 },
        { id: 'b', label: 'Ask high-level questions about future market trends', score: 1 },
        { id: 'c', label: 'Model 3 distinct macroeconomic or regulatory scenarios with forecasted impact', score: 3 },
        { id: 'd', label: 'Run multi-agent simulations playing out competitor responses, supply chain shocks, and capital market fluctuations', score: 4 },
      ],
    },
    {
      id: 'ceo_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you navigate the "Centaur vs Cyborg" model of executive execution?',
      options: [
        { id: 'a', label: 'Unaware of structured collaboration frameworks', score: 0 },
        { id: 'b', label: 'Occasional hand-off of low-priority tasks', score: 1 },
        { id: 'c', label: 'Centaur model: clearly partitioning analytical synthesis to AI while reserving high-empathy leadership for humans', score: 3 },
        { id: 'd', label: 'Dynamic hybrid: continuous micro-collaboration on complex documents with rigorous human-in-the-loop executive veto', score: 4 },
      ],
    },
    {
      id: 'ceo_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How are you reallocating human capital and hiring plans in light of agentic capabilities?',
      options: [
        { id: 'a', label: 'No change to hiring plans or role descriptions', score: 0 },
        { id: 'b', label: 'Slightly slowing down junior headcount hiring', score: 1 },
        { id: 'c', label: 'Assessing AI fluency in all new leadership and specialist candidates', score: 3 },
        { id: 'd', label: 'Redesigning the organizational chart around high-leverage "allocator" roles that orchestrate autonomous systems', score: 4 },
      ],
    },
  ],

  legal_compliance: [
    // 20 questions for Legal / Compliance across the 5 dimensions
    {
      id: 'leg_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you leverage AI tools in contract review or regulatory research?',
      options: [
        { id: 'a', label: 'Never or strictly prohibited', score: 0 },
        { id: 'b', label: 'Rarely for general legal concepts only', score: 1 },
        { id: 'c', label: 'Weekly for first-pass contract summaries and clause searches', score: 2 },
        { id: 'd', label: 'Daily: deeply integrated into drafting, redlining, and compliance scanning', score: 4 },
      ],
    },
    {
      id: 'leg_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you conduct first-pass reviews of 50+ page MSAs, NDAs, or DPAs?',
      options: [
        { id: 'a', label: 'Line-by-line manual reading and paper markup', score: 0 },
        { id: 'b', label: 'Ctrl+F keyword searching for standard terms', score: 1 },
        { id: 'c', label: 'AI summary highlighting non-standard terms against baseline templates', score: 3 },
        { id: 'd', label: 'Automated contract triage pipeline flagging deviation from fallback playbooks with suggested redline markup', score: 4 },
      ],
    },
    {
      id: 'leg_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft initial contract clauses and negotiation positions?',
      options: [
        { id: 'a', label: 'Copy-pasting from historical precedents in local folders', score: 0 },
        { id: 'b', label: 'Asking AI for a generic clause in plain English', score: 1 },
        { id: 'c', label: 'Prompting with your precedent language to craft balanced alternatives', score: 3 },
        { id: 'd', label: 'Multi-tier clause generation (aggressive, market standard, fallback) conditioned on governing law and client leverage', score: 4 },
      ],
    },
    {
      id: 'leg_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you maintain and update corporate compliance manuals and policies?',
      options: [
        { id: 'a', label: 'Annual manual review when an audit or incident occurs', score: 0 },
        { id: 'b', label: 'Updating static documents manually after reading law firm client alerts', score: 1 },
        { id: 'c', label: 'Using AI to draft policy updates based on new statutory text', score: 3 },
        { id: 'd', label: 'Automated policy matrix continuously benchmarked against new statutory rulings with flagged operational gaps', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'leg_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you structure prompts to prevent hallucinated case citations or statutory references?',
      options: [
        { id: 'a', label: 'I do not use special prompt structures', score: 0 },
        { id: 'b', label: 'I add "Please provide real citations only"', score: 1 },
        { id: 'c', label: 'I provide the source statutory text directly and restrict answers strictly to the provided document', score: 3 },
        { id: 'd', label: 'Strict XML tagged fences (<statute>, <context>, <negative_constraints>) with explicit citation requirements and confidence scoring', score: 4 },
      ],
    },
    {
      id: 'leg_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'When asking AI to redline an opposing counsel proposal, how do you instruct it?',
      options: [
        { id: 'a', label: '"Fix this agreement for me"', score: 0 },
        { id: 'b', label: '"Protect my company and make this favorable"', score: 1 },
        { id: 'c', label: 'Provide our standard positions on indemnity, limitation of liability, and jurisdiction', score: 3 },
        { id: 'd', label: 'Provide a structured playbook matrix with accepted vs. rejected concessions and demand explanatory commentary for the counterparty', score: 4 },
      ],
    },
    {
      id: 'leg_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you handle multi-jurisdictional legal queries with AI?',
      options: [
        { id: 'a', label: 'Ask a general legal question without stating the jurisdiction', score: 0 },
        { id: 'b', label: 'Mention the state or country in passing (e.g. "under Delaware law")', score: 1 },
        { id: 'c', label: 'Explicitly anchor the applicable legal framework, statutory code, and commercial standards', score: 3 },
        { id: 'd', label: 'Comparative jurisdiction matrix prompting models to identify conflict of law issues and regulatory divergent risks', score: 4 },
      ],
    },
    {
      id: 'leg_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you implement chain-of-thought protocols for legal risk assessment?',
      options: [
        { id: 'a', label: 'No, I just read the direct recommendation', score: 0 },
        { id: 'b', label: 'I ask it to list pros and cons', score: 1 },
        { id: 'c', label: 'I ask for the intermediate legal reasoning before the conclusion', score: 3 },
        { id: 'd', label: 'Mandate systematic scratchpad reasoning: elements of claims -> exposure quantification -> mitigation levers -> recommendation', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'leg_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What legal-specific AI tooling ecosystem do you utilize?',
      options: [
        { id: 'a', label: 'Consumer web chat only (e.g. ChatGPT standard)', score: 0 },
        { id: 'b', label: 'General enterprise LLM without legal plugins', score: 1 },
        { id: 'c', label: 'Specialized legal tech tools (e.g., Harvey, CoCounsel, Robin AI, Spellbook)', score: 3 },
        { id: 'd', label: 'Multi-tiered stack: specialized legal AI engines + internal secure vector search across corporate precedent archives', score: 4 },
      ],
    },
    {
      id: 'leg_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you search and query your company’s historical contract repository?',
      options: [
        { id: 'a', label: 'Manual folder browsing and searching filenames', score: 0 },
        { id: 'b', label: 'Basic CLM keyword search', score: 1 },
        { id: 'c', label: 'Uploading specific past agreements into LLMs when questions arise', score: 2 },
        { id: 'd', label: 'Semantic search and RAG indexing across the entire corporate contract archive with clause variance tracking', score: 4 },
      ],
    },
    {
      id: 'leg_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you monitor emerging regulatory changes (EU AI Act, privacy laws, trade sanctions)?',
      options: [
        { id: 'a', label: 'Ad-hoc reading of legal blogs and law firm memos', score: 0 },
        { id: 'b', label: 'Manual web searches periodically', score: 1 },
        { id: 'c', label: 'Perplexity / deep research queries on recent statutory amendments', score: 3 },
        { id: 'd', label: 'Automated regulatory intelligence feeds monitoring regulatory dockets with automated impact assessments on internal ops', score: 4 },
      ],
    },
    {
      id: 'leg_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you verify compliance with client-imposed AI usage restrictions in your firm/company?',
      options: [
        { id: 'a', label: 'No tracking of client AI restrictions', score: 0 },
        { id: 'b', label: 'Honor system among colleagues', score: 1 },
        { id: 'c', label: 'Contractual matrix tracking which clients prohibit or permit AI assistance', score: 3 },
        { id: 'd', label: 'Enforced technical enterprise boundaries: zero-data-retention sandboxes and audit logging for legal work-product privilege', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'leg_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'What is your verification protocol for AI-generated contract text or legal analysis?',
      options: [
        { id: 'a', label: 'Skim quickly and approve if it reads like formal legalese', score: 0 },
        { id: 'b', label: 'Check for typos and formatting issues', score: 1 },
        { id: 'c', label: 'Line-by-line substantive review checking key risk terms against standards', score: 3 },
        { id: 'd', label: 'Strict dual-pass audit: independent citation verification, stress-testing worst-case liability, and full attorney accountability', score: 4 },
      ],
    },
    {
      id: 'leg_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you preserve attorney-client privilege and confidentiality when utilizing AI?',
      options: [
        { id: 'a', label: 'Never considered privilege implications of AI tools', score: 0 },
        { id: 'b', label: 'De-identifying client names manually before pasting', score: 1 },
        { id: 'c', label: 'Relying on enterprise agreements with SOC2 / ISO and no-model-training clauses', score: 3 },
        { id: 'd', label: 'Formal privilege safeguards: verified non-disclosure architecture, zero-retention API endpoints, and internal legal work product guidelines', score: 4 },
      ],
    },
    {
      id: 'leg_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you address the risk of subtle legal hallucinations (e.g. plausible but altered doctrine)?',
      options: [
        { id: 'a', label: 'Assume modern LLMs do not make legal errors', score: 0 },
        { id: 'b', label: 'Cross-check whenever an answer seems counterintuitive', score: 1 },
        { id: 'c', label: 'Always anchor queries to uploaded canonical primary sources', score: 3 },
        { id: 'd', label: 'Rigorous awareness of the "jagged technological frontier": recognizing LLMs excel at synthesis but fail at complex jurisdictional nuance without strict grounding', score: 4 },
      ],
    },
    {
      id: 'leg_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure tone and commercial posture in AI-drafted negotiation memos?',
      options: [
        { id: 'a', label: 'Accept standard polite or robotic tone', score: 0 },
        { id: 'b', label: 'Ask it to sound "firmer" or "more collaborative"', score: 1 },
        { id: 'c', label: 'Edit language to match specific partner or client communication style', score: 3 },
        { id: 'd', label: 'Systematically calibrate posture to commercial leverage: preserving deal velocity while unyielding on existential indemnity/IP boundaries', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'leg_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you view AI’s impact on the legal profession and billing models?',
      options: [
        { id: 'a', label: 'A passing novelty that cannot replicate true legal reasoning', score: 0 },
        { id: 'b', label: 'A threat to billable hours that should be used quietly', score: 1 },
        { id: 'c', label: 'An efficiency tool enabling fixed-fee and value-based pricing', score: 3 },
        { id: 'd', label: 'A transformational shift from manual drafting to strategic risk architecture, enabling 10x throughput and proactive counsel', score: 4 },
      ],
    },
    {
      id: 'leg_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you assist the company in adopting internal governance for artificial intelligence?',
      options: [
        { id: 'a', label: 'Have not addressed AI governance or compliance', score: 0 },
        { id: 'b', label: 'Issued a generic policy memo prohibiting AI use', score: 1 },
        { id: 'c', label: 'Drafted an enterprise Acceptable Use Policy for AI tools', score: 3 },
        { id: 'd', label: 'Architected comprehensive AI governance framework: risk-tiering use cases, vendor copyright indemnities, and compliance with the EU AI Act', score: 4 },
      ],
    },
    {
      id: 'leg_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you utilize AI in complex dispute analysis, litigation prep, or arbitration?',
      options: [
        { id: 'a', label: 'Do not use AI for litigation or disputes', score: 0 },
        { id: 'b', label: 'Summarize depositions or case files', score: 1 },
        { id: 'c', label: 'Simulate opposing counsel arguments and cross-examination questions', score: 3 },
        { id: 'd', label: 'Multi-party dispute simulation: analyzing exposure matrices, synthesizing thousands of discovery exhibits, and stress-testing settlement ranges', score: 4 },
      ],
    },
    {
      id: 'leg_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you balance human legal judgment with AI acceleration (Centaur approach)?',
      options: [
        { id: 'a', label: 'Either 100% human or 100% automated without defined boundaries', score: 0 },
        { id: 'b', label: 'Let junior staff experiment with AI without formal supervision', score: 1 },
        { id: 'c', label: 'Delegate repetitive clause extraction while retaining final attorney sign-off', score: 3 },
        { id: 'd', label: 'Strict Centaur model: AI handles high-bandwidth data extraction, synthesis, and precedent retrieval; human counsel focuses exclusively on strategy, ethical judgment, and client counsel', score: 4 },
      ],
    },
  ],
};
