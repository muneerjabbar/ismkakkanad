
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Joining ISM gave me the confidence to lead weekly Qur'an discussions and serve my community.",
      name: "Amini",
      role: "ISM Kakkanad member",
      avatar: "/lovable-uploads/4421a3cc-b139-498f-9ee8-619c0b9c8617.png"
    },
    {
      quote: "ISM connected me with mentors who guided both my deen and career aspirations.",
      name: "Rasheed",
      role: "B‑tech student",
      avatar: "/lovable-uploads/e3a4b957-aea0-4c38-a960-e1bed40295b7.png"
    },
    {
      quote: "Through ISM's programs, I learned to balance my professional life with Islamic values and community service.",
      name: "Farid Ahmed",
      role: "Software Engineer",
      avatar: "/lovable-uploads/4421a3cc-b139-498f-9ee8-619c0b9c8617.png"
    },
    {
      quote: "The leadership training at ISM helped me become a better person and a more effective community volunteer.",
      name: "Zara Malik",
      role: "Medical Student",
      avatar: "/lovable-uploads/e3a4b957-aea0-4c38-a960-e1bed40295b7.png"
    },
    {
      quote: "ISM's Velicham program transformed my understanding of the Qur'an and deepened my faith significantly.",
      name: "Omar Siddique",
      role: "Teacher",
      avatar: "/lovable-uploads/4421a3cc-b139-498f-9ee8-619c0b9c8617.png"
    },
    {
      quote: "ഇന്ന് തീക്ഷണമായ മത വിദ്വേഷം യുക്തിരഹിതമായ പ്രചരണവും ശക്തിയേറിയപ്പോൾ, കാലോചിതമായ ദഅ്'വത്തിലൂടെ യഥാർത്ഥ വിശ്വാസത്തിന്റെയും സത്യത്തിന്റെയും ശബ്ദമായി നിലകൊള്ളുന്നത് വലിയൊരു പ്രവർത്തനമാണ്. അതിനായി കാക്കനാട് ഐ.എസ്.എം. ചെയ്യുന്ന ഓരോ ശ്രമവും അഭിനന്ദനാർഹമാണ്. ഈ ദൗത്യം റബ്ബ് കബൂൽ ചെയ്യട്ടെ.",
      name: "ഡോ. അബ്ദുൽ ഹമീദ് മദനി",
      role: "Islamic Scholar",
      avatar: "/lovable-uploads/4421a3cc-b139-498f-9ee8-619c0b9c8617.png"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-emerald-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            Voices from Our Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Hear from our members about their transformative journey with ISM
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400 mr-4" />
                      <div className="w-12 h-1 bg-emerald-600 dark:bg-emerald-400"></div>
                    </div>
                    
                    <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-4 sm:mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
