import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Code, 
  Terminal, 
  GitBranch, 
  Activity,
  Server,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Layers,
  Briefcase,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

// --- Narrative Data Source (Enhanced Content) ---
const STORY_DATA = {
  meta: {
    name: "Bhavarth Bhangdia",
    role: "Machine Learning Engineer",
    email: "b.bhangdia@gmail.com",
    linkedin: "linkedin.com/in/bhavarth7bhangdia",
    github: "github.com/Bhavarth7"
  },
  chapters: [
    {
      id: "spark",
      title: "The Spark",
      subtitle: "System Initialization",
      content: "I am Bhavarth Bhangdia, a Machine Learning Engineer who builds production grade machine learning systems, scalable pipelines, and intelligent solutions grounded in mathematical clarity and rigorous engineering. I am driven by curiosity, precision, and the desire to transform complex ideas into reliable and purposeful systems. My work is guided by the belief that intelligent technology should enhance human capability while maintaining depth, structure, and integrity.",
      quote: "A mind shaped by data, guided by intention, and committed to building intelligence that matters.",
      icon: Terminal
    },
    {
      id: "beginnings",
      title: "Chapter I: Where It All Began",
      subtitle: "The Foundation",
      content: "I have always been drawn to structure, patterns, and the behaviour of dynamic systems. This inclination led me to pursue a B.Tech in Electronics and Communication Engineering at IIIT Allahabad, where I first worked with embedded systems and C++. The elegance of logic and structured thinking became the foundation for my engineering practice. Over time, the intersection of mathematics, intuition, and creativity led me toward data driven problem solving.",
      turningPoint: "The moment I realised that software could learn, adapt, and improve marked the beginning of a new direction. That realisation set the course toward machine learning and shaped the path I continue to follow.",
      icon: Cpu
    },
    {
      id: "discovery",
      title: "Chapter II: Discovery of ML",
      subtitle: "The Awakening",
      content: "My practical understanding of machine learning began with classification models and exploratory neural networks. I was fascinated by models uncovering relationships that are difficult to define manually. The combination of statistics, mathematical reasoning, and engineering felt transformative and motivated deeper experimentation.",
      timeline: ["Intro to ML", "First Classifier", "LSTM Experiments", "First Deployed System"],
      projects: [
        "Sentiment classifier demonstrating learned representations and actionable insights.",
        "LSTM experiments on temporal datasets to capture long term dependencies.",
        "Exploratory neural networks created to validate modelling assumptions."
      ],
      icon: Brain
    },
    {
      id: "expertise",
      title: "Chapter III: Building Expertise",
      subtitle: "Technical Progression",
      content: "I built a strong foundation across machine learning, deep learning, and systems engineering with a focus on production readiness, interpretability, and reliability. I convert research ideas into scalable solutions and deploy them with monitoring, drift detection, and performance guarantees.",
      skills: [
        { category: "Programming", tools: ["Python", "C++", "SQL"] },
        { category: "Frameworks", tools: ["PyTorch", "TensorFlow", "Scikit-learn"] },
        { category: "Systems", tools: ["AWS", "Docker", "Ray Serve", "FastAPI", "Microservices"] },
        { category: "Specializations", tools: ["Reinforcement Learning", "Deep Learning", "Time-series", "LLM Orchestration"] }
      ],
      extra: {
        dailyWorkflow: ["Experiment tracking (W&B or MLflow)", "Containerization & deployment (Docker, AWS)", "Monitoring & drift detection", "Dataset versioning (DVC/Git LFS)"],
        note: "System architecture diagrams and technical appendices are available for each project."
      },
      icon: Layers
    },
    {
      id: "impact",
      title: "Chapter IV: Real Projects, Real Impact",
      subtitle: "Case Studies",
      content: "Theory meets execution. Below are production oriented systems I have architected, each described with problem, approach, and measurable outcomes where possible.",
      projects: [
        {
          title: "Smart Power Allocation",
          problem: "Inefficient power distribution under fluctuating demand.",
          approach: "Built a custom simulation environment, implemented DQN and PPO agents, and designed reward shaping to balance cost and stability.",
          result: "Reduced simulated operational cost and improved load stability across multiple scenarios. Included system diagrams and evaluation metrics."
        },
        {
          title: "Predictive Maintenance (LSTM)",
          problem: "Unplanned equipment failures causing downtime.",
          approach: "Multivariate LSTM forecasting with engineered features, automated drift detection, and a monitored inference pipeline.",
          result: "Enabled early fault alerts and reduced unplanned downtime in production trials."
        },
        {
          title: "Hybrid Sentiment Analysis",
          problem: "Low quality insights from unstructured customer feedback.",
          approach: "Hybrid BiLSTM + CNN architecture capturing sequential context and phrase level signals, trained with pre trained embeddings and robust validation.",
          result: "Improved classification accuracy and domain generalisation across multiple datasets."
        },
        {
          title: "Customer Churn Prediction",
          problem: "High churn among enterprise SaaS customers.",
          approach: "Random Forest models with behavioural and financial features, integrated drift monitoring and backtests.",
          result: "Achieved 85% accuracy, reduced churn by 8%, and helped preserve approximately USD 1.6M in ARR."
        },
        {
          title: "Probabilistic Financial Risk",
          problem: "Uncertainty in financial decision making.",
          approach: "Bayesian models and Monte Carlo simulations for realistic uncertainty quantification.",
          result: "Delivered actionable risk indicators and improved forecast reliability."
        },
        {
          title: "Brand Extraction Framework",
          problem: "Absence of scalable systems for structured brand data extraction.",
          approach: "High throughput LLM pipelines using Firecrawl, Ray Serve, and FastAPI with JSON-mode validation and error handling.",
          result: "Consistent extraction at scale with reliability controls and monitoring."
        },
        {
          title: "Gen AI Video Pipeline",
          problem: "Difficulty producing coherent, quick marketing videos.",
          approach: "Multimodal pipeline generating six chained video segments using last-frame continuity and LLM driven prompt chaining.",
          result: "Produced smooth 30 second marketing videos from a single input image with repeatable narrative structure."
        }
      ],
      icon: Activity
    },
    {
      id: "experience",
      title: "Chapter V: Professional Experience",
      subtitle: "The Career Timeline",
      jobs: [
        { role: "ML Engineer", company: "Pixlr", desc: "Developed brand extraction systems, built scalable backends, and orchestrated production grade LLM workflows." },
        { role: "AI Coder", company: "Scale AI", desc: "Delivered high quality structured data generation and ML evaluation for enterprise datasets." },
        { role: "Data Science Intern", company: "Alphaa AI", desc: "Built churn prediction models, probabilistic risk modules, and end to end analytics systems." },
        { role: "Software Developer Intern", company: "AITA", desc: "Contributed to backend services, multi module components, and early stage infrastructure." }
      ],
      achievements: [
        "Delivered a churn prediction system that preserved USD 1.6 million in ARR with an 85% accurate model.",
        "Built a reinforcement learning power allocation engine improving operational stability and efficiency.",
        "Developed scalable LLM driven brand extraction pipelines using Ray Serve, Firecrawl, and FastAPI.",
        "Engineered LSTM predictive maintenance models enabling early failure detection and reduced downtime.",
        "Created a multimodal video generation pipeline producing coherent 30 second marketing videos from a single image."
      ],
      icon: Briefcase
    },
    {
      id: "philosophy",
      title: "Chapter VI: How I Think & Build",
      subtitle: "Engineering Philosophy",
      content: "Intelligent systems must be grounded in mathematical clarity, robust engineering, and interpretability. Data should guide decisions, and models should evolve with purpose. I prioritise reliability, monitoring, and measurable outcomes when moving from prototype to production.",
      framework: [
        "Understand the system in context.",
        "Define constraints clearly.",
        "Break down complexity into modular components.",
        "Build iteratively guided by data and feedback.",
        "Deploy with monitoring, drift detection, and reliability guarantees."
      ],
      mindset: "Balance experimentation with structure. Prioritise reproducibility, maintainability, and performance. Treat models as evolving systems, not static outputs.",
      icon: GitBranch
    },
    {
      id: "future",
      title: "The Next Chapter",
      subtitle: "What's Next",
      content: "A future shaped by continuous learning, deeper exploration of multimodal intelligence, and the ambition to build production level machine learning solutions that scale. I seek opportunities that demand system level thinking, creativity, and the ability to transform complex ideas into impactful products.",
      icon: ArrowRight
    }
  ]
};

