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
  HeyGenIcon,
  GoogleFlowIcon,
  GoogleStitchIcon
} from "@/components/ui/ai-tool-icons";

const About = () => {
  // Lumina Primary palette (Indigo)
  const tools = [
    { icon: SynthesiaIcon, name: "Synthesia AI", color: "text-[#818CF8]" },
    { icon: ArticulateStorylineIcon, name: "Articulate 360", color: "text-[#A5B4FC]" },
    { icon: CamtasiaIcon, name: "Camtasia", color: "text-[#818CF8]" },
    { icon: AdobeCaptivateIcon, name: "Adobe Captivate", color: "text-[#A5B4FC]" },
    { icon: FigmaIcon, name: "Figma", color: "text-[#818CF8]" },
    { icon: CanvaIcon, name: "Canva", color: "text-[#A5B4FC]" },
  ];

  // Lumina Tertiary palette (Cyan / Sky)
  const technologies = [
    { icon: HTMLIcon, name: "HTML5", color: "text-[#38BDF8]" },
    { icon: CSSIcon, name: "CSS3 / Tailwind", color: "text-[#7DD3FC]" },
    { icon: JavaScriptIcon, name: "JavaScript", color: "text-[#38BDF8]" },
    { icon: PythonIcon, name: "Python", color: "text-[#7DD3FC]" },
    { icon: SQLIcon, name: "SQL", color: "text-[#38BDF8]" },
    { icon: AWSIcon, name: "AWS Cloud", color: "text-[#7DD3FC]" },
  ];

  // Lumina Secondary palette (Violet / Purple)
  const aiTools = [
    { icon: CopilotIcon, name: "GitHub Copilot", color: "text-[#C4B5FD]" },
    { icon: CursorIcon, name: "Cursor AI", color: "text-[#A78BFA]" },
    { icon: ClaudeCodeIcon, name: "Claude Code", color: "text-[#C4B5FD]" },
    { icon: ChatGPTIcon, name: "ChatGPT 4o", color: "text-[#A78BFA]" },
    { icon: ClaudeIcon, name: "Claude 3.7", color: "text-[#C4B5FD]" },
    { icon: GeminiIcon, name: "Google Gemini", color: "text-[#A78BFA]" },
    { icon: MidJourneyIcon, name: "MidJourney", color: "text-[#C4B5FD]" },
    { icon: N8NIcon, name: "n8n Automation", color: "text-[#A78BFA]" },
    { icon: HeyGenIcon, name: "HeyGen Video", color: "text-[#C4B5FD]" },
    { icon: GoogleFlowIcon, name: "Google Flow", color: "text-[#A78BFA]" },
    { icon: GoogleStitchIcon, name: "Google Stitch", color: "text-[#C4B5FD]" },
  ];

  // Progress metrics from Lumina Executive style guide
  const proficiencies = [
    { label: "Instructional Design & LXP Architecture", percent: 96, color: "bg-[#4F46E5]" },
    { label: "AI Pair-Programming & Video Generation (Synthesia)", percent: 92, color: "bg-[#7C3AED]" },
    { label: "Interactive Courseware (Rise & Storyline 360)", percent: 88, color: "bg-[#0EA5E9]" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-mono text-xs mb-3">
            <span>CORE EXPERTISE & TOOLKIT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-gradient mb-4 tracking-tight">About Me</h2>
          <p className="text-lg text-slate-400 font-sans max-w-2xl mx-auto">
            Blending instructional methodology with AI-assisted software engineering to build transformative learning systems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
          >
            {/* Elevated Photo Card */}
            <div className="bg-slate-900/80 p-3 rounded-3xl border border-indigo-500/25 shadow-2xl shadow-indigo-950/40 relative overflow-hidden backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5]/15 via-transparent to-[#7C3AED]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <img
                src="/images/about me image.png"
                alt="Bharath Shetty - About Me"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Lumina Executive Progress & Metric Level Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-indigo-500/20 backdrop-blur-xl shadow-xl shadow-indigo-950/20">
              <h4 className="text-sm font-headline font-semibold text-slate-200 mb-4 flex items-center justify-between">
                <span>Core Competency Indices</span>
                <span className="text-xs font-mono text-indigo-400">Lumina Metrics</span>
              </h4>
              <div className="space-y-4">
                {proficiencies.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="font-mono text-slate-400">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${item.color} shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Narrative & Tool Suites */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Narrative */}
            <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-indigo-500/20 backdrop-blur-xl shadow-xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-4">
                Results-driven <b className="text-white">Learning Consultant & Technical Instructional Designer</b> currently at <b className="text-indigo-400">London Stock Exchange Group (LSEG)</b>. I design and build end-to-end Learning Experience Platforms (LXP) supporting 35,000+ colleagues, blending instructional design principles with AI pair-programming and modern front-end engineering.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                From developing interactive <b className="text-white">Workspace AI Search modules</b> and <b className="text-white">Data Governance suites</b> to producing globally rolled-out AI video programs using <b className="text-violet-400">Synthesia</b>, I specialize in crafting accessible, compliant, and deeply engaging learning experiences that achieve measurable business outcomes.
              </p>
            </div>
            
            {/* Authoring & Multimedia Tools */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-headline font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]"></span>
                  Authoring & Multimedia Tools
                </h3>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/25">Primary Palette</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/80 p-3.5 rounded-xl border border-indigo-500/20 hover:border-indigo-400/50 hover:bg-indigo-600/10 transition-all duration-200 text-center group cursor-pointer shadow-sm hover:shadow-indigo-500/20"
                  >
                    <div className="flex justify-center mb-2">
                      <tool.icon className={`${tool.color} group-hover:scale-110 transition-transform`} size={28} />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI & Generative Suite */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-headline font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
                  AI & Agentic Development
                </h3>
                <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/25">Secondary Palette</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                {aiTools.map((ai, index) => (
                  <motion.div
                    key={ai.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/80 p-3.5 rounded-xl border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-600/10 transition-all duration-200 text-center group cursor-pointer shadow-sm hover:shadow-purple-500/20"
                  >
                    <div className="flex justify-center mb-2">
                      <ai.icon className={`${ai.color} group-hover:scale-110 transition-transform`} size={26} />
                    </div>
                    <p className="text-xs font-medium text-slate-200">{ai.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Front-End & Technical Stack */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-headline font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]"></span>
                  Front-End & Technical Stack
                </h3>
                <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/25">Tertiary Palette</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/80 p-3.5 rounded-xl border border-sky-500/20 hover:border-sky-400/50 hover:bg-sky-600/10 transition-all duration-200 text-center group cursor-pointer shadow-sm hover:shadow-sky-500/20"
                  >
                    <div className="flex justify-center mb-2">
                      <tech.icon className={`${tech.color} group-hover:scale-110 transition-transform`} size={28} />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
