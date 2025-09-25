
import { ThemeProvider } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Leadership from "@/components/Leadership";
import MasjidsMadrasas from "@/components/MasjidsMadrasas";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Pillars />
        <Events />
        <Leadership />
        <MasjidsMadrasas />
        <Testimonials />
        <GetInvolved />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
