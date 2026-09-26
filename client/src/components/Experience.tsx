import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      period: "May 2026 - Present",
      title: "Learning Consultant / Instructional Designer",
      company: "London Stock Exchange Group (LSEG)",
      location: "Bengaluru, India",
      type: "Full-time",
      skills: [
        "Learning Experience Platform (LXP)",
        "Synthesia",
        "Articulate Rise 360",
        "Storyline 360",
        "HTML / CSS / JavaScript",
        "GitHub Copilot",
        "+4 skills"
      ],
      achievements: [
        "Design and build an end-to-end Learning Experience Platform (LXP) dashboard, including a landing page tailored to user requirements, delivering a scalable solution that supports up to 35,000 colleagues across LSEG (front-end development with GitHub Copilot, HTML, CSS, JavaScript).",
        "Accelerate flagship LXP front-end delivery through AI pair-programming, reducing development time while maintaining code quality, accessibility, and scalability.",
        "Produce AI-generated video learning content for the First Time People Leader programme, rolled out globally across LSEG using Synthesia.",
        "Design and develop interactive Workspace AI Search modules (Articulate Rise 360) and Data Governance course suites with custom JavaScript, triggers, and layers (Articulate Storyline 360)."
      ],
      logo: "/images/LSEG.jpg",
      logoAlt: "London Stock Exchange Group (LSEG) Logo",
      logoBg: "bg-[#0020fe]"
    },
    {
      period: "Dec 2024 - Apr 2026",
      title: "Senior Technical Instructional Designer II",
      company: "NIIT",
      location: "Bengaluru, Karnataka, India • Remote",
      type: "Full-time",
      skills: ["Synthesia, Camtasia", "ADDIE", "Microsoft 365 Tools", "+4 skills"],
      achievements: [
        "Analyzed and developed 20+ diverse learning assets (Job Aids, QRCs, ILTs, VILTs, WBTs) for ServiceNow, enhancing user proficiency and reducing support tickets by 15%",
        "Partnered with Rockwell Automation to produce engaging internal training videos in Camtasia, increasing completion rates by 25%",
        "Authored and refined internal training content for Nokia in Articulate, accelerating ramp-up time for new hires by 10%",
        "Developed an in-house PDF converter tool and leveraged Generative AI (NCAP, AI Story Weaver) to cut content development time by 20%"
      ],
      logo: "/images/NIIT.png",
      logoAlt: "NIIT Logo",
      logoBg: "bg-white"
    },
    {
      period: "Mar 2024 - Dec 2024",
      title: "Instructional Designer",
      company: "NetCom Learning",
      location: "United States • Remote",
      type: "Full-time",
      skills: ["Artificial Intelligence (AI)", "Blockchain", "Articulate Storyline", "+5 skills"],
      achievements: [
        "Designed and delivered 20+ AI and Blockchain certification programs, boosting overall team productivity by 30%",
        "Led end-to-end production of a promotional video for AI Certs with cross-functional leadership, directly driving a 50% increase in sales",
        "Applied learner-centric design methodology to develop interactive educational videos, increasing completion rates by 15%",
        "Collaborated with international teams on innovative managed learning solutions and cutting-edge curriculum"
      ],
      logo: "/images/Netcom.png",
      logoAlt: "NetCom Learning Logo",
      logoBg: "bg-white"
    },
    {
      period: "Apr 2023 - Mar 2024",
      title: "Associate Instructional Designer",
      company: "Simplilearn",
      location: "Bengaluru, Karnataka, India • On-site",
      type: "Full-time",
      skills: ["Java", "AWS", "Google Cloud", "Microsoft Azure", "Content Management", "+7 skills"],
      achievements: [
        "Collaborated with leading universities (MIT, Caltech, Purdue, UMass) to develop advanced training curricula, increasing enrollment by 20%",
        "Customized technical courses for major enterprise clients (Vodafone, Mphasis, Dell, IBM), improving client satisfaction by 15%",
        "Developed engaging ILT, VILT, and WBT materials using the ADDIE model, reducing learner drop-off rates by 25%",
        "Awarded Rising Star Award at Simplilearn for impactful real-time project designs in Software Development, Cloud, and DevOps"
      ],
      logo: "/images/simpliearn.png",
      logoAlt: "Simplilearn Logo",
      logoBg: "bg-white"
    }
  ];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 dark:text-indigo-300 font-mono text-xs mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 id="experience-heading" className="text-4xl sm:text-5xl font-bold font-headline text-gradient pb-1 mb-4 tracking-tight leading-normal sm:leading-tight">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Demonstrated track record of delivering enterprise-scale learning platforms, AI innovations, and global programs
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Gradient Center Timeline (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4F46E5] via-[#7C3AED] to-[#0284C7] dark:to-[#0EA5E9] z-0 rounded-full shadow-[0_0_12px_rgba(79,70,229,0.35)]" aria-hidden="true" />
          
          <div className="relative z-20 space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10'} mb-8 lg:mb-0 relative z-30 w-full`}
                >
                  <div className="bg-white/90 dark:bg-slate-900/85 p-7 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-950/50 transition-all duration-300 backdrop-blur-xl relative group">
                    {/* Period & Type Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-indigo-500/15">
                      <div className="flex items-center space-x-2">
                        <span className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-[#4F46E5] shadow-[0_0_8px_#4F46E5]' : 'bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]'}`} aria-hidden="true" />
                        <span className="text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Role Title & Company */}
                    <h3 className={`text-xl sm:text-2xl font-bold font-headline mb-1.5 text-slate-900 dark:text-white transition-colors`}>
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 font-headline">{exp.company}</p>
                      <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">•</span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">{exp.location}</p>
                    </div>

                    {/* Skills Chips */}
                    <div className="mb-5 flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-indigo-800 dark:text-indigo-300/90 border border-slate-200 dark:border-indigo-500/15">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 mr-2.5 flex-shrink-0" aria-hidden="true" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Logo Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pl-10' : 'lg:pr-10'} relative z-30 flex items-center justify-center`}
                >
                  <div className={`w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 ${exp.logoBg} rounded-3xl flex items-center justify-center ${exp.company === 'London Stock Exchange Group (LSEG)' || exp.company === 'LSEG' ? 'p-3 sm:p-4' : 'p-6 sm:p-8'} shadow-2xl border border-slate-200/90 dark:border-indigo-500/30 ${index % 2 === 0 ? 'mx-auto lg:mr-auto lg:ml-8' : 'mx-auto lg:ml-auto lg:mr-8'} hover:scale-105 transition-all duration-300 shadow-slate-300/50 dark:shadow-indigo-950/60`}>
                    <img 
                      src={exp.logo} 
                      alt={exp.logoAlt} 
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
