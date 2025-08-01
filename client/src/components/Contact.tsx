import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
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
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full py-3 bg-[#ff6b35] text-white font-semibold hover:bg-[#ff6b35]/80 transition-all duration-300 primary-glow"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
