
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  logo: string;
  slug: string;
}

const Events = () => {
  const navigate = useNavigate();

  const events: Event[] = [
    {
      title: "Isthiqaama",
      date: "Monthly",
      location: "Multiple Venues",
      description: "Weekly spiritual gathering focused on steadfastness in faith and community bonding.",
      logo: "/lovable-uploads/a7868831-0cd8-4bae-9d3f-4453db5c449a.png",
      slug: "isthiqaama"
    },
    {
      title: "ISM Velicham",
      date: "Twice in a year",
      location: "Dedicated exam centers",
      description: "Grassroots Qur'an learning initiative making Qur'anic education accessible to all.",
      logo: "/lovable-uploads/f433d109-7df2-4cdd-80d3-333c7c7bd5c2.png",
      slug: "velicham"
    },
    {
      title: "QHLS",
      date: "Weekly",
      location: "Multiple Venues",
      description: "Qur'an & Hadith Learning Series focusing on scriptural literacy and scholarly engagement.",
      logo: "/lovable-uploads/b4bade68-c4e0-4613-bece-42e21c301817.png",
      slug: "qhls"
    },
    {
      title: "ISM Inspire",
      date: "IT professionals",
      location: "Multiple Venues",
      description: "Professional wing engaging Muslim professionals in value-based leadership and service.",
      logo: "/lovable-uploads/c759151f-3f03-42cc-bf0b-2aabc2e64018.png",
      slug: "inspire"
    },
    {
      title: "Eelaf",
      date: "Social service, volunteering",
      location: "Community Centers",
      description: "Volunteer wing engaged in dawah, social outreach, and charitable initiatives.",
      logo: "/lovable-uploads/886f0498-67b8-4eda-b429-ffc24f779f8c.png",
      slug: "eelaf"
    },
    {
      title: "Other Programs",
      date: "Various",
      location: "Multiple Venues",
      description: "Special seminars, workshops, retreats, and community service programs throughout the year.",
      logo: "🌟",
      slug: "other"
    }
  ];

  const handleLearnMore = (slug: string) => {
    navigate(`/programs/${slug}`);
    // Scroll to top when navigating to program pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="events" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Comprehensive programs nurturing spiritual growth, education, and community service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-slate-600 rounded-2xl flex items-center justify-center mr-4 overflow-hidden border border-slate-200 dark:border-slate-600">
                  {event.logo.startsWith('/') ? (
                    <img 
                      src={event.logo} 
                      alt={event.title}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <span className="text-2xl">{event.logo}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-1">
                    {event.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">{event.date}</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">{event.location}</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                {event.description}
              </p>
              
              <Button 
                onClick={() => handleLearnMore(event.slug)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
