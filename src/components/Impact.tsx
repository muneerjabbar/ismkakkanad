
import { TrendingUp, Users, Award, Calendar, LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
}

const Impact = () => {
  const stats: Stat[] = [
    {
      icon: Calendar,
      number: "45+",
      label: "Youth Programs Held",
      description: "Comprehensive programs since 2020"
    },
    {
      icon: Users,
      number: "1,200+",
      label: "Participants Engaged",
      description: "Active community members"
    },
    {
      icon: Award,
      number: "30+",
      label: "Community Projects",
      description: "Impactful initiatives completed"
    },
    {
      icon: TrendingUp,
      number: "Growing",
      label: "Movement",
      description: "Inspiring youth ready to lead"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our Impact Since 2020
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-emerald-100 dark:text-slate-300 max-w-3xl mx-auto px-4">
            A growing movement of inspiring youth ready to lead with integrity
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 dark:text-slate-300" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-emerald-200 dark:text-slate-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 dark:text-slate-300">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
