import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactTypingEffect from 'react-typing-effect';
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    // Add CSS animations and styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(2deg); }
        50% { transform: translateY(-20px) rotate(0deg); }
        75% { transform: translateY(-10px) rotate(-2deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          transform: scale(1) rotate(0deg);
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.1);
        }
        25% { 
          transform: scale(1.02) rotate(-1deg);
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(255, 107, 53, 0.15);
        }
        50% { 
          transform: scale(1.03) rotate(0deg);
          box-shadow: 0 0 35px rgba(255, 107, 53, 0.5), 0 0 70px rgba(255, 107, 53, 0.2);
        }
        75% { 
          transform: scale(1.02) rotate(1deg);
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(255, 107, 53, 0.15);
        }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }
      
      @keyframes float-particle {
        0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
        25% { transform: translateY(-15px) translateX(5px) rotate(90deg); opacity: 0.6; }
        50% { transform: translateY(-30px) translateX(-5px) rotate(180deg); opacity: 0.8; }
        75% { transform: translateY(-15px) translateX(-10px) rotate(270deg); opacity: 0.6; }
        100% { transform: translateY(0px) translateX(0px) rotate(360deg); opacity: 0.3; }
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes shootingStar {
        0% { 
          transform: translateX(0) translateY(0); 
          opacity: 0; 
        }
        10% { 
          opacity: 1; 
        }
        90% { 
          opacity: 1; 
        }
        100% { 
          transform: translateX(1200px) translateY(-200px); 
          opacity: 0; 
        }
      }
      
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
      .animate-float-particle { animation: float-particle 8s ease-in-out infinite; }
      .animate-gradient-shift { animation: gradient-shift 8s ease infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup on unmount
      const links = document.querySelectorAll('link[href="/images/B.png"]');
      links.forEach(link => link.remove());
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent?.includes('animate-float')) {
          style.remove();
        }
      });
    };
  }, []);

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
    <section id="home" aria-label="Introduction" className="min-h-screen flex items-center gradient-bg pt-24 pb-16 relative overflow-hidden transition-colors duration-300">
      {/* Optional Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 dark:opacity-100">
        {[...Array(3)].map((_, i) => {
          const starTop = 10 + (i * 15) % 40;
          const starDuration = 8 + (i * 2);
          const starDelay = i * 3;

          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-0 shadow-[0_0_8px_#4F46E5]"
              style={{
                top: `${starTop}%`,
                left: `-100px`,
                animationName: 'shootingStar',
                animationDuration: `${starDuration}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: `${starDelay}s`
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 pl-2 sm:pl-4 md:pl-6 lg:pl-8 text-center sm:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-indigo-500/30 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse shadow-[0_0_8px_#4F46E5]" aria-hidden="true" />
              <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 font-medium">Learning Consultant @ LSEG • Bengaluru, India</span>
            </motion.div>

            {/* Semantic h1 for WCAG AA */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 sm:mb-8 mt-2 leading-tight tracking-tight text-slate-900 dark:text-white"
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
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-800 dark:text-slate-200 mb-6 sm:mb-8 leading-relaxed font-headline font-semibold"
            >
              Learning Consultant <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">/</span> Instructional Designer <span className="text-violet-600 dark:text-violet-400" aria-hidden="true">|</span> AI-Assisted Learning Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed font-sans"
            >
              Designing scalable Learning Experience Platforms (LXP) supporting 35,000+ colleagues across LSEG. Combining instructional excellence with AI pair-programming, interactive authoring (Articulate 360), and modern front-end technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8"
            >
              <Button
                aria-label="View Bharath's Resume PDF in a new tab"
                className="px-6 py-3.5 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-[#4338CA] hover:to-[#4F46E5] text-white font-headline font-semibold rounded-xl transition-all duration-300 shadow-md shadow-indigo-500/35 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base border border-indigo-400/30 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={() => {
                  const timestamp = new Date().getTime();
                  const resumeUrl = `/documents/Bharath_Kumar_GR_Resume.pdf?v=${timestamp}`;

                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';

                  if (window.innerWidth <= 768) {
                    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              >
                <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                View Resume
              </Button>
              <Button
                variant="outline"
                aria-label="Navigate to contact section"
                className="px-6 py-3.5 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-indigo-950/40 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-indigo-500/30 hover:border-indigo-500/60 font-headline font-medium rounded-xl transition-all duration-300 text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="flex justify-center sm:justify-start space-x-3 sm:space-x-4"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/bharathkumargr", label: "LinkedIn (opens in new tab)" },
                { icon: Twitter, href: "https://x.com/Bharath44618051", label: "Twitter (opens in new tab)" },
                { icon: Github, href: "https://github.com/GRB-Bharath", label: "GitHub (opens in new tab)" },
                { icon: Mail, href: "mailto:bharathb451@gmail.com", label: "Email Bharath directly" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900/80 border border-slate-300/80 dark:border-indigo-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-600/20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-indigo-500/25 focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center mb-8 sm:mb-12 lg:mb-0"
          >
            <div className="relative">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
                {/* Animated Lumina Multi-Color Gradient Orbs */}
                <div className="absolute w-full h-full pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 via-[#7C3AED]/20 to-[#0EA5E9]/20 rounded-full blur-3xl animate-pulse-slow"></div>

                  {/* Concentric Lumina Rings */}
                  {[...Array(3)].map((_, index) => {
                    const baseSize = 280;
                    const circleSize = baseSize + index * 35;
                    const circleDuration = 8 + index * 2;
                    const circleDelay = index * 0.5;

                    return (
                      <div
                        key={index}
                        className="absolute left-1/2 top-1/2 border border-indigo-500/20 rounded-full hidden sm:block"
                        style={{
                          width: `${circleSize}px`,
                          height: `${circleSize}px`,
                          transform: 'translate(-50%, -50%)',
                          animationName: 'floatCircle',
                          animationDuration: `${circleDuration}s`,
                          animationTimingFunction: 'ease-in-out',
                          animationIterationCount: 'infinite',
                          animationDelay: `${circleDelay}s`
                        }}
                      />
                    );
                  })}

                  {/* Sparkles - Lumina Indigo, Violet, Cyan */}
                  {[...Array(12)].map((_, index) => {
                    const angle = (index * 30) * (Math.PI / 180);
                    const baseRadius = 120;
                    const radius = window.innerWidth < 640 ? baseRadius : 200;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const animationDuration = 2 + (index % 3) * 0.5;
                    const animationDelay = index * 0.15;
                    const color = index % 3 === 0 ? '#4F46E5' : index % 3 === 1 ? '#7C3AED' : '#0EA5E9';

                    return (
                      <div
                        key={`sparkle-${index}`}
                        className="absolute sparkle-container"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: window.innerWidth < 640 ? '8px' : '10px',
                          height: window.innerWidth < 640 ? '8px' : '10px',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          animationName: 'sparkleGlow',
                          animationDuration: `${animationDuration}s`,
                          animationTimingFunction: 'ease-in-out',
                          animationIterationCount: 'infinite',
                          animationDelay: `${animationDelay}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full shadow-[0_0_15px_currentColor]"
                          style={{ backgroundColor: color, color: color }}
                        ></div>
                        <div className="absolute inset-[30%] bg-white rounded-full opacity-90"></div>
                      </div>
                    );
                  })}
                </div>

                {/* Main container with executive glass effect */}
                <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden backdrop-blur-xl bg-gradient-to-br from-indigo-500/15 via-slate-900/90 to-violet-500/15 p-3 sm:p-4 hover:scale-102 transition-transform duration-700 shadow-2xl shadow-indigo-950/50 border border-indigo-500/30">
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-full border border-indigo-400/30"></div>

                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-900/95 to-[#0B0F19]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-violet-500/10 mix-blend-overlay"></div>

                    {/* Profile image */}
                    <img
                      src="/images/B.png"
                      alt="Bharath Shetty - Learning Consultant & Instructional Designer"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectPosition: "center center",
                        transform: "scale(1.05)",
                        filter: "contrast(1.05) brightness(1.02)"
                      }}
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/40"></div>
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
                  </div>
                </div>

                {/* Orbiting Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-2 -left-4 sm:-left-6 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-indigo-500/40 backdrop-blur-xl shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-indigo-950/40 hidden sm:flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5]" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">LXP Dashboard</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-2 -right-2 sm:-right-4 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-violet-500/40 backdrop-blur-xl shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-purple-950/40 hidden sm:flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">Synthesia AI</span>
                </motion.div>

                <div className="absolute top-1/2 left-0 w-12 h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent transform -translate-x-16" aria-hidden="true" />
                <div className="absolute top-1/2 right-0 w-12 h-[1px] bg-gradient-to-l from-violet-500/50 to-transparent transform translate-x-16" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Add custom styling for animations and preload image
const style = document.createElement('style');
style.textContent = `
  .react-typing-effect__cursor {
    color: #4F46E5;
    font-weight: bold;
    animation: blink 1s step-end infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }

  .hover\\:scale-102:hover {
    transform: scale(1.02);
  }

  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

  .animate-ping-slow {
    animation: ping-slow 3s ease-in-out infinite;
  }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .text-gradient {
      background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0EA5E9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .sparkle-container {
      filter: drop-shadow(0 0 6px rgba(79, 70, 229, 0.6)) drop-shadow(0 0 12px rgba(124, 58, 237, 0.4));
    }
    
    h2.whitespace-nowrap {
      white-space: normal !important;
      word-break: break-word;
    }
  }

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(1.05);
    }
  }

  @keyframes ping-slow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.4;
    }
  }

  @keyframes floatCircle {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
      opacity: 0.25;
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.08);
      opacity: 0.35;
    }
  }

  @keyframes floatParticle {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-20px) scale(1.5);
      opacity: 0.5;
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(79, 70, 229, 0.3),
                  0 0 60px rgba(124, 58, 237, 0.15);
    }
    50% {
      box-shadow: 0 0 30px rgba(79, 70, 229, 0.5),
                  0 0 80px rgba(14, 165, 233, 0.25);
    }
  }

  @keyframes sparkle {
    0%, 100% {
      transform: translate(var(--x), var(--y)) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(var(--x), var(--y)) scale(1.5);
      opacity: 0.8;
    }
  }

  @keyframes sparkleGlow {
    0%, 100% {
      opacity: 0.7;
      transform: scale(0.8);
      filter: brightness(1.2);
    }
    50% {
      opacity: 1;
      transform: scale(1.3);
      filter: brightness(1.8);
    }
  }

  .sparkle-container {
    filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.8)) drop-shadow(0 0 16px rgba(124, 58, 237, 0.6));
  }

  .animate-spin-slower {
    animation: spin 3s linear infinite;
  }

  @keyframes sparkleFloat {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-15px) rotate(180deg);
      opacity: 0.6;
    }
  }
`;
document.head.appendChild(style);
