
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Isthiqaama = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-6">
            <Button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              variant="ghost"
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to menu
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <img 
                src={new URL('@/assets/isthiqaama-logo.png', import.meta.url).href}
                alt="Isthiqaama"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Isthiqaama</h1>
                <p className="text-xl text-blue-100">Steadfastness in Faith and Family — Community</p>
                <p className="text-sm text-blue-100">
                  <a href="https://chat.whatsapp.com/JnpD7MIl3e9JRSVC4on3bv" target="_blank" rel="noopener" className="underline">Realtime updates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Isthiqaama represents our monthly spiritual gathering that brings together members of the ISM community 
              to strengthen their faith, build lasting bonds, and engage in meaningful discussions about Islamic values 
              and contemporary challenges.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              The word "Isthiqaama" means steadfastness and consistency in following the straight path. This program 
              embodies that principle by providing regular opportunities for spiritual growth, community connection, 
              and religious education in a supportive environment.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Program Features</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Spiritual Growth</h3>
                <p className="text-slate-600 dark:text-slate-300">Regular spiritual discussions and reflections to strengthen faith</p>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Community Bonding</h3>
                <p className="text-slate-600 dark:text-slate-300">Building strong relationships within the ISM family</p>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Regular Meetings</h3>
                <p className="text-slate-600 dark:text-slate-300">Monthly gatherings ensuring consistent engagement</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Monthly Gatherings</h3>
              <p className="text-lg leading-relaxed mb-6">
                Experience the power of community and faith through Isthiqaama. Every month, we come together to 
                strengthen our bonds as brothers and sisters in faith, share experiences, and support each other 
                in our spiritual journey towards steadfastness on the straight path.
              </p>
              <a
                href="https://chat.whatsapp.com/JnpD7MIl3e9JRSVC4on3bv"
                target="_blank"
                rel="noopener"
                className="inline-block"
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Join WhatsApp Group
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Isthiqaama;
