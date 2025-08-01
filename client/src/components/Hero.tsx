import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactTypingEffect from 'react-typing-effect';
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Low quality placeholder (you can replace with actual base64 of your image)
  const placeholderSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iI2ZmNmIzNSIgZm9udC1zaXplPSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsIj5CUzwvdGV4dD4KPC9zdmc+";

  // Preload the image with enhanced caching and retry logic
  useEffect(() => {
    // Preload critical image with multiple techniques
    const preloadImage = () => {
      const img = new Image();
      // Remove crossOrigin since we're loading from same origin
      
      const imageUrl = "/images/B.png";
      
      img.onload = () => {
        setImageLoaded(true);
        setImageError(false);
        // Force browser to cache the image
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = imageUrl;
        document.head.appendChild(link);
      };
      
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(false);
        // Retry after 1 second
        setTimeout(preloadImage, 1000);
      };
      
      img.src = imageUrl;
    };

    // Start preloading immediately
    preloadImage();

    // Add preload link to document head for browser optimization
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/images/B.png';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

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
    <section id="home" className={`min-h-screen flex items-center ${backgroundClass} pt-24`}>
      {/* Optional Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => {
          // Use stable values instead of Math.random()
          const starTop = 10 + (i * 15) % 40; // Stable positioning
          const starDuration = 8 + (i * 2); // Stable duration
          const starDelay = i * 3;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0"
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

      {/* Hi, I'm Bharath Shetty spacing left side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 pl-2 sm:pl-4 md:pl-6 lg:pl-8 text-center sm:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 mt-6 sm:mt-8 lg:mt-10 leading-tight whitespace-nowrap"
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
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
            >
              Senior Technical Instructional Designer II | eLearning Developer | Content Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            >
              Passionate about creating engaging eLearning solutions that transform complex concepts into interactive, memorable experiences using cutting-edge design and development tools.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Button 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#ff6b35] text-white font-semibold hover:bg-[#ff6b35]/80 transition-all duration-300 primary-glow text-sm sm:text-base"
                onClick={() => window.open('/documents/Bharath_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 glass-effect text-white border-white/20 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
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
              className="flex justify-center sm:justify-start space-x-3 sm:space-x-4"
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
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:text-[#ff6b35] transition-all duration-300 primary-glow"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-5 sm:h-5" />
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
                {/* Animated background elements */}
                <div className="absolute w-full h-full">
                  {/* Gradient orbs */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/10 to-[#ffb84d]/10 rounded-full blur-2xl animate-pulse-slow"></div>
                  
                  {/* Animated circles */}
                  {[...Array(3)].map((_, index) => {
                    const baseSize = 280; // Base size for mobile
                    const circleSize = baseSize + index * 30; // Smaller increment for mobile
                    const circleDuration = 8 + index * 2;
                    const circleDelay = index * 0.5;
                    
                    return (
                      <div
                        key={index}
                        className="absolute left-1/2 top-1/2 border border-[#ff6b35]/20 rounded-full hidden sm:block"
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
                  
                  {/* Sparkles - Enhanced bright orange */}
                  {[...Array(12)].map((_, index) => {
                    const angle = (index * 30) * (Math.PI / 180); // Convert to radians
                    const baseRadius = 120; // Smaller radius for mobile
                    const radius = window.innerWidth < 640 ? baseRadius : 200; // Responsive radius
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const animationDuration = 2 + (index % 3) * 0.5; // Stable duration
                    const animationDelay = index * 0.15; // Stable delay
                    
                    return (
                      <div
                        key={`sparkle-${index}`}
                        className="absolute sparkle-container"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: window.innerWidth < 640 ? '8px' : '12px',
                          height: window.innerWidth < 640 ? '8px' : '12px',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          animationName: 'sparkleGlow',
                          animationDuration: `${animationDuration}s`,
                          animationTimingFunction: 'ease-in-out',
                          animationIterationCount: 'infinite',
                          animationDelay: `${animationDelay}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {/* Main bright orange glow */}
                        <div className="w-full h-full bg-[#ff6b35] rounded-full shadow-[0_0_20px_#ff6b35,0_0_40px_#ff6b35,0_0_60px_#ff6b35]"></div>
                        
                        {/* Inner bright core */}
                        <div className="absolute inset-1 bg-[#ffaa00] rounded-full shadow-[0_0_10px_#ffaa00]"></div>
                        
                        {/* Pulsing outer ring */}
                        <div className="absolute -inset-1 bg-[#ff6b35] rounded-full animate-ping opacity-60"></div>
                        
                        {/* Sharp center point */}
                        <div className="absolute inset-[40%] bg-white rounded-full opacity-90"></div>
                      </div>
                    );
                  })}
                  
                  {/* Floating particles */}
                  {[...Array(8)].map((_, index) => {
                    const particleLeft = 20 + (index * 10) % 60; // Stable positioning
                    const particleTop = 15 + (index * 12) % 70;
                    const particleDuration = 5 + (index % 3); // Stable duration
                    const particleDelay = index * 0.3;
                    
                    return (
                      <div
                        key={`particle-${index}`}
                        className="absolute bg-gradient-to-r from-[#ff6b35]/40 to-[#ffb84d]/20"
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          left: `${particleLeft}%`,
                          top: `${particleTop}%`,
                          animationName: 'floatParticle',
                          animationDuration: `${particleDuration}s`,
                          animationTimingFunction: 'ease-in-out',
                          animationIterationCount: 'infinite',
                          animationDelay: `${particleDelay}s`,
                          filter: 'blur(1px)'
                        }}
                      />
                    );
                  })}
                </div>

                {/* Main container with glass effect */}
                <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 p-3 sm:p-4 hover:scale-102 transition-transform duration-700">
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-full border border-[#ff6b35]/20"></div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-gray-900/90 to-black/90">
                    {/* Loading placeholder */}
                    {!imageLoaded && !imageError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                        <div className="w-16 h-16 border-4 border-[#ff6b35] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {/* Error placeholder */}
                    {imageError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                        <div className="text-center text-gray-400">
                          <div className="w-16 h-16 bg-[#ff6b35]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-2xl">👤</span>
                          </div>
                          <p className="text-sm">Image Loading...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Soft lighting overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/5 to-transparent mix-blend-overlay"></div>
                    
                    {/* Main image with instant placeholder */}
                    <img 
                      src={imageLoaded ? "/images/B.png" : placeholderSrc}
                      alt="Bharath Shetty - Senior Instructional Designer" 
                      className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                        imageLoaded ? 'opacity-100' : 'opacity-70'
                      }`}
                      style={{ 
                        objectPosition: "center center",
                        transform: "scale(1.05)",
                        filter: imageLoaded ? "contrast(1.05) brightness(1.02)" : "contrast(0.8) brightness(0.9)"
                      }}
                      onLoad={() => {
                        setImageLoaded(true);
                        setImageError(false);
                      }}
                      onError={() => {
                        setImageError(true);
                        setImageLoaded(false);
                        // Retry loading after 2 seconds
                        setTimeout(() => {
                          const img = new Image();
                          img.onload = () => {
                            setImageLoaded(true);
                            setImageError(false);
                          };
                          img.src = "/images/B.png";
                        }, 2000);
                      }}
                      loading="eager"
                      decoding="async"
                    />
                    
                    {/* Professional lighting effects */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/40"></div>
                    
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#ff6b35]/10 to-transparent"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24">
                  <div className="relative w-full h-full">
                    <svg className="absolute animate-ping-slow" width="20" height="20" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="4" fill="#ff6b35" fillOpacity="0.2" />
                    </svg>
                  </div>
                </div>
                
                {/* Subtle accent lines */}
                <div className="absolute top-1/2 left-0 w-12 h-[1px] bg-gradient-to-r from-[#ff6b35]/40 to-transparent transform -translate-x-16"></div>
                <div className="absolute top-1/2 right-0 w-12 h-[1px] bg-gradient-to-l from-[#ff6b35]/40 to-transparent transform translate-x-16"></div>
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
    color: #ff6b35;
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
      background: linear-gradient(135deg, #ff6b35 0%, #ffb84d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .sparkle-container {
      filter: drop-shadow(0 0 4px rgba(255, 107, 53, 0.6)) drop-shadow(0 0 8px rgba(255, 107, 53, 0.4));
    }
    
    /* Allow text wrapping on mobile only */
    h2.whitespace-nowrap {
      white-space: normal !important;
      word-break: break-word;
    }
  }

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.15;
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
      opacity: 0.2;
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
      opacity: 0.3;
    }
  }

  @keyframes floatParticle {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-20px) scale(1.5);
      opacity: 0.4;
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 107, 53, 0.2),
                  0 0 60px rgba(255, 107, 53, 0.1);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 107, 53, 0.3),
                  0 0 80px rgba(255, 107, 53, 0.2);
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
          opacity: 0.8;
          transform: scale(0.8);
          filter: brightness(1.2);
        }
        50% {
          opacity: 1;
          transform: scale(1.3);
          filter: brightness(1.8);
        }
      }  .sparkle-container {
    filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.8)) drop-shadow(0 0 16px rgba(255, 107, 53, 0.6));
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

// Preload the profile image
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.as = 'image';
preloadLink.href = '/images/B.png';
preloadLink.fetchPriority = 'high';
document.head.appendChild(preloadLink);
