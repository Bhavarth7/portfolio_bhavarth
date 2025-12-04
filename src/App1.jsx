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

// --- Narrative Data Source ---
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
      content: "I am Bhavarth, a Machine Learning Engineer driven by curiosity, precision, and the desire to transform complex ideas into purposeful systems. My work is inspired by the belief that intelligent technology should enhance human potential while maintaining clarity, reliability, and depth. My mission is to engineer systems that learn, adapt, and create meaningful impact.",
      quote: "A mind shaped by data, guided by intention, and committed to building intelligence that matters.",
      icon: Terminal
    },
    {
      id: "beginnings",
      title: "Chapter I: Where It All Began",
      subtitle: "The Foundation",
      content: "I grew up with a deep fascination for patterns, logic, and the way systems behave. Engineering became the natural path, leading to a B.Tech in Electronics and Communication Engineering at IIIT Allahabad. My first touch with programming was through embedded systems and C++. The elegance of structured thinking became a driving force. While I initially faced uncertainty about my core direction, the intersection of mathematics, intuition, and creativity eventually led me to data-driven problem solving.",
      turningPoint: "I realized that software could learn and improve, and that this power could redefine how products operate. This became the turning point that set the course toward machine learning.",
      icon: Cpu
    },
    {
      id: "discovery",
      title: "Chapter II: Discovery of ML",
      subtitle: "The Awakening",
      content: "Machine learning became clear during early experiments with classification models and neural networks. I was fascinated by the ability of models to uncover relationships humans cannot explicitly define. The blend of mathematics, statistics, and engineering felt transformative.",
      timeline: ["Intro to ML", "First Classifier", "LSTM Experiments", "First Deployed System"],
      projects: [
        "Sentiment Classifier: Demonstrating learned representation",
        "Early LSTM: Experiments on simple time-series",
        "Exploratory NN: Built purely out of curiosity"
      ],
      icon: Brain
    },
    {
      id: "expertise",
      title: "Chapter III: Building Expertise",
      subtitle: "Technical Progression",
      content: "I developed a strong foundation across core machine learning and software engineering disciplines, mastering both theory and production-level implementation. I focused on building systems that are robust, explainable, and aligned with real-world constraints.",
      skills: [
        { category: "Programming", tools: ["Python", "C++", "SQL"] },
        { category: "Frameworks", tools: ["PyTorch", "TensorFlow", "Scikit-learn"] },
        { category: "Systems", tools: ["AWS", "Docker", "Ray Serve", "FastAPI", "Microservices"] },
        { category: "Specializations", tools: ["Reinforcement Learning", "Deep Learning", "Time-series", "LLM Orchestration"] }
      ],
      icon: Layers
    },
    {
      id: "impact",
      title: "Chapter IV: Real Projects, Real Impact",
      subtitle: "Case Studies",
      content: "Theory meets application. Here are the systems I've architected to solve complex real-world problems.",
      projects: [
        {
          title: "Smart Power Allocation",
          problem: "Inefficient power distribution under fluctuating demand.",
          approach: "Built simulation env, implemented DQN/PPO agents with reward shaping.",
          result: "Significant reductions in operational cost & improved load stability."
        },
        {
          title: "Predictive Maintenance (LSTM)",
          problem: "Unexpected equipment failures leading to operational losses.",
          approach: "Multivariate time-series forecasting with automated drift detection.",
          result: "Enabled early fault detection and reduced machine downtime."
        },
        {
          title: "Hybrid Sentiment Analysis",
          problem: "Low-quality insights from unstructured customer data.",
          approach: "Hybrid BiLSTM + CNN model capturing sequential & phrase-level features.",
          result: "Strong sentiment classification with improved generalization."
        },
        {
          title: "Customer Churn Prediction",
          problem: "High churn among enterprise SaaS accounts.",
          approach: "Random Forest models with behavioral/financial features & drift monitoring.",
          result: "85% accuracy, 8% churn reduction, ~$1.6M ARR preserved."
        },
        {
          title: "Probabilistic Financial Risk",
          problem: "Uncertainty in financial decision making.",
          approach: "Probabilistic models, Bayesian analyses, and Monte Carlo simulations.",
          result: "Provided reliable risk indicators and improved forecasting accuracy."
        },
        {
          title: "Brand Extraction Framework",
          problem: "Lack of automated systems for extracting structured brand data.",
          approach: "Scalable LLM pipelines (Firecrawl, Ray Serve, FastAPI).",
          result: "High throughput extraction with stable performance."
        },
        {
          title: "Gen AI Video Pipeline",
          problem: "Difficulty in producing quick, engaging marketing videos.",
          approach: "Pipeline generating 6 chained video segments via LLM prompt chaining.",
          result: "Consistent 30s marketing videos with smooth narrative flow."
        }
      ],
      icon: Activity
    },
    {
      id: "experience",
      title: "Chapter V: Professional Experience",
      subtitle: "The Career Timeline",
      jobs: [
        { role: "ML Engineer", company: "Pixlr", desc: "Developed brand extraction systems, built scalable backends, orchestrated LLM pipelines." },
        { role: "AI Coder", company: "Scale AI", desc: "Delivered high quality data generation and ML evaluation tasks." },
        { role: "Data Science Intern", company: "Alphaa AI", desc: "Built churn models, risk models, and enterprise data systems." },
        { role: "Software Developer Intern", company: "AITA", desc: "Worked on backend services, early-stage infrastructure, and multi module development." }
      ],
      achievements: [
        "Delivered a churn prediction system that preserved USD 1.6 million in ARR through an 85 percent accurate model.",
        "Built a reinforcement learning based power allocation engine that improved operational efficiency and stability.",
        "Developed scalable LLM driven brand extraction pipelines using Ray Serve, Firecrawl, and FastAPI.",
        "Engineered LSTM based predictive maintenance models that enabled early fault detection and reduced downtime.",
        "Created a full multimodal video generation pipeline producing coherent 30 second marketing videos from a single image."
      ],
      icon: Briefcase
    },
    {
      id: "philosophy",
      title: "Chapter VI: How I Think & Build",
      subtitle: "Engineering Philosophy",
      content: "Intelligent systems must be grounded in mathematical clarity, robust engineering, and interpretability. Data should guide decisions, and models should evolve with purpose.",
      framework: [
        "Understand the system.",
        "Define constraints clearly.",
        "Break down complexity into modular components.",
        "Build iterative solutions guided by feedback.",
        "Deploy with reliability and monitoring as priorities."
      ],
      mindset: "Balance experimentation with structure. Emphasize reproducibility, maintainability, and performance. Treat models as evolving systems, not static outputs.",
      icon: GitBranch
    },
    {
      id: "future",
      title: "The Next Chapter",
      subtitle: "What's Next",
      content: "A future shaped by continuous learning, deeper exploration of multimodal intelligence, and the ambition to build systems that elevate human capability. I am open to opportunities that challenge creativity, scale engineering impact, and push the boundaries of what intelligent products can achieve.",
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