import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Github, Send, CheckCircle, AlertCircle, Loader2, Briefcase, Sparkles, Copy, Check } from "lucide-react";
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
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bharathb451@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "bharathb451@gmail.com",
      href: "mailto:bharathb451@gmail.com",
      accent: "text-indigo-400",
      bgGlow: "bg-indigo-500/10 border-indigo-500/30",
      badge: "Preferred"
    },
    {
      icon: Briefcase,
      label: "Current Engagement",
      value: "London Stock Exchange Group (LSEG)",
      accent: "text-violet-400",
      bgGlow: "bg-violet-500/10 border-violet-500/30",
      badge: "LXP Platform"
    },
    {
      icon: MapPin,
      label: "Location Base",
      value: "Bengaluru, Karnataka, India",
      accent: "text-sky-400",
      bgGlow: "bg-sky-500/10 border-sky-500/30",
      badge: "IST (UTC+5:30)"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bharathkumargr", label: "LinkedIn", hoverBorder: "hover:border-indigo-400 hover:text-indigo-300" },
    { icon: Twitter, href: "https://x.com/Bharath44618051", label: "Twitter", hoverBorder: "hover:border-sky-400 hover:text-sky-300" },
    { icon: Github, href: "https://github.com/GRB-Bharath", label: "GitHub", hoverBorder: "hover:border-violet-400 hover:text-violet-300" },
    { icon: Mail, href: "mailto:bharathb451@gmail.com", label: "Email", hoverBorder: "hover:border-indigo-400 hover:text-indigo-300" }
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            Connect & Collaborate
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-gradient pb-1 mb-4 tracking-tight leading-normal sm:leading-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Ready to pioneer scalable LXP platforms, intelligent instructional systems, or AI-powered learning media? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact details & executive card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/90 dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <h3 className="text-2xl font-bold font-headline text-slate-900 dark:text-white mb-3">
                Get in Touch
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-8">
                Whether you are exploring scalable corporate learning architecture, generative AI workflows for training, or front-end engineering for enterprise platforms, I bring hands-on expertise from blueprint to global deployment.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200"
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${info.bgGlow} ${info.accent}`}>
                      <info.icon size={20} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-medium">
                          {info.label}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          {info.badge}
                        </span>
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors block truncate mt-0.5"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate mt-0.5">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Copy Email Action */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">Quick Copy: bharathb451@gmail.com</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className="flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-500/40 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {copiedEmail ? <Check size={13} className="text-green-600 dark:text-green-400" aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-white/90 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/90 dark:border-indigo-500/20 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-400 mb-4 flex items-center gap-2 font-semibold">
                <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                Executive Profiles & Networks
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 ${social.hoverBorder}`}
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    <social.icon size={20} aria-hidden="true" />
                    <span className="text-[11px] font-mono mt-1.5 text-slate-600 dark:text-slate-400">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 dark:bg-slate-900/70 p-8 sm:p-10 rounded-2xl border border-slate-200/90 dark:border-indigo-500/25 backdrop-blur-xl relative min-h-[520px] shadow-lg dark:shadow-2xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 16 }}
                      className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-6 primary-glow"
                    >
                      <CheckCircle className="text-indigo-600 dark:text-indigo-400" size={44} aria-hidden="true" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-2xl sm:text-3xl font-bold font-headline text-slate-900 dark:text-white mb-3"
                    >
                      Message Received!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-slate-700 dark:text-slate-300 max-w-md mb-8 leading-relaxed text-sm sm:text-base font-sans"
                    >
                      Thank you for reaching out! Your note has been dispatched directly. I will get back to you promptly.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <button
                        type="button"
                        onClick={handleSendAnother}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-[#4338CA] hover:to-[#4F46E5] text-white font-headline font-semibold text-sm primary-glow transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        Send Another Message
                      </button>
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
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4F46E5]" aria-hidden="true" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
                          Direct Communication Channel
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-500/20 font-medium">
                        Active Response
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-medium">
                          Your Name <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          autoComplete="name"
                          className="w-full bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all focus-visible:ring-indigo-500"
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-medium">
                          Email Address <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          autoComplete="email"
                          className="w-full bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all focus-visible:ring-indigo-500"
                          placeholder="e.g. john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-medium">
                        Project / Inquiries Subject <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">*</span>
                      </label>
                      <Input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="off"
                        className="w-full bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all focus-visible:ring-indigo-500"
                        placeholder="e.g. LXP Platform Collaboration / AI Training Solutions"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-medium">
                        Detailed Message <span className="text-indigo-600 dark:text-indigo-400" aria-hidden="true">*</span>
                      </label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        autoComplete="off"
                        rows={5}
                        className="w-full bg-white dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none focus-visible:ring-indigo-500"
                        placeholder="Share your goals, project timeline, platform requirements, or consultation topics..."
                      />
                    </div>

                    {/* Error banner */}
                    {contactMutation.isError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        role="alert"
                        aria-live="assertive"
                        className="flex items-center gap-3 bg-red-500/15 border border-red-500/40 rounded-xl px-4 py-3 text-red-600 dark:text-red-400 text-xs font-mono"
                      >
                        <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
                        <span>Transmission error. Please retry or email bharathb451@gmail.com directly.</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full py-3.5 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-[#4338CA] hover:to-[#4F46E5] text-white font-headline font-semibold rounded-xl primary-glow shadow-md shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                          <span>Dispatching Communication...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} aria-hidden="true" />
                          <span>Send Priority Message</span>
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
