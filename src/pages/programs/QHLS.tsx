
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, GraduationCap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const QHLS = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
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
                src={import.meta.env.BASE_URL + 'images/qhls_logo.png'}
                alt="QHLS"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = import.meta.env.BASE_URL + 'placeholder.svg';
                }}
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">QHLS</h1>
                <p className="text-xl text-green-100">Qur'an & Hadith Learning Series</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The Qur'an & Hadith Learning Series (QHLS) is our flagship educational program designed to enhance
              scriptural literacy and promote scholarly engagement with Islamic texts. This comprehensive series
              provides systematic study of the Qur'an and authentic Hadith literature.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              QHLS serves as a foundation for developing a deeper understanding of Islamic teachings, encouraging
              critical thinking, and fostering a scholarly approach to religious education among our community members.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Program Structure</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-slate-800 p-6 rounded-lg">
                <Book className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Qur'anic Studies</h3>
                <p className="text-slate-600 dark:text-slate-300">In-depth analysis of Qur'anic verses with proper context and interpretation</p>
              </div>
              <div className="bg-green-50 dark:bg-slate-800 p-6 rounded-lg">
                <GraduationCap className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Hadith Analysis</h3>
                <p className="text-slate-600 dark:text-slate-300">Study of authentic Hadith literature and prophetic traditions</p>
              </div>
              <div className="bg-green-50 dark:bg-slate-800 p-6 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Group Discussions</h3>
                <p className="text-slate-600 dark:text-slate-300">Interactive sessions promoting scholarly dialogue and understanding</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Learning Objectives</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Develop comprehensive understanding of Qur'anic teachings</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Master the science of Hadith authentication and interpretation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Foster critical thinking and analytical skills in religious studies</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">Build a foundation for Islamic scholarship and teaching</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Unit Coordinators</h2>

            {/* Zone Convenor - Special Highlighted Box */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-2xl shadow-xl border-2 border-green-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3 shadow-lg"></div>
                    <h4 className="font-bold text-lg">Kakkanad Zone Convenor</h4>
                    <div className="ml-auto bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Zone Leader
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-white">Riyas</p>
                      <p className="text-green-100 font-medium">📞 8891110025</p>
                    </div>
                    <div className="text-right">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unit Coordinators */}
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Unit Coordinators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Athani Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Muneer</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">9400095648</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Kakkanad Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Riyas</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">8891110025</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Kangarapady Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Nasar</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">7510228619</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Mattekkad Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Wahab</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">8921318657</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Kalamassery Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Rafeek KB</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">9387584316</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Edappalli Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Mahin</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">9947914955</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Cheranalloor Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Shebin</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">8891808889</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Padamugal Unit</h4>
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">Latheef</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">9567839629</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Join Our Weekly Sessions</h3>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                QHLS meets weekly to provide consistent and structured learning opportunities. Our sessions are designed
                to accommodate both beginners and advanced students, ensuring everyone can benefit from this comprehensive
                approach to Islamic education and scholarly engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default QHLS;
