
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
      quote: `ദഅ്'വാ രംഗത്ത് നല്ലൊരു മാതൃകയാണ് ഐ.എസ്.എം. കാക്കനാട് മണ്ഡലം. ദഅ്'വാ രംഗത്ത് വ്യത്യസ്തമായ ഒട്ടനവധി പരിപാടികൾ സംഘടിപ്പിച്ചുകൊണ്ട് മുന്നേറുന്ന കാക്കനാട് മണ്ഡലം, ഐ.ടി. മേഖലയിലെയും പുതിയ വെബ്സൈറ്റ് ലോഞ്ചിലൂടെയും മറ്റുള്ളവർക്കു മാതൃകയാവുകയാണ്. നാഥൻ അനുഗ്രഹിക്കട്ടെ. ഇതെല്ലാം സ്വാലിഹായ അമലായി സ്വീകരിക്കട്ടെ.`,
      name: "നൂർ മുഹമ്മദ് നൂർഷ",
      role: "ട്രഷറർ, കെ.എൻ.എം. കേരളം",
      avatar: "/lovable-uploads/1a69cbc0-3545-47b7-a72d-6f4c2541f17a.png"
    },
    {
      quote: `ഐ.എസ്.എം. കാക്കനാട് മണ്ഡലം, ദഅ്'വാ രംഗത്ത് പലപ്പോഴും സംസ്ഥാനത്തെ എല്ലാ മണ്ഡലങ്ങൾക്കുമൊരു വലിയ പ്രചോദനമാണ്. സമൂഹത്തെ ധാരാളമായി അറിയുകയും, കാലോചിതമായ പ്രവർത്തനങ്ങൾ കൃത്യമായി നടപ്പാക്കുകയും ചെയ്യുന്നത് കാക്കനാട് മണ്ഡലത്തിന്റെ സവിശേഷതയാണ്. റബ്ബ് എല്ലാ ശ്രമങ്ങൾക്കും അനുഗ്രഹം നൽകട്ടെ.`,
      name: "ഷെരീഫ് മേലേതിൽ",
      role: "പ്രസിഡന്റ്, ഐ.എസ്.എം. കേരളം",
      avatar: "/lovable-uploads/4c33c203-f981-456f-ad2a-e245cadb7b9d.png"
    },
    {
      quote: `താഴ്മയോടെയും, ജ്ഞാനപരമായ സമീപനത്തോടെയും, സമകാലികതയെ ബാധകമാക്കുന്ന രീതിയിലുള്ള ദഅ്'വാ പ്രചാരണങ്ങളിലൂടെ കാക്കനാട് ഐ.എസ്.എം. ഒരു പ്രകാശമായി മാറിയിരിക്കുന്നു. യുവതയെ ലക്ഷ്യമാക്കി നടത്തുന്ന സജീവമായ പ്രവർത്തനങ്ങൾ വളരെ പ്രസക്തമാണ്. റഹ്മാനായ റബ്ബ് ഈ പാതയിൽ കൂടുതൽ വിജയങ്ങൾ നൽകട്ടെ.`,
      name: "അബ്ദുൽ ഷുക്കൂർ സ്വലാഹി",
      role: "സംസ്ഥാന സെക്രട്ടറി, ഐ.എസ്.എം. കേരളം",
      avatar: "/lovable-uploads/47cfdb61-c0bc-4fb2-961b-7c2fa0ea646c.png"
    },
    {
      quote: `ഈലാഫിനെ നെഞ്ചിലേറ്റിയ ഒരു മണ്ഡലമാണ് കാക്കനാട് മണ്ഡലം. ദഅ്'വത്തിനോടൊപ്പം സാമൂഹ്യ ക്ഷേമ സേവനരംഗത്തും സജീവരായ പ്രവർത്തകരാണ് കാക്കനാട് മണ്ഡലത്തിലെ ഐ.എസ്.എം. പ്രവർത്തകർ.`,
      name: "സുബൈർ പീടിയേക്കൽ",
      role: "പ്രസിഡന്റ്, ഐ.എസ്.എം. എറണാകുളം ജില്ല",
      avatar: "/lovable-uploads/59935787-e78c-4489-9563-2302a29fcd3e.png"
    },
    {
      quote: `യുക്തിദീക്ഷയോടെയും സദുപദേശങ്ങളിലൂടെയും, നിന്റെ രക്ഷിതാവിന്റെ മാർഗത്തിൽ നീ ക്ഷണിക്ക എന്ന ഖുർആനിക വചനങ്ങളെ ഹൃദയത്തിൽ അവയവമാക്കിയുള്ള പ്രവർത്തനമാണ് കാക്കനാട് മണ്ഡലം കാഴ്ചവെക്കുന്നത്. എന്റെ മണ്ഡലത്തിലെ പ്രവർത്തകരെ റബ്ബ് സഹായിക്കട്ടെ. ആമീൻ. നന്മകളിൽ മുമ്പിൽ നിൽക്കാൻ എന്നും ശ്രമിക്കുന്നവരാണ് കാക്കനാട് ഐ.എസ്.എം. അല്ലാഹു അവരെ ആ നിലയിൽ നിലനിര്‍ത്തട്ടെ.`,
      name: "ഫാരിഷ്",
      role: "ജില്ലാ സെക്രട്ടറി, ഐ.എസ്.എം. എറണാകുളം",
      avatar: "/lovable-uploads/2577e2f5-38bc-48c1-a6ff-e10612d7e583.png"
    },
    {
      quote: `ഇന്ന് തീക്ഷ്ണമായ മത വിദ്വേഷവും യുക്തിരഹിതമായ പ്രചരണവും ശക്തിയേറിയിരിക്കെ, കാലോചിതമായ ദഅ്'വത്തിലൂടെ യഥാർത്ഥ വിശ്വാസത്തിന്റെയും സത്യത്തിന്റെയും ശബ്ദമായി നിലകൊള്ളുന്നത് വലിയൊരു ദൗത്യമാണ്. അതിനായി കാക്കനാട് ഐ.എസ്.എം. നടത്തുന്ന ഓരോ ശ്രമവും അഭിനന്ദനാർഹമാണ്. ഈ ദൗത്യം റബ്ബ് കബൂൾ ചെയ്യട്ടെ.`,
      name: "സഗീർ കാക്കനാട്",
      role: "മണ്ഡലം സെക്രട്ടറി, കെ.എൻ.എം. കാക്കനാട്",
      avatar: "/lovable-uploads/d8bef9ba-ea00-4f2b-a51a-8d5529d54064.png"
    },
    {
      quote: `യുവതയുടെ കർമോത്സുകതയാണ് ഏതൊരു സംഘടനയുടെയും ചാലകശക്തി, കാക്കനാട് മണ്ഡലം കെ.എൻ.എമ്മിന്റെയും. ഐ.ടി. വിപ്ലവത്തിന്റെ ഈ കാലത്ത് സ്വന്തമായി ഒരു വെബ്സൈറ്റ് അനിവാര്യമാണ്. അതിലേക്കുള്ള ചുവടുവെയ്പാണ് ഐ.എസ്.എം. കാക്കനാട് മണ്ഡലം നടത്തുന്നത്. എല്ലാ വിജയാശംസകളും. ജഗന്നിയതാവ് അനുഗ്രഹിക്കട്ടെ.`,
      name: "ഡോ. അബ്ദുൽ റഷീദ്",
      role: "വൈസ് പ്രസിഡൻറ്, കെ.എൻ.എം. കാക്കനാട് മണ്ഡലം",
      avatar: "/lovable-uploads/41202faf-b430-4873-97da-6e36a6b25f06.png"
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
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4 font-malayalam">
            ISM കാക്കനാട് മണ്ഡലത്തെക്കുറിച്ച് സമൂഹത്തിന്റെ നിസ്വാർത്ഥ വാക്കുകൾ
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
                    
                    <blockquote className="font-malayalam text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-8 sm:leading-8 md:leading-9 mb-4 sm:mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt="Testimonial portrait"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-malayalam font-semibold text-slate-800 dark:text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="font-malayalam text-slate-600 dark:text-slate-300 text-xs sm:text-sm">{testimonial.role}</div>
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
