import { useState, useEffect, useRef } from 'react';
import {
  Mail,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  FileText,
  ExternalLink,
  BookOpen,
  Calendar,
  Clock,
  Tag,
  CheckCircle,
  Zap,
  Shield,
  Target,
  Layers,
  Activity,
  Globe,
  MessageSquare,
  Users,
  TrendingDown,
} from 'lucide-react';
import profilePhoto from './assets/bhavy.jpg';

// Using non-deprecated icon names
const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// ============================================================
// DATA
// ============================================================

const META = {
  name: "Bhavarth Bhangdia",
  role: "Applied AI Engineer",
  tagline: "I build AI systems that survive contact with production.",
  subtitle: "Agentic workflows, enterprise RAG, multimodal generation, ML systems, and AI automation — designed from MVP through evaluation, deployment, and scale.",
  proof: "Built AI systems for a 6M+ user creative platform, reduced manual intervention by 47%, lowered LLM workflow latency by 33%, cut inference cost by 25%, and optimized p95 generation latency from 33s to 7.9s.",
  opportunity: "Open to full-time and selected contract engagements. Based in India, experienced collaborating remotely with Singapore and San Francisco teams.",
  email: "b.bhangdia@gmail.com",
  linkedin: "https://linkedin.com/in/bhavarth7bhangdia",
  github: "https://github.com/Bhavarth7",
  cvUrl: "./assets/bhavarth-bhangdia-applied-ai-engineer.pdf",
  location: "India · Remote-friendly",
};

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
];

const PROOF_CHIPS = [
  "6M+ user platform",
  "47% less manual intervention",
  "33s → 7.9s p95",
  "1.5K+ prompt evaluation suite",
];

const METRICS = [
  {
    value: "47%",
    label: "Reduction in manual intervention",
    qualifier: "Through skill-based agent routing at Pixlr",
    link: "#work",
  },
  {
    value: "33%",
    label: "Lower median LLM workflow latency",
    qualifier: "Production agentic system optimization",
    link: "#work",
  },
  {
    value: "25%",
    label: "Lower cost per request",
    qualifier: "Multi-model routing and caching strategy",
    link: "#work",
  },
  {
    value: "33s → 7.9s",
    label: "p95 multimodal generation latency",
    qualifier: "With 120% throughput improvement at Pixlr",
    link: "#work",
  },
];

const DELIVERY_PIPELINE = [
  { stage: "Frame", desc: "Product objective, constraints, baseline", icon: Target },
  { stage: "Architect", desc: "Agents, retrieval, APIs, data & state", icon: Layers },
  { stage: "Build", desc: "MVP, integrations, structured outputs", icon: Zap },
  { stage: "Validate", desc: "Golden sets, traces, failure taxonomy, safety", icon: Shield },
  { stage: "Scale", desc: "Serving, throughput, latency, cost & rollout", icon: Activity },
];

