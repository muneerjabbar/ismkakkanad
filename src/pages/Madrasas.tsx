import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MapPin, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

interface Madrasa {
  unit: string;
  name: string;
  image: string;
  phone: string;
  whatsapp: string;
  hasMadrasa: boolean;
}

const Madrasas = () => {
  const navigate = useNavigate();

  const madrasas: Madrasa[] = [
    {
      unit: "Kakkanad",
      name: "Salafi Madrasa Kakkanad",
      image: import.meta.env.BASE_URL + 'madrasas/kakkanad.jpg',
      phone: "+919876543220",
      whatsapp: "919876543220",
      hasMadrasa: true
    },
    {
      unit: "Athani",
      name: "Salafi Madrasa Athani",
      image: import.meta.env.BASE_URL + 'madrasas/athani.jpg',
      phone: "+919876543221",
      whatsapp: "919876543221",
      hasMadrasa: true
    },
    {
      unit: "Cheranallore",
      name: "Salafi Madrasa Cheranallore",
      image: import.meta.env.BASE_URL + 'madrasas/cheranallore.jpg',
      phone: "+919876543222",
      whatsapp: "919876543222",
      hasMadrasa: true
    },
    {
      unit: "Kalamassery",
      name: "Al Huda Madrasa Kalamassery",
      image: import.meta.env.BASE_URL + 'madrasas/kalamassery.jpg',
      phone: "+919876543223",
      whatsapp: "919876543223",
      hasMadrasa: true
    },
    {
      unit: "Mattakkad",
      name: "Salafi Madrasa Mattakkad",
      image: import.meta.env.BASE_URL + 'madrasas/mattakkad.jpg',
      phone: "+919876543224",
      whatsapp: "919876543224",
      hasMadrasa: true
    },
    {
      unit: "Edappally",
      name: "Salafi Madrasa Edappally",
      image: import.meta.env.BASE_URL + 'madrasas/edappally.jpg',
      phone: "+919876543225",
      whatsapp: "919876543225",
      hasMadrasa: true
    },
    {
      unit: "Kangarappady",
      name: "Salafi Madrasa Kangarappady",
      image: import.meta.env.BASE_URL + 'madrasas/kangarappady.jpg',
      phone: "+919876543226",
      whatsapp: "919876543226",
      hasMadrasa: true
    },
    {
      unit: "Padamugal",
      name: "No Madrasa in this unit",
      image: import.meta.env.BASE_URL + 'placeholder.svg',
      phone: "",
      whatsapp: "",
      hasMadrasa: false
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-6">
            <Button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('masjids-madrasas')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              variant="ghost"
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Masjids & Madrasas
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Madrasas</h1>
            <p className="text-xl text-blue-100">
              Islamic Educational Institutions in ISM Kakkanad Zone
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Our Zone Madrasas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Quality Islamic education institutions serving our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {madrasas.map((madrasa, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${!madrasa.hasMadrasa ? 'opacity-75' : ''}`}>
                {/* Large Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={madrasa.image} 
                    alt={madrasa.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = import.meta.env.BASE_URL + 'placeholder.svg';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {madrasa.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {madrasa.unit} Unit
                    </p>
                  </div>

                  {madrasa.hasMadrasa ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`tel:${madrasa.phone}`}
                          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          📞 Call
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          📍 Map
                        </a>
                      </div>
                      <a
                        href={`https://wa.me/${madrasa.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        💬 WhatsApp
                      </a>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-slate-500 dark:text-slate-400 italic text-lg">
                        No Madrasa available in this unit
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Madrasas;