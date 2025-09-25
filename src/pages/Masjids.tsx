import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MapPin, MessageCircle } from "lucide-react";
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

interface MasjidData {
  unit: string;
  masjid: {
    name: string;
    mutawalli: {
      name: string;
      phone: string;
    };
    location: string;
  } | null;
}

const Masjids = () => {
  const navigate = useNavigate();
  const [masjidsData, setMasjidsData] = useState<MasjidData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.BASE_URL + 'data/masjids_madrasas.json');
        const data = await response.json();
        setMasjidsData(data);
      } catch (error) {
        console.error('Error fetching masjids data:', error);
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

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p className="text-slate-600 dark:text-slate-300 mt-4">Loading masjids...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {masjidsData.map((data, index) => {
                  const masjid = data.masjid;
                  const hasMasjid = masjid !== null;

                  return (
                    <div key={index} className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${!hasMasjid ? 'opacity-75' : ''}`}>
                      {/* Large Image */}
                      {hasMasjid && (
                        <div className="h-64 overflow-hidden">
                          <img
                            src={getImageUrl(data.unit)}
                            alt={masjid.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                            {hasMasjid ? masjid.name : `No Salafi Masjid in ${data.unit}`}
                          </h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            {data.unit} Unit
                          </p>
                        </div>

                        {hasMasjid ? (
                          <div className="space-y-4">
                            {/* Mutawalli Info */}
                            <div className="bg-emerald-50 dark:bg-slate-700 p-4 rounded-xl">
                              <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-2">Mutawalli</h4>
                              <p className="text-emerald-700 dark:text-emerald-300 font-medium">{masjid.mutawalli.name}</p>
                              <p className="text-slate-600 dark:text-slate-300 text-sm">{masjid.mutawalli.phone}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                              <a
                                href={masjid.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <MapPin className="w-5 h-5 mr-2" />
                                Location
                              </a>

                              <div className="grid grid-cols-2 gap-3">
                                <a
                                  href={`tel:${masjid.mutawalli.phone}`}
                                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                                >
                                  <Phone className="w-4 h-4 mr-1" />
                                  Call
                                </a>

                                <a
                                  href={`https://wa.me/${masjid.mutawalli.phone.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                                >
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  WhatsApp
                                </a>
                              </div>
                            </div>
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

export default Masjids;