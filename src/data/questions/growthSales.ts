import { Question } from '../../types/assessment';

export const GROWTH_SALES_QUESTIONS: Record<string, Question[]> = {
  marketing_manager: [
    // Workflow Integration
    {
      id: 'mkt_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How often do you incorporate AI tools across your marketing workflow?',
      subtitle: 'From strategy and campaign briefs to copywriting and audience research.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally when stuck on a headline or email subject line', score: 1 },
        { id: 'c', label: 'Several times a week for drafting blog posts, ad variants, and summaries', score: 2 },
        { id: 'd', label: 'Daily: AI is an integral creative partner across research, planning, copy, and multichannel repurposing', score: 4 },
      ],
    },
    {
      id: 'mkt_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you conduct customer audience research and persona mapping?',
      options: [
        { id: 'a', label: 'Rely solely on gut instinct and occasional team discussions', score: 0 },
        { id: 'b', label: 'Google search competitors and read industry blog posts', score: 1 },
        { id: 'c', label: 'Prompt AI to list general pain points for our target demographic', score: 2 },
        { id: 'd', label: 'Synthesize customer reviews, Reddit forums, competitor complaints, and sales call notes using AI into quantified objection matrices', score: 4 },
      ],
    },
    {
      id: 'mkt_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you repurpose 1 core content asset (e.g. podcast, webinar, whitepaper)?',
      options: [
        { id: 'a', label: 'Publish it once and move on to the next asset', score: 0 },
        { id: 'b', label: 'Manually copy-paste quotes to Twitter/LinkedIn over several days', score: 1 },
        { id: 'c', label: 'Paste transcript into AI to generate 5 social posts', score: 3 },
        { id: 'd', label: 'Structured multichannel cascade: AI extracts 1 thought leadership essay, 5 LinkedIn hooks, 10 X posts, a newsletter issue, and 3 video script outlines in minutes', score: 4 },
      ],
    },
    {
      id: 'mkt_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you write campaign briefs and coordinate creative deliverables?',
      options: [
        { id: 'a', label: 'Quick Slack messages or ad-hoc verbal instructions', score: 0 },
        { id: 'b', label: 'Fill out standard Google Doc brief manually', score: 1 },
        { id: 'c', label: 'Use AI to flesh out sections of campaign briefs', score: 3 },
        { id: 'd', label: 'Interactive brief architecting: co-drafting target messaging pillars, channel constraints, visual mood directions, and ROI benchmarks', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'mkt_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you instruct AI to write marketing copy that sounds like your brand?',
      options: [
        { id: 'a', label: '"Write an engaging blog post about our new product"', score: 0 },
        { id: 'b', label: '"Write in a fun, friendly, and professional tone"', score: 1 },
        { id: 'c', label: 'Provide brand voice pillars, target audience details, and 2-3 sample paragraphs of approved copy', score: 3 },
        { id: 'd', label: 'Comprehensive brand voice scaffolding: explicit tone spectra, vocabulary whitelists/blacklists, negative prompt rules, and few-shot exemplary outputs', score: 4 },
      ],
    },
    {
      id: 'mkt_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you combat the "homogenization effect" (bland, cliché, robotic AI copy)?',
      options: [
        { id: 'a', label: 'I accept the output as-is; it sounds articulate enough', score: 0 },
        { id: 'b', label: 'I manually remove words like "delve", "unlock", "testament", "tapestry"', score: 2 },
        { id: 'c', label: 'I explicitly instruct the model to avoid generic corporate jargon and buzzwords', score: 3 },
        { id: 'd', label: 'Anti-homogenization discipline: forcing models to adopt bold contrarian angles, injecting proprietary case studies, and rewriting with authentic human punch', score: 4 },
      ],
    },
    {
      id: 'mkt_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prompt AI for high-converting Ad Copy and A/B test variations?',
      options: [
        { id: 'a', label: '"Give me 5 ad headlines"', score: 0 },
        { id: 'b', label: 'Ask for variations varying from short to long', score: 1 },
        { id: 'c', label: 'Specify copywriting frameworks (PAS, AIDA, Before-After-Bridge) for each variant', score: 3 },
        { id: 'd', label: 'Multivariate matrix prompting: mapping 4 emotional angles × 3 distinct value propositions × character limits for Meta/Google/LinkedIn ads', score: 4 },
      ],
    },
    {
      id: 'mkt_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you use chain-of-thought scratchpad instructions for campaign strategy?',
      options: [
        { id: 'a', label: 'No, I just ask for the campaign plan directly', score: 0 },
        { id: 'b', label: 'Occasionally ask for rationale behind recommendations', score: 1 },
        { id: 'c', label: 'Instruct the model to analyze audience intent before proposing channel tactics', score: 3 },
        { id: 'd', label: 'Enforce structured scratchpad reasoning: market tension -> consumer psychology -> differentiated hook -> channel distribution mechanics', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'mkt_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What represents the breadth of AI tools in your marketing arsenal?',
      options: [
        { id: 'a', label: 'Standard ChatGPT free web version only', score: 0 },
        { id: 'b', label: 'One paid chatbot (ChatGPT Plus or Claude Pro)', score: 1 },
        { id: 'c', label: 'Text LLMs + AI image generation (Midjourney) + SEO/Grammar tools', score: 3 },
        { id: 'd', label: 'Integrated growth stack: frontier LLMs + deep research engines (Perplexity/Gemini) + AI video/voice generation + automated social repurposing pipelines', score: 4 },
      ],
    },
    {
      id: 'mkt_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you conduct competitive SEO and content gap analyses with AI?',
      options: [
        { id: 'a', label: 'Manual search engine inspection only', score: 0 },
        { id: 'b', label: 'Ask chat "What keywords should I rank for?"', score: 1 },
        { id: 'c', label: 'Combine Ahrefs/Semrush data with AI to group keywords into thematic clusters', score: 3 },
        { id: 'd', label: 'Automated search intent mapping: feeding competitor SERP rankings into AI to uncover underserved informational queries and content moats', score: 4 },
      ],
    },
    {
      id: 'mkt_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you create visual creative and video assets using AI?',
      options: [
        { id: 'a', label: 'Only use traditional stock photo sites (Shutterstock/Unsplash)', score: 0 },
        { id: 'b', label: 'Experimented with AI images once or twice', score: 1 },
        { id: 'c', label: 'Generate branded imagery and social graphics regularly with Midjourney/Flux', score: 3 },
        { id: 'd', label: 'Multimodal content pipeline: generating tailored photorealistic visual assets, localized AI video voiceovers, and personalized video messages', score: 4 },
      ],
    },
    {
      id: 'mkt_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you organize your marketing knowledge base and past campaigns for AI?',
      options: [
        { id: 'a', label: 'Scattered across individual Google Docs and emails', score: 0 },
        { id: 'b', label: 'Central folder of PDFs re-uploaded when needed', score: 1 },
        { id: 'c', label: 'Custom GPT or Project workspace containing brand guidelines and product specs', score: 3 },
        { id: 'd', label: 'Living marketing wiki repository: indexed case studies, past ad performance metrics, customer quotes, and value propositions directly queryable by AI', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'mkt_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'What is your editing and review process for AI-generated marketing content?',
      options: [
        { id: 'a', label: 'Publish directly with zero or near-zero editing', score: 0 },
        { id: 'b', label: 'Proofread for typos and punctuation', score: 1 },
        { id: 'c', label: 'Substantial line-editing: rephrasing sentences, verifying tone, adding personal opinions', score: 3 },
        { id: 'd', label: 'Cyborg editorial standard: AI provides raw structural drafts; human writer crafts the distinctive narrative hook, authentic emotional truth, and strategic positioning', score: 4 },
      ],
    },
    {
      id: 'mkt_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify data points, statistics, and claims in AI-drafted articles?',
      options: [
        { id: 'a', label: 'Assume the AI cited true industry statistics', score: 0 },
        { id: 'b', label: 'Google a statistic only if it looks unusually high or strange', score: 1 },
        { id: 'c', label: 'Click and verify original primary research reports for every cited metric', score: 3 },
        { id: 'd', label: 'Zero-hallucination policy: mandate primary source links, independently verify publication dates and sample sizes, and maintain source citations', score: 4 },
      ],
    },
    {
      id: 'mkt_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you test whether your marketing message will resonate with skeptical buyers?',
      options: [
        { id: 'a', label: 'Publish and wait to see if conversions happen', score: 0 },
        { id: 'b', label: 'Ask a colleague in the office for their quick reaction', score: 1 },
        { id: 'c', label: 'Prompt AI to role-play a skeptical buyer and review the landing page copy', score: 3 },
        { id: 'd', label: 'Simulated customer review board: running copy through 3 distinct buyer personas (CFO, VP, End-User) to stress-test claims, pricing friction, and believability', score: 4 },
      ],
    },
    {
      id: 'mkt_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you monitor brand reputation and avoid copyright or trademark infringements?',
      options: [
        { id: 'a', label: 'Have never considered copyright implications of AI outputs', score: 0 },
        { id: 'b', label: 'Avoid mentioning competitor names in prompts', score: 1 },
        { id: 'c', label: 'Use plagiarism checkers and review for borrowed competitor slogans', score: 3 },
        { id: 'd', label: 'Comprehensive brand safety protocol: commercial rights validation, plagiarism verification, and enterprise-grade indemnified tool usage', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'mkt_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has generative AI shifted your overarching marketing strategy and focus?',
      options: [
        { id: 'a', label: 'No shift; doing things the exact same way as 2021', score: 0 },
        { id: 'b', label: 'Producing slightly more blog posts or social tweets per week', score: 1 },
        { id: 'c', label: 'Doubling content output while reallocating budget toward distribution and media spend', score: 3 },
        { id: 'd', label: 'Strategic transformation: shifting from volume creation to high-leverage brand differentiation, proprietary original research, and experiential community building', score: 4 },
      ],
    },
    {
      id: 'mkt_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you personalize marketing at scale using AI?',
      options: [
        { id: 'a', label: 'Generic mass emails with "Hi {first_name}" only', score: 0 },
        { id: 'b', label: 'Segmenting by industry and sending 3 broad variations', score: 1 },
        { id: 'c', label: 'Generating personalized email opening lines based on LinkedIn profiles', score: 3 },
        { id: 'd', label: 'Dynamic micro-segmentation: hyper-personalized landing pages, ad hooks, and nurture flows tailored to account tech stack and intent triggers', score: 4 },
      ],
    },
    {
      id: 'mkt_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you measure the true ROI of AI adoption across your marketing team?',
      options: [
        { id: 'a', label: 'No measurement of AI ROI', score: 0 },
        { id: 'b', label: 'Vague feeling that things get written a bit faster', score: 1 },
        { id: 'c', label: 'Tracking time saved on copywriting and asset production', score: 3 },
        { id: 'd', label: 'Rigorous attribution: measuring pipeline velocity, cost-per-qualified-opportunity reduction, and organic reach generated by AI-assisted assets', score: 4 },
      ],
    },
    {
      id: 'mkt_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you navigate the "Centaur Marketer" collaboration model?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Outsource entire marketing tasks to AI without human involvement', score: 1 },
        { id: 'c', label: 'Centaur: AI handles data research and initial drafting; marketer leads creative direction and messaging strategy', score: 3 },
        { id: 'd', label: 'Master growth architect: orchestrating AI pipelines for 10x distribution velocity while anchoring marketing in undeniable human taste, humor, and cultural relevance', score: 4 },
      ],
    },
  ],

  sales_representative: [
    // Workflow Integration
    {
      id: 'sls_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you use AI tools in your sales preparation and outreach pipeline?',
      subtitle: 'From account research to email personalization and CRM updates.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally when struggling to write an email to an executive', score: 1 },
        { id: 'c', label: 'Several times a week for account research and drafting follow-ups', score: 2 },
        { id: 'd', label: 'Daily: AI is a continuous co-pilot for pre-call intelligence, call debriefs, and outreach', score: 4 },
      ],
    },
    {
      id: 'sls_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you prepare for discovery calls with enterprise prospects?',
      options: [
        { id: 'a', label: 'Open their website 3 minutes before the call', score: 0 },
        { id: 'b', label: 'Skim their LinkedIn profile and company About page', score: 1 },
        { id: 'c', label: 'Ask AI to summarize the company\'s products and key challenges', score: 3 },
        { id: 'd', label: 'Comprehensive pre-call dossier: feeding annual reports, executive interviews, and tech stack signals into AI to generate 3 tailored commercial hypotheses', score: 4 },
      ],
    },
    {
      id: 'sls_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you handle post-call follow-ups and CRM documentation?',
      options: [
        { id: 'a', label: 'Type quick notes in CRM hours or days later from memory', score: 0 },
        { id: 'b', label: 'Manually write follow-up emails based on shorthand notes', score: 1 },
        { id: 'c', label: 'Use AI meeting assistant (Gong/Otter) to review auto-generated action items', score: 3 },
        { id: 'd', label: 'Instant automated workflow: call transcript parsed into MEDDPICC criteria, CRM updated, and bespoke recap email sent within 15 minutes of call', score: 4 },
      ],
    },
    {
      id: 'sls_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you craft cold outbound email and LinkedIn messages?',
      options: [
        { id: 'a', label: 'Blast 500 identical generic copy-pasted templates', score: 0 },
        { id: 'b', label: 'Use basic merge tags ("Hi {FirstName}, saw you work at {Company}")', score: 1 },
        { id: 'c', label: 'Prompt AI for 1 tailored hook based on recent prospect news', score: 3 },
        { id: 'd', label: 'Deeply relevant micro-outreach: connecting prospect specific strategic priorities to proven client outcomes without robotic filler phrases', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'sls_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prompt AI to help you overcome difficult enterprise sales objections?',
      options: [
        { id: 'a', label: '"How do I handle price objections?"', score: 0 },
        { id: 'b', label: 'Describe the prospect and ask what to say back', score: 1 },
        { id: 'c', label: 'Provide our pricing, competitor pricing, and ask for counter-arguments', score: 3 },
        { id: 'd', label: 'Adversarial procurement role-play: instructing AI to act as a cynical enterprise VP of Finance pushing back on ROI, budget, and implementation timeline', score: 4 },
      ],
    },
    {
      id: 'sls_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you structure prompts to extract buying signals from sales call transcripts?',
      options: [
        { id: 'a', label: '"What did the prospect say?"', score: 0 },
        { id: 'b', label: '"Summarize the positive parts of this call"', score: 1 },
        { id: 'c', label: 'Prompt AI to identify mentions of budget, timeline, and decision-makers', score: 3 },
        { id: 'd', label: 'Structured MEDDPICC framework prompt: extracting explicit Economic Buyer quotes, Decision Criteria, quantified Pain, and competitor landmines', score: 4 },
      ],
    },
    {
      id: 'sls_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you ensure AI-drafted outreach sounds authentic and avoids "salesy" tropes?',
      options: [
        { id: 'a', label: 'Accept whatever the chatbot writes', score: 0 },
        { id: 'b', label: 'Tell it "Make it sound less formal"', score: 1 },
        { id: 'c', label: 'Ban phrases like "I hope this email finds you well" and "quick 15-minute chat"', score: 3 },
        { id: 'd', label: 'Strict peer-to-peer executive tone rules: lead directly with observation of their business problem, zero flattery, crisp 80-word ceiling, low-friction CTA', score: 4 },
      ],
    },
    {
      id: 'sls_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you use chain-of-thought scratchpad instructions for deal strategy?',
      options: [
        { id: 'a', label: 'No, I just want a quick email to send', score: 0 },
        { id: 'b', label: 'Ask what I should do next on a deal', score: 1 },
        { id: 'c', label: 'Ask AI to evaluate stakeholder politics step-by-step', score: 3 },
        { id: 'd', label: 'Mandate strategic scratchpad: analyze buyer internal political capital -> evaluate champion influence -> assess risk of doing nothing -> formulate closing lever', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'sls_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What AI tools power your daily revenue operations?',
      options: [
        { id: 'a', label: 'No AI tools; email and CRM only', score: 0 },
        { id: 'b', label: 'Free web chat for drafting occasional messages', score: 1 },
        { id: 'c', label: 'Paid conversational AI (ChatGPT/Claude) + conversational intelligence (Gong/Chorus)', score: 3 },
        { id: 'd', label: 'Modern AI sales stack: Gong/Chorus + Clay/Apollo AI research + Perplexity for deep account dossiers + enterprise LLM integration with Salesforce/HubSpot', score: 4 },
      ],
    },
    {
      id: 'sls_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you research target accounts and executive backgrounds?',
      options: [
        { id: 'a', label: 'Manual Google and LinkedIn scrolling', score: 0 },
        { id: 'b', label: 'Reading company news tab', score: 1 },
        { id: 'c', label: 'Perplexity / deep research to synthesize executive quotes, quarterly goals, and strategic initiatives', score: 3 },
        { id: 'd', label: 'Automated intent scraping: combining job postings, funding news, podcast transcripts, and tech stack changes into real-time outreach triggers', score: 4 },
      ],
    },
    {
      id: 'sls_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you build sales proposals and pitch decks with AI?',
      options: [
        { id: 'a', label: 'Clone an old slide deck from last year and change company name', score: 0 },
        { id: 'b', label: 'Use AI to generate a slide outline in text', score: 1 },
        { id: 'c', label: 'Use AI presentation tools (Gamma/Tome) to draft pitch presentations', score: 3 },
        { id: 'd', label: 'Custom proposal generation: feeding discovery transcripts into AI to build quantified business cases with ROI calculators customized to client metrics', score: 4 },
      ],
    },
    {
      id: 'sls_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you manage your personal sales playbook and competitor battlecards?',
      options: [
        { id: 'a', label: 'Rely on memory or outdated static PDFs from marketing', score: 0 },
        { id: 'b', label: 'Search company Slack channel when a competitor is mentioned', score: 1 },
        { id: 'c', label: 'Keep custom prompts with key competitor weaknesses', score: 3 },
        { id: 'd', label: 'Living dynamic battlecard repository: instantly queryable AI assistant loaded with real customer win/loss reviews, feature tear-downs, and trap-setting questions', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'sls_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you review AI-generated outreach before sending to high-value prospects?',
      options: [
        { id: 'a', label: 'Click send immediately without reading', score: 0 },
        { id: 'b', label: 'Glance at prospect name and send', score: 1 },
        { id: 'c', label: 'Read through, verify facts, and adjust tone to match personal voice', score: 3 },
        { id: 'd', label: 'Executive litmus test: ensuring every sentence delivers authentic business value, eliminates fluff, and sounds like a peer advisor rather than a desperate vendor', score: 4 },
      ],
    },
    {
      id: 'sls_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify claims about your product capabilities when AI drafts responses to technical questions?',
      options: [
        { id: 'a', label: 'Copy AI answers directly into client emails', score: 0 },
        { id: 'b', label: 'Check with a colleague only if the customer pushes back', score: 1 },
        { id: 'c', label: 'Verify technical claims against official product documentation', score: 3 },
        { id: 'd', label: 'Zero-hallucination posture: cross-referencing product roadmap truths, avoiding over-promising, and routing complex architectural questions to Sales Engineering', score: 4 },
      ],
    },
    {
      id: 'sls_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you avoid sounding robotic and impersonal in sales cadences?',
      options: [
        { id: 'a', label: 'I do not worry about sounding robotic', score: 0 },
        { id: 'b', label: 'Add an exclamation mark or emoji', score: 1 },
        { id: 'c', label: 'Inject personal observations and industry-specific context', score: 3 },
        { id: 'd', label: 'True Cyborg collaboration: AI handles background research and drafting synthesis; human seller injects emotional rapport, humor, and active listening', score: 4 },
      ],
    },
    {
      id: 'sls_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you protect customer confidentiality when sharing meeting notes with AI?',
      options: [
        { id: 'a', label: 'Paste confidential customer pricing and contracts into any public tool', score: 0 },
        { id: 'b', label: 'Assume public AI tools keep data private', score: 1 },
        { id: 'c', label: 'Anonymize company names and financial figures before prompting', score: 3 },
        { id: 'd', label: 'Enterprise compliance: using approved CRM copilots covered by customer NDA and strict zero-data-retention agreements', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'sls_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI affected your pipeline velocity and quota attainment?',
      options: [
        { id: 'a', label: 'No noticeable difference in sales performance', score: 0 },
        { id: 'b', label: 'Slightly higher email volume sent (10-20% boost)', score: 1 },
        { id: 'c', label: 'Cut administrative CRM time by 50%, freeing up hours for active selling', score: 3 },
        { id: 'd', label: 'Top-tier performance: 2x increase in pipeline generated, 30% faster deal velocity due to elite pre-call preparation and rapid personalized follow-ups', score: 4 },
      ],
    },
    {
      id: 'sls_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI to multi-thread across large enterprise buying committees?',
      options: [
        { id: 'a', label: 'Single-thread through one contact only', score: 0 },
        { id: 'b', label: 'Send the same email to 3 people at the target company', score: 1 },
        { id: 'c', label: 'Tailor messages to each stakeholder\'s role (IT vs Finance vs Operations)', score: 3 },
        { id: 'd', label: 'Account influence mapping: generating tailored value props for 6+ distinct stakeholders, mapping internal alliances, and equipping internal champions to sell internally', score: 4 },
      ],
    },
    {
      id: 'sls_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI for win/loss analysis and continuous skills improvement?',
      options: [
        { id: 'a', label: 'Blame bad leads or pricing when a deal is lost and move on', score: 0 },
        { id: 'b', label: 'Think through what went wrong during your drive home', score: 1 },
        { id: 'c', label: 'Review AI transcripts of lost deals to identify missed objection opportunities', score: 3 },
        { id: 'd', label: 'Systemic performance coaching: feeding call recordings to AI to score your talk-to-listen ratio, question discovery depth, and competitor differentiation', score: 4 },
      ],
    },
    {
      id: 'sls_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur Sales Professional" mindset?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur concept', score: 0 },
        { id: 'b', label: 'Let automated bots handle the entire sales process', score: 1 },
        { id: 'c', label: 'Centaur: AI handles data research and notes; human builds genuine trust on live calls', score: 3 },
        { id: 'd', label: 'Elite trusted advisor: leveraging AI for infinite analytical bandwidth while doubling down on emotional intelligence, radical candor, and deep consultative partnership', score: 4 },
      ],
    },
  ],
};
