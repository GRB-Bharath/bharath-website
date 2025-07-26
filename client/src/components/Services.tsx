import { motion } from "framer-motion";
import { Lightbulb, Laptop, FileText, Smartphone, Video, Brush, ArrowRight, Eye, Info, Hand } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Tracking which service is being hovered over
  const services = [
    {
      icon: Lightbulb,
      title: "Instructional Design",
      description: "Creating structured learning experiences that engage learners and achieve educational objectives through evidence-based design principles.",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]",
      hoverClass: "hover:primary-glow",
      link: "#contact",
      details: "Learn how I can design your next learning experience"
    },
    {
      icon: Laptop,
      title: "eLearning Development",
      description: "Building interactive eLearning modules using cutting-edge tools and technologies to deliver engaging digital learning experiences.",
      color: "text-[#ff8f50]",
      bgColor: "bg-[#ff8f50]",
      hoverClass: "hover:secondary-glow",
      link: "#contact",
      details: "Discover my eLearning development expertise"
    },
    {
      icon: FileText,
      title: "Storyboarding",
      description: "Visual planning and narrative development for eLearning content, ensuring clear learning pathways and effective content flow.",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]",
      hoverClass: "hover:primary-glow",
      link: "#contact",
      details: "See my storyboarding process in action"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces that enhance learner experience and improve knowledge retention.",
      color: "text-[#ff8f50]",
      bgColor: "bg-[#ff8f50]",
      hoverClass: "hover:secondary-glow",
      link: "#contact",
      details: "Explore my UI/UX design portfolio"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing for educational content, creating compelling visual narratives that support learning objectives.",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#ff6b35]",
      hoverClass: "hover:primary-glow",
      link: "#contact",
      details: "View my video editing capabilities"
    },
    {
      icon: Brush,
      title: "Graphic Design",
      description: "Creating visually appealing graphics, illustrations, and visual elements that enhance learning content and brand identity.",
      color: "text-[#ff8f50]",
      bgColor: "bg-[#ff8f50]",
      hoverClass: "hover:secondary-glow",
      link: "#contact",
      details: "Check out my graphic design work"
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Services</h2>
          <p className="text-xl text-gray-400">Comprehensive eLearning and design solutions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Interactive service card with hover effects */}
              <div
                className={`glass-effect p-6 rounded-2xl ${service.hoverClass} transition-all duration-300 group relative overflow-hidden pointer-events-auto transform-gpu`}
                style={{ zIndex: 1, position: 'relative' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  {/* Hover effect indicator overlay - removed */}
                
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 via-transparent to-[#ff8f50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff8f50] rounded-full flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300 cursor-pointer hover:from-[#ff8f50] hover:to-[#ff6b35] relative`}
                      animate={{
                        rotate: hoveredService === index ? 360 : 0,
                        scale: hoveredService === index ? 1.1 : 1,
                        transition: { duration: 0.5 }
                      }}
                      style={{ pointerEvents: 'auto' }}
                    >
                      <service.icon className="text-2xl text-white drop-shadow-lg" />
                      
                      {/* Hand cursor icon that appears on entire card hover */}
                      <motion.div
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg"
                        animate={{ 
                          scale: hoveredService === index ? 1 : 0,
                          opacity: hoveredService === index ? 1 : 0,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Hand className="h-3 w-3 text-[#ff6b35]" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className={`text-xl font-semibold mb-3 text-white group-hover:${service.color} transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Service description */}
                    <motion.p 
                      className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02, originX: 0 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
