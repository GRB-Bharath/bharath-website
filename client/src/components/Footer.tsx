import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 gradient-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">© 2025 Bharath Shetty. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Senior Instructional Designer & eLearning Developer</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
