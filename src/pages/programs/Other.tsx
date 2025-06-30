
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Other = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center mb-6">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-4 bg-white rounded-lg flex items-center justify-center">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Other Programs</h1>
                <p className="text-xl text-orange-100">Special Events & Community Initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Beyond our regular programs, ISM Kakkanad organizes various special events, workshops, retreats, 
              and community service initiatives throughout the year. These programs address specific needs, 
              seasonal occasions, and emerging opportunities for community engagement and spiritual growth.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Our diverse range of additional programs ensures that we can respond dynamically to the needs 
              of our community while providing enriching experiences that complement our core activities.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Special Programs</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <Star className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Islamic Seminars</h3>
                <p className="text-slate-600 dark:text-slate-300">Guest lectures and educational seminars on contemporary Islamic topics</p>
              </div>
              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <Calendar className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Seasonal Events</h3>
                <p className="text-slate-600 dark:text-slate-300">Ramadan programs, Eid celebrations, and Islamic calendar observances</p>
              </div>
              <div className="bg-orange-50 dark:bg-slate-800 p-6 rounded-lg">
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Youth Retreats</h3>
                <p className="text-slate-600 dark:text-slate-300">Spiritual retreats and camps for character development and bonding</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Program Categories</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Educational workshops on Islamic finance, parenting, and family life</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Cultural programs celebrating Islamic heritage and traditions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Community outreach and interfaith dialogue sessions</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Skills development and career guidance programs</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Health and wellness initiatives for the community</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Stay Connected for Updates</h3>
              <p className="text-lg leading-relaxed">
                Our special programs are announced throughout the year based on community needs and opportunities. 
                Stay connected with ISM Kakkanad to learn about upcoming workshops, seminars, retreats, and 
                community service initiatives that enrich our collective journey of faith and service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Other;
