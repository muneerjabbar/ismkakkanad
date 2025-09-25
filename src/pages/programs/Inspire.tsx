
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const Inspire = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
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
                src={import.meta.env.BASE_URL + 'images/ism_inspire_logo.png'} 
                alt="ISM Inspire"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = import.meta.env.BASE_URL + 'placeholder.svg';
                }}
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

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Join the Professional Network</h3>
              <p className="text-lg leading-relaxed mb-6">
                ISM Inspire welcomes professionals from all fields who are committed to excellence in their careers 
                while upholding Islamic values. Together, we can create a network of leaders who make positive 
                impacts in their professions and communities, inspiring others through our example of value-based leadership.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="http://www.isminspire.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Visit ISM Inspire Website
                  </a>
                  
                  <a 
                    href="https://chat.whatsapp.com/KQANsVoGM9xLSqBjZYQyHx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                    </svg>
                    Join WhatsApp Group
                  </a>
                </div>
                
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-sm text-white/90 flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Website uses HTTP connection. Your browser may show a security notice, but the site is safe to visit.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Inspire;
