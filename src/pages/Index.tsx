
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Pillars />
      <Events />
      <Impact />
      <Testimonials />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
