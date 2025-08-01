import { motion } from "framer-motion";
import { Presentation, Smartphone } from "lucide-react";
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

const About = () => {
  const tools = [
    { icon: CamtasiaIcon, name: "Camtasia", color: "text-[#ff6b35]" },
    { icon: SynthesiaIcon, name: "Synthesia", color: "text-[#ffb84d]" },
    { icon: AdobeCaptivateIcon, name: "Adobe Captivate", color: "text-[#ff6b35]" },
    { icon: ArticulateStorylineIcon, name: "Articulate Storyline", color: "text-[#ffb84d]" },
    { icon: CanvaIcon, name: "Canva", color: "text-[#ff6b35]" },
    { icon: FigmaIcon, name: "Figma", color: "text-[#ffb84d]" },
  ];

  const technologies = [
    { icon: HTMLIcon, name: "HTML", color: "text-[#ff6b35]" },
    { icon: CSSIcon, name: "CSS", color: "text-[#ffb84d]" },
    { icon: JavaScriptIcon, name: "JavaScript", color: "text-[#ff6b35]" },
    { icon: PythonIcon, name: "Python", color: "text-[#ffb84d]" },
    { icon: SQLIcon, name: "SQL", color: "text-[#ff6b35]" },
    { icon: AWSIcon, name: "AWS", color: "text-[#ffb84d]" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-gray-400">Get to know more about my journey and expertise</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/about me image.png" 
              alt="Bharath Shetty - About Me" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate Technical Instructional Designer with 3+ years of experience creating engaging eLearning solutions using tools like <b>Camtasia, Synthesia, Adobe captivate, Articulate Storyline, Canva and Microsoft 365 Tools </b>  etc.. I specialize in transforming complex educational content into interactive, user-friendly learning experiences.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across instructional design, eLearning development, storyboarding, UI/UX design, and multimedia content creation. I believe in the power of technology to make learning accessible, engaging, and effective for all learners.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">Tools:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-lg text-center hover:primary-glow transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <tool.icon className={`${tool.color} mx-auto`} size={32} />
                    </div>
                    <p className="text-sm text-white">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">Technologies:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-4 rounded-lg text-center hover:primary-glow transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <tech.icon className={`${tech.color} mx-auto`} size={32} />
                    </div>
                    <p className="text-sm text-white">{tech.name}</p>
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
