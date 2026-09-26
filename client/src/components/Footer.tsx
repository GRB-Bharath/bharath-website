import { ArrowUp, Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bharathkumargr", label: "LinkedIn (opens in new tab)" },
    { icon: Twitter, href: "https://x.com/Bharath44618051", label: "Twitter (opens in new tab)" },
    { icon: Github, href: "https://github.com/GRB-Bharath", label: "GitHub (opens in new tab)" },
    { icon: Mail, href: "mailto:bharathb451@gmail.com", label: "Email Bharath" },
  ];

  return (
    <footer role="contentinfo" className="relative bg-slate-100 dark:bg-[#070A13] border-t border-slate-200 dark:border-indigo-500/20 pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Top ambient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-300/70 dark:border-slate-800/80 items-start">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-headline font-bold text-lg shadow-md primary-glow">
                <span aria-hidden="true">BS</span>
              </div>
              <div>
                <span className="text-xl font-bold font-headline text-slate-900 dark:text-white tracking-tight block">
                  Bharath Shetty
                </span>
                <span className="block text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                  Instructional Designer & Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 font-sans max-w-sm leading-relaxed">
              Learning Consultant & Instructional Designer at <span className="text-slate-900 dark:text-slate-100 font-medium">London Stock Exchange Group (LSEG)</span>. Transforming enterprise learning through intelligent platforms and scalable UX.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Available for high-impact advisory & projects
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-400 font-semibold">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors font-sans py-1 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-400 font-semibold">
              Network & Connect
            </h3>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-600/10 flex items-center justify-center transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to the top of the page"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/40 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <ArrowUp size={14} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <p>© 2026 Bharath Shetty. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span>Designed & Developed by Bharath Shetty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;