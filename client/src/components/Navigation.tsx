import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-30 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-indigo-500/20 shadow-lg shadow-indigo-950/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            {/* Lumina Geometric Icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-headline font-bold text-sm tracking-wider">BS</span>
            </div>
            <div>
              <h1 className="text-lg font-bold font-headline text-gradient tracking-tight">
                Bharath Shetty
              </h1>
              <span className="text-[10px] font-mono text-indigo-300/80 block uppercase tracking-widest -mt-1">
                Lumina Executive
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-indigo-500/20 backdrop-blur-md">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-600/15 rounded-full transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300 group-hover:w-3/5 rounded-full"></span>
                </motion.button>
              ))}
            </div>

            {/* Quick CTA button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-3 px-4 py-2 text-sm font-medium font-headline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] rounded-xl bg-slate-900/60 border border-indigo-500/20"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile sidebar menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#0B0F19] z-50 md:hidden shadow-2xl border-r border-indigo-500/20 mobile-sidebar mobile-nav-container flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-indigo-500/20 bg-[#0F172A]/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-white font-headline font-bold text-xs">BS</span>
                  </div>
                  <h2 className="text-base font-bold font-headline text-gradient">Bharath Shetty</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="mobile-nav-item w-full flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-indigo-600/15 rounded-xl transition-all duration-200 font-medium text-sm text-left border border-transparent hover:border-indigo-500/20"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 opacity-60"></span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-indigo-500/20 bg-[#0F172A]/50">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-3 text-sm font-medium font-headline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-xl shadow-lg shadow-indigo-500/25"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
