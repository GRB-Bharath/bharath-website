import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Info, MousePointer } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Enhanced function to handle project card clicks - simplified and more robust
  const handleProjectClick = (project: any) => {
    console.log('Project clicked:', project.title);
    
    if (project.fileUrl && project.fileUrl !== "") {
      window.open(project.fileUrl, '_blank');
    } else {
      alert(`🎯 Project: ${project.title}\n\n📅 Year: ${project.year}\n🏷️ Category: ${project.category}\n\n✅ Click functionality is working!\n💡 Add your file links to the fileUrl field to open actual project files.`);
    }
  };

  const projects = [
    {
      title: "Interactive eLearning Module",
      description: "Comprehensive learning platform develop using Adobe Captivate Tool and added Interactive Quiz.",
      image: "https://elearningimages.adobe.com/files/2023/07/Discover-all-new-Adobe-Captivate-Allen.jpg",
      tags: ["Adobe Captivate Tool", "LMS"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "https://same-ddtrjnex7nj-latest.netlify.app/",
      category: "eLearning",
      year: "2025",
      tools: ["Articulate Storyline", "Adobe Creative Suite", "LMS Integration"],
      isClickable: true
    },
    {
      title: "About Us Video created for Entire Organization",
      description: "Created a compelling About Us video for the entire organization to the client AI Certs to enhance customer communication and engagement.",
      image: "https://i.vimeocdn.com/portrait/96849241_640x640",
      tags: ["synthesia", "UI/UX", "Adobe illustrator"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "https://share.synthesia.io/15c8db48-92ca-4131-a6e5-1f3c895a10c4",
      category: "UI/UX",
      year: "2025",
      tools: ["Figma", "Adobe XD", "Prototyping"],
      isClickable: true
    },
    {
      title: "Storyboard Development",
      description: "Visual narrative planning for complex educational content and learning pathways.",
      image: "/images/time.png",
      tags: ["Storyboard", "Planning", "Microsoft PowerPoint"],
      hoverClass: "hover:primary-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "https://docs.google.com/presentation/d/1k3WvGxWKdnK-a0Vsa0At6AWiZI8GBBO3K-2RnkVRUlc/edit?usp=sharing",
      category: "Content",
      year: "2025",
      tools: ["Storyboard That", "Adobe Illustrator", "Mind Mapping"],
      isClickable: true
    },
    // {
    //   title: "Educational Video Series",
    //   description: "Professional video content creation for enhanced learning experiences.",
    //   image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    //   tags: ["Video", "Production"],
    //   hoverClass: "hover:orange-glow",
    //   projectUrl: "#",
    //   githubUrl: "#",
    //   fileUrl: "",
    //   category: "Video",
    //   year: "2024",
    //   tools: ["Adobe Premiere Pro", "After Effects", "Audition"],
    //   isClickable: true
    // },
    // {
    //   title: "Brand Identity Design",
    //   description: "Complete visual identity system for educational technology startup.",
    //   image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    //   tags: ["Branding", "Design"],
    //   hoverClass: "hover:neon-glow",
    //   projectUrl: "#",
    //   githubUrl: "#",
    //   fileUrl: "",
    //   category: "Branding",
    //   year: "2023",
    //   tools: ["Adobe Illustrator", "Photoshop", "Brand Guidelines"],
    //   isClickable: true
    // },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Data visualization dashboard for tracking learning progress and outcomes.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    //   tags: ["Analytics", "Dashboard"],
    //   hoverClass: "hover:orange-glow",
    //   projectUrl: "#",
    //   githubUrl: "#",
    //   fileUrl: "",
    //   category: "Development",
    //   year: "2024",
    //   tools: ["React", "D3.js", "Data Visualization"],
    //   isClickable: true
    // }
  ];

  return (
    <section id="portfolio" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-400">Showcasing my best work and projects</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main clickable card wrapper - explicitly clickable with pointer-events-auto */}
              <div 
                onClick={() => handleProjectClick(project)}
                className={`glass-effect rounded-2xl overflow-hidden ${project.hoverClass} 
                  transition-all duration-300 cursor-pointer group relative transform-gpu pointer-events-auto`}
                style={{ zIndex: 1, position: 'relative' }} // Ensure it's above other elements and properly contains children
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 3,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Enhanced click indicator overlay */}
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProject === index ? 1 : 0,
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-[#ff6b35] text-white rounded-full p-2 flex items-center space-x-1 shadow-lg"
                    >
                      <MousePointer className="h-3 w-3" />
                      <span className="text-xs font-semibold">Click</span>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/10 via-transparent to-[#ff8f50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ff6b35]/50 transition-all duration-300`} />
                  
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      style={{ pointerEvents: 'none' }} // Prevent image from intercepting clicks
                      whileHover={{ 
                        filter: "brightness(1.2) saturate(1.1)",
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Enhanced overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project category badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ scale: 1.05 }}
                      style={{ pointerEvents: 'none' }} // Ensure badge doesn't block clicks
                    >
                      <span className="px-3 py-1 bg-black/90 text-white text-xs rounded-full backdrop-blur-sm border border-white/20">
                        {project.category} • {project.year}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300 flex items-center"
                      whileHover={{ x: 5 }}
                      style={{ pointerEvents: 'none' }} // Ensure text doesn't block clicks
                    >
                      {project.title}
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: hoveredProject === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Eye className="h-4 w-4 text-[#ff6b35]" />
                      </motion.div>
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02, originX: 0 }}
                      style={{ pointerEvents: 'none' }} // Ensure text doesn't block clicks
                    >
                      {project.description}
                    </motion.p>

                    {/* Enhanced click to view indicator */}
                    <motion.div 
                      className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === index ? 0 : 10,
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: { duration: 0.3 }
                      }}
                      style={{ pointerEvents: 'none' }} // Ensure indicator doesn't block clicks
                    >
                      <div className="flex items-center text-sm font-medium text-[#ff6b35] bg-[#ff6b35]/10 rounded-lg px-3 py-2 border border-[#ff6b35]/20">
                        <MousePointer className="mr-2 h-4 w-4" />
                        <span>Click anywhere to view project</span>
                      </div>
                    </motion.div>
                    
                    {/* Tools used section */}
                    <motion.div 
                      className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredProject === index ? "auto" : 0,
                        opacity: hoveredProject === index ? 1 : 0,
                      }}
                      style={{ pointerEvents: 'none' }} // Ensure tools section doesn't block clicks
                    >
                      <p className="text-xs text-gray-400 mb-2">Tools Used:</p>
                      <div className="flex flex-wrap gap-1 max-w-full">
                        {project.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-2" style={{ pointerEvents: 'none' }}> {/* Ensure tags don't block clicks */}
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 2,
                            transition: { duration: 0.2 }
                          }}
                          className={`px-3 py-1 text-black text-sm rounded-full font-medium transition-all duration-300 ${
                            tagIndex % 2 === 0 
                              ? 'bg-[#ff4e4e] hover:bg-[#ff6b35]/80 hover:shadow-lg hover:shadow-[#ff6b35]/50' 
                              : 'bg-[#fac4a2] hover:bg-[#ff8f50]/80 hover:shadow-lg hover:shadow-[#ff8f50]/50'
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
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

export default Portfolio;
