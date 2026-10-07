import { Question } from '../../types/assessment';

export const OPERATIONS_QUESTIONS: Record<string, Question[]> = {
  hr_manager: [
    // Workflow Integration
    {
      id: 'hr_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you use AI tools in people operations and talent management?',
      subtitle: 'From candidate screening to policy drafting and performance calibration.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally when struggling to write a job description', score: 1 },
        { id: 'c', label: 'Weekly for drafting rubrics, performance review templates, and surveys', score: 2 },
        { id: 'd', label: 'Daily: AI is a core workflow partner in talent systems, policy drafting, and employee enablement', score: 4 },
      ],
    },
    {
      id: 'hr_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft job specifications and modern skills architectures?',
      options: [
        { id: 'a', label: 'Copy a 5-year-old job description from another department', score: 0 },
        { id: 'b', label: 'Search online templates and paste them into Word', score: 1 },
        { id: 'c', label: 'Prompt AI with hiring manager requirements to generate bullet points', score: 3 },
        { id: 'd', label: 'Structured competency mapping: generating calibrated level rubrics, interview scorecards, and AI-literacy expectations tailored to business objectives', score: 4 },
      ],
    },
    {
      id: 'hr_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you process employee engagement surveys and culture feedback?',
      options: [
        { id: 'a', label: 'Skim a few comments and look at the overall score', score: 0 },
        { id: 'b', label: 'Manual spreadsheet sorting by department', score: 1 },
        { id: 'c', label: 'Feed qualitative comments to AI for top themes and sentiment breakdown', score: 3 },
        { id: 'd', label: 'Thematic cluster synthesis: cross-referencing qualitative sentiment against tenure, department turnover risk, and management layer feedback', score: 4 },
      ],
    },
    {
      id: 'hr_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft and maintain company policies and employee handbooks?',
      options: [
        { id: 'a', label: 'Rarely updated; static PDF in Google Drive', score: 0 },
        { id: 'b', label: 'Copy policies found from other peer startups', score: 1 },
        { id: 'c', label: 'Prompt AI to adapt a standard policy to our remote-work context', score: 3 },
        { id: 'd', label: 'Continuous policy refinement: benchmarking internal policies against regional labor laws and modern distributed work practices with clear FAQ guides', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'hr_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you audit job descriptions for unconscious bias and exclusionary language?',
      options: [
        { id: 'a', label: 'Do not audit for bias', score: 0 },
        { id: 'b', label: 'Eyeball review to ensure it sounds polite', score: 1 },
        { id: 'c', label: 'Prompt AI to flag overly masculine, aggressive, or exclusionary terms', score: 3 },
        { id: 'd', label: 'Structured DE&I rubric prompting: analyzing gender-coded language, readability grade level, neurodiversity accessibility, and growth-mindset phrasing', score: 4 },
      ],
    },
    {
      id: 'hr_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prepare managers for difficult performance or PIP conversations?',
      options: [
        { id: 'a', label: 'Hand them a static HR guideline document', score: 0 },
        { id: 'b', label: 'Have a brief chat and tell them to stay calm', score: 1 },
        { id: 'c', label: 'Help them role-play or draft talking points with AI', score: 3 },
        { id: 'd', label: 'Simulated conversational coaching: running multi-turn AI simulations of defensive, emotional, or disengaged employee reactions with calibrated de-escalation scripts', score: 4 },
      ],
    },
    {
      id: 'hr_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you structure prompts to ensure equitable performance calibrations across teams?',
      options: [
        { id: 'a', label: 'Do not use AI in performance calibrations', score: 0 },
        { id: 'b', label: 'Ask if review text sounds fair', score: 1 },
        { id: 'c', label: 'Provide manager feedback text and ask AI to check for vague or subjective adjectives', score: 3 },
        { id: 'd', label: 'Rubric alignment prompt: evaluating manager feedback strictly against measurable behavioral evidence, flagging inflation/deflation tendencies and personal bias', score: 4 },
      ],
    },
    {
      id: 'hr_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you implement chain-of-thought scratchpad protocols for complex organizational design?',
      options: [
        { id: 'a', label: 'No, I just look for a direct org chart suggestion', score: 0 },
        { id: 'b', label: 'Ask for pros and cons of centralized vs decentralized teams', score: 1 },
        { id: 'c', label: 'Ask AI to explain team sizing ratios step-by-step', score: 3 },
        { id: 'd', label: 'Mandate organizational scratchpad: business strategy -> span of control analysis -> communication friction points -> phased transition plan', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'hr_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What range of AI tools do you use in your HR tech stack?',
      options: [
        { id: 'a', label: 'None; strictly standard HRIS and email', score: 0 },
        { id: 'b', label: 'Free ChatGPT web version only', score: 1 },
        { id: 'c', label: 'Paid conversational model + native AI features in our ATS/HRIS', score: 3 },
        { id: 'd', label: 'Integrated people stack: enterprise LLMs with private data governance + AI candidate screening tools + conversational employee onboarding assistants', score: 4 },
      ],
    },
    {
      id: 'hr_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you design employee learning and leadership development programs?',
      options: [
        { id: 'a', label: 'Buy off-the-shelf static video training courses', score: 0 },
        { id: 'b', label: 'Search online for slide templates', score: 1 },
        { id: 'c', label: 'Use AI to generate workshop agendas, discussion prompts, and quiz questions', score: 3 },
        { id: 'd', label: 'Adaptive micro-learning architecting: creating personalized learning pathways, interactive scenario role-plays, and manager coaching modules in hours', score: 4 },
      ],
    },
    {
      id: 'hr_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you handle internal employee FAQ and HR inquiry tickets?',
      options: [
        { id: 'a', label: 'Answer every repetitive Slack/email inquiry by hand', score: 0 },
        { id: 'b', label: 'Link people to a 40-page Notion page they never read', score: 1 },
        { id: 'c', label: 'Draft replies using AI and paste them back into Slack', score: 3 },
        { id: 'd', label: 'Internal AI People Concierge: secure bot indexing benefits, PTO, and health plans resolving 60%+ of routine inquiries with human escalation rules', score: 4 },
      ],
    },
    {
      id: 'hr_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you organize HR templates, legal memos, and role frameworks for AI use?',
      options: [
        { id: 'a', label: 'Dispersed across individual employee drives', score: 0 },
        { id: 'b', label: 'Central folder of documents re-uploaded each time', score: 1 },
        { id: 'c', label: 'Custom HR GPT with uploaded handbook and compensation guidelines', score: 3 },
        { id: 'd', label: 'Enterprise People Wiki repository: structured markdown with access-controlled compensation tiers, leveling frameworks, and company values', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'hr_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify empathetic warmth and human sensitivity in AI-drafted HR communications?',
      options: [
        { id: 'a', label: 'Send AI-generated communications without editing', score: 0 },
        { id: 'b', label: 'Check that the grammar is correct', score: 1 },
        { id: 'c', label: 'Manually rewrite sections to sound compassionate and authentic', score: 3 },
        { id: 'd', label: 'Empathetic human calibration: using AI for clarity and structure while infusing genuine psychological safety, emotional warmth, and organizational vulnerability', score: 4 },
      ],
    },
    {
      id: 'hr_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you protect candidate and employee confidentiality (GDPR, HIPAA, PII)?',
      options: [
        { id: 'a', label: 'Paste resumes with home addresses and personal details into public chatbots', score: 0 },
        { id: 'b', label: 'Assume public AI tools do not retain personal information', score: 1 },
        { id: 'c', label: 'Manually remove names, addresses, and phone numbers before analysis', score: 3 },
        { id: 'd', label: 'Strict data privacy compliance: zero-retention enterprise agreements, automated PII scrubbing, and strict policy against feeding sensitive health data', score: 4 },
      ],
    },
    {
      id: 'hr_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you guard against algorithmic discrimination in resume screening?',
      options: [
        { id: 'a', label: 'Let AI reject resumes automatically without human oversight', score: 0 },
        { id: 'b', label: 'Trust that AI candidate scoring is objective', score: 1 },
        { id: 'c', label: 'Use AI only to highlight relevant skills while humans make all rejection decisions', score: 3 },
        { id: 'd', label: 'Audited Centaur screening: blind evaluations, testing for disparate impact across demographics, and retaining 100% human accountability on candidate progression', score: 4 },
      ],
    },
    {
      id: 'hr_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure company culture values are authentically represented in AI outputs?',
      options: [
        { id: 'a', label: 'I accept standard generic corporate mission statements', score: 0 },
        { id: 'b', label: 'Include the company motto in the prompt', score: 1 },
        { id: 'c', label: 'Rewrite AI text with our specific cultural terms and stories', score: 3 },
        { id: 'd', label: 'Anti-homogenization discipline: challenging generic HR buzzwords, elevating authentic team traditions, and embedding real employee quotes', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'hr_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How are you leading company-wide AI literacy and enablement initiatives?',
      options: [
        { id: 'a', label: 'Have not addressed AI training for staff', score: 0 },
        { id: 'b', label: 'Shared a link to an external article or video', score: 1 },
        { id: 'c', label: 'Organized basic lunch-and-learn sessions on prompting', score: 3 },
        { id: 'd', label: 'Pioneering organizational upskilling: role-based AI competency frameworks, prompt hackathons, and company-wide adoption benchmarking', score: 4 },
      ],
    },
    {
      id: 'hr_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How is generative AI reshaping your headcount planning and career leveling paths?',
      options: [
        { id: 'a', label: 'No changes to hiring plans or career ladders', score: 0 },
        { id: 'b', label: 'Talking about maybe hiring fewer junior copywriters', score: 1 },
        { id: 'c', label: 'Updating job descriptions to include AI tool proficiency requirements', score: 3 },
        { id: 'd', label: 'Architecting the future workforce: defining new "allocator" career tracks, redefining junior apprenticeship, and redesigning compensation around cognitive output', score: 4 },
      ],
    },
    {
      id: 'hr_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you manage employee sentiment, change anxiety, and psychological safety around AI?',
      options: [
        { id: 'a', label: 'Ignore employee fears about job displacement', score: 0 },
        { id: 'b', label: 'Tell employees everything will be fine', score: 1 },
        { id: 'c', label: 'Host open Q&A sessions discussing how AI augments rather than replaces roles', score: 3 },
        { id: 'd', label: 'Transparent transformation strategy: clear communication of company AI philosophy, retraining guarantees, and celebrating employees who automate their own drudgery', score: 4 },
      ],
    },
    {
      id: 'hr_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur People Leader" philosophy?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Automate all HR communications to reduce human interaction', score: 1 },
        { id: 'c', label: 'Centaur: AI handles documentation and synthesis; HR leader focuses on human connection', score: 3 },
        { id: 'd', label: 'Empathetic strategic partner: automating 60% of administrative operational drag to spend 80% of human energy on executive coaching, culture, and deep interpersonal trust', score: 4 },
      ],
    },
  ],

  finance_accounting: [
    // Workflow Integration
    {
      id: 'fin_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you use AI tools in financial analysis, reporting, and modelling?',
      subtitle: 'From formula generation to monthly variance commentary and audit prep.',
      options: [
        { id: 'a', label: 'Never or strictly prohibited', score: 0 },
        { id: 'b', label: 'Occasionally for looking up complex Excel/Sheets formulas', score: 1 },
        { id: 'c', label: 'Weekly for drafting variance commentary, Python scripts, and reconciliations', score: 2 },
        { id: 'd', label: 'Daily: deeply integrated into variance analysis, scenario modelling, and executive board reporting', score: 4 },
      ],
    },
    {
      id: 'fin_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft monthly budget vs. actuals (BvA) variance commentary?',
      options: [
        { id: 'a', label: 'Write line-by-line manual descriptions in a spreadsheet', score: 0 },
        { id: 'b', label: 'Copy last month’s text and tweak numbers', score: 1 },
        { id: 'c', label: 'Paste variance table into AI to generate first-pass bullet points', score: 3 },
        { id: 'd', label: 'Automated commentary pipeline: model correlates budget variance with department head notes and transactional ledgers to produce executive insights', score: 4 },
      ],
    },
    {
      id: 'fin_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you build complex financial formulas or automation scripts (Python, VBA, SQL)?',
      options: [
        { id: 'a', label: 'Build manually and search Google when formulas error out', score: 0 },
        { id: 'b', label: 'Ask chat for basic INDEX/MATCH or SUMIFS syntax', score: 1 },
        { id: 'c', label: 'Generate automated Python/VBA scripts for recurring ledger reconciliation', score: 3 },
        { id: 'd', label: 'End-to-end automation: generating and verifying Python scripts with built-in validation checks, audit logs, and exception alerting', score: 4 },
      ],
    },
    {
      id: 'fin_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you prepare materials for board meetings and investor updates?',
      options: [
        { id: 'a', label: 'Manual creation of slides and narrative from scratch', score: 0 },
        { id: 'b', label: 'Paste financial table into chatbot for high-level bullet summary', score: 1 },
        { id: 'c', label: 'Prompt AI to draft CFO executive narrative explaining key financial drivers', score: 3 },
        { id: 'd', label: 'Systemic board deck synthesis: generating cohesive executive narrative connecting unit economics, cash burn runways, and macro headwinds with precision data tables', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'fin_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prompt AI when analyzing financial tabular data?',
      options: [
        { id: 'a', label: '"Analyze this budget"', score: 0 },
        { id: 'b', label: 'Paste the table and ask "Where did we spend the most?"', score: 1 },
        { id: 'c', label: 'Specify accounting definitions, materiality thresholds, and requested output columns', score: 3 },
        { id: 'd', label: 'Strict XML tagged fences (<financial_data>, <chart_of_accounts>, <materiality_thresholds>, <output_schema>) with mandatory reconciliation balances', score: 4 },
      ],
    },
    {
      id: 'fin_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you instruct AI to perform scenario sensitivity analyses?',
      options: [
        { id: 'a', label: 'Do not use AI for scenario planning', score: 0 },
        { id: 'b', label: 'Ask "What happens if sales drop 10%?"', score: 1 },
        { id: 'c', label: 'Provide baseline assumptions and request best-case, base-case, and worst-case runway tables', score: 3 },
        { id: 'd', label: 'Multivariate sensitivity matrix: prompting models to stress-test concurrent variables (churn spikes, CAC inflation, FX volatility) and output break-even triggers', score: 4 },
      ],
    },
    {
      id: 'fin_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you ensure zero arithmetic hallucination when prompting LLMs?',
      options: [
        { id: 'a', label: 'Ask the LLM to calculate totals and percentages directly in its answer', score: 0 },
        { id: 'b', label: 'Ask it to "double check your math"', score: 1 },
        { id: 'c', label: 'Force the model to output Python code that calculates the math programmatically', score: 3 },
        { id: 'd', label: 'Strict non-negotiable prompt boundary: LLM handles textual commentary and code generation; all mathematical computations executed strictly via sandboxed code interpreters or Excel formulas', score: 4 },
      ],
    },
    {
      id: 'fin_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you enforce chain-of-thought scratchpad requirements for accounting audit memos?',
      options: [
        { id: 'a', label: 'No, I just need a quick memo draft', score: 0 },
        { id: 'b', label: 'Occasionally ask for the reasoning behind a treatment', score: 1 },
        { id: 'c', label: 'Require citation of specific GAAP / IFRS standards before conclusions', score: 3 },
        { id: 'd', label: 'Mandate structured audit scratchpad: technical standard analysis -> transaction criteria evaluation -> alternative treatments considered -> final audit position with source citations', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'fin_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What represents the breadth of AI tools in your financial toolkit?',
      options: [
        { id: 'a', label: 'Traditional Excel only; no AI tools', score: 0 },
        { id: 'b', label: 'Free web chatbot for ad-hoc formula questions', score: 1 },
        { id: 'c', label: 'Paid frontier model + Microsoft Copilot in Excel/Word', score: 3 },
        { id: 'd', label: 'Enterprise finance stack: secure reasoning models + Python code interpreter + automated invoice parsing OCR + integrated ERP AI assistants (NetSuite/QuickBooks)', score: 4 },
      ],
    },
    {
      id: 'fin_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you process unstructured receipts, vendor invoices, and AP documents?',
      options: [
        { id: 'a', label: 'Manual data entry line by line into accounting software', score: 0 },
        { id: 'b', label: 'Basic document scanner with manual verification', score: 1 },
        { id: 'c', label: 'AI document extraction tool parsing totals, dates, and vendor names', score: 3 },
        { id: 'd', label: 'Automated invoice-to-ledger matching: AI extracts line items, validates against PO numbers, flags duplicates, and drafts journal entries for approval', score: 4 },
      ],
    },
    {
      id: 'fin_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you research tax regulations, accounting standards, or audit queries?',
      options: [
        { id: 'a', label: 'Search Google and read random accounting blogs', score: 0 },
        { id: 'b', label: 'Ask chat a broad accounting question', score: 1 },
        { id: 'c', label: 'Use deep research tools (Perplexity/Gemini) to retrieve cited GAAP/IRS guidance', score: 3 },
        { id: 'd', label: 'Curated technical accounting RAG: querying vector database of SEC 10-K disclosures, FASB codifications, and Big 4 technical guides', score: 4 },
      ],
    },
    {
      id: 'fin_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you organize company chart of accounts, budget rules, and financial models for AI?',
      options: [
        { id: 'a', label: 'Not organized for AI; each prompt starts from zero', score: 0 },
        { id: 'b', label: 'Upload entire financial spreadsheet files when needed', score: 1 },
        { id: 'c', label: 'Maintain custom project workspace with chart of accounts taxonomy', score: 3 },
        { id: 'd', label: 'Structured Finance Wiki pattern: sanitized markdown definitions of departmental cost centers, revenue recognition rules, and KPI formulas queryable by secure agents', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'fin_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'What is your verification protocol for AI-generated financial numbers or tables?',
      options: [
        { id: 'a', label: 'Trust the AI generated table if it looks neat', score: 0 },
        { id: 'b', label: 'Check that row totals add up to the bottom figure', score: 1 },
        { id: 'c', label: 'Reconcile every key figure against source general ledger records', score: 3 },
        { id: 'd', label: 'Zero-tolerance verification standard: 100% mathematical tie-out, dual-pass cross-footing, and signed human auditor accountability for all external disclosures', score: 4 },
      ],
    },
    {
      id: 'fin_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you safeguard proprietary company financial data and bank records?',
      options: [
        { id: 'a', label: 'Paste confidential revenue numbers and bank balances into public consumer AI', score: 0 },
        { id: 'b', label: 'Assume all commercial AI services are private by default', score: 1 },
        { id: 'c', label: 'Mask actual financial scale by multiplying by random scalars or using index numbers', score: 3 },
        { id: 'd', label: 'Strict enterprise perimeter: signed enterprise DPAs with zero-retention, SOC1/SOC2 compliance, private tenant deployment, and strict role-based access control', score: 4 },
      ],
    },
    {
      id: 'fin_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you evaluate AI-generated financial commentary for tone and business acumen?',
      options: [
        { id: 'a', label: 'Accept whatever commentary is produced', score: 0 },
        { id: 'b', label: 'Ensure it doesn\'t sound overly casual', score: 1 },
        { id: 'c', label: 'Edit to reflect actual operational causes known to management', score: 3 },
        { id: 'd', label: 'Executive finance scrutiny: ensuring narrative addresses causality rather than just restating numbers, highlighting operational levers and risk mitigations', score: 4 },
      ],
    },
    {
      id: 'fin_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you navigate the "Jagged Technological Frontier" in financial workflows?',
      options: [
        { id: 'a', label: 'Unaware of the jagged frontier concept', score: 0 },
        { id: 'b', label: 'Expect AI to handle complex financial statements end-to-end', score: 1 },
        { id: 'c', label: 'Delegate textual synthesis to AI; keep mathematical calculations in Excel', score: 3 },
        { id: 'd', label: 'Rigorous boundary enforcement: AI accelerates unstructured synthesis, contract reading, and script writing; human retains absolute control over financial judgments, cash allocations, and audit sign-offs', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'fin_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has generative AI transformed your role as a financial leader?',
      options: [
        { id: 'a', label: 'No transformation; identical manual accounting work', score: 0 },
        { id: 'b', label: 'Writing formulas slightly faster', score: 1 },
        { id: 'c', label: 'Reduced monthly close cycle time by 20-30%', score: 3 },
        { id: 'd', label: 'Transitioned from backward-looking bookkeeper to forward-looking strategic capital allocator and real-time business partner', score: 4 },
      ],
    },
    {
      id: 'fin_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI for strategic cash flow forecasting and liquidity management?',
      options: [
        { id: 'a', label: 'Static monthly spreadsheet updated manually', score: 0 },
        { id: 'b', label: 'Simple straight-line projection formulas', score: 1 },
        { id: 'c', label: 'Prompt AI to evaluate seasonal collection lags and payment terms', score: 3 },
        { id: 'd', label: 'Dynamic predictive cash runway models: integrating historical AR aging patterns, pipeline conversion probabilities, and burn variance into rolling 13-week forecasts', score: 4 },
      ],
    },
    {
      id: 'fin_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you evaluate software and operational ROI for AI tools across the organization?',
      options: [
        { id: 'a', label: 'Approve software expense requests without measuring ROI', score: 0 },
        { id: 'b', label: 'Ask team leads if they find the tools useful', score: 1 },
        { id: 'c', label: 'Calculate cost per seat vs estimated hours saved per employee', score: 3 },
        { id: 'd', label: 'Comprehensive financial evaluation framework: tracking software spend vs. contractor reduction, cycle-time compression, and net margin impact by department', score: 4 },
      ],
    },
    {
      id: 'fin_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur Finance Professional" model?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Treat AI as a dangerous risk to be avoided entirely', score: 1 },
        { id: 'c', label: 'Centaur: AI automates data cleansing and drafting; human directs capital allocation and compliance', score: 3 },
        { id: 'd', label: 'Master financial architect: orchestrating automated data pipelines for effortless reporting while concentrating 80% of human energy on high-stakes capital allocation, M&A due diligence, and executive strategy', score: 4 },
      ],
    },
  ],

  operations_manager: [
    // Workflow Integration
    {
      id: 'ops_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How often do you incorporate AI tools into operational process management?',
      subtitle: 'From SOP documentation to workflow automations and vendor management.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally when struggling to write an email or procedure', score: 1 },
        { id: 'c', label: 'Several times a week for SOP authoring and vendor evaluations', score: 2 },
        { id: 'd', label: 'Daily: AI is the central operating system for process optimization, tool integrations, and reporting', score: 4 },
      ],
    },
    {
      id: 'ops_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you create Standard Operating Procedures (SOPs) from raw tribal knowledge?',
      options: [
        { id: 'a', label: 'Tribal knowledge lives in people\'s heads; minimal documentation', score: 0 },
        { id: 'b', label: 'Write long paragraphs in Google Docs when an error occurs', score: 1 },
        { id: 'c', label: 'Record a video walkthrough and ask AI to transcribe and summarize', score: 3 },
        { id: 'd', label: 'Automated SOP creation pipeline: screen recording audio transcribed, parsed into step-by-step checklist with screenshots, edge-case troubleshooting, and SLA ownership', score: 4 },
      ],
    },
    {
      id: 'ops_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you connect disjointed software tools and automate cross-team workflows?',
      options: [
        { id: 'a', label: 'Manually re-enter data between software systems every day', score: 0 },
        { id: 'b', label: 'Basic Zapier / Make triggers with standard field mappings', score: 1 },
        { id: 'c', label: 'Incorporate AI transformation steps in Zapier/Make to categorize incoming tickets or leads', score: 3 },
        { id: 'd', label: 'Resilient multi-step agentic pipelines: webhooks triggering LLM parsing, fuzzy matching across databases, and automated validation before dispatching to destination tools', score: 4 },
      ],
    },
    {
      id: 'ops_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you conduct vendor RFP evaluations and procurement contract comparisons?',
      options: [
        { id: 'a', label: 'Skim vendor pitch decks and pick the one with the best brand', score: 0 },
        { id: 'b', label: 'Manually copy pricing numbers into a spreadsheet over a week', score: 1 },
        { id: 'c', label: 'Upload 3 vendor proposals to AI to compare pricing and features', score: 3 },
        { id: 'd', label: 'Automated procurement matrix: AI parses 80-page RFPs against standardized security, SLA, pricing tiers, and liability criteria to highlight hidden risks', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'ops_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prompt AI when diagnosing operational bottlenecks and delays?',
      options: [
        { id: 'a', label: '"Why is our team moving so slowly?"', score: 0 },
        { id: 'b', label: 'Describe the team workflow in a paragraph and ask for advice', score: 1 },
        { id: 'c', label: 'Provide cycle-time metrics by stage and ask for root-cause theories', score: 3 },
        { id: 'd', label: 'Theory of Constraints prompt framework: providing queue lengths, touch times, handoff friction, and resource utilization to pinpoint the exact governing constraint', score: 4 },
      ],
    },
    {
      id: 'ops_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you structure prompts for Standard Operating Procedures to ensure zero ambiguity?',
      options: [
        { id: 'a', label: '"Write an SOP for onboarding new clients"', score: 0 },
        { id: 'b', label: 'Ask for a numbered list of steps', score: 1 },
        { id: 'c', label: 'Specify roles, inputs, outputs, and software tools for each step', score: 3 },
        { id: 'd', label: 'Structured XML procedure scaffolding (<prerequisites>, <execution_steps>, <decision_gates>, <failure_modes_and_recovery>, <sla_verification>)', score: 4 },
      ],
    },
    {
      id: 'ops_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you formulate prompts to parse messy, unstructured operational data?',
      options: [
        { id: 'a', label: 'Copy messy text and hope the chatbot figures it out', score: 0 },
        { id: 'b', label: 'Tell it "clean up this list"', score: 1 },
        { id: 'c', label: 'Specify desired output format (CSV or JSON table)', score: 3 },
        { id: 'd', label: 'Strict deterministic JSON schema prompting with explicit handling for missing fields, phone format standardization, and validation error keys', score: 4 },
      ],
    },
    {
      id: 'ops_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you use chain-of-thought scratchpad requirements when planning operational changes?',
      options: [
        { id: 'a', label: 'No, I just want a quick recommendation', score: 0 },
        { id: 'b', label: 'Ask for pros and cons of changing software tools', score: 1 },
        { id: 'c', label: 'Require AI to evaluate migration risk before proposing rollout timelines', score: 3 },
        { id: 'd', label: 'Mandate comprehensive scratchpad evaluation: current state failure analysis -> stakeholder impact assessment -> fallback rollback plan -> phased rollout schedule', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'ops_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What range of AI and automation tools do you deploy in operations?',
      options: [
        { id: 'a', label: 'None; spreadsheets and email only', score: 0 },
        { id: 'b', label: 'Free web chat for occasional drafting', score: 1 },
        { id: 'c', label: 'Paid frontier model + Zapier/Make integrations', score: 3 },
        { id: 'd', label: 'Full modern ops architecture: frontier LLMs + Make/Zapier webhook web + OCR document extraction + internal knowledge wiki RAG + automated monitoring alerts', score: 4 },
      ],
    },
    {
      id: 'ops_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you extract data from legacy physical forms, PDFs, and shipping manifests?',
      options: [
        { id: 'a', label: 'Type every form manually into our database', score: 0 },
        { id: 'b', label: 'Old optical character recognition with high error rates', score: 1 },
        { id: 'c', label: 'Upload PDFs to vision/multimodal LLMs for table extraction', score: 3 },
        { id: 'd', label: 'High-throughput document pipeline: automated email ingestion -> multimodal vision parsing -> structured schema validation -> automated ERP entry', score: 4 },
      ],
    },
    {
      id: 'ops_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you monitor system service-level agreements (SLAs) and vendor performance?',
      options: [
        { id: 'a', label: 'Only notice when a vendor goes down or an angry customer calls', score: 0 },
        { id: 'b', label: 'Monthly manual check of vendor invoices', score: 1 },
        { id: 'c', label: 'Prompt AI to review monthly downtime logs and calculate SLA credits', score: 3 },
        { id: 'd', label: 'Real-time telemetry integration: automated alerts parsing webhook logs, detecting degradation patterns, and auto-drafting SLA penalty claims', score: 4 },
      ],
    },
    {
      id: 'ops_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you maintain and update internal operational process libraries?',
      options: [
        { id: 'a', label: 'Outdated folders that nobody has touched in years', score: 0 },
        { id: 'b', label: 'Searchable Notion/Confluence workspace updated manually', score: 1 },
        { id: 'c', label: 'Custom operational GPT assistant loaded with company SOPs', score: 3 },
        { id: 'd', label: 'Living Operational Wiki: automated version control, indexed markdown documents, and continuous verification of procedure accuracy across departments', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'ops_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify the real-world feasibility of AI-generated operational workflows?',
      options: [
        { id: 'a', label: 'Assume the workflow is optimal and deploy immediately', score: 0 },
        { id: 'b', label: 'Read through the steps to see if they look logical', score: 1 },
        { id: 'c', label: 'Walk through each step manually once to verify software clicks and handoffs', score: 3 },
        { id: 'd', label: 'Rigorous stress-testing: shadow testing with frontline staff, validating edge-case failures, and measuring execution time variance before team rollout', score: 4 },
      ],
    },
    {
      id: 'ops_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you protect internal company secrets and vendor pricing terms in AI tools?',
      options: [
        { id: 'a', label: 'Paste confidential vendor rate cards into public chatbots', score: 0 },
        { id: 'b', label: 'Assume enterprise software does not share data', score: 1 },
        { id: 'c', label: 'Redact vendor names and specific contractual rates before analysis', score: 3 },
        { id: 'd', label: 'Enforced enterprise governance: enterprise workspace with signed NDA terms, zero data retention, and strict role-based data partitioning', score: 4 },
      ],
    },
    {
      id: 'ops_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure automated AI workflows do not fail silently in production?',
      options: [
        { id: 'a', label: 'No monitoring; find out when someone complains', score: 0 },
        { id: 'b', label: 'Check automation run history once a week', score: 1 },
        { id: 'c', label: 'Configure error alerts in Zapier/Make to send a Slack notification on failure', score: 3 },
        { id: 'd', label: 'Comprehensive observability: automated dead-letter queues, confidence threshold score gating, and fallback routing to human operators when uncertainty exceeds limits', score: 4 },
      ],
    },
    {
      id: 'ops_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you address the "Taste and Context Problem" in operational communications?',
      options: [
        { id: 'a', label: 'Send dry, robotic automated updates across the company', score: 0 },
        { id: 'b', label: 'Add friendly greetings to automated emails', score: 1 },
        { id: 'c', label: 'Edit messages to match cross-departmental relationships and communication norms', score: 3 },
        { id: 'd', label: 'Human-centered operational tone: clear, concise, actionable instructions that respect team cognitive load and eliminate bureaucracy', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'ops_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI shifted your overarching operational strategy and focus?',
      options: [
        { id: 'a', label: 'No shift; putting out daily fires manually as always', score: 0 },
        { id: 'b', label: 'Writing emails and procedures slightly faster', score: 1 },
        { id: 'c', label: 'Eliminated 30-40% of routine data entry across the department', score: 3 },
        { id: 'd', label: 'Strategic transformation: from reactive firefighter to autonomous systems architect, building scalable self-healing operational infrastructure', score: 4 },
      ],
    },
    {
      id: 'ops_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI to scale operations without proportional headcount growth?',
      options: [
        { id: 'a', label: 'Every business expansion requires hiring more ops coordinators', score: 0 },
        { id: 'b', label: 'Hire slightly slower by asking staff to work faster', score: 1 },
        { id: 'c', label: 'Automate repetitive workflows to handle 2x transaction volume with same headcount', score: 3 },
        { id: 'd', label: 'Order-of-magnitude scalability: building autonomous agent workflows enabling the company to handle 10x transaction volume while human team focuses on strategic growth', score: 4 },
      ],
    },
    {
      id: 'ops_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you run organizational simulations for crisis management or business continuity?',
      options: [
        { id: 'a', label: 'No crisis simulation; react when disaster strikes', score: 0 },
        { id: 'b', label: 'Review static emergency checklist once a year', score: 1 },
        { id: 'c', label: 'Prompt AI to generate potential failure scenarios for key vendor outages', score: 3 },
        { id: 'd', label: 'Adversarial operational war-gaming: simulating supply chain collapses, vendor bankruptcies, and cyber incidents to test response velocity and fallback redundancy', score: 4 },
      ],
    },
    {
      id: 'ops_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur Operations Architect" paradigm?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Try to automate 100% of everything with brittle scripts', score: 1 },
        { id: 'c', label: 'Centaur: AI handles data movement and extraction; human manages people and exceptions', score: 3 },
        { id: 'd', label: 'Master systems orchestrator: building resilient human-in-the-loop systems that multiply organizational throughput while preserving deep human judgment where stakes are existential', score: 4 },
      ],
    },
  ],

  customer_support: [
    // Workflow Integration
    {
      id: 'cs_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you leverage AI tools in handling customer tickets and escalations?',
      subtitle: 'From response drafting to ticket categorization and knowledge base creation.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally to fix spelling or rephrase an awkward paragraph', score: 1 },
        { id: 'c', label: 'Multiple times daily for drafting responses and summarizing long ticket histories', score: 2 },
        { id: 'd', label: 'Continuously: AI is integrated into ticket triage, diagnostic suggestions, and knowledge creation', score: 4 },
      ],
    },
    {
      id: 'cs_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you respond to complex technical customer issues with 10+ previous messages?',
      options: [
        { id: 'a', label: 'Read all 10 messages from scratch and piece together the story manually', score: 0 },
        { id: 'b', label: 'Skim the last two messages and send a quick reply', score: 1 },
        { id: 'c', label: 'Use AI ticket summarizer to get the core problem in 3 bullet points', score: 3 },
        { id: 'd', label: 'AI diagnostic synthesis: summarizes issue history, attempted fixes, customer sentiment trend, and auto-drafts the exact technical resolution step', score: 4 },
      ],
    },
    {
      id: 'cs_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you convert solved complex tickets into public help center articles?',
      options: [
        { id: 'a', label: 'Never; tickets stay in the helpdesk and knowledge is lost', score: 0 },
        { id: 'b', label: 'Occasionally write a quick note in Notion when reminded', score: 1 },
        { id: 'c', label: 'Paste solved ticket into AI to generate a draft help article', score: 3 },
        { id: 'd', label: 'One-click knowledge pipeline: resolved ticket automatically stripped of PII, converted into structured Markdown help guide, tagged, and queued for approval', score: 4 },
      ],
    },
    {
      id: 'cs_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you identify emerging product bugs and outage spikes across ticket volume?',
      options: [
        { id: 'a', label: 'Notice that Slack feels noisier than usual', score: 0 },
        { id: 'b', label: 'Manual tag counting at the end of the week', score: 1 },
        { id: 'c', label: 'Review automated weekly ticket categorization charts', score: 3 },
        { id: 'd', label: 'Real-time semantic clustering: AI groups incoming tickets by underlying technical error in real time and automatically alerts product/eng with repro steps', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'cs_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prompt AI when drafting responses to extremely angry or frustrated customers?',
      options: [
        { id: 'a', label: '"Reply to this angry email"', score: 0 },
        { id: 'b', label: 'Ask it to sound "very polite and apologetic"', score: 1 },
        { id: 'c', label: 'Instruct the model to acknowledge frustration, take ownership, and state the solution first', score: 3 },
        { id: 'd', label: 'De-escalation framework prompt: validating emotional state, eliminating corporate defensive excuses, delivering concrete resolution steps, and offering proactive goodwill gestures', score: 4 },
      ],
    },
    {
      id: 'cs_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you ensure AI support drafts accurately reflect company refund and SLA policies?',
      options: [
        { id: 'a', label: 'Hope the AI doesn\'t promise unauthorized refunds', score: 0 },
        { id: 'b', label: 'Add "Do not offer refunds" to the prompt', score: 1 },
        { id: 'c', label: 'Provide our official refund policy text directly in the prompt context', score: 3 },
        { id: 'd', label: 'Strict policy boundary tags (<policy_limits>, <approved_concessions>, <mandatory_verification>) with negative constraints prohibiting unauthorized commitments', score: 4 },
      ],
    },
    {
      id: 'cs_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you tailor response depth to the technical skill of the customer?',
      options: [
        { id: 'a', label: 'Use identical canned response for all users', score: 0 },
        { id: 'b', label: 'Tell it to "make it simple"', score: 1 },
        { id: 'c', label: 'Specify whether user is non-technical or a software developer', score: 3 },
        { id: 'd', label: 'Calibrated technical register prompting: adjusting terminology, CLI code vs GUI click paths, and explanation depth based on user persona signals', score: 4 },
      ],
    },
    {
      id: 'cs_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you enforce chain-of-thought scratchpad requirements for complex tier-2 support diagnostics?',
      options: [
        { id: 'a', label: 'No, I just need a quick reply', score: 0 },
        { id: 'b', label: 'Occasionally ask what might be causing the error', score: 1 },
        { id: 'c', label: 'Ask AI to list potential root causes before drafting response', score: 3 },
        { id: 'd', label: 'Mandate systematic diagnostic scratchpad: symptom verification -> log analysis -> root-cause elimination -> recommended remediation plan', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'cs_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What represents the breadth of AI tools in your support operations?',
      options: [
        { id: 'a', label: 'None; standard helpdesk ticketing only', score: 0 },
        { id: 'b', label: 'Free web chat window open beside the helpdesk', score: 1 },
        { id: 'c', label: 'Native helpdesk AI (Zendesk / Intercom / Freshdesk AI copilot)', score: 3 },
        { id: 'd', label: 'Omnichannel AI support stack: integrated helpdesk copilot + automated customer-facing resolution bot + live voice sentiment AI + vector-indexed internal docs', score: 4 },
      ],
    },
    {
      id: 'cs_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How does your team handle multilingual customer inquiries with AI?',
      options: [
        { id: 'a', label: 'Only respond to languages our immediate team speaks', score: 0 },
        { id: 'b', label: 'Copy-paste into Google Translate with awkward phrasing', score: 1 },
        { id: 'c', label: 'Use LLM to translate and polish tone in target language', score: 3 },
        { id: 'd', label: 'Native multilingual support pipeline: real-time bidirectional translation with cultural idiom adaptation, preserving technical terms accurately', score: 4 },
      ],
    },
    {
      id: 'cs_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you track customer churn risk and sentiment trajectory?',
      options: [
        { id: 'a', label: 'Only know when a customer cancels their subscription', score: 0 },
        { id: 'b', label: 'Look at CSAT scores when customers complete surveys', score: 1 },
        { id: 'c', label: 'AI sentiment tag on each resolved ticket', score: 3 },
        { id: 'd', label: 'Predictive churn intelligence: monitoring ticket tone shifts, feature frustration frequency, and response delays to trigger proactive customer success intervention', score: 4 },
      ],
    },
    {
      id: 'cs_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How is your internal technical documentation organized for AI retrieval?',
      options: [
        { id: 'a', label: 'Scattered across Slack threads and employee bookmarks', score: 0 },
        { id: 'b', label: 'Standard help center articles searched manually', score: 1 },
        { id: 'c', label: 'AI-searchable knowledge base for support reps', score: 3 },
        { id: 'd', label: 'Contextual Retrieval support brain: indexing technical docs, engineering bug fixes, and resolved tickets with automatic freshness scoring', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'cs_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you review AI-generated responses before sending to customers?',
      options: [
        { id: 'a', label: 'Send automatically with zero human review', score: 0 },
        { id: 'b', label: 'Skim quickly to check if greeting is correct', score: 1 },
        { id: 'c', label: 'Read through, verify factual accuracy, and adjust tone', score: 3 },
        { id: 'd', label: 'Cyborg review standard: AI handles technical step formatting; human verifies empathetic connection, account context, and ensures customer feels genuinely heard', score: 4 },
      ],
    },
    {
      id: 'cs_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you prevent the AI from generating incorrect technical instructions or non-existent settings?',
      options: [
        { id: 'a', label: 'Assume the AI knows our product software accurately', score: 0 },
        { id: 'b', label: 'Apologize if the customer comes back saying the setting doesn\'t exist', score: 1 },
        { id: 'c', label: 'Test the instructions in our test staging environment or staging app', score: 3 },
        { id: 'd', label: 'Zero-hallucination posture: anchoring AI strictly in verified product documentation chunks and flagging any unverified setting for engineering confirmation', score: 4 },
      ],
    },
    {
      id: 'cs_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you avoid sounding like a generic corporate bot in support interactions?',
      options: [
        { id: 'a', label: 'I do not mind sounding like a bot', score: 0 },
        { id: 'b', label: 'Add an exclamation mark or pleasantry', score: 1 },
        { id: 'c', label: 'Personalize the greeting and reference specific customer details', score: 3 },
        { id: 'd', label: 'Anti-homogenization discipline: ban canned corporate clichés, speak with authentic human candor, and demonstrate immediate personal ownership of the problem', score: 4 },
      ],
    },
    {
      id: 'cs_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you safeguard customer personal data and payment info in support chats?',
      options: [
        { id: 'a', label: 'Paste customer credentials or billing details into any available AI tool', score: 0 },
        { id: 'b', label: 'Assume helpdesk bots automatically handle security', score: 1 },
        { id: 'c', label: 'Manually mask credit cards and passwords before prompting', score: 3 },
        { id: 'd', label: 'Enterprise compliance: automated PII redaction filters, SOC2 certified data endpoints, and strict ban on uploading sensitive authentication tokens', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'cs_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI shifted your support metrics (first-response time, resolution time, CSAT)?',
      options: [
        { id: 'a', label: 'Metrics are identical; no measurable change', score: 0 },
        { id: 'b', label: 'First-response time improved slightly (10-15%)', score: 1 },
        { id: 'c', label: 'Cut average handle time by 30-40% while maintaining high CSAT', score: 3 },
        { id: 'd', label: 'Transformational operational leap: 50%+ reduction in resolution time, 95%+ CSAT, and 40% autonomous deflection of routine repetitive tickets', score: 4 },
      ],
    },
    {
      id: 'cs_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use support ticket data to drive company product improvements?',
      options: [
        { id: 'a', label: 'Support tickets stay in support; no sharing with product teams', score: 0 },
        { id: 'b', label: 'Forward complaints in Slack to product managers', score: 1 },
        { id: 'c', label: 'Share monthly AI summaries of top customer complaints with product team', score: 3 },
        { id: 'd', label: 'Customer voice engine: automated impact synthesis linking ticket volume and revenue churn risk directly to product roadmaps and bug priorities', score: 4 },
      ],
    },
    {
      id: 'cs_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you transition your support organization from cost center to value driver?',
      options: [
        { id: 'a', label: 'Support is viewed solely as an unavoidable overhead cost', score: 0 },
        { id: 'b', label: 'Focus strictly on answering tickets as fast as possible', score: 1 },
        { id: 'c', label: 'Use saved time to conduct proactive customer onboarding and check-ins', score: 3 },
        { id: 'd', label: 'Strategic growth engine: leveraging AI automation on routine inquiries to free up support advocates for expansion identification, retention saves, and customer advocacy', score: 4 },
      ],
    },
    {
      id: 'cs_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur Customer Success" philosophy?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Replace human support reps entirely with cheap chatbots', score: 1 },
        { id: 'c', label: 'Centaur: AI handles data lookup and ticket drafting; human provides empathy and handles edge cases', score: 3 },
        { id: 'd', label: 'Master customer champion: deploying AI for instant technical precision while centering human reps as trusted strategic advisors and deeply empathetic brand ambassadors', score: 4 },
      ],
    },
  ],
};
