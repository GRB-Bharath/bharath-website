import { motion } from "framer-motion";
import { Lightbulb, Laptop, FileText, Smartphone, Video, Brush, ArrowRight, Eye, Info } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Tracking which service is being hovered over
  const services = [
    {
      icon: Lightbulb,
      title: "Instructional Design",
      description: "Creating structured learning experiences that engage learners and achieve educational objectives through evidence-based design principles.",
      color: "text-[#00ff87]",
      bgColor: "bg-[#00ff87]",
      hoverClass: "hover:neon-glow",
      link: "#contact",
      details: "Learn how I can design your next learning experience"
    },
    {
      icon: Laptop,
      title: "eLearning Development",
      description: "Building interactive eLearning modules using cutting-edge tools and technologies to deliver engaging digital learning experiences.",
      color: "text-[#ffb84d]",
      bgColor: "bg-[#ffb84d]",
      hoverClass: "hover:orange-glow",
      link: "#contact",
      details: "Discover my eLearning development expertise"
    },
    {
      icon: FileText,
      title: "Storyboarding",
      description: "Visual planning and narrative development for eLearning content, ensuring clear learning pathways and effective content flow.",
      color: "text-[#00ff87]",
      bgColor: "bg-[#00ff87]",
      hoverClass: "hover:neon-glow",
      link: "#contact",
      details: "See my storyboarding process in action"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces that enhance learner experience and improve knowledge retention.",
      color: "text-[#ffb84d]",
      bgColor: "bg-[#ffb84d]",
      hoverClass: "hover:orange-glow",
      link: "#contact",
      details: "Explore my UI/UX design portfolio"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing for educational content, creating compelling visual narratives that support learning objectives.",
      color: "text-[#00ff87]",
      bgColor: "bg-[#00ff87]",
      hoverClass: "hover:neon-glow",
      link: "#contact",
      details: "View my video editing capabilities"
    },
    {
      icon: Brush,
      title: "Graphic Design",
      description: "Creating visually appealing graphics, illustrations, and visual elements that enhance learning content and brand identity.",
      color: "text-[#ffb84d]",
      bgColor: "bg-[#ffb84d]",
      hoverClass: "hover:orange-glow",
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
                  {/* Hover effect indicator overlay */}
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredService === index ? 1 : 0,
                        opacity: hoveredService === index ? 1 : 0,
                        transition: { duration: 0.2 }
                      }}
                      className={`${service.bgColor} text-black rounded-full p-2 flex items-center justify-center shadow-lg w-8 h-8`}
                    >
                      <Eye className="h-4 w-4" />
                    </motion.div>
                  </div>
                
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff87]/10 via-transparent to-[#ffb84d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${
                    index % 2 === 0 
                      ? 'group-hover:border-[#00ff87]/50' 
                      : 'group-hover:border-[#ffb84d]/50'
                  } transition-all duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                      style={{ pointerEvents: 'none' }}
                    >
                      <service.icon className="text-2xl text-black" />
                    </motion.div>
                    
                    <motion.h3 
                      className={`text-xl font-semibold mb-3 ${service.color} group-hover:text-white transition-colors duration-300 flex items-center`}
                      whileHover={{ x: 5 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      {service.title}
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: hoveredService === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Eye className={`h-4 w-4 ${service.color}`} />
                      </motion.div>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02, originX: 0 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Enhanced hover detail indicator */}
                    <motion.div 
                      className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredService === index ? 0 : 10,
                        opacity: hoveredService === index ? 1 : 0,
                        transition: { duration: 0.3 }
                      }}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className={`flex items-center text-sm font-medium ${service.color} ${
                        index % 2 === 0 
                          ? 'bg-[#00ff87]/10 border border-[#00ff87]/20' 
                          : 'bg-[#ffb84d]/10 border border-[#ffb84d]/20'
                      } rounded-lg px-3 py-2`}>
                        <Info className="mr-2 h-4 w-4" />
                        <span>{service.details}</span>
                      </div>
                    </motion.div>

                    {/* Service highlight that appears on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      style={{ pointerEvents: 'none' }}
                    >
                      <span className={service.color}>{service.title} specialist</span>
                      <Eye className={`ml-2 h-4 w-4 ${service.color} animate-pulse`} />
                    </motion.div>
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
