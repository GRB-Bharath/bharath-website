import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
