
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Joining ISM gave me the confidence to lead weekly Qur'ān discussions and serve my community.",
      name: "Amini",
      role: "ISM Kakkānād member",
      avatar: "/lovable-uploads/4421a3cc-b139-498f-9ee8-619c0b9c8617.png"
    },
    {
      quote: "ISM connected me with mentors who guided both my deen and career aspirations.",
      name: "Rasheed",
      role: "B‑tech student",
      avatar: "/lovable-uploads/e3a4b957-aea0-4c38-a960-e1bed40295b7.png"
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Voices from Our Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our members about their transformative journey with ISM
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-emerald-600 mr-4" />
                <div className="w-12 h-1 bg-emerald-600"></div>
              </div>
              
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
