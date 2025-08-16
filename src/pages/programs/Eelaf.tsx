import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Eelaf = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
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
                src={new URL('@/assets/eelaf-logo.png', import.meta.url).href}
                alt="Eelaf"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Eelaf</h1>
                <p className="text-xl text-red-100">Volunteer Wing for Social Service & Dawah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Eelaf is the volunteer wing of ISM Kakkanad, dedicated to dawah (Islamic outreach), social service, 
              and charitable initiatives. Our mission is rooted in the Islamic principle that serving humanity is 
              a form of worship and a means to create positive change in society.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Through Eelaf, our volunteers engage in community welfare activities, interfaith dialogue, 
              humanitarian assistance, and educational outreach programs that embody the compassionate spirit 
              of Islam while building bridges with the broader community.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Our Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-slate-800 p-6 rounded-lg">
                <Heart className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Community Welfare</h3>
                <p className="text-slate-600 dark:text-slate-300">Healthcare camps, food distribution, and emergency relief services</p>
              </div>
              <div className="bg-red-50 dark:bg-slate-800 p-6 rounded-lg">
                <Users className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Dawah Activities</h3>
                <p className="text-slate-600 dark:text-slate-300">Islamic outreach, interfaith dialogue, and educational seminars</p>
              </div>
              <div className="bg-red-50 dark:bg-slate-800 p-6 rounded-lg">
                <Hand className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Charitable Initiatives</h3>
                <p className="text-slate-600 dark:text-slate-300">Educational support, skills training, and poverty alleviation programs</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Key Activities</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Regular blood donation camps and health awareness programs</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Educational assistance for underprivileged students</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Disaster relief and emergency response services</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Interfaith dialogue and community harmony initiatives</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Environmental conservation and awareness campaigns</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Volunteer Network</h3>
              <p className="text-lg leading-relaxed">
                Eelaf welcomes volunteers who are passionate about serving humanity and spreading the message of 
                peace, compassion, and social justice. Through our collective efforts, we strive to create a 
                positive impact in society and demonstrate the true spirit of Islamic brotherhood and service to all.
              </p>
              <p className="mt-4 text-sm">We actively organize blood donation drives. Your contribution can save lives.</p>
              <p className="text-sm"><span className="font-semibold">Moosa</span> — +91 99953 79212</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Eelaf;
