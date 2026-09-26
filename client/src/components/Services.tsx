import { motion } from "framer-motion";
import { Lightbulb, Laptop, FileText, Smartphone, Video, Brush, ArrowRight } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Lightbulb,
      title: "Instructional Design & Architecture",
      description: "Engineering structured, outcome-driven learning architectures and curricula using the ADDIE model, Bloom's Taxonomy, and adult learning principles.",
      accentBg: "from-[#4F46E5] to-[#6366F1]",
      borderHover: "hover:border-[#4F46E5]/60",
      glowClass: "hover:shadow-indigo-500/25",
      badge: "Core Architecture",
      badgeColor: "text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25"
    },
    {
      icon: Laptop,
      title: "LXP & eLearning Development",
      description: "Building scalable Learning Experience Platform (LXP) dashboards and interactive modules supporting 35,000+ colleagues at enterprise scale.",
      accentBg: "from-[#7C3AED] to-[#8B5CF6]",
      borderHover: "hover:border-[#7C3AED]/60",
      glowClass: "hover:shadow-purple-500/25",
      badge: "Enterprise LXP",
      badgeColor: "text-violet-700 dark:text-purple-300 bg-violet-50 dark:bg-purple-500/10 border-violet-200 dark:border-purple-500/25"
    },
    {
      icon: FileText,
      title: "Interactive Storyboarding",
      description: "Visual planning, scriptwriting, and multi-layered branching scenarios that convert complex technical domains into intuitive learner pathways.",
      accentBg: "from-[#0284C7] to-[#38BDF8]",
      borderHover: "hover:border-[#0EA5E9]/60",
      glowClass: "hover:shadow-sky-500/25",
      badge: "Pedagogy & Scripting",
      badgeColor: "text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/25"
    },
    {
      icon: Smartphone,
      title: "UI/UX & Interactive Design",
      description: "Crafting modern, accessible (WCAG 2.1 AA) learner interfaces with intuitive interaction patterns, micro-animations, and fluid responsive layouts.",
      accentBg: "from-[#4F46E5] to-[#4338CA]",
      borderHover: "hover:border-[#4F46E5]/60",
      glowClass: "hover:shadow-indigo-500/25",
      badge: "UI/UX Engineering",
      badgeColor: "text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25"
    },
    {
      icon: Video,
      title: "AI Video & Multimedia Production",
      description: "Producing enterprise-grade training videos with Synthesia, Camtasia, and generative AI pipelines, deployed globally across multinational teams.",
      accentBg: "from-[#7C3AED] to-[#6D28D9]",
      borderHover: "hover:border-[#7C3AED]/60",
      glowClass: "hover:shadow-purple-500/25",
      badge: "AI Media Pipelines",
      badgeColor: "text-violet-700 dark:text-purple-300 bg-violet-50 dark:bg-purple-500/10 border-violet-200 dark:border-purple-500/25"
    },
    {
      icon: Brush,
      title: "Data & Governance Visuals",
      description: "Designing infographics, executive quick reference cards (QRCs), and visual brand systems that simplify complex data regulations.",
      accentBg: "from-[#0284C7] to-[#0284C7]",
      borderHover: "hover:border-[#0EA5E9]/60",
      glowClass: "hover:shadow-sky-500/25",
      badge: "Governance & Brand",
      badgeColor: "text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/25"
    }
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 dark:text-indigo-300 font-mono text-xs mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            <span>HIGH-IMPACT DELIVERABLES</span>
          </div>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-bold font-headline text-gradient pb-1 mb-4 tracking-tight leading-normal sm:leading-tight">
            Services & Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Comprehensive end-to-end instructional consulting, digital learning systems, and AI-powered production
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white/90 dark:bg-slate-900/80 p-7 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 ${service.borderHover} ${service.glowClass} transition-all duration-300 group relative overflow-hidden backdrop-blur-xl shadow-lg dark:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between h-full`}
              >
                {/* Subtle hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentBg} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.accentBg} rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-headline mb-3 text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-indigo-500/15 flex items-center text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  <span>Explore Capstone Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