// --- Utility Components ---

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
};

// --- Visual Effects ---

const CinematicParticles = ({ intensity = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: 40 * intensity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.3 * intensity,
      speedY: (Math.random() - 0.5) * 0.3 * intensity,
      opacity: Math.random() * 0.5
    }));

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'; // Trail effect (Slate-950)
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${p.opacity})`; // Teal-400
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- Chapter Components ---

const ChapterTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-teal-500 font-mono text-sm tracking-widest mb-2 uppercase">{subtitle}</h3>
    <h2 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">{title}</h2>
  </div>
);

const NarrativeText = ({ text }) => (
  <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-6 md:mb-8 border-l-2 border-teal-500/30 pl-4 md:pl-6">
    {text}
  </p>
);

// 1. Spark (Intro)
const SparkChapter = ({ data, isActive }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10">
    <div className={`transition-all duration-1000 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      <div className="inline-block p-4 rounded-full bg-teal-500/10 border border-teal-500/50 mb-8 animate-pulse">
        <Terminal size={48} className="text-teal-400" />
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 mb-6">
        {STORY_DATA.meta.name}
      </h1>
      <p className="text-xl text-teal-400 font-light tracking-wide mb-8">{STORY_DATA.meta.role}</p>
      
      <div className="max-w-2xl mx-auto mb-10">
        {/* Split content into paragraphs if needed */}
        <p className="text-slate-400 text-lg leading-relaxed">{data.content}</p>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-6 border-y border-slate-800 bg-slate-900/30 backdrop-blur-sm">
        <p className="text-xl md:text-2xl text-slate-200 italic font-light font-serif">"{data.quote}"</p>
      </div>
    </div>
    
    <div className="absolute bottom-12 animate-bounce text-slate-600">
      <p className="text-xs uppercase tracking-widest mb-2">Begin Journey</p>
      <ChevronDown className="mx-auto" />
    </div>
  </div>
);

