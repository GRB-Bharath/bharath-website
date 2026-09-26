import { motion } from "framer-motion";
import { 
  CamtasiaIcon, 
  SynthesiaIcon, 
  AdobeCaptivateIcon, 
  ArticulateStorylineIcon, 
  CanvaIcon, 
  FigmaIcon 
} from "@/components/ui/tool-icons";
import { 
  HTMLIcon, 
  CSSIcon, 
  JavaScriptIcon, 
  PythonIcon, 
  SQLIcon, 
  AWSIcon 
} from "@/components/ui/tech-icons";
import { 
  ChatGPTIcon, 
  ClaudeIcon, 
  GeminiIcon, 
  CopilotIcon, 
  MidJourneyIcon, 
  CursorIcon, 
  N8NIcon, 
  ClaudeCodeIcon, 
  HeyGenIcon 
} from "@/components/ui/ai-tool-icons";
import { Layers, Video, Code, CheckCircle2 } from "lucide-react";

const About = () => {
  // Authoring & Multimedia Tools
  const tools = [
    { icon: SynthesiaIcon, name: "Synthesia AI", color: "text-indigo-600 dark:text-[#818CF8]" },
    { icon: ArticulateStorylineIcon, name: "Articulate 360", color: "text-indigo-600 dark:text-[#A5B4FC]" },
    { icon: CamtasiaIcon, name: "Camtasia", color: "text-indigo-600 dark:text-[#818CF8]" },
    { icon: AdobeCaptivateIcon, name: "Adobe Captivate", color: "text-indigo-600 dark:text-[#A5B4FC]" },
    { icon: FigmaIcon, name: "Figma", color: "text-indigo-600 dark:text-[#818CF8]" },
    { icon: CanvaIcon, name: "Canva", color: "text-indigo-600 dark:text-[#A5B4FC]" },
  ];

  // Technical & Web Stack
  const technologies = [
    { icon: HTMLIcon, name: "HTML5", color: "text-sky-600 dark:text-[#38BDF8]" },
    { icon: CSSIcon, name: "CSS3 / Tailwind", color: "text-sky-600 dark:text-[#7DD3FC]" },
    { icon: JavaScriptIcon, name: "JavaScript", color: "text-sky-600 dark:text-[#38BDF8]" },
    { icon: PythonIcon, name: "Python", color: "text-sky-600 dark:text-[#7DD3FC]" },
    { icon: SQLIcon, name: "SQL", color: "text-sky-600 dark:text-[#38BDF8]" },
    { icon: AWSIcon, name: "AWS Cloud", color: "text-sky-600 dark:text-[#7DD3FC]" },
  ];

  // AI & Generative Stack
  const aiTools = [
    { icon: CopilotIcon, name: "GitHub Copilot", color: "text-violet-600 dark:text-[#C4B5FD]" },
    { icon: CursorIcon, name: "Cursor AI", color: "text-violet-600 dark:text-[#A78BFA]" },
    { icon: ClaudeCodeIcon, name: "Claude Code", color: "text-violet-600 dark:text-[#C4B5FD]" },
    { icon: ChatGPTIcon, name: "ChatGPT 4o", color: "text-violet-600 dark:text-[#A78BFA]" },
    { icon: ClaudeIcon, name: "Claude 3.7", color: "text-violet-600 dark:text-[#C4B5FD]" },
    { icon: GeminiIcon, name: "Google Gemini", color: "text-violet-600 dark:text-[#A78BFA]" },
    { icon: MidJourneyIcon, name: "MidJourney", color: "text-violet-600 dark:text-[#C4B5FD]" },
    { icon: N8NIcon, name: "n8n Automation", color: "text-violet-600 dark:text-[#A78BFA]" },
    { icon: HeyGenIcon, name: "HeyGen Video", color: "text-violet-600 dark:text-[#C4B5FD]" },
  ];

  // Key Enterprise Impact Metrics
  const impactStats = [
    { value: "35K+", label: "LSEG Learners Supported" },
    { value: "4+ Yrs", label: "Enterprise ID Experience" },
    { value: "20+", label: "Curricula & Suites Delivered" },
    { value: "WCAG AA", label: "Accessible Courseware Standard" },
  ];

  // Core Practice Pillars
  const practicePillars = [
    {
      icon: Layers,
      title: "LXP Front-End & Platform Architecture",
      description: "Engineering tailored dashboard landing pages, search portals, and scalable learning front-ends supporting 35,000+ colleagues across LSEG.",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      border: "border-indigo-200 dark:border-indigo-500/20"
    },
    {
      icon: Video,
      title: "AI Video Production & Prompt Engineering",
      description: "Producing AI-generated video curriculum for global leadership programs using Synthesia, accelerating delivery while elevating engagement.",
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-500/10",
      border: "border-violet-200 dark:border-violet-500/20"
    },
    {
      icon: Code,
      title: "Interactive Courseware & JavaScript Simulations",
      description: "Developing advanced Articulate Storyline 360 & Rise 360 suites with custom JavaScript triggers, data governance modules, and SCORM/xAPI tracking.",
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-50 dark:bg-sky-500/10",
      border: "border-sky-200 dark:border-sky-500/20"
    }
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 dark:text-indigo-300 font-mono text-xs mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            <span>CORE EXPERTISE & PROFILE</span>
          </div>
          <h2 id="about-heading" className="text-4xl sm:text-5xl font-bold font-headline text-gradient pb-1 mb-4 tracking-tight leading-normal sm:leading-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Blending instructional methodology with AI-assisted software engineering to build transformative, enterprise-grade learning systems
          </p>
        </motion.div>
        
        {/* Top Profile & Narrative Grid - Balanced 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Photo Card & Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Elevated Photo Card */}
            <div className="bg-white/90 dark:bg-slate-900/80 p-3 rounded-3xl border border-slate-200/90 dark:border-indigo-500/25 shadow-xl shadow-slate-200/50 dark:shadow-indigo-950/40 relative overflow-hidden backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5]/15 via-transparent to-[#7C3AED]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                src="/images/about me image.png"
                alt="Bharath Shetty - Learning Consultant and Instructional Designer"
                className="rounded-2xl shadow-xl w-full object-cover max-h-[440px] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Quick Impact Stats Grid (Balanced under photo) */}
            <div className="grid grid-cols-2 gap-3.5">
              {impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 backdrop-blur-xl text-center shadow-md hover:border-indigo-500/40 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-bold font-headline text-gradient block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-sans font-medium mt-1 block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column: Narrative & Practice Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Narrative Card */}
            <div className="bg-white/90 dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-indigo-500/20 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-300 font-semibold">Executive Overview</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Results-driven <b className="text-slate-900 dark:text-white font-semibold">Learning Consultant & Technical Instructional Designer</b> currently at <b className="text-indigo-600 dark:text-indigo-400 font-semibold">London Stock Exchange Group (LSEG)</b>. I design and build end-to-end Learning Experience Platforms (LXP) supporting 35,000+ colleagues, blending instructional design principles with AI pair-programming and modern front-end engineering.
              </p>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                From developing interactive <b className="text-slate-900 dark:text-white font-semibold">Workspace AI Search modules</b> and <b className="text-slate-900 dark:text-white font-semibold">Data Governance suites</b> to producing globally rolled-out AI video programs using <b className="text-violet-600 dark:text-violet-400 font-semibold">Synthesia</b>, I specialize in crafting accessible, compliant, and deeply engaging learning experiences that achieve measurable business outcomes.
              </p>
            </div>
            
            {/* Core Practice Pillars */}
            <div className="space-y-3.5">
              {practicePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 dark:bg-slate-900/70 p-5 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 backdrop-blur-xl shadow-md hover:border-indigo-500/40 transition-all duration-200 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.border} border flex-shrink-0 mt-0.5`}>
                    <pillar.icon className={pillar.color} size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-headline text-slate-900 dark:text-slate-100 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Full-Width Section: Specialized Tool & Technology Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10 pt-6 border-t border-slate-200 dark:border-indigo-500/15"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 dark:text-indigo-300 font-mono text-xs mb-2">
              <CheckCircle2 size={13} className="text-indigo-500" aria-hidden="true" />
              <span>PRODUCTION TOOLKIT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-slate-900 dark:text-white tracking-tight">
              Tools & Technology Ecosystem
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans mt-1">
              High-performance tools leveraged across authoring, artificial intelligence, and platform engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Authoring & Multimedia Tools (Large Icons) */}
            <div className="bg-white/90 dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/90 dark:border-indigo-500/25 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-indigo-500/15">
                  <h4 className="text-base font-bold font-headline text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" aria-hidden="true" />
                    Authoring & Multimedia
                  </h4>
                  <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/25">
                    eLearning Core
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-indigo-500/20 hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-600/15 transition-all text-center group cursor-default shadow-sm"
                    >
                      <div className="flex justify-center mb-2.5">
                        <tool.icon className={`${tool.color} group-hover:scale-110 transition-transform`} size={42} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-tight">{tool.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI & Agentic Suite (Large Icons) */}
            <div className="bg-white/90 dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/90 dark:border-purple-500/25 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-purple-500/15">
                  <h4 className="text-base font-bold font-headline text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" aria-hidden="true" />
                    AI & Agentic Engineering
                  </h4>
                  <span className="text-xs font-mono text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-200 dark:border-violet-500/25">
                    Emerging Tech
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {aiTools.map((ai, index) => (
                    <motion.div
                      key={ai.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-50/50 dark:hover:bg-purple-600/15 transition-all text-center group cursor-default shadow-sm"
                    >
                      <div className="flex justify-center mb-2.5">
                        <ai.icon className={`${ai.color} group-hover:scale-110 transition-transform`} size={38} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-tight">{ai.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Front-End & Technical Stack (Large Icons) */}
            <div className="bg-white/90 dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/90 dark:border-sky-500/25 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-sky-500/15">
                  <h4 className="text-base font-bold font-headline text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] dark:bg-[#0EA5E9]" aria-hidden="true" />
                    Front-End & Platforms
                  </h4>
                  <span className="text-xs font-mono text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-500/25">
                    Web & Platforms
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-sky-500/20 hover:border-sky-500/50 hover:bg-sky-50/50 dark:hover:bg-sky-600/15 transition-all text-center group cursor-default shadow-sm"
                    >
                      <div className="flex justify-center mb-2.5">
                        <tech.icon className={`${tech.color} group-hover:scale-110 transition-transform`} size={42} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-tight">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
