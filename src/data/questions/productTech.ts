import { Question } from '../../types/assessment';

export const PRODUCT_TECH_QUESTIONS: Record<string, Question[]> = {
  product_manager: [
    // Workflow Integration
    {
      id: 'pm_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How often do you use AI tools in your daily product management workflow?',
      subtitle: 'From backlog grooming to PRDs and stakeholder alignments.',
      options: [
        { id: 'a', label: 'Never or rarely', score: 0 },
        { id: 'b', label: 'Occasionally when stuck on phrasing a user story', score: 1 },
        { id: 'c', label: 'Several times a week for drafting PRDs and summarizing meetings', score: 2 },
        { id: 'd', label: 'Continuously: integrated across PRDs, customer synthesis, metrics, and sprint planning', score: 4 },
      ],
    },
    {
      id: 'pm_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you process qualitative customer feedback and interview transcripts?',
      options: [
        { id: 'a', label: 'Manual notes during calls and subjective memory', score: 0 },
        { id: 'b', label: 'Skim transcript recordings when a question arises', score: 1 },
        { id: 'c', label: 'Paste transcripts into AI for quick top-5 user pain points', score: 2 },
        { id: 'd', label: 'Contextual Retrieval RAG pipeline over entire interview repository tagging friction points by persona and willingness-to-pay', score: 4 },
      ],
    },
    {
      id: 'pm_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft Product Requirement Documents (PRDs)?',
      options: [
        { id: 'a', label: 'Blank page in Google Docs / Notion from scratch every time', score: 0 },
        { id: 'b', label: 'Copy a static template and ask AI to fill in empty sections', score: 1 },
        { id: 'c', label: 'Provide bullet notes and prompt AI to generate user stories and acceptance criteria', score: 3 },
        { id: 'd', label: 'Co-drafting using structured prompt frameworks (<problem_statement>, <user_intent>, <edge_cases>, <metrics>) with interactive iteration', score: 4 },
      ],
    },
    {
      id: 'pm_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you handle competitive product benchmarking and teardowns?',
      options: [
        { id: 'a', label: 'Manual web browsing, screenshots, and spreadsheets', score: 0 },
        { id: 'b', label: 'Ask a general chatbot "Who are our competitors?"', score: 1 },
        { id: 'c', label: 'Deep research queries comparing feature sets and public pricing tiers', score: 3 },
        { id: 'd', label: 'Automated competitive matrix synthesis analyzing release notes, user reviews, and positioning gaps with regular updates', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'pm_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How structured are your prompts when generating product requirements?',
      options: [
        { id: 'a', label: 'One short sentence: "Write a PRD for an in-app notification feature"', score: 0 },
        { id: 'b', label: 'A paragraph describing the feature and target users', score: 1 },
        { id: 'c', label: 'Contextual prompt detailing target personas, non-functional requirements, and success metrics', score: 3 },
        { id: 'd', label: 'Strict XML tags (<context>, <user_journey>, <acceptance_criteria>, <anti_requirements>) with explicit edge-case mandates', score: 4 },
      ],
    },
    {
      id: 'pm_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you simulate target user feedback on a proposed feature idea?',
      options: [
        { id: 'a', label: 'I do not use AI for simulated user feedback', score: 0 },
        { id: 'b', label: 'Ask AI "Would users like this feature?"', score: 1 },
        { id: 'c', label: 'Create 2-3 target persona system prompts and ask each for their first reaction', score: 3 },
        { id: 'd', label: 'Adversarial multi-persona sparring (skeptical enterprise buyer vs. daily power user) to surface edge cases before engineering sizing', score: 4 },
      ],
    },
    {
      id: 'pm_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prevent generic, superficial product descriptions in AI outputs?',
      options: [
        { id: 'a', label: 'Accept what the model generates', score: 0 },
        { id: 'b', label: 'Tell it to "make it more technical and detailed"', score: 1 },
        { id: 'c', label: 'Provide concrete technical architecture context and existing API payloads', score: 3 },
        { id: 'd', label: 'Inject explicit design system tokens, technical database constraints, and negative prompt rules banning filler words', score: 4 },
      ],
    },
    {
      id: 'pm_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you use chain-of-thought scratchpads when evaluating feature tradeoffs?',
      options: [
        { id: 'a', label: 'No, I just look for a direct prioritized list', score: 0 },
        { id: 'b', label: 'Occasionally ask for pros and cons', score: 1 },
        { id: 'c', label: 'Require the model to weigh RICE or MoSCoW scores step-by-step', score: 3 },
        { id: 'd', label: 'Force explicit scratchpad reasoning: user impact -> engineering complexity -> business risk -> final rank with rationale', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'pm_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What range of AI tools do you actively use in your product stack?',
      options: [
        { id: 'a', label: 'Only free ChatGPT in the web browser', score: 0 },
        { id: 'b', label: 'Single paid frontier model (e.g. ChatGPT Plus)', score: 1 },
        { id: 'c', label: 'Multiple frontier models (Claude 3.7 for writing/specs, reasoning models for logic) + Notion/Linear AI', score: 3 },
        { id: 'd', label: 'Full stack: frontier reasoning models + AI prototyping (v0/Bolt/Cursor) + automated transcript synthesis + deep research tools', score: 4 },
      ],
    },
    {
      id: 'pm_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you create preliminary interactive prototypes or visual concepts?',
      options: [
        { id: 'a', label: 'Wait for designers to produce Figma wires before testing concepts', score: 0 },
        { id: 'b', label: 'Rough hand sketches or static screenshots', score: 1 },
        { id: 'c', label: 'AI image generators (Midjourney/DALL-E) for conceptual mockups', score: 2 },
        { id: 'd', label: 'Generate live interactive React/web prototypes via AI coding tools to validate UX flows before eng sprint planning', score: 4 },
      ],
    },
    {
      id: 'pm_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you query and explore product analytics data using AI?',
      options: [
        { id: 'a', label: 'Ask a data analyst for standard dashboards and wait for tickets', score: 0 },
        { id: 'b', label: 'Export CSVs and paste small tables into AI chat', score: 1 },
        { id: 'c', label: 'Use AI code interpreter to run Python queries over cohort CSVs', score: 3 },
        { id: 'd', label: 'Direct natural-language-to-SQL assistants connected to our data warehouse for ad-hoc funnel diagnostics', score: 4 },
      ],
    },
    {
      id: 'pm_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you organize product context and specifications for AI consumption?',
      options: [
        { id: 'a', label: 'No repository; start fresh each time in chat', score: 0 },
        { id: 'b', label: 'Re-uploading PDFs and docs into chats', score: 1 },
        { id: 'c', label: 'Maintaining project custom instructions and custom GPTs/Projects', score: 3 },
        { id: 'd', label: 'Structured LLM Wiki pattern: clean markdown repository of product architecture, persona archetypes, and API schemas', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'pm_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure AI-generated requirements reflect true user empathy?',
      options: [
        { id: 'a', label: 'Assume the AI understands human psychology adequately', score: 0 },
        { id: 'b', label: 'Glance over user stories to see if they make sense', score: 1 },
        { id: 'c', label: 'Actively rewrite user emotions and real user quotes into the AI draft', score: 3 },
        { id: 'd', label: 'Strict Cyborg integration: AI structures the logistics, but human PM injects genuine customer pain, qualitative nuance, and business conviction', score: 4 },
      ],
    },
    {
      id: 'pm_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'When AI drafts technical acceptance criteria, how do you validate them?',
      options: [
        { id: 'a', label: 'Pass them directly to developers without deep review', score: 0 },
        { id: 'b', label: 'Quickly check if the happy path is covered', score: 1 },
        { id: 'c', label: 'Review against known edge cases and error states', score: 3 },
        { id: 'd', label: 'Rigorously stress-test failure states, race conditions, offline modes, and backward compatibility with tech leads', score: 4 },
      ],
    },
    {
      id: 'pm_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you avoid the "homogenization effect" in feature ideation?',
      options: [
        { id: 'a', label: 'I pick the top recommendation from the AI list', score: 0 },
        { id: 'b', label: 'Ask for 10 ideas and pick the most common one', score: 1 },
        { id: 'c', label: 'Discard the first 5 generic ideas and push for non-obvious alternatives', score: 3 },
        { id: 'd', label: 'Use AI as a foil to exhaust conventional answers, then deliberate on contrarian, high-differentiation vectors', score: 4 },
      ],
    },
    {
      id: 'pm_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure data security when sharing customer insights with AI?',
      options: [
        { id: 'a', label: 'Paste raw customer emails and names into any free chatbot', score: 0 },
        { id: 'b', label: 'Avoid pasting data when I remember not to', score: 1 },
        { id: 'c', label: 'Manually redact names and company identifiers before prompting', score: 3 },
        { id: 'd', label: 'Automated PII scrubbing pipelines + verified enterprise zero-data-retention environments', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'pm_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI to define and refine overall product strategy and moats?',
      options: [
        { id: 'a', label: 'Do not use AI for strategic questions', score: 0 },
        { id: 'b', label: 'Ask broad questions about future industry trends', score: 1 },
        { id: 'c', label: 'Simulate business model shifts and pricing sensitivity curves', score: 3 },
        { id: 'd', label: 'War-game defensibility against platform risk, commoditization, and fast-followers using multi-scenario simulations', score: 4 },
      ],
    },
    {
      id: 'pm_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI changed your team’s product discovery velocity?',
      options: [
        { id: 'a', label: 'Velocity is identical; discovery is entirely manual', score: 0 },
        { id: 'b', label: 'Slightly faster notes summarization (10% boost)', score: 1 },
        { id: 'c', label: 'Cut time from concept to validated PRD by ~40%', score: 3 },
        { id: 'd', label: 'Order-of-magnitude leap: shipping functional validated prototypes in days rather than multiple sprint cycles', score: 4 },
      ],
    },
    {
      id: 'pm_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you design AI-native capabilities directly inside your own products?',
      options: [
        { id: 'a', label: 'Slapping a generic floating chat widget on our product', score: 0 },
        { id: 'b', label: 'Adding a "Summarize with AI" button on text areas', score: 1 },
        { id: 'c', label: 'Deeply integrated assistive workflows with clear user control and fallback states', score: 3 },
        { id: 'd', label: 'Autonomous agentic capabilities with deterministic guardrails, structured evaluation evals, and background orchestration', score: 4 },
      ],
    },
    {
      id: 'pm_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you navigate the "Centaur vs Cyborg" PM paradigm?',
      options: [
        { id: 'a', label: 'Unfamiliar with structured collaboration models', score: 0 },
        { id: 'b', label: 'Hand off entire tasks to AI without supervision', score: 1 },
        { id: 'c', label: 'Centaur model: clearly partitioning administrative drafting from high-context stakeholder consensus', score: 3 },
        { id: 'd', label: 'Master allocator: orchestrating parallel AI research threads while spending 80% of human energy on team alignment and customer empathy', score: 4 },
      ],
    },
  ],

  software_engineer: [
    // Workflow Integration
    {
      id: 'swe_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How is AI embedded into your daily software development workflow?',
      options: [
        { id: 'a', label: 'Not used or banned by company policy', score: 0 },
        { id: 'b', label: 'Basic web browser chat queries for unfamiliar syntax or error lookups', score: 1 },
        { id: 'c', label: 'IDE-integrated autocomplete (Copilot) and occasional in-line edits', score: 2 },
        { id: 'd', label: 'Continuous multi-layered toolchain: Cursor/Copilot + terminal CLI agents + in-editor refactoring', score: 4 },
      ],
    },
    {
      id: 'swe_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you handle terminal operations and command-line execution with AI?',
      options: [
        { id: 'a', label: 'Never use AI in the terminal', score: 0 },
        { id: 'b', label: 'Copy commands from web chat and paste them into bash', score: 1 },
        { id: 'c', label: 'Shell completion tools (e.g. Warp AI or gh copilot)', score: 2 },
        { id: 'd', label: 'Terminal-first CLI agents (e.g. Claude Code, Aider, llm CLI) with piping and local tool execution', score: 4 },
      ],
    },
    {
      id: 'swe_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you generate unit tests and integration tests?',
      options: [
        { id: 'a', label: 'Write all tests manually from scratch', score: 0 },
        { id: 'b', label: 'Ask chat to generate tests after writing the implementation', score: 1 },
        { id: 'c', label: 'Generate test scaffolding automatically in IDE and fill in edge cases', score: 3 },
        { id: 'd', label: 'Test-Driven Development with AI: generating edge-case test suites, boundary tests, and mocks before implementation', score: 4 },
      ],
    },
    {
      id: 'swe_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you approach code reviews and Pull Request inspections?',
      options: [
        { id: 'a', label: 'Manual eyeball review only', score: 0 },
        { id: 'b', label: 'Paste diffs into chat when a PR looks confusing', score: 1 },
        { id: 'c', label: 'Automated PR bot flagging stylistic lint issues and test coverage', score: 2 },
        { id: 'd', label: 'Two-tier review: AI agent conducts security/invariant scan and summarizes architectural delta; human focuses on system taste and domain logic', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'swe_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you ground AI models in your codebase conventions and architecture?',
      options: [
        { id: 'a', label: 'I do not provide codebase context; I prompt generic questions', score: 0 },
        { id: 'b', label: 'Copy-pasting relevant files into the prompt window manually', score: 1 },
        { id: 'c', label: 'Using IDE @-mentions to reference specific files and symbols', score: 3 },
        { id: 'd', label: 'Structured CLAUDE.md / .cursorrules repository guidelines enforcing typing rules, architectural invariants, and testing patterns', score: 4 },
      ],
    },
    {
      id: 'swe_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'When debugging an intractable, elusive bug, how do you instruct the model?',
      options: [
        { id: 'a', label: 'Paste the error message and ask "Why is this broken?"', score: 0 },
        { id: 'b', label: 'Paste error message and the immediate function', score: 1 },
        { id: 'c', label: 'Provide error, call stack, environment details, and recent git diffs', score: 3 },
        { id: 'd', label: 'Mandate scratchpad root-cause isolation: form hypothesis -> construct minimal reproducing test case -> inspect state invariant -> propose fix', score: 4 },
      ],
    },
    {
      id: 'swe_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you prevent the AI from generating obsolete APIs or hallucinated libraries?',
      options: [
        { id: 'a', label: 'I discover them when the build breaks and fix manually', score: 0 },
        { id: 'b', label: 'Specify "Use latest version"', score: 1 },
        { id: 'c', label: 'Provide the exact package.json or dependency lockfile versions', score: 3 },
        { id: 'd', label: 'Ground prompts with exact framework documentation chunks and use tools with web retrieval or MCP documentation servers', score: 4 },
      ],
    },
    {
      id: 'swe_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you formulate prompts for large architectural refactors?',
      options: [
        { id: 'a', label: '"Refactor this file to make it cleaner"', score: 0 },
        { id: 'b', label: 'Ask it to break a large file into smaller components', score: 1 },
        { id: 'c', label: 'Specify the target design pattern (e.g. factory, adapter) and expected interfaces', score: 3 },
        { id: 'd', label: 'Sequential multi-stage refactor plan: interface definition -> backward compatibility adapter -> phased migration with zero regression', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'swe_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What represents your current AI coding toolchain (Karpathy toolchain maturity)?',
      options: [
        { id: 'a', label: 'No AI tools in development', score: 0 },
        { id: 'b', label: 'Single tool: browser chat or simple ghost-text autocomplete', score: 1 },
        { id: 'c', label: 'Two layers: Cursor/Copilot autocomplete + in-line IDE chat', score: 3 },
        { id: 'd', label: 'Full 4 layers: Autocomplete + In-line IDE + Autonomous terminal agents (Claude Code/Aider) + Frontier reasoning models for intractable bugs', score: 4 },
      ],
    },
    {
      id: 'swe_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'Do you utilize Model Context Protocol (MCP) or external tool connections in your AI stack?',
      options: [
        { id: 'a', label: 'What is MCP?', score: 0 },
        { id: 'b', label: 'Heard of it, but haven\'t set up any servers', score: 1 },
        { id: 'c', label: 'Connected 1-2 standard MCP servers (e.g. GitHub, Postgres)', score: 3 },
        { id: 'd', label: 'Active custom MCP ecosystem: connecting local databases, internal APIs, staging environments, and monitoring directly to LLM agents', score: 4 },
      ],
    },
    {
      id: 'swe_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you log, inspect, and evaluate your AI prompts and agent runs?',
      options: [
        { id: 'a', label: 'Lost when terminal or browser tab closes', score: 0 },
        { id: 'b', label: 'Rely on standard web chat history', score: 1 },
        { id: 'c', label: 'Keep notes or snippets of effective prompts in markdown', score: 2 },
        { id: 'd', label: 'Systemic logging into SQLite (e.g. llm CLI / Datasette) or dedicated tracing platforms (LangSmith, Phoenix) to analyze tokens and failure rates', score: 4 },
      ],
    },
    {
      id: 'swe_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you handle schema migrations and database queries with AI?',
      options: [
        { id: 'a', label: 'Write all raw SQL and migrations by hand', score: 0 },
        { id: 'b', label: 'Ask chat for syntax of complex SQL joins', score: 1 },
        { id: 'c', label: 'Provide schema DDL and let AI generate ORM migrations and seeders', score: 3 },
        { id: 'd', label: 'Automated pipeline validating query execution plans (EXPLAIN ANALYZE), indexing strategies, and rollback migration safety', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'swe_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you address the "Taste Problem" in AI-generated code (e.g. over-defensive code, bloated abstractions)?',
      options: [
        { id: 'a', label: 'Accept whatever code runs without compiling errors', score: 0 },
        { id: 'b', label: 'Delete comments and format with prettier', score: 1 },
        { id: 'c', label: 'Manually remove redundant try/catch blocks and simplify overly generic abstractions', score: 3 },
        { id: 'd', label: 'Operate strictly as senior reviewer: demanding the AI justify abstractions, enforcing minimal dependencies, and deleting ephemeral code ruthlessly', score: 4 },
      ],
    },
    {
      id: 'swe_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify security and vulnerability posture in AI-suggested code?',
      options: [
        { id: 'a', label: 'Assume the AI does not write vulnerable code', score: 0 },
        { id: 'b', label: 'Rely on CI/CD linter to catch basic syntax issues', score: 1 },
        { id: 'c', label: 'Actively check for SQL injection, XSS, and authorization leaks', score: 3 },
        { id: 'd', label: 'Rigorous multi-pass verification: automated SAST scanning, boundary verification, and manual inspection of sanitization logic', score: 4 },
      ],
    },
    {
      id: 'swe_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you test and validate code written by autonomous agents before committing?',
      options: [
        { id: 'a', label: 'Commit directly if the agent says it succeeded', score: 0 },
        { id: 'b', label: 'Run the dev server and click around in the browser', score: 1 },
        { id: 'c', label: 'Run local test suite and review the git diff carefully', score: 3 },
        { id: 'd', label: 'Automated test suite + lint pass + interactive verification in ephemeral preview environment + strict git diff review', score: 4 },
      ],
    },
    {
      id: 'swe_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you maintain mental models of the codebase when AI writes substantial portions?',
      options: [
        { id: 'a', label: 'I often don\'t understand how the generated code works under the hood', score: 0 },
        { id: 'b', label: 'I read through it once during generation', score: 1 },
        { id: 'c', label: 'I force the AI to explain the architectural decisions before approving', score: 3 },
        { id: 'd', label: '"Build with me, not for me" principle: maintaining comprehensive mental ownership of system state and data flow diagrams', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'swe_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you view "ephemeral code" and post-scarcity software development?',
      options: [
        { id: 'a', label: 'All code is precious and must be meticulously crafted by hand', score: 0 },
        { id: 'b', label: 'I use AI to write code faster, but maintain everything forever', score: 1 },
        { id: 'c', label: 'I frequently generate throwaway scripts to test ideas and delete them immediately', score: 3 },
        { id: 'd', label: 'Full post-scarcity mindset: generating thousands of lines of disposable diagnostic code, simulation tests, and throwaway prototypes with zero attachment', score: 4 },
      ],
    },
    {
      id: 'swe_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you navigate the "Jagged Technological Frontier" in engineering tasks?',
      options: [
        { id: 'a', label: 'I don\'t know where AI excels vs fails', score: 0 },
        { id: 'b', label: 'I try AI on everything and get frustrated when it fails', score: 1 },
        { id: 'c', label: 'I delegate boilerplate, regex, and syntax lookups; keep architecture manual', score: 3 },
        { id: 'd', label: 'Deliberate mapping: leveraging AI for massive parallel exploration and boilerplate while strictly anchoring complex distributed systems logic in human design', score: 4 },
      ],
    },
    {
      id: 'swe_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How are you approaching autonomous coding agents and multi-agent workflows?',
      options: [
        { id: 'a', label: 'I do not trust or use agentic tools', score: 0 },
        { id: 'b', label: 'Used an agent once, got stuck in an infinite loop, and stopped', score: 1 },
        { id: 'c', label: 'Use agents for well-scoped tasks with human checkpoints (10-20 min autonomy)', score: 3 },
        { id: 'd', label: 'Active agent orchestrator: designing scoped environments, automated test harnesses, and feedback loops pushing toward extended autonomous execution', score: 4 },
      ],
    },
    {
      id: 'swe_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI affected your career development and core technical focus?',
      options: [
        { id: 'a', label: 'Worrying about obsolescence; no clear strategy', score: 0 },
        { id: 'b', label: 'Learning syntax of new frameworks faster', score: 1 },
        { id: 'c', label: 'Shifting focus from syntax memorization to system design and architecture', score: 3 },
        { id: 'd', label: 'Operating as a 10x engineering director: orchestrating agents, defining invariants, exercising taste, and solving deep customer problems', score: 4 },
      ],
    },
  ],

  data_analyst: [
    // Workflow Integration
    {
      id: 'da_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How frequently do you use AI for SQL generation, data cleansing, and EDA?',
      options: [
        { id: 'a', label: 'Never; all queries written manually', score: 0 },
        { id: 'b', label: 'Occasionally for looking up obscure SQL window functions or regex', score: 1 },
        { id: 'c', label: 'Weekly for drafting dbt models, pandas transformations, and charts', score: 2 },
        { id: 'd', label: 'Daily: AI is an active pair-analyst embedded in my IDE, notebook, and dbt workflow', score: 4 },
      ],
    },
    {
      id: 'da_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you formulate complex analytical queries with multiple CTEs and partitions?',
      options: [
        { id: 'a', label: 'Write line by line from memory or StackOverflow', score: 0 },
        { id: 'b', label: 'Ask chat for generic SQL template and adjust column names', score: 1 },
        { id: 'c', label: 'Provide schema definition and prompt for the CTE structure', score: 3 },
        { id: 'd', label: 'Provide schema DDL, indexing constraints, and sample data rows to generate optimal, documented queries', score: 4 },
      ],
    },
    {
      id: 'da_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you transform raw analytical insights into executive summaries?',
      options: [
        { id: 'a', label: 'Manual bullet points in email or slide deck', score: 0 },
        { id: 'b', label: 'Paste pivot table into AI for a quick bullet summary', score: 1 },
        { id: 'c', label: 'Prompt AI with metrics and context to draft a formal executive narrative', score: 3 },
        { id: 'd', label: 'Automated commentary generation pipeline transforming cohort deltas into strategic so-what takeaways with actionable recommendations', score: 4 },
      ],
    },
    {
      id: 'da_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you handle statistical anomaly detection and outlier investigation?',
      options: [
        { id: 'a', label: 'Manual eyeball inspection of dashboards when alerts fire', score: 0 },
        { id: 'b', label: 'Basic z-score or IQR scripts written manually', score: 1 },
        { id: 'c', label: 'Use AI code interpreter to run clustering and anomaly detection on sample CSVs', score: 3 },
        { id: 'd', label: 'Automated diagnostic pipeline feeding metric spikes into LLMs to correlate concurrent releases, marketing spend, and seasonal trends', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'da_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you provide database schema and semantic definitions to AI?',
      options: [
        { id: 'a', label: 'No schema provided; just English questions', score: 0 },
        { id: 'b', label: 'Describe table names and key columns in conversational text', score: 1 },
        { id: 'c', label: 'Paste CREATE TABLE statements or YAML semantic layer definitions', score: 3 },
        { id: 'd', label: 'Structured XML schema fences (<tables>, <relationships>, <business_logic_rules>, <edge_cases>) with explicit dialect requirements', score: 4 },
      ],
    },
    {
      id: 'da_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'When requesting statistical analysis, how do you specify methodology?',
      options: [
        { id: 'a', label: '"Is this number significant?"', score: 0 },
        { id: 'b', label: '"Run a t-test on this data"', score: 1 },
        { id: 'c', label: 'Specify null hypothesis, confidence interval, and data distribution assumptions', score: 3 },
        { id: 'd', label: 'Require test selection rationale, normality validation, power analysis, and multiple-testing corrections (e.g. Bonferroni)', score: 4 },
      ],
    },
    {
      id: 'da_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'Do you instruct AI to generate automated data validation unit tests?',
      options: [
        { id: 'a', label: 'Never use AI for data testing', score: 0 },
        { id: 'b', label: 'Ask if the data has missing values', score: 1 },
        { id: 'c', label: 'Ask AI to generate Great Expectations or dbt test assertions', score: 3 },
        { id: 'd', label: 'Mandate comprehensive test suites: uniqueness, referential integrity, range constraints, and distribution drift alerts', score: 4 },
      ],
    },
    {
      id: 'da_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you formulate prompts for causal inference vs correlation questions?',
      options: [
        { id: 'a', label: 'I do not distinguish in prompts', score: 0 },
        { id: 'b', label: 'Ask "Did X cause Y?"', score: 1 },
        { id: 'c', label: 'Instruct the model to highlight confounders and selection bias', score: 3 },
        { id: 'd', label: 'Structure DAG (Directed Acyclic Graph) specifications and demand instrumental variable or diff-in-diff evaluation frameworks', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'da_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What AI tools comprise your analytical workspace?',
      options: [
        { id: 'a', label: 'General web chat only', score: 0 },
        { id: 'b', label: 'Chatbot with file upload for quick CSV summaries', score: 1 },
        { id: 'c', label: 'Code interpreter notebooks + IDE completion for Python/R/SQL', score: 3 },
        { id: 'd', label: 'Integrated stack: dbt AI / Hex / Cursor + automated schema RAG + local sandbox code execution', score: 4 },
      ],
    },
    {
      id: 'da_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you handle exploratory data visualizations with AI?',
      options: [
        { id: 'a', label: 'Build all charts by hand in BI tool (Tableau/Looker)', score: 0 },
        { id: 'b', label: 'Ask AI for matplotlib/seaborn code snippets and copy them', score: 1 },
        { id: 'c', label: 'Generate multi-panel plotly or seaborn dashboards in minutes using AI notebooks', score: 3 },
        { id: 'd', label: 'Automated visual exploratory pipelines generating faceted distribution charts, correlation heatmaps, and publication-ready graphs', score: 4 },
      ],
    },
    {
      id: 'da_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you connect AI to company data dictionaries and metadata?',
      options: [
        { id: 'a', label: 'No metadata connection; explain tables each time', score: 0 },
        { id: 'b', label: 'Copy excerpts from wiki into prompts', score: 1 },
        { id: 'c', label: 'Upload data dictionary as a custom GPT / Project knowledge file', score: 3 },
        { id: 'd', label: 'Live metadata catalog integration: vector indexing across dbt docs, column descriptions, and lineage graphs', score: 4 },
      ],
    },
    {
      id: 'da_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you leverage reasoning models (e.g. o3, Claude 3.7 Thinking) for data problems?',
      options: [
        { id: 'a', label: 'Never used reasoning/thinking models', score: 0 },
        { id: 'b', label: 'Use them the same as standard models', score: 1 },
        { id: 'c', label: 'Reserve them for difficult mathematical or statistical optimization queries', score: 3 },
        { id: 'd', label: 'Systematically route ambiguous business telemetry, multi-table join logic, and root-cause attribution to deep reasoning models', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'da_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you verify the accuracy of AI-generated SQL queries before running in production?',
      options: [
        { id: 'a', label: 'Execute directly against prod database without checking', score: 0 },
        { id: 'b', label: 'Read through the SQL quickly to see if table names match', score: 1 },
        { id: 'c', label: 'Run EXPLAIN plan and execute in staging with LIMIT 100 to check output shape', score: 3 },
        { id: 'd', label: 'Strict audit: checking join fanout, null handling in aggregations, partition pruning, and reconciling row counts against ground truth', score: 4 },
      ],
    },
    {
      id: 'da_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you guard against LLM hallucination in numerical calculations?',
      options: [
        { id: 'a', label: 'Ask the LLM to do arithmetic in its response directly', score: 0 },
        { id: 'b', label: 'Recalculate with a calculator if something looks suspicious', score: 1 },
        { id: 'c', label: 'Force the model to write and execute Python/SQL code rather than calculating mentally', score: 3 },
        { id: 'd', label: 'Strict frontier discipline: never trust LLM token prediction for raw math; always enforce programmatic execution via sandboxed code interpreters', score: 4 },
      ],
    },
    {
      id: 'da_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you validate AI interpretations of business metrics?',
      options: [
        { id: 'a', label: 'Paste AI interpretation directly into presentations', score: 0 },
        { id: 'b', label: 'Ensure the tone is professional', score: 1 },
        { id: 'c', label: 'Verify that the narrative aligns with recent product updates and seasonality', score: 3 },
        { id: 'd', label: 'Apply domain skepticism: probing confounding factors, sample selection biases, and business model realities the model cannot see', score: 4 },
      ],
    },
    {
      id: 'da_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you safeguard user privacy and PII in data analyses?',
      options: [
        { id: 'a', label: 'Upload raw production customer dumps into cloud AI', score: 0 },
        { id: 'b', label: 'Exclude credit cards and passwords only', score: 1 },
        { id: 'c', label: 'Use synthetic datasets or anonymized IDs before prompting', score: 3 },
        { id: 'd', label: 'Enforced enterprise governance: zero PII egress, tokenized synthetic data, and SOC2 certified private compute environments', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'da_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How has AI changed the allocation of your working time as an analyst?',
      options: [
        { id: 'a', label: 'No change; 90% of time spent writing boilerplate SQL and fixing CSVs', score: 0 },
        { id: 'b', label: 'Slightly faster query writing (15% time saved)', score: 1 },
        { id: 'c', label: 'Cut repetitive ETL and ad-hoc reporting time in half', score: 3 },
        { id: 'd', label: 'Elevated to strategic data partner: spending 70%+ of time on experimental design, causal attribution, and executive decisions', score: 4 },
      ],
    },
    {
      id: 'da_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you enable self-service business intelligence across your company using AI?',
      options: [
        { id: 'a', label: 'Maintain a ticketing queue for every ad-hoc request', score: 0 },
        { id: 'b', label: 'Share pre-built static dashboards and tell teams to filter', score: 1 },
        { id: 'c', label: 'Deploy basic natural language query tools on vetted datasets', score: 3 },
        { id: 'd', label: 'Architect robust semantic layers and curated AI agents enabling business stakeholders to query verified data with automated guardrails', score: 4 },
      ],
    },
    {
      id: 'da_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you use AI to build predictive models and machine learning pipelines?',
      options: [
        { id: 'a', label: 'Do not build ML models', score: 0 },
        { id: 'b', label: 'Ask chat for standard scikit-learn syntax templates', score: 1 },
        { id: 'c', label: 'Generate automated feature engineering scripts and baseline model benchmarks', score: 3 },
        { id: 'd', label: 'End-to-end ML engineering: rapid automated hyperparameter tuning, model explainability (SHAP), and production inference monitoring', score: 4 },
      ],
    },
    {
      id: 'da_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you embody the "Centaur Data Analyst" model?',
      options: [
        { id: 'a', label: 'Unfamiliar with the Centaur collaboration concept', score: 0 },
        { id: 'b', label: 'Treat AI as a code generator without strategic partnership', score: 1 },
        { id: 'c', label: 'Centaur: AI handles code generation and transformation; analyst applies domain context and business judgment', score: 3 },
        { id: 'd', label: 'Master cognitive orchestrator: seamless synthesis of code, visual storytelling, and business strategy delivering outsized organizational leverage', score: 4 },
      ],
    },
  ],

  designer: [
    // Workflow Integration
    {
      id: 'des_w1',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How often do you incorporate generative AI into your creative or UX design process?',
      options: [
        { id: 'a', label: 'Never or strictly against using generative tools', score: 0 },
        { id: 'b', label: 'Occasionally generating moodboard images or placeholder copy', score: 1 },
        { id: 'c', label: 'Several times a week for ideation, microcopy, and asset variations', score: 2 },
        { id: 'd', label: 'Continuously: integrated across concepting, design systems, UX research, and UI code handoff', score: 4 },
      ],
    },
    {
      id: 'des_w2',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you overcome the "blank canvas" problem during early concepting?',
      options: [
        { id: 'a', label: 'Stare at empty canvas or browse Pinterest/Dribbble for hours', score: 0 },
        { id: 'b', label: 'Look at 2-3 competitor apps and copy their layout', score: 1 },
        { id: 'c', label: 'Generate 10+ divergent visual ideas using image generation models', score: 3 },
        { id: 'd', label: 'Rapid divergent exploration: generating 30+ visual metaphors, spatial layouts, and color systems in 20 minutes to jumpstart craft', score: 4 },
      ],
    },
    {
      id: 'des_w3',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you draft UX microcopy (empty states, onboarding steps, error messages)?',
      options: [
        { id: 'a', label: 'Use "Lorem Ipsum" and let engineers or copywriters figure it out later', score: 0 },
        { id: 'b', label: 'Write generic strings ("An error occurred. Try again.")', score: 1 },
        { id: 'c', label: 'Prompt AI for 5 friendly variations for a specific error state', score: 3 },
        { id: 'd', label: 'Contextual microcopy matrix: generating tone-calibrated states (excited, frustrated, focused) aligned with brand voice and WCAG accessibility standards', score: 4 },
      ],
    },
    {
      id: 'des_w4',
      dimension: 'workflow_integration',
      type: 'single_choice',
      title: 'How do you synthesize usability test recordings and user feedback into design changes?',
      options: [
        { id: 'a', label: 'Rely on general memory and intuition from observing the call', score: 0 },
        { id: 'b', label: 'Skim notes and write a brief summary', score: 1 },
        { id: 'c', label: 'Feed session transcripts to AI to extract top usability friction points', score: 3 },
        { id: 'd', label: 'Automated synthesis pipeline clustering user journey drop-offs, quotes, and cognitive load indicators into prioritized Figma action items', score: 4 },
      ],
    },

    // Prompt Sophistication
    {
      id: 'des_p1',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'When generating visual assets with diffusion or multimodal models, how do you prompt?',
      options: [
        { id: 'a', label: 'Basic keywords: "modern dark dashboard ui 4k"', score: 0 },
        { id: 'b', label: 'Descriptive sentences of the scene and style', score: 1 },
        { id: 'c', label: 'Specifying lighting, camera focal length, color grading, and negative prompts', score: 3 },
        { id: 'd', label: 'Domain-authentic recipes: camera optics, aspect ratio math, strict lighting parameters, surface material textures, and zero-cliché negative constraints', score: 4 },
      ],
    },
    {
      id: 'des_p2',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you ground LLMs in your design system and brand guidelines?',
      options: [
        { id: 'a', label: 'Do not provide design system context', score: 0 },
        { id: 'b', label: 'Mention brand colors ("We use deep blue and white")', score: 1 },
        { id: 'c', label: 'Upload brand guidelines PDF or Figma token definitions', score: 3 },
        { id: 'd', label: 'Structured token taxonomy (colors, spacing scale, typographic pairings, radius formulas) passed via system prompts or dedicated Figma plugins', score: 4 },
      ],
    },
    {
      id: 'des_p3',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you simulate user testing with diverse accessibility personas?',
      options: [
        { id: 'a', label: 'Do not simulate accessibility personas', score: 0 },
        { id: 'b', label: 'Check contrast with a standard plugin', score: 1 },
        { id: 'c', label: 'Prompt AI to review UI description for color blindness or motor disability hurdles', score: 3 },
        { id: 'd', label: 'Multi-persona accessibility audit: evaluating screen-reader hierarchy, cognitive load, touch target compliance, and low-vision legibility', score: 4 },
      ],
    },
    {
      id: 'des_p4',
      dimension: 'prompt_sophistication',
      type: 'single_choice',
      title: 'How do you instruct AI to critique your own design work?',
      options: [
        { id: 'a', label: 'Ask "Does this look good?"', score: 0 },
        { id: 'b', label: 'Ask for general design suggestions', score: 1 },
        { id: 'c', label: 'Upload screenshot and ask for critique against Nielsen Norman heuristics', score: 3 },
        { id: 'd', label: 'Adversarial design critique: assigning harsh design lead personas to ruthlessly interrogate visual hierarchy, cognitive friction, and layout balance', score: 4 },
      ],
    },

    // Tool Breadth
    {
      id: 'des_t1',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'What generative and assistive AI tools are in your design toolkit?',
      options: [
        { id: 'a', label: 'None', score: 0 },
        { id: 'b', label: 'Only 1 tool (e.g. Midjourney or Canva AI)', score: 1 },
        { id: 'c', label: 'Image generators + Figma AI plugins + LLM for microcopy', score: 3 },
        { id: 'd', label: 'Comprehensive suite: Midjourney/Flux + v0/Cursor for code prototyping + Figma plugins + vector generators + sound/motion tools', score: 4 },
      ],
    },
    {
      id: 'des_t2',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you bridge the gap between Figma designs and working front-end code?',
      options: [
        { id: 'a', label: 'Throw Figma links over the fence and hope engineers match it', score: 0 },
        { id: 'b', label: 'Use default Figma inspect mode', score: 1 },
        { id: 'c', label: 'Use AI code export plugins to generate initial CSS/Tailwind snippets', score: 3 },
        { id: 'd', label: 'Build and verify live React/Tailwind prototypes yourself with coding agents before final handoff, ensuring design fidelity and animation physics', score: 4 },
      ],
    },
    {
      id: 'des_t3',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you generate vector icons, illustrations, and 3D assets?',
      options: [
        { id: 'a', label: 'Draw every icon from scratch or use static stock libraries', score: 0 },
        { id: 'b', label: 'Basic raster image generation and manual vector tracing', score: 1 },
        { id: 'c', label: 'AI vector generation tools (e.g. Recraft, Vectorizer) for initial SVG assets', score: 3 },
        { id: 'd', label: 'Curated workflow: AI SVG generation + custom bezier cleanup + automated icon token packaging matching design system specs', score: 4 },
      ],
    },
    {
      id: 'des_t4',
      dimension: 'tool_breadth',
      type: 'single_choice',
      title: 'How do you manage visual references, moodboards, and inspiration repositories?',
      options: [
        { id: 'a', label: 'Disorganized desktop folders or random bookmarks', score: 0 },
        { id: 'b', label: 'Standard Pinterest / Eagle boards', score: 1 },
        { id: 'c', label: 'AI-assisted moodboard generation in Figma / Miro', score: 3 },
        { id: 'd', label: 'Semantic visual search: AI-tagged design archive indexing typography, color palettes, and interaction patterns for instant retrieval', score: 4 },
      ],
    },

    // Output Quality Focus
    {
      id: 'des_q1',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you avoid "AI visual slop" (purple gradients, generic glassmorphism, floating spheres)?',
      options: [
        { id: 'a', label: 'I use the default generated visuals directly', score: 0 },
        { id: 'b', label: 'Change the background color to white or black', score: 1 },
        { id: 'c', label: 'Enforce strict brand rules banning generic AI aesthetic tropes', score: 3 },
        { id: 'd', label: 'Zero-slop discipline: bespoke typography pairings, optical hierarchy, intentional tactile surfaces, and rigorous craft that looks hand-designed', score: 4 },
      ],
    },
    {
      id: 'des_q2',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you evaluate generated images for anatomical, optical, or lighting errors?',
      options: [
        { id: 'a', label: 'Rarely notice or check for visual artifacts', score: 0 },
        { id: 'b', label: 'Check for extra fingers or obvious blurs', score: 1 },
        { id: 'c', label: 'Inspect lighting vectors, shadow consistency, and perspective planes', score: 3 },
        { id: 'd', label: 'Rigorous art-direction pass: inpainting artifacts, color-grading in Photoshop/Figma, and verifying believable physics and material textures', score: 4 },
      ],
    },
    {
      id: 'des_q3',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you ensure UI designs maintain real responsive layout integrity and UX logic?',
      options: [
        { id: 'a', label: 'Design only a static 1440px desktop frame', score: 0 },
        { id: 'b', label: 'Create one mobile screenshot mockup', score: 1 },
        { id: 'c', label: 'Verify responsive breakpoints and auto-layout behavior in Figma', score: 3 },
        { id: 'd', label: 'Interactive browser verification: testing responsive wrap behavior, touch targets (>=44px), WCAG AA contrast, and layout stress tests with real data', score: 4 },
      ],
    },
    {
      id: 'des_q4',
      dimension: 'output_quality_focus',
      type: 'single_choice',
      title: 'How do you handle copyright, model provenance, and brand safety for generated assets?',
      options: [
        { id: 'a', label: 'Unaware of copyright or commercial licensing rules for AI images', score: 0 },
        { id: 'b', label: 'Assume all generated images are commercially safe', score: 1 },
        { id: 'c', label: 'Only use commercially indemnified tools (e.g. Adobe Firefly, enterprise Midjourney)', score: 3 },
        { id: 'd', label: 'Formal asset audit: verifying commercial rights, checking against trademark databases, and retaining audit trails for enterprise clients', score: 4 },
      ],
    },

    // Strategic Application
    {
      id: 'des_s1',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'Where do you anchor your irreplaceable human value as a designer in an AI era?',
      options: [
        { id: 'a', label: 'Fear that AI will completely replace designers soon', score: 0 },
        { id: 'b', label: 'In my manual speed with pen tools and Figma shortcuts', score: 1 },
        { id: 'c', label: 'In user research synthesis and cross-functional communication', score: 3 },
        { id: 'd', label: 'In taste, judgment, spatial empathy, and problem definition: transitioning from pixel-pusher to lead experience architect and creative director', score: 4 },
      ],
    },
    {
      id: 'des_s2',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you leverage AI for rapid end-to-end design sprints?',
      options: [
        { id: 'a', label: 'Design sprints still take 4 to 6 weeks of manual drafting', score: 0 },
        { id: 'b', label: 'Use AI to generate a few survey questions', score: 1 },
        { id: 'c', label: 'Compress research and wireframing from weeks to days', score: 3 },
        { id: 'd', label: 'Deliver complete validated interactive prototypes with real data and microcopy in 48 hours, radically compressing product discovery loops', score: 4 },
      ],
    },
    {
      id: 'des_s3',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you design interfaces specifically intended for AI agents and human-AI co-work?',
      options: [
        { id: 'a', label: 'Have not designed interfaces for AI workflows', score: 0 },
        { id: 'b', label: 'Added standard chat box or sparkle button to existing screens', score: 1 },
        { id: 'c', label: 'Designed transparent state indicators showing model confidence and thinking', score: 3 },
        { id: 'd', label: 'Pioneered co-intelligence UX patterns: steering controls, dynamic human-in-the-loop checkpoints, interruptible agent actions, and undo trees', score: 4 },
      ],
    },
    {
      id: 'des_s4',
      dimension: 'strategic_application',
      type: 'single_choice',
      title: 'How do you navigate the "Centaur Designer" collaboration model?',
      options: [
        { id: 'a', label: 'Unfamiliar with Centaur collaboration philosophy', score: 0 },
        { id: 'b', label: 'Alternate randomly between manual drawing and AI generation', score: 1 },
        { id: 'c', label: 'Centaur: AI provides raw visual volume; designer executes curation and composition', score: 3 },
        { id: 'd', label: 'Master allocator: orchestrating generative tools across mood, copy, tokens, and code handoff while preserving 100% human accountability for emotional resonance', score: 4 },
      ],
    },
  ],
};
