
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo/Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Users className="w-5 h-5 mr-2 text-emerald-300" />
              <span className="text-sm font-medium">ISM Kakkānād • Youth Wing of KNM</span>
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Tomorrow's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Leaders
            </span>
            Through Faith & Knowledge
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join Ithihādu Shubbanil Mujāhidīn (ISM) Kakkānād—where we blend spiritual growth, 
            education, and community service to shape confident, compassionate young Muslims.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join ISM Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300">
              Explore Our Events
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300">45+</div>
              <div className="text-sm text-emerald-100">Youth Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300">1,200+</div>
              <div className="text-sm text-emerald-100">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300">30+</div>
              <div className="text-sm text-emerald-100">Community Projects</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
