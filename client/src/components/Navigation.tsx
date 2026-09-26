import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    // If currently dark (or system evaluating to dark), toggle to light, else dark
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(isDark ? "light" : "dark");
  };

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="banner"
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0B0F19]/85 backdrop-blur-xl border-b border-slate-200/90 dark:border-indigo-500/20 shadow-sm dark:shadow-lg dark:shadow-indigo-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Brand Mark (Left) */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Bharath Shetty - Return to top"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                scrollToSection("home");
              }
            }}
            onClick={() => scrollToSection("home")}
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl p-1 z-10"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-headline font-bold text-sm tracking-wider" aria-hidden="true">
                BS
              </span>
            </div>
            <div>
              <span className="text-lg font-bold font-headline text-gradient tracking-tight block">
                Bharath Shetty
              </span>
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-300 block uppercase tracking-widest -mt-0.5">
                Learning Consultant & ID
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Centered (Home to Contact) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center pointer-events-auto"
          >
            <div className="flex items-center space-x-1 lg:space-x-1.5 bg-slate-100/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-indigo-500/20 backdrop-blur-md shadow-sm">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-indigo-600/15 rounded-full transition-all duration-200 relative group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300 group-hover:w-3/5 rounded-full" aria-hidden="true" />
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Right Controls: Theme Toggle & Quick CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 z-10">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-indigo-500/25 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-amber-400" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-indigo-600" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick CTA button */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="ml-2 px-4 py-2 text-sm font-medium font-headline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/20 focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-amber-400" aria-hidden="true" />
              ) : (
                <Moon size={20} className="text-indigo-600" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/20 focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile sidebar menu */}
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 z-50 md:hidden shadow-2xl border-r border-slate-200 dark:border-indigo-500/20 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-indigo-500/20 bg-slate-50 dark:bg-[#0F172A]/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-white font-headline font-bold text-xs" aria-hidden="true">BS</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold font-headline text-gradient block">Bharath Shetty</span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">Learning Consultant</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Close menu"
                >
                  <X size={20} aria-hidden="true" />
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
                    className="mobile-nav-item w-full flex items-center px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-indigo-600/15 rounded-xl transition-all duration-200 font-medium text-sm text-left border border-transparent focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3 opacity-70" aria-hidden="true" />
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-4 border-t border-slate-200 dark:border-indigo-500/20 bg-slate-50 dark:bg-[#0F172A]/50 space-y-3">
                <div className="flex items-center justify-between px-2 py-1">
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Theme</span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun size={14} className="text-amber-400" aria-hidden="true" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={14} className="text-indigo-600" aria-hidden="true" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-3 text-sm font-medium font-headline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-xl shadow-md shadow-indigo-500/25"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
