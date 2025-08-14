
import { Users, Target, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            About ISM Kakkanad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              ISM Kakkanad is the vibrant youth wing of <a href="https://knm.org.in/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline transition-colors duration-200">Kerala Nadvathul Mujahideen</a>, dedicated to nurturing young Muslim minds 
              through comprehensive programs that blend spiritual growth, educational excellence, and social responsibility.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded on the principles of knowledge, character, and community service, we strive to develop confident, 
              compassionate leaders who can positively impact society while staying true to their Islamic values.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Our mission extends beyond traditional education to encompass holistic development, preparing young Muslims 
              to excel in all spheres of life while maintaining their spiritual foundation.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center" aria-label="Da‘wah First">
                  <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Da‘wah First</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Spreading the light of Islam to hearts and minds.</p>
                </div>
                
                <div className="text-center" aria-label="Education">
                  <div className="w-16 h-16 bg-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Education</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Providing complete and authentic Islamic learning.</p>
                </div>
                
                <div className="text-center" aria-label="Community Focus">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Community Focus</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Strengthening and serving people and country.</p>
                </div>
                
                <div className="text-center" aria-label="Value-Driven">
                  <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Value-Driven</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Guided by Qur’an, Sunnah, and timeless principles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
