
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
      description: "Help with events, campaigns, and mentoring programs.",
      action: "Volunteer"
    },
    {
      icon: Bell,
      title: "Follow Us",
      description: "Stay updated via social media and newsletters.",
      action: "Subscribe"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join our mission to empower young Muslims through faith, education, and community service
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <div key={index} className="text-center group">
              <div className="bg-emerald-50 rounded-2xl p-8 hover:bg-emerald-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {way.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {way.description}
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  {way.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
            Connect with Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">ISM Kakkānād Center</div>
                <div className="text-slate-600">Thrissur District, Kerala</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Email Us</div>
                <div className="text-slate-600">info@ismkakkanad.org</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Call Us</div>
                <div className="text-slate-600">+91-XXXXX-XXXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
