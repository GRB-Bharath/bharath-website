import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Info, MousePointer } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Enhanced function to handle project card clicks - simplified and more robust
  const handleProjectClick = (project: any) => {
    console.log('Project clicked:', project.title);
    
    if (project.fileUrl && project.fileUrl !== "") {
      // Open PDFs inline in a new tab so they preview in the browser
      window.open(project.fileUrl, '_blank', 'noopener,noreferrer');
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
      image: "/images/Aicerts.png",
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
    {
      title: "Storyboard Sample – Zomato",
      description: "A detailed storyboard created for Zomato, mapping out scene-by-scene visual flow, narration, and instructional content for an eLearning module.",
      image: "/images/zomato-cover.png",
      tags: ["Storyboard", "Zomato", "eLearning", "PDF"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Storyboard Sample- Zomato.pdf",
      category: "Storyboard",
      year: "2026",
      tools: ["Microsoft PowerPoint", "Instructional Design", "Storyboarding"],
      isClickable: true
    },
    {
      title: "JP Morgan Work Sample",
      description: "A work sample on personal and phishing attacks created for JP Morgan, focusing on awareness and learner readiness.",
      image: "/images/JPMC.jpg",
      tags: ["Security", "Awareness", "ILT", "PDF"],
      hoverClass: "hover:orange-glow",
      projectUrl: "#",
      githubUrl: "#",
      fileUrl: "/documents/Sample work JPMC- personal and phishing attacks.pdf",
      category: "Security Training",
      year: "2026",
      tools: ["Instructional Design", "Storyboarding", "Content Development"],
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
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 dark:text-indigo-300 font-mono text-xs mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            <span>SELECTED CLIENT & WORK SAMPLES</span>
          </div>
          <h2 id="portfolio-heading" className="text-4xl sm:text-5xl font-bold font-headline text-gradient pb-1 mb-4 tracking-tight leading-normal sm:leading-tight">
            Featured Portfolio
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Live interactive modules, video productions, and instructional storyboards for tier-1 enterprises
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div 
                role="button"
                tabIndex={0}
                aria-label={`Open sample: ${project.title} (${project.category})`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleProjectClick(project);
                  }
                }}
                onClick={() => handleProjectClick(project)}
                className="bg-white/90 dark:bg-slate-900/85 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-950/50 transition-all duration-300 cursor-pointer group relative transform-gpu pointer-events-auto flex flex-col h-full backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                style={{ zIndex: 1, position: 'relative' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.25 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="flex flex-col h-full"
                >
                  {/* Click indicator badge */}
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProject === index ? 1 : 0,
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-[#4F46E5] text-white rounded-full px-3 py-1 flex items-center space-x-1.5 shadow-lg shadow-indigo-500/40 text-xs font-mono font-medium"
                    >
                      <MousePointer className="h-3 w-3" aria-hidden="true" />
                      <span>Preview</span>
                    </motion.div>
                  </div>
                  
                  {/* Hover background tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden h-52 bg-slate-900">
                    <motion.img 
                      src={project.image} 
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      style={{ pointerEvents: 'none' }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Category pill */}
                    <div className="absolute top-4 left-4" style={{ pointerEvents: 'none' }}>
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium rounded-full backdrop-blur-md border border-slate-200 dark:border-indigo-500/30">
                        {project.category} • {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative z-10 flex flex-col flex-1">
                    <h3 
                      className="text-lg sm:text-xl font-bold font-headline text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300 flex items-start justify-between min-h-[3.25rem]"
                      style={{ pointerEvents: 'none' }}
                    >
                      <span>{project.title}</span>
                      <Eye className="h-4 w-4 text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 ml-2" aria-hidden="true" />
                    </h3>
                    
                    <p 
                      className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 font-sans line-clamp-3"
                      style={{ pointerEvents: 'none' }}
                    >
                      {project.description}
                    </p>

                    {/* Quick view indicator */}
                    <div className="mt-auto mb-4" style={{ pointerEvents: 'none' }}>
                      <div className="flex items-center text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg px-3 py-2 border border-indigo-200 dark:border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors">
                        <MousePointer className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                        <span>Click to open full work sample</span>
                      </div>
                    </div>
                    
                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-indigo-500/15" style={{ pointerEvents: 'none' }}>
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md border transition-all duration-200 ${
                            tagIndex % 2 === 0 
                              ? 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/25 group-hover:border-indigo-400/50' 
                              : 'bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/25 group-hover:border-purple-400/50'
                          }`}
                        >
                          {tag}
                        </span>
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