const FLAGSHIP_PROJECTS = [
  {
    slug: "production-agent-workflow",
    title: "Production Agent Workflow Layer",
    category: "Agentic Systems · Professional",
    company: "Pixlr",
    context: "professional",
    confidentiality: "Selected details sanitized",
    description: "Reliable AI design automation for a 6M+ user creative platform. Architected the workflow layer with LangGraph, structured outputs, prompt versioning, multi-model routing, MCP-style tool interfaces, and moderation fallbacks.",
    ownership: ["Workflow architecture", "Prompt versioning system", "Multi-model routing", "Evaluation harness", "Production collaboration with product team"],
    evaluation: "Golden cases, trace inspection, failure taxonomy, tool-success metrics, regression checks.",
    metrics: [
      { value: "47%", label: "Less manual intervention" },
      { value: "33%", label: "Lower median latency" },
      { value: "25%", label: "Lower cost/request" },
    ],
    stack: ["LangGraph", "Structured Outputs", "MCP", "FastAPI", "Multi-model routing", "Moderation"],
    role: "ML & Product Development Engineer",
  },
  {
    slug: "skillmesh",
    title: "SkillMesh — Agentic Orchestration Platform",
    category: "Agent Infrastructure · Personal",
    context: "personal",
    description: "Agentic workflow orchestration platform with task router, skill registry, shared Redis state, checkpoints, fault recovery, and evaluation runner. Demonstrates recoverable failure traces where agent/tool steps fail, state is checkpointed, and the workflow resumes.",
    ownership: ["Full architecture", "Skill routing algorithm", "State checkpoint system", "Fault recovery mechanism", "Evaluation suite (1.5K+ prompts)"],
    evaluation: "1.5K+ prompt evaluation suite measuring task success, recovery rate, and latency.",
    metrics: [
      { value: "42%", label: "Task-success improvement" },
      { value: "1.5K+", label: "Evaluation prompts" },
    ],
    stack: ["LangGraph", "Redis", "FastAPI", "Checkpointing", "Skill Registry", "Evaluation"],
    role: "Creator and architect",
    links: { github: "https://github.com/Bhavarth7" },
  },
  {
    slug: "enterprise-rag-control-tower",
    title: "Enterprise RAG Control Tower",
    category: "RAG · Retrieval Systems",
    context: "personal",
    description: "Enterprise-grade ingestion and retrieval system with Vertex AI embeddings, FAISS retrieval, FastAPI service boundary, ranking, and synthesized insights. Built with cost/latency controls and citation coverage tracking.",
    ownership: ["Retrieval pipeline", "Ranking system", "Cost/latency budgets", "Citation coverage", "Service architecture"],
    evaluation: "Retrieval quality panel: citation coverage, latency budget adherence, cost budget, failure-state handling.",
    metrics: [
      { value: "27%", label: "Lower p95 query latency" },
      { value: "22%", label: "Lower per-query cost" },
    ],
    stack: ["Vertex AI", "FAISS", "FastAPI", "Embeddings", "Ranking", "Citation tracking"],
    role: "Full design and implementation",
    links: { github: "https://github.com/Bhavarth7" },
  },
  {
    slug: "multimodal-serving-optimization",
    title: "Multimodal Serving Optimization",
    category: "Performance Engineering · Professional",
    company: "Pixlr",
    context: "professional",
    confidentiality: "Selected details sanitized",
    description: "Optimized multimodal generation serving from 33s p95 to 7.9s through request batching, queue backpressure management, GPU workload tuning, and multi-GPU serving architecture.",
    ownership: ["Serving architecture redesign", "Batching strategy", "GPU utilization optimization", "Queue backpressure handling", "Throughput benchmarking"],
    evaluation: "Before/after p95 latency, throughput capacity, GPU utilization, and cost-per-request tracking.",
    metrics: [
      { value: "33s → 7.9s", label: "p95 latency" },
      { value: "120%", label: "Throughput improvement" },
    ],
    stack: ["Ray Serve", "GPU Inference", "Batching", "Queue Management", "SDXL", "Multi-GPU"],
    role: "ML & Product Development Engineer",
  },
];

