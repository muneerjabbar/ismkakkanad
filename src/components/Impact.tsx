
import { TrendingUp, Users, Award, Calendar } from "lucide-react";

const Impact = () => {
  const stats = [
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
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact Since 2020
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            A growing movement of inspiring youth ready to lead with integrity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-emerald-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-emerald-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-emerald-100">
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
