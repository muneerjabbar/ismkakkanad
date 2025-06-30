
import { Button } from "@/components/ui/button";
import { Users, Calendar, Heart, MessageCircle } from "lucide-react";

const GetInvolved = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919876543210?text=Hi! I would like to know more about ISM Kakkanad programs.', '_blank');
  };

  return (
    <section id="get-involved" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Connect with Us
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-emerald-100 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Join our vibrant community and be part of the positive change
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 dark:text-slate-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                Become a Member
              </h3>
              <p className="text-emerald-100 dark:text-slate-300 mb-4 sm:mb-6">
                Join our growing community of young Muslims committed to positive change.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-full">
                Join Now
              </Button>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 dark:text-slate-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                Attend Events
              </h3>
              <p className="text-emerald-100 dark:text-slate-300 mb-4 sm:mb-6">
                Participate in our workshops, seminars, and community activities.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-full">
                View Events
              </Button>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 dark:text-slate-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                Volunteer
              </h3>
              <p className="text-emerald-100 dark:text-slate-300 mb-4 sm:mb-6">
                Contribute your time and skills to meaningful community projects.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-300 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-emerald-100 dark:text-slate-300 mb-8 leading-relaxed">
              Connect with us on WhatsApp for instant updates, event notifications, and to join our community conversations.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
