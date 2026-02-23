import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      // error state is handled via contactMutation.isError in the UI
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    contactMutation.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bharathb451@gmail.com",
      bgColor: "bg-[#ff6b35]"
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "+91 7760....51",
    //   bgColor: "bg-[#ffb84d]"
    // },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, Karnataka, India",
      bgColor: "bg-[#ff6b35]"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bharathkumargr", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Bharath44618051", label: "Twitter" },
    { icon: Github, href: "https://github.com/GRB-Bharath", label: "GitHub" },
    { icon: Mail, href: "mailto:bharathb451@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400">Ready to create amazing eLearning experiences?</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#ff6b35] mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always excited to collaborate on innovative eLearning projects. Whether you need instructional design, eLearning development, or UI/UX design services, let's discuss how we can bring your vision to life.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                    <info.icon className="text-black" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400">{info.title}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#ffb84d] mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:primary-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative min-h-[420px]"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── SUCCESS STATE ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center glass-effect rounded-2xl border border-green-500/30 p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="text-green-400" size={44} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-green-400 mb-3"
                  >
                    Message Sent Successfully!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 mb-8 leading-relaxed"
                  >
                    Thank you for reaching out! 🎉<br />
                    I'll get back to you as soon as possible.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      onClick={handleSendAnother}
                      className="bg-[#ff6b35] hover:bg-[#ff6b35]/80 text-white font-semibold px-8 py-3 transition-all duration-300 primary-glow"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                /* ── FORM STATE ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <Input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full glass-effect border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <Input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full glass-effect border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full glass-effect border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      rows={5}
                      className="w-full glass-effect border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Error banner */}
                  {contactMutation.isError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-500/15 border border-red-500/40 rounded-lg px-4 py-3 text-red-400 text-sm"
                    >
                      <AlertCircle size={18} className="shrink-0" />
                      Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-3 bg-[#ff6b35] text-white font-semibold hover:bg-[#ff6b35]/80 transition-all duration-300 primary-glow flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
