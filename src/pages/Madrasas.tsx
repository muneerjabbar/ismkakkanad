import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MapPin, MessageCircle, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { useState, useEffect } from "react";

// Import images
import kakkanadImg from '@/assets/masjids/kakkanad.jpg';
import athaniImg from '@/assets/masjids/athani.jpg';
import cheranalloreImg from '@/assets/masjids/cheranallore.jpg';
import mattakkadImg from '@/assets/masjids/mattakkad.jpg';
import edappallyImg from '@/assets/masjids/edappally.jpg';
import kalamasseryImg from '@/assets/masjids/kalamassery.jpg';
import kangarappadyImg from '@/assets/masjids/kangarappady.jpg';

// Get image URL for unit
const getImageUrl = (unit: string) => {
  const images: { [key: string]: string } = {
    kakkanad: kakkanadImg,
    athani: athaniImg,
    cheranallore: cheranalloreImg,
    mattakkad: mattakkadImg,
    edappally: edappallyImg,
    kalamassery: kalamasseryImg,
    kangarappady: kangarappadyImg,
  };
  return images[unit.toLowerCase()];
};

interface MadrasaData {
  unit: string;
  madrasa: {
    name: string;
    mutawalli: {
      name: string;
      phone: string;
    };
    sadar_ustad: {
      name: string;
      phone: string;
    };
    location: string;
  } | null;
}

const Madrasas = () => {
  const navigate = useNavigate();
  const [madrasasData, setMadrasasData] = useState<MadrasaData[]>([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.BASE_URL + 'data/masjids_madrasas.json');
        const data = await response.json();
        setMadrasasData(data);
      } catch (error) {
        console.error('Error fetching madrasas data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-slate-600 dark:text-slate-300 mt-4">Loading madrasas...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {madrasasData.map((data, index) => {
                  const madrasa = data.madrasa;
                  const hasMadrasa = madrasa !== null;
                  
                  return (
                    <div key={index} className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${!hasMadrasa ? 'opacity-75' : ''}`}>
                      {/* Large Image */}
                      {hasMadrasa && (
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={getImageUrl(data.unit)} 
                            alt={madrasa.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {hasMadrasa ? madrasa.name : `No Madrasa in ${data.unit}`}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {data.unit} Unit
                          </p>
                        </div>

                        {hasMadrasa ? (
                          <div className="space-y-4">
                            {/* Staff Info */}
                            <div className="space-y-3">
                              <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-xl">
                                <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-2 flex items-center">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                  Mutawalli
                                </h4>
                                <p className="text-blue-700 dark:text-blue-300 font-medium">{madrasa.mutawalli.name}</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm">{madrasa.mutawalli.phone}</p>
                              </div>
                              
                              <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-xl">
                                <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-2 flex items-center">
                                  <GraduationCap className="w-4 h-4 mr-2 text-indigo-600" />
                                  Sadar Ustad
                                </h4>
                                <p className="text-indigo-700 dark:text-indigo-300 font-medium">{madrasa.sadar_ustad.name}</p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm">{madrasa.sadar_ustad.phone}</p>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                              <a
                                href={madrasa.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <MapPin className="w-5 h-5 mr-2" />
                                Location
                              </a>
                              
                              <div className="grid grid-cols-2 gap-3">
                                <a
                                  href={`tel:${madrasa.mutawalli.phone}`}
                                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs"
                                >
                                  <Phone className="w-4 h-4 mr-1" />
                                  Mutawalli
                                </a>
                                
                                <a
                                  href={`tel:${madrasa.sadar_ustad.phone}`}
                                  className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs"
                                >
                                  <GraduationCap className="w-4 h-4 mr-1" />
                                  Ustad
                                </a>
                              </div>
                              
                              <a
                                href={`https://wa.me/${madrasa.mutawalli.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Mutawalli
                              </a>
                            </div>
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
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Madrasas;