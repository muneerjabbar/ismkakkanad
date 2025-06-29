
import { Book, Heart, TrendingUp, Palette } from "lucide-react";

const Pillars = () => {
  const pillars = [
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Four Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building strong foundations for spiritual, personal, and community growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-emerald-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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
