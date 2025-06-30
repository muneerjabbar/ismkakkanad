
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Inspire = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
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
              <img 
                src="/lovable-uploads/c759151f-3f03-42cc-bf0b-2aabc2e64018.png" 
                alt="ISM Inspire"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">ISM Inspire</h1>
                <p className="text-xl text-purple-100">Professional Wing for Value-Based Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              ISM Inspire is the professional wing of ISM Kakkanad, specifically designed to engage Muslim professionals 
              in value-based leadership and community service. We focus on connecting faith with professional excellence, 
              creating leaders who embody Islamic values in their work and service.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Our platform brings together professionals from various fields including IT, healthcare, education, business, 
              and public service to share experiences, mentor youth, and contribute meaningfully to society while maintaining 
              their Islamic identity and principles.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Core Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Professional Excellence</h3>
                <p className="text-slate-600 dark:text-slate-300">Promoting ethical practices and excellence in professional endeavors</p>
              </div>
              <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Mentorship Programs</h3>
                <p className="text-slate-600 dark:text-slate-300">Connecting experienced professionals with emerging talent</p>
              </div>
              <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Leadership Development</h3>
                <p className="text-slate-600 dark:text-slate-300">Building leaders who integrate Islamic values with professional success</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Program Activities</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Professional development workshops and seminars</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Networking events for Muslim professionals</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Career guidance and mentorship programs</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Community service initiatives led by professionals</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Ethics in workplace discussions and training</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join the Professional Network</h3>
              <p className="text-lg leading-relaxed">
                ISM Inspire welcomes professionals from all fields who are committed to excellence in their careers 
                while upholding Islamic values. Together, we can create a network of leaders who make positive 
                impacts in their professions and communities, inspiring others through our example of value-based leadership.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Inspire;
