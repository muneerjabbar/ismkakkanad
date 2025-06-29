
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
      time: "2:00 PM - 5:00 PM",
      location: "ISM Kakkānād Center",
      description: "An interactive seminar exploring how young Muslims can practice their faith authentically in contemporary India."
    },
    {
      title: "Weekend Retreat: Reflection & Team-building",
      date: "August 8-10, 2025",
      time: "3 Days",
      location: "Retreat Center, Wayanad",
      description: "A spiritual and personal development retreat focusing on self-reflection, community bonding, and leadership skills."
    },
    {
      title: "Community Health Camp",
      date: "September 12, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Local Community Center",
      description: "Free health checkups, medical consultations, and health awareness programs for the local community."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What's On in Kakkānād
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join our upcoming events that nurture spiritual growth, fellowship, and community service
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4 md:mb-0">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-emerald-600 font-medium">
                    <Calendar className="w-5 h-5 mr-2" />
                    {event.date}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6 text-slate-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-slate-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-slate-400" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
