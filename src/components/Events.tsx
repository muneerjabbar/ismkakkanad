
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const Events = () => {
  const events: Event[] = [
    {
      title: "Youth Seminar: Living Islam in Modern India",
      date: "July 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "ISM Kakkānād Center",
      description: "Join us for an inspiring seminar on navigating modern life while staying true to Islamic values."
    },
    {
      title: "Weekend Retreat: Reflection & Team-building",
      date: "August 8-10, 2025",
      time: "Friday 6:00 PM - Sunday 6:00 PM",
      location: "Munnar Hills Resort",
      description: "A spiritual retreat combining reflection, team building, and community bonding in nature."
    },
    {
      title: "Community Health Camp",
      date: "September 12, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Local Community Center",
      description: "Free health screening, medical consultation, and awareness programs for the community."
    }
  ];

  return (
    <section id="events" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            What's On in Kakkānād
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Each event nurtures spiritual growth, fellowship, and community service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">{event.time}</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">{event.location}</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                {event.description}
              </p>
              
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
