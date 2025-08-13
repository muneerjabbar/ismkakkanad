
import { Book, Heart, TrendingUp, Palette, LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const Pillars = () => {
  const pillars: Pillar[] = [
    {
      icon: Book,
      title: "Faith & Learning",
      description: "Regular Qur'ān tafsīr sessions, Hādīth studies, and youth seminars.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Drives like health camps, counseling, and awareness initiatives.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Personal Development",
      description: "Leadership workshops, speaking clubs, and future-ready skills.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Cultural Enrichment",
      description: "Study camps, educational tours, and competitions creating a sense of belonging and purpose.",
      color: "from-blue-500 to-emerald-500"
    }
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            Our Four Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Building strong foundations for spiritual, personal, and community growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-emerald-500 dark:hover:border-emerald-400">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
