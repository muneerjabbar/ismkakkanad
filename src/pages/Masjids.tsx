import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

interface Masjid {
  unit: string;
  name: string;
  image: string;
  phone: string;
  hasMasjid: boolean;
}

const Masjids = () => {
  const navigate = useNavigate();

  const masjids: Masjid[] = [
    {
      unit: "Kakkanad",
      name: "Salafi Masjid Kakkanad",
      image: import.meta.env.BASE_URL + 'masjids/kakkanad.jpg',
      phone: "+919876543210",
      hasMasjid: true
    },
    {
      unit: "Athani",
      name: "Salafi Masjid Athani",
      image: import.meta.env.BASE_URL + 'masjids/athani.jpg',
      phone: "+919876543211",
      hasMasjid: true
    },
    {
      unit: "Cheranallore",
      name: "Salafi Masjid Cheranallore",
      image: import.meta.env.BASE_URL + 'masjids/cheranallore.jpg',
      phone: "+919876543212",
      hasMasjid: true
    },
    {
      unit: "Kalamassery",
      name: "Salafi Masjid Kalamassery",
      image: import.meta.env.BASE_URL + 'masjids/kalamassery.jpg',
      phone: "+919876543213",
      hasMasjid: true
    },
    {
      unit: "Mattakkad",
      name: "Salafi Masjid Mattakkad",
      image: import.meta.env.BASE_URL + 'masjids/mattakkad.jpg',
      phone: "+919876543214",
      hasMasjid: true
    },
    {
      unit: "Edappally",
      name: "Salafi Masjid Edappally",
      image: import.meta.env.BASE_URL + 'masjids/edappally.jpg',
      phone: "+919876543215",
      hasMasjid: true
    },
    {
      unit: "Kangarappady",
      name: "Salafi Masjid Kangarappady",
      image: import.meta.env.BASE_URL + 'masjids/kangarappady.jpg',
      phone: "+919876543216",
      hasMasjid: true
    },
    {
      unit: "Padamugal",
      name: "No Salafi Masjid in this unit",
      image: import.meta.env.BASE_URL + 'placeholder.svg',
      phone: "",
      hasMasjid: false
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Masjids</h1>
            <p className="text-xl text-emerald-100">
              Salafi Masjids in ISM Kakkanad Zone
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Our Zone Masjids
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Connect with Salafi Masjids across different units in ISM Kakkanad Zone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {masjids.map((masjid, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${!masjid.hasMasjid ? 'opacity-75' : ''}`}>
                {/* Large Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={masjid.image} 
                    alt={masjid.name}
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
                      {masjid.name}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {masjid.unit} Unit
                    </p>
                  </div>

                  {masjid.hasMasjid ? (
                    <div className="space-y-3">
                      <a
                        href={`tel:${masjid.phone}`}
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        📞 Contact
                      </a>
                      <a
                        href="#"
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        📍 Location
                      </a>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-slate-500 dark:text-slate-400 italic text-lg">
                        No Salafi Masjid available in this unit
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

export default Masjids;