// 2. Beginnings (Chapter I)
const FoundationChapter = ({ data, isActive }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
    <div className={`transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
      <NarrativeText text={data.content} />
      
      <div className="mt-8 p-6 bg-slate-900/50 border-l-4 border-teal-500 rounded-r-xl">
        <h4 className="text-teal-400 font-bold mb-2 flex items-center gap-2">
            <Lightbulb size={18} /> The Turning Point
        </h4>
        <p className="text-slate-300 italic">{data.turningPoint}</p>
      </div>
    </div>
    <div className={`relative flex justify-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      {/* Visual: Abstract Chip */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 bg-slate-900 border border-teal-900/50 rounded-lg p-8 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(20,182,166,0.1)]">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         <Cpu size={120} className="text-teal-500/80 drop-shadow-[0_0_15px_rgba(20,182,166,0.5)]" />
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-scan"></div>
      </div>
    </div>
  </div>
);

// 3. Discovery (Chapter II)
const DiscoveryChapter = ({ data, isActive }) => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
    <div className={`mb-8 sm:mb-12 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
    </div>
    
    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
      <div className={`text-left transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <NarrativeText text={data.content} />
        
        <div className="mt-6 md:mt-8">
          <h4 className="text-white font-semibold mb-3 md:mb-4">Timeline Markers</h4>
          
          {/* Mobile-friendly vertical list */}
          <div className="flex flex-col gap-3 text-sm text-slate-400 md:hidden">
            {data.timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-px bg-slate-700" />
                <span className="flex-1 px-3 py-1 border border-slate-700 rounded-full bg-slate-900/70">{item}</span>
              </div>
            ))}
          </div>

          {/* Horizontal view for md+ */}
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-400 overflow-x-auto pb-2">
            {data.timeline.map((item, i) => (
              <React.Fragment key={i}>
                <span className="whitespace-nowrap px-3 py-1 border border-slate-700 rounded-full bg-slate-900">{item}</span>
                {i < data.timeline.length - 1 && <div className="w-8 h-px bg-slate-700 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-2xl border border-teal-900/50 text-left transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <h4 className="text-teal-400 font-bold mb-4 sm:mb-6 text-xl flex flex-wrap items-center gap-2">
            <Brain size={20} /> First Experiments
        </h4>
        <ul className="space-y-4">
          {data.projects.map((proj, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              <span className="text-sm sm:text-base leading-relaxed">{proj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// 4. Expertise (Chapter III)
const ExpertiseChapter = ({ data, isActive }) => (
  <div className="max-w-6xl mx-auto px-6">
    <div className={`text-center mb-16 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">{data.content}</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.skills.map((group, idx) => (
        <div 
          key={idx}
          className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-teal-500/30 transition-all duration-700 delay-[${idx * 100}ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <h4 className="text-lg font-bold text-teal-100 mb-4 border-b border-slate-800 pb-2">
            {group.category}
          </h4>
          <ul className="space-y-2">
            {group.tools.map((tool, tIdx) => (
              <li key={tIdx} className="flex items-center gap-2 text-slate-400 text-sm group">
                <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors" />
                <span className="group-hover:text-slate-200 transition-colors">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-8 max-w-4xl mx-auto text-sm text-slate-400">
      <h4 className="text-teal-300 font-semibold mb-2">Daily Workflow</h4>
      <p>{data.extra.note}</p>
      <ul className="mt-3 flex flex-wrap gap-3">
        {data.extra.dailyWorkflow.map((w, i) => (
          <li key={i} className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 border border-slate-700 text-xs">{w}</li>
        ))}
      </ul>
    </div>
  </div>
);

// 5. Impact (Chapter IV) - Refactored for Multiple Projects
const ImpactChapter = ({ data, isActive }) => (
  <div className="max-w-7xl mx-auto px-6">
    <div className={`text-center mb-12 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
      <p className="text-slate-400 max-w-2xl mx-auto">{data.content}</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.projects.map((project, idx) => (
        <div 
          key={idx}
          className={`bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-teal-500/40 hover:bg-slate-800/60 transition-all duration-500 group ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Problem</span>
              <p className="text-slate-400 leading-snug">{project.problem}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Approach</span>
              <p className="text-slate-400 leading-snug">{project.approach}</p>
            </div>
            <div className="pt-3 mt-2 border-t border-slate-800">
              <span className="text-xs text-teal-500/80 uppercase tracking-wider block mb-1">Result</span>
              <p className="text-teal-100 font-medium">{project.result}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 6. Experience (Chapter V) - New Component
const ExperienceChapter = ({ data, isActive }) => (
  <div className="max-w-5xl mx-auto px-6">
    <div className={`text-center mb-16 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Timeline */}
      <div className={`space-y-8 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Briefcase size={24} className="text-teal-500" /> Roles</h3>
        {data.jobs.map((job, idx) => (
          <div key={idx} className="relative pl-6 border-l border-slate-800">
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_#14b8a6]"></div>
            <h4 className="text-xl font-semibold text-slate-200">{job.company}</h4>
            <p className="text-teal-400 text-sm mb-2">{job.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{job.desc}</p>
          </div>
        ))} 
      </div>

      {/* Achievements */}
      <div className={`bg-slate-900/30 p-8 rounded-2xl border border-slate-800 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Activity size={24} className="text-teal-500" /> Key Achievements</h3>
        <ul className="space-y-6">
          {data.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle size={20} className="text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// 7. Philosophy (Chapter VI)
const PhilosophyChapter = ({ data, isActive }) => (
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
    <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <ChapterTitle title={data.title} subtitle={data.subtitle} />
      <NarrativeText text={data.content} />
      
      <div className="mt-8">
        <h4 className="text-white font-bold mb-4 text-lg">Engineering Mindset</h4>
        <p className="text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-4">
            "{data.mindset}"
        </p>
      </div>
    </div>

    <div className={`bg-slate-900/50 border border-slate-800 rounded-2xl p-8 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h4 className="text-teal-400 font-bold mb-6 text-xl flex items-center gap-2">
        <GitBranch size={24} /> Problem Solving Framework
      </h4>
      <div className="space-y-4">
        {data.framework.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-500 font-mono text-sm group-hover:bg-teal-500 group-hover:text-black transition-colors">
              {idx + 1}
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 8. Future (Final)
const FutureChapter = ({ data, isActive }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
    <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/50">
        <ArrowRight size={40} className="text-teal-400" />
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">{data.title}</h2>
      <p className="text-xl text-slate-400 leading-relaxed mb-12">{data.content}</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a href={`mailto:${STORY_DATA.meta.email}`} className="flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(13,148,136,0.4)]">
          <Mail size={20} />
          <span>Initiate Contact</span>
        </a>
        <div className="flex gap-4">
            <a href={`https://${STORY_DATA.meta.linkedin}`} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 text-white transition-colors border border-slate-700">
                <Linkedin size={20} />
            </a>
            <a href={`https://${STORY_DATA.meta.github}`} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 text-white transition-colors border border-slate-700">
                <Github size={20} />
            </a>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Layout ---

const App = () => {
  const scrollProgress = useScrollProgress();
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      chapterRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop <= scrollPosition && (ref.offsetTop + ref.offsetHeight) > scrollPosition) {
          setActiveChapter(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderChapterContent = (chapter, index, isActive) => {
    switch (chapter.id) {
      case 'spark': return <SparkChapter data={chapter} isActive={isActive} />;
      case 'beginnings': return <FoundationChapter data={chapter} isActive={isActive} />;
      case 'discovery': return <DiscoveryChapter data={chapter} isActive={isActive} />;
      case 'expertise': return <ExpertiseChapter data={chapter} isActive={isActive} />;
      case 'impact': return <ImpactChapter data={chapter} isActive={isActive} />;
      case 'experience': return <ExperienceChapter data={chapter} isActive={isActive} />;
      case 'philosophy': return <PhilosophyChapter data={chapter} isActive={isActive} />;
      case 'future': return <FutureChapter data={chapter} isActive={isActive} />;
      default: return <div className="text-white">Chapter Under Construction</div>;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>
        <CinematicParticles intensity={1 + (activeChapter * 0.2)} />
      </div>

      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {STORY_DATA.chapters.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => chapterRefs.current[idx].scrollIntoView({ behavior: 'smooth' })}
            className={`w-1 transition-all duration-300 rounded-full ${activeChapter === idx ? 'h-12 bg-teal-500 shadow-[0_0_10px_#14b8a6]' : 'h-3 bg-slate-700 hover:bg-slate-500'}`}
            aria-label={`Go to chapter ${idx + 1}`}
          />
        ))}
      </div>

      <div className="fixed top-8 right-8 z-50 font-mono text-xs tracking-widest text-slate-500">
        CHAPTER <span className="text-teal-400 font-bold text-lg">{String(activeChapter + 1).padStart(2, '0')}</span> / {String(STORY_DATA.chapters.length).padStart(2, '0')}
      </div>

      <main className="relative z-10">
        {STORY_DATA.chapters.map((chapter, index) => (
          <section 
            key={chapter.id}
            ref={el => chapterRefs.current[index] = el}
            className="min-h-screen flex items-center justify-center py-24 relative border-b border-slate-900/50"
          >
            {renderChapterContent(chapter, index, activeChapter === index)}
          </section>
        ))}
      </main>

      <footer className="relative z-10 py-6 text-center text-slate-600 text-sm font-mono border-t border-slate-900 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} {STORY_DATA.meta.name}. Status: Operational.</p>
      </footer>

    </div>
  );
};

export default App;
