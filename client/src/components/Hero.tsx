import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // You can easily switch between these background classes:
  // 'gradient-bg' - Enhanced gradient with floating orbs and twinkling stars
  // 'animated-bg' - Shifting gradient with shine effects  
  // 'particles-bg' - Floating particle effects
  // 'mesh-bg' - Animated grid/mesh pattern
  // 'stars-bg' - Beautiful starfield with floating stars
  const backgroundClass = 'stars-bg';

  return (
    <section id="home" className={`min-h-screen flex items-center ${backgroundClass} pt-24`}>
      {/* Optional Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => {
          // Pre-compute animation duration to avoid re-rendering issues
          const animDuration = `${8 + Math.random() * 4}s`;
          const animDelay = `${i * 3}s`;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0"
              style={{
                top: `${Math.random() * 50 + 10}%`,
                left: `-100px`,
                animationName: 'shootingStar',
                animationDuration: animDuration,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: animDelay
              }}
            />
          );
        })}
      </div>

      {/* Hi, I'm Bharath Shetty spacing left side */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 pl-4 sm:pl-6 lg:pl-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl lg:text-6xl font-bold mb-8 mt-10 whitespace-nowrap"
            >
              Hi, I'm <ReactTypingEffect
                text={["Bharath Shetty"]} 
                speed={100}
                eraseSpeed={100}
                eraseDelay={3000}
                typingDelay={1000}
                cursor="|"
                displayTextRenderer={(text) => {
                  return <span className="text-gradient">{text}</span>;
                }}
              />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-300 mb-8"
            >
              Senior Technical Instructional Designer II | eLearning Developer | Content Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about creating engaging eLearning solutions that transform complex concepts into interactive, memorable experiences using cutting-edge design and development tools.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button 
                className="px-6 py-3 bg-[#00ff87] text-black font-semibold hover:bg-[#00ff87]/80 transition-all duration-300 neon-glow"
                onClick={() => window.open('/Bharath_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                className="px-6 py-3 glass-effect text-white border-white/20 hover:bg-white/10 transition-all duration-300"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="flex space-x-4"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/bharathkumargr", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/Bharath44618051", label: "Twitter" },
                { icon: Github, href: "https://github.com/GRB-Bharath", label: "GitHub" },
                { icon: Mail, href: "mailto:bharathb451@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:text-[#00ff87] transition-all duration-300 neon-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full profile-glow p-1 animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/bharath.jpg" 
                    alt="Bharath Shetty - Senior Instructional Designer" 
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      objectPosition: "center 35%", 
                      transform: "scale(1.1)" /* Slightly zoom in to focus on the person */
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Add custom styling for the typing effect cursor
const style = document.createElement('style');
style.textContent = `
  .react-typing-effect__cursor {
    color: #00ff87;
    font-weight: bold;
    animation: blink 1s step-end infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }
`;
document.head.appendChild(style);
