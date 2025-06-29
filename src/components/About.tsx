
import { BookOpen, Users, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About ISM Kakkānād
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Heritage</h3>
              <p className="text-slate-600 leading-relaxed">
                ISM is the youth wing of KNM, founded in 1967, dedicated to nurturing the next generation through Islamic teachings and community engagement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Community</h3>
              <p className="text-slate-600 leading-relaxed">
                Based in Kakkānād (Thrissur district), we host weekly study sessions, moral workshops, and local initiatives focused on service and leadership.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                We uphold the tradition of Tauḥīd, purification from superstitions, and reformist values rooted in Qur'an and Sunnah as propagated by KNM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
