
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, GraduationCap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const QHLS = () => {
  const navigate = useNavigate();

  return (
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
                src={import.meta.env.BASE_URL + 'lovable-uploads/qhls_logo.png'} 
                alt="QHLS"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
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

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Weekly Sessions</h3>
              <p className="text-lg leading-relaxed">
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
  );
};

export default QHLS;