const OPEN_SOURCE_PROJECTS = [
  {
    title: "RouteWise",
    category: "Open Source · AI Infrastructure",
    description: "Intelligent model router: decomposes tasks, classifies steps, selects optimal model within cost/latency/quality constraints, traces every decision.",
    stats: [
      { label: "Cost reduction", value: "78%" },
      { label: "Speed vs manual", value: "3×" },
      { label: "Completion", value: "94%" },
    ],
    stack: ["MCP", "Claude", "GPT-4", "Gemini", "TypeScript"],
    links: {
      github: "https://github.com/Bhavarth7/RouteWise",
      live: "https://routewise-ruddy.vercel.app/",
    },
  },
  {
    title: "Revenue Request-to-Execution Agent",
    category: "Google Hackathon · Enterprise AI",
    description: "Governed autonomous agent (Google ADK) transforming customer revenue requests into auditable business actions. Separates deterministic governance from AI reasoning.",
    stack: ["Google ADK", "Multi-Agent", "Python", "Governance"],
    links: { github: "https://github.com/Bhavarth7/Revenue-Request-to-Execution-Agent" },
  },
  {
    title: "HeartMuLa: Music Foundation Models",
    category: "Open Source · Generative AI",
    description: "Open-source music foundation models for controllable generation with multilingual lyrics. Transformer LM + 12.5 Hz neural codec + Whisper transcription.",
    stack: ["PyTorch", "Transformers", "Whisper", "Audio Codecs"],
    links: { github: "https://github.com/Bhavarth7/Open_Source_Music-Foundation" },
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning & Product Development Engineer",
    company: "Pixlr Pte Ltd",
    period: "Aug 2024 – Jun 2026",
    location: "Singapore team · Remote",
    theme: "Production Applied AI systems",
    highlights: [
      "Architected production agent workflow layer for 6M+ user platform",
      "47% reduction in manual intervention through skill-based routing",
      "Optimized p95 latency from 33s to 7.9s with 120% throughput gain",
      "Built evaluation harness with golden sets, trace inspection, and regression checks",
    ],
    scope: ["Workflow design", "Evaluation", "Safety", "Serving optimization", "Product collaboration"],
  },
  {
    role: "AI Data Expert",
    company: "Scale AI",
    period: "Dec 2023 – Mar 2024",
    location: "San Francisco team · Remote",
    theme: "Evaluation discipline",
    highlights: [
      "Evaluated 1,400+ LLM and code-generation outputs",
      "Assessment criteria: correctness, instruction adherence, reasoning, hallucination risk, completeness, edge cases",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Alphaa AI",
    period: "Sep 2023 – Dec 2023",
    location: "Bengaluru, India",
    theme: "Business-facing applied ML",
    highlights: [
      "Built customer behavior and churn prediction models",
      "Identified high-risk segments and actionable retention insights",
    ],
  },
];

const CAPABILITIES = [
  {
    label: "Agent Systems",
    items: ["LangGraph", "LangChain", "CrewAI", "MCP interfaces", "State management", "Routing", "Fault recovery"],
  },
  {
    label: "RAG & Retrieval",
    items: ["FAISS", "Vertex AI embeddings", "Vector search", "Ranking", "Semantic search", "Citation tracking"],
  },
  {
    label: "Evaluation & Reliability",
    items: ["Golden sets", "Regression checks", "Trace inspection", "Failure taxonomy", "Moderation", "Safety"],
  },
  {
    label: "ML & Multimodal",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Diffusion", "SDXL", "Model evaluation"],
  },
  {
    label: "Serving & Scale",
    items: ["FastAPI", "Ray Serve", "Docker", "GPU inference", "Batching", "Multi-GPU", "Queue management"],
  },
  {
    label: "Cloud & Data",
    items: ["AWS", "GCP", "Redis", "Kubernetes", "Airflow", "SQL", "DVC"],
  },
];

const WRITING_PREVIEWS = [
  {
    title: "Designing Failure-Tolerant Agent Workflows with Explicit State",
    excerpt: "How checkpoint-based recovery and explicit state management prevent cascading failures in multi-step agentic systems.",
    tags: ["Agents", "Architecture"],
    status: "draft",
  },
  {
    title: "How to Evaluate Multi-Step Agents Beyond Final-Answer Accuracy",
    excerpt: "Why end-to-end accuracy hides critical failure modes, and a practical evaluation framework using trace-level metrics.",
    tags: ["Evaluation", "Agents"],
    status: "draft",
  },
  {
    title: "Latency, Cost, and Reliability Trade-offs in Production LLM Routing",
    excerpt: "The decision framework behind multi-model routing: when to use expensive models, how to measure, and where the savings hide.",
    tags: ["LLM", "Production"],
    status: "draft",
  },
  {
    title: "RAG Retrieval Quality: What a Chatbot UI Does Not Show",
    excerpt: "Building retrieval quality panels that surface citation coverage, latency budgets, and failure states beyond the chat interface.",
    tags: ["RAG", "Observability"],
    status: "draft",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

// --- Navigation ---
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-18" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="font-bold text-white text-lg tracking-tight" aria-label="Home">
          BB<span className="text-accent-500">/</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-xs text-emerald-400 font-mono mr-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            Open to FTE + Contract
          </span>
          <a
            href={META.cvUrl}
            target="_blank"
            rel="noopener"
            className="btn-secondary text-sm py-1.5 px-3"
            aria-label="View Bhavarth Bhangdia's CV as a PDF"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>
          <a href="#contact" className="btn-primary text-sm py-1.5 px-3">
            <span>Start a conversation</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-slate-800 animate-fade-in">
          <div className="section-container py-6 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-slate-300 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-800">
              <a
                href={META.cvUrl}
                target="_blank"
                rel="noopener"
                className="btn-secondary flex-1 justify-center text-sm"
                aria-label="View CV"
              >
                <FileText size={14} />
                <span>View CV</span>
              </a>
              <a href="#contact" className="btn-primary flex-1 justify-center text-sm" onClick={() => setMobileOpen(false)}>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Hero ---
const Hero = () => (
  <section className="min-h-[92vh] flex items-center section-padding pt-28 sm:pt-32">
    <div className="section-container">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="label-text mb-4 animate-fade-in">
            Applied AI Engineer / Production Systems IC
          </p>

          {/* Headline */}
          <h1 className="heading-1 mb-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {META.tagline}
          </h1>

          {/* Supporting copy */}
          <p className="body-text max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {META.subtitle}
          </p>

          {/* Proof chips */}
          <div className="flex flex-wrap gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            {PROOF_CHIPS.map((chip) => (
              <span key={chip} className="px-3 py-1.5 bg-accent-900/20 border border-accent-700/30 rounded-full text-sm text-accent-300 font-mono">
                {chip}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="#work" className="btn-primary">
              <span>Explore production work</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={META.cvUrl}
              target="_blank"
              rel="noopener"
              className="btn-secondary"
              aria-label="View Bhavarth Bhangdia's CV as a PDF"
            >
              <FileText size={16} />
              <span>View CV</span>
            </a>
          </div>

          {/* Opportunity link */}
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent-400 transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Discuss an opportunity
            <ArrowRight size={14} />
          </a>

          {/* Availability */}
          <p className="mt-8 text-xs text-slate-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {META.opportunity}
          </p>
        </div>

        {/* Right: Profile + Agent Trace Visual */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-500/20 via-accent-600/5 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative p-[3px] rounded-full bg-gradient-to-br from-accent-400 via-accent-600/60 to-slate-700/40">
              <img
                src={profilePhoto}
                alt="Bhavarth Bhangdia — Applied AI Engineer"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Mini Agent Trace — compact visual showing system thinking */}
          <AgentTraceVisual />
        </div>
      </div>
    </div>
  </section>
);

// --- Agent Trace Visual (Hero) ---
const TRACE_NODES = [
  { label: "Intent", detail: "Parse user request" },
  { label: "Router", detail: "Model & skill selection" },
  { label: "Skill", detail: "Scoped execution" },
  { label: "Tool", detail: "Structured interface" },
  { label: "Validator", detail: "Schema + safety check" },
  { label: "Response", detail: "Latency: 420ms · $0.003" },
];

const AgentTraceVisual = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [animIndex, setAnimIndex] = useState(-1);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Run the trace animation once on mount
    let idx = 0;
    intervalRef.current = setInterval(() => {
      setAnimIndex(idx);
      idx++;
      if (idx >= TRACE_NODES.length) {
        clearInterval(intervalRef.current);
      }
    }, 800);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full max-w-xs" role="figure" aria-label="Agent execution trace showing how AI workflows are processed: Intent, Router, Skill, Tool, Validator, Response">
      <p className="text-xs font-mono text-slate-600 mb-3 text-center">Execution trace</p>
      <div className="flex flex-col gap-1">
        {TRACE_NODES.map((node, i) => {
          const isAnimated = i <= animIndex;
          const isHovered = activeNode === i;
          return (
            <button
              key={node.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-300 focus-visible:outline-accent-500 ${
                isAnimated
                  ? 'bg-slate-800/60 border border-slate-700/60'
                  : 'bg-slate-900/30 border border-slate-800/30 opacity-40'
              } ${isHovered ? 'border-accent-500/50 bg-slate-800' : ''}`}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(i)}
              onBlur={() => setActiveNode(null)}
              tabIndex={0}
              aria-label={`${node.label}: ${node.detail}`}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                isAnimated ? 'bg-accent-500' : 'bg-slate-700'
              }`} />
              <span className="text-xs font-mono text-slate-300 w-16">{node.label}</span>
              <span className={`text-xs text-slate-500 transition-opacity ${isHovered ? 'opacity-100 text-slate-300' : 'opacity-60'}`}>
                {node.detail}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-[10px] text-slate-600 mt-2 text-center font-mono">
        One restrained sequence · keyboard accessible
      </p>
    </div>
  );
};

// --- Operating Range / Delivery Pipeline ---
const OperatingRange = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="section-padding border-t border-slate-800/50">
      <div className="section-container">
        <p className="label-text mb-3">Operating Range</p>
        <h2 className="heading-2 mb-12">One IC across the full applied-AI delivery path</h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Pipeline stages */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-1">
              {DELIVERY_PIPELINE.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeStage === idx;
                return (
                  <button
                    key={item.stage}
                    onClick={() => setActiveStage(idx)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-accent-900/20 border border-accent-700/30'
                        : 'border border-transparent hover:bg-slate-800/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-accent-600/20 text-accent-400' : 'bg-slate-800 text-slate-500'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {item.stage}
                      </p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-500"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Example panel */}
          <div className="lg:col-span-7">
            <div className="card h-full flex flex-col justify-center">
              <PipelineExample stage={activeStage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PIPELINE_EXAMPLES = [
  { title: "Frame — Production Agent Workflow", text: "Defined the objective: automate repetitive design tasks for 6M+ users without degrading quality. Constraints: <2s latency for simple tasks, <$0.05/request budget, must fallback gracefully on model failures. Baseline: 100% manual intervention on design iterations." },
  { title: "Architect — SkillMesh", text: "Designed task router → skill registry → shared Redis state → checkpoint → recovery architecture. Key decision: explicit state over implicit message passing, enabling recovery without re-execution. MCP-style tool interfaces for extensibility." },
  { title: "Build — Enterprise RAG", text: "Built Vertex AI embeddings + FAISS retrieval + FastAPI service boundary. Structured outputs ensure citations are always traceable. Integrated ranking layer to surface highest-confidence evidence first." },
  { title: "Validate — Evaluation Suite", text: "1.5K+ prompt evaluation suite covering golden cases, edge-case failures, hallucination risk, tool-call correctness, and regression detection. Failure taxonomy: model refusal, schema violation, timeout, unsafe content, incomplete execution." },
  { title: "Scale — Multimodal Serving", text: "Optimized p95 from 33s to 7.9s through request batching, queue backpressure management, GPU workload tuning, and multi-GPU architecture. 120% throughput improvement while maintaining quality thresholds." },
];

const PipelineExample = ({ stage }) => {
  const example = PIPELINE_EXAMPLES[stage];
  return (
    <div>
      <p className="label-text mb-2">{example.title}</p>
      <p className="text-sm text-slate-300 leading-relaxed">{example.text}</p>
    </div>
  );
};

// --- Measured Impact ---
const MeasuredImpact = () => (
  <section className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <p className="label-text mb-3">Measured Impact</p>
      <h2 className="heading-2 mb-12">Production outcomes, not benchmarks</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((m) => (
          <a
            key={m.value}
            href={m.link}
            className="card group flex flex-col gap-4 hover:border-accent-600/40"
          >
            <p className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-tight group-hover:text-accent-400 transition-colors">
              {m.value}
            </p>
            <div>
              <p className="text-sm font-medium text-slate-200 mb-1">{m.label}</p>
              <p className="text-xs text-slate-500">{m.qualifier}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// --- Flagship Work ---
const FlagshipWork = () => (
  <section id="work" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <p className="label-text mb-3">Production Work</p>
      <h2 className="heading-2 mb-4">Flagship case studies</h2>
      <p className="body-text mb-12 max-w-2xl">
        Systems built with explicit ownership, evaluation, and measurable outcomes. Professional work shown with sanitized details.
      </p>

      <div className="grid gap-8">
        {FLAGSHIP_PROJECTS.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Open Source */}
      <div className="mt-20">
        <p className="label-text mb-3">Open Source & Hackathons</p>
        <h3 className="heading-2 mb-8">Building in public</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {OPEN_SOURCE_PROJECTS.map((p) => (
            <OpenSourceCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CaseStudyCard = ({ project }) => (
  <article className="card group">
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="label-text">{project.category}</p>
            {project.confidentiality && (
              <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
                {project.confidentiality}
              </span>
            )}
          </div>
          <h3 className="heading-3 group-hover:text-accent-400 transition-colors">{project.title}</h3>
          {project.company && (
            <p className="text-sm text-accent-500 mt-1">{project.company} · {project.role}</p>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-right">
                <p className="text-2xl font-bold text-white font-mono">{m.value}</p>
                <p className="text-xs text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="body-text">{project.description}</p>

      {/* Ownership */}
      {project.ownership && (
        <div>
          <p className="text-xs font-semibold text-slate-300 mb-2">Personal ownership:</p>
          <div className="flex flex-wrap gap-2">
            {project.ownership.map((item) => (
              <span key={item} className="text-xs px-2.5 py-1 bg-slate-800/60 text-slate-300 rounded-lg border border-slate-700/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Evaluation */}
      {project.evaluation && (
        <div className="p-4 bg-slate-800/20 border border-slate-700/40 rounded-lg">
          <p className="text-xs font-semibold text-accent-400 mb-1 flex items-center gap-1.5">
            <Shield size={12} /> Evaluation method
          </p>
          <p className="text-sm text-slate-400">{project.evaluation}</p>
        </div>
      )}

      {/* Stack + Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/50">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            aria-label={`View ${project.title} source`}
          >
            <GithubIcon size={13} />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

const OpenSourceCard = ({ project }) => (
  <article className="card group flex flex-col h-full">
    <div className="flex-1">
      <p className="label-text mb-2">{project.category}</p>
      <h4 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors mb-2">
        {project.title}
      </h4>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

      {project.stats && (
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
          {project.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-base font-bold text-accent-400 font-mono">{s.value}</p>
              <p className="text-[10px] text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700/50">{t}</span>
        ))}
      </div>
    </div>

    <div className="flex gap-4 pt-4 mt-4 border-t border-slate-800/50">
      {project.links.github && (
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors" aria-label={`${project.title} source code`}>
          <GithubIcon size={13} /> Source
        </a>
      )}
      {project.links.live && (
        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-accent-400 hover:text-accent-300 transition-colors" aria-label={`${project.title} live demo`}>
          <ExternalLink size={13} /> Live
        </a>
      )}
    </div>
  </article>
);

// --- Experience ---
const ExperienceSection = () => (
  <section id="experience" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <p className="label-text mb-3">Experience</p>
      <h2 className="heading-2 mb-4">Increasing system responsibility</h2>
      <p className="body-text mb-12 max-w-xl">Career progression from infrastructure and data to production AI systems at scale.</p>

      <div className="space-y-0">
        {EXPERIENCE.map((job, idx) => (
          <ExperienceCard key={idx} job={job} />
        ))}
      </div>
    </div>
  </section>
);

const ExperienceCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group py-8 border-b border-slate-800/50 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <div className="sm:w-44 shrink-0">
          <p className="text-sm font-mono text-slate-500">{job.period}</p>
          <p className="text-xs text-slate-600 mt-0.5">{job.location}</p>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
            {job.role}
          </h3>
          <p className="text-sm text-accent-500 mb-1">{job.company}</p>
          <p className="text-xs text-slate-500 italic mb-4">{job.theme}</p>

          <ul className="space-y-2">
            {job.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                <CheckCircle size={14} className="text-accent-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {job.scope && (
            <div className="mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs text-slate-500 hover:text-accent-400 transition-colors flex items-center gap-1"
                aria-expanded={expanded}
              >
                {expanded ? 'Hide' : 'Show'} scope of ownership
                <ArrowRight size={10} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
              </button>
              {expanded && (
                <div className="mt-3 flex flex-wrap gap-2 animate-fade-in">
                  {job.scope.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Capabilities ---
const CapabilitiesSection = () => (
  <section id="capabilities" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <p className="label-text mb-3">Capabilities</p>
      <h2 className="heading-2 mb-4">Grouped by outcome, not logo cloud</h2>
      <p className="body-text mb-12 max-w-xl">Every capability links to evidence in case studies above. Technologies belong inside the work where their purpose is clear.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((group) => (
          <div key={group.label} className="p-5 rounded-xl border border-slate-800/50 bg-slate-900/20">
            <h4 className="text-sm font-semibold text-white mb-3">{group.label}</h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Writing ---
const WritingSection = () => (
  <section id="writing" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <p className="label-text mb-3">Writing</p>
      <h2 className="heading-2 mb-4">Original thinking, not rewritten docs</h2>
      <p className="body-text mb-12 max-w-xl">
        Deep dives on agent evaluation, production LLM routing, RAG quality, and system reliability. Publishing soon.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {WRITING_PREVIEWS.map((post) => (
          <article key={post.title} className="card group opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-3">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs text-accent-500 font-mono">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="text-base font-semibold text-white group-hover:text-accent-400 transition-colors mb-2 leading-snug">
              {post.title}
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
            <span className="px-2 py-0.5 bg-amber-900/30 text-amber-400 rounded text-xs font-mono inline-block">
              Coming soon
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// --- About ---
const About = () => (
  <section id="about" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <div className="max-w-3xl">
        <p className="label-text mb-3">About</p>
        <h2 className="heading-2 mb-8">Applied AI Engineer building reliable systems</h2>

        <div className="space-y-5 body-text">
          <p>
            I build AI systems that go beyond prototypes — agentic workflows with state management and 
            fault recovery, RAG pipelines with retrieval quality monitoring, and ML serving infrastructure 
            optimized for cost, latency, and reliability.
          </p>
          <p>
            My work at Pixlr (6M+ users, Singapore team) involved architecting the entire agent workflow layer: 
            LangGraph orchestration, multi-model routing, prompt versioning, evaluation harnesses with 
            golden sets, moderation fallbacks, and serving optimization that brought p95 from 33s to 7.9s.
          </p>
          <p>
            Before that, I evaluated 1,400+ LLM outputs at Scale AI (San Francisco team), building 
            disciplined assessment across correctness, hallucination risk, and edge cases. This evaluation 
            mindset carries through all my production work.
          </p>
          <p>
            B.Tech in Electronics and Communication Engineering from IIIT Allahabad. The transition to 
            Applied AI came from a fascination with systems that learn — and the engineering discipline 
            required to make them reliable enough for real users.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Timezone & Opportunity ---
const TimezoneOpportunity = () => (
  <section className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Timezone */}
        <div className="text-center mb-16">
          <Globe size={24} className="text-accent-500 mx-auto mb-4" />
          <p className="body-text max-w-2xl mx-auto mb-6">
            Based in India. Previously collaborated remotely with teams operating in Singapore and 
            San Francisco time zones. I establish intentional overlap for planning, pairing, reviews, 
            and incidents while protecting focused build time.
          </p>
          <p className="text-xs text-slate-600 font-mono">Working-hour overlap agreed per engagement</p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-900/20 flex items-center justify-center">
                <Users size={18} className="text-accent-400" />
              </div>
              <h4 className="font-semibold text-white">Full-time IC</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Product ownership, architecture, cross-functional delivery, long-term system quality. 
              Looking for teams building serious AI products.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-900/20 flex items-center justify-center">
                <Zap size={18} className="text-accent-400" />
              </div>
              <h4 className="font-semibold text-white">Contract</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Scoped AI workflow, RAG platform, evaluation harness, performance review, or 
              MVP-to-production engagement. Clear deliverables, clear timeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Contact / Close ---
const Contact = () => (
  <section id="contact" className="section-padding border-t border-slate-800/50">
    <div className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <MessageSquare size={28} className="text-accent-500 mx-auto mb-4" />
        <h2 className="heading-2 mb-4">Have an AI workflow that needs to become a reliable product?</h2>
        <p className="body-text mb-10">
          Tell me what you're building. I'm available for full-time roles, scoped contracts, 
          and architecture reviews.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href={`mailto:${META.email}`} className="btn-primary justify-center">
            <Mail size={16} />
            <span>Start a conversation</span>
          </a>
          <a
            href={META.cvUrl}
            target="_blank"
            rel="noopener"
            className="btn-secondary justify-center"
            aria-label="View CV as PDF"
          >
            <FileText size={16} />
            <span>View CV</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href={META.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn profile">
            <LinkedinIcon size={20} />
          </a>
          <a href={META.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub profile">
            <GithubIcon size={20} />
          </a>
          <a href={`mailto:${META.email}`} className="text-slate-500 hover:text-white transition-colors" aria-label="Send email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="py-8 border-t border-slate-800/50">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-slate-600 font-mono">
        © {new Date().getFullYear()} {META.name} · Applied AI Engineer
      </p>
      <div className="flex items-center gap-5">
        <a href={META.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub profile">
          <GithubIcon size={16} />
        </a>
        <a href={META.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn profile">
          <LinkedinIcon size={16} />
        </a>
        <a href={`mailto:${META.email}`} className="text-slate-500 hover:text-white transition-colors" aria-label="Send email">
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

// ============================================================
// APP
// ============================================================

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.06),transparent)]"></div>
      </div>

      <Navigation />
      <main>
        <Hero />
        <OperatingRange />
        <MeasuredImpact />
        <FlagshipWork />
        <ExperienceSection />
        <CapabilitiesSection />
        <WritingSection />
        <About />
        <TimezoneOpportunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
