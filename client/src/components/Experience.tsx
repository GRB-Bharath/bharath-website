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
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Experience</h2>
          <p className="text-xl text-gray-400">Professional journey and key achievements</p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff6b35] to-[#ff8f50] z-0"></div>
          
          <div className="relative z-20 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0 relative z-30`}
                >
                  <div className="glass-effect p-6 rounded-2xl hover:primary-glow transition-all duration-300 relative z-30 bg-gray-800/90 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 ${index % 2 === 0 ? 'bg-[#ff6b35]' : 'bg-[#ff8f50]'} rounded-full mr-3`}></div>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <span className="text-xs text-gray-500 ml-2">• {exp.type}</span>
                    </div>
                    <h3 className={`text-2xl font-semibold ${index % 2 === 0 ? 'text-[#ff6b35]' : 'text-[#ff8f50]'} mb-2`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-white font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-300 mb-4">{exp.location}</p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-200 font-medium">Skills: </span>
                      <span className="text-sm text-[#ff8f50] font-medium">{exp.skills.join(", ")}</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'} relative z-30`}
                >
                  <div className={`w-48 h-48 ${exp.logoBg} rounded-2xl flex items-center justify-center p-3 shadow-xl border border-white/10 ${index % 2 === 0 ? 'mx-auto lg:mr-auto lg:ml-8' : 'mx-auto lg:ml-auto lg:mr-8'} hover:scale-105 transition-all duration-300`}>
                    <img 
                      src={exp.logo} 
                      alt={exp.logoAlt} 
                      className="w-full h-full object-contain rounded-xl"
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
