
import { Button } from "@/components/ui/button";
import { UserPlus, Heart, Bell, MapPin, Mail, Phone, LucideIcon } from "lucide-react";

interface InvolvementWay {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
}

const GetInvolved = () => {
  const ways: InvolvementWay[] = [
    {
      icon: UserPlus,
      title: "Become a Member",
      description: "Fill out our online form and attend your first session.",
      action: "Join Now"
    },
    {
      icon: Heart,
      title: "Volunteer with Us",
      description: "Help with events, campaigns, mentoring.",
      action: "Volunteer"
    },
    {
      icon: Bell,
      title: "Follow Us",
      description: "Stay updated via social media and newsletters.",
      action: "Follow"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Join our growing community and make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {ways.map((way, index) => (
            <div key={index} className="text-center group">
              <div className="bg-emerald-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <way.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-3 sm:mb-4">
                  {way.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">
                  {way.description}
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                  {way.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 text-center">
            Connect with Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300">ISM Kakkānād Center</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300">info@ismkakkanad.org</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300">+91-XXXXX-XXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
