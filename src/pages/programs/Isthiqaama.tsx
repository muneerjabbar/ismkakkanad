
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
                src={import.meta.env.BASE_URL + 'lovable-uploads/isthiqaama_logo.png'} 
                alt="Isthiqaama"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Isthiqaama</h1>
                <p className="text-xl text-blue-100">Steadfastness in Faith and Community</p>
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
              <p className="text-lg leading-relaxed">
                Experience the power of community and faith through Isthiqaama. Every month, we come together to 
                strengthen our bonds as brothers and sisters in faith, share experiences, and support each other 
                in our spiritual journey towards steadfastness on the straight path.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Isthiqaama;
