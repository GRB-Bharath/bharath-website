import { motion } from "framer-motion";
import { ArticulateStorylineIcon } from "./ui/tool-icons";

const Experience = () => {
  const experiences = [
    {
      period: "Dec 2024 - Present",
      title: "Senior Technical Instructional Designer II",
      company: "NIIT",
      location: "Bengaluru, Karnataka, India • Remote",
      type: "Full-time",
      skills: ["Synthesia, Camtasia", "ADDIE", "Microsoft 365 Tools", "+4 skills"],
      achievements: [
        "Leading advanced eLearning module development using cutting-edge instructional design methodologies",
        "Implementing ADDIE framework for comprehensive curriculum development",
        "Specializing in Adobe Captivate and Synthesia for interactive learning experiences",
        "Managing cross-functional teams for educational content delivery"
      ]
    },
    {
      period: "Mar 2024 - Dec 2024",
      title: "Instructional Designer",
      company: "NetCom Learning",
      location: "United States • Remote",
      type: "Full-time",
      skills: ["Artificial Intelligence (AI)", "Blockchain", "Articulate Storyline", "+5 skills"],
      achievements: [
        "Specialized in AI and Blockchain training content development",
        "Created managed learning services for enterprise clients",
        "Developed cutting-edge curriculum for emerging technologies",
        "Collaborated with international teams on innovative learning solutions"
      ]
    },
    {
      period: "Apr 2023 - Apr 2024",
      title: "Instructional Designer",
      company: "Simplilearn",
      location: "Bengaluru, Karnataka, India • On-site",
      type: "Full-time",
      skills: ["Java", "AWS", "Google Cloud", "Microsoft Azure", "Content Management", "+7 skills"],
      achievements: [
        "Designed comprehensive Java programming curriculum",
        "Managed content development lifecycle for technical training programs",
        "Created interactive learning modules for software development courses",
        "Implemented quality assurance processes for educational content"
      ]
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
                      <div className={`w-4 h-4 ${index === 0 ? 'bg-[#ff6b35]' : index === 1 ? 'bg-[#ff8f50]' : 'bg-[#ff6b35]'} rounded-full mr-3`}></div>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <span className="text-xs text-gray-500 ml-2">• {exp.type}</span>
                    </div>
                    <h3 className={`text-2xl font-semibold ${index === 0 ? 'text-[#ff6b35]' : index === 1 ? 'text-[#ff8f50]' : 'text-[#ff6b35]'} mb-2`}>
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
                  {index === 0 ? (
                    <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mx-auto lg:mx-0 p-2 shadow-lg">
                      <img 
                        src="/images/NIIT.png" 
                        alt="NIIT Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mx-auto lg:ml-auto lg:mr-8 p-2 shadow-lg">
                      <img 
                        src="/images/Netcom.png" 
                        alt="NetCom Learning Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center mx-auto lg:mx-0">
                      <img 
                        src="/images/simpliearn.png" 
                        alt="Simplilearn Logo" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  )}
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
