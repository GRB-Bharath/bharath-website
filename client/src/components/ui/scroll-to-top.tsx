import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 scroll-top-button"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] flex items-center justify-center text-white shadow-lg shadow-indigo-500/35 hover:shadow-indigo-500/50 border border-indigo-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 stroke-[2.5]" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
