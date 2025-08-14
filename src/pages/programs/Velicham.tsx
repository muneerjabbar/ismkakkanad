
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Users, Award, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Velicham = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
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
                src={new URL('@/assets/velicham-logo.png', import.meta.url).href}
                alt="ISM Velicham"
                className="w-16 h-16 mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">ISM Velicham</h1>
                <p className="text-xl text-emerald-100">The Qur'an: The Straight Path of Truth</p>
                <p className="text-lg text-emerald-200 mt-1">(ഖുർആൻ നേരിൻ്റെ നേർവഴി)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Velicham is a structured, recurring Qur'an study initiative led by the ISM Kerala State Committee. 
              With the goal of bringing the divine message of the Qur'an closer to people's lives, Velicham empowers 
              individuals to reflect, understand, and act upon the timeless guidance of the Qur'an in a meaningful way.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Conducted every six months with a new selection of Surahs and themes, Velicham offers participants 
              an opportunity to engage deeply with the Qur'anic text, its meaning, and its practical relevance. 
              The program also integrates lessons from Prophetic history (Seerah) to offer a holistic learning 
              experience that connects faith with real-life application.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Why Velicham?</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">To inspire a deeper connection with the Qur'an.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">To understand the Qur'an's guidance on ethics, knowledge, justice, and mercy.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">To spread the Qur'anic message of truth, compassion, and divine wisdom in society.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 mr-3"></div>
                <span className="text-slate-600 dark:text-slate-300">To build a generation rooted in faith and committed to transformation.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 dark:bg-slate-800 p-6 rounded-lg">
                <Users className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Open to All (15+ years)</h3>
                <p className="text-slate-600 dark:text-slate-300">Welcoming participants from all walks of life.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-slate-800 p-6 rounded-lg">
                <Home className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Home-Based Learning</h3>
                <p className="text-slate-600 dark:text-slate-300">Study materials are provided, and exams can be taken from home.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-slate-800 p-6 rounded-lg">
                <Award className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Encouraging Rewards</h3>
                <p className="text-slate-600 dark:text-slate-300">Top performers are recognized and awarded at various levels.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-slate-800 p-6 rounded-lg">
                <Book className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Every Phase, a New Light</h3>
                <p className="text-slate-600 dark:text-slate-300">With each phase, new Surahs and themes are explored to keep the learning fresh and impactful.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                Velicham is more than a study program—it is a movement to illuminate hearts and minds with the light of the Qur'an. 
                By encouraging consistent, structured, and meaningful Qur'anic engagement, Velicham invites every soul toward the 
                straight path of truth: <strong>"ഖുർആൻ നേരിൻ്റെ നേർവഴി"</strong>.
              </p>
              <div className="mt-6 space-y-1 text-sm">
                <div><span className="font-semibold">Kakkanad Zone Convenor:</span> Unais MA — 9544581275</div>
                <div><span className="font-semibold">Athani Unit:</span> Ameer MN — 989599569</div>
                <div><span className="font-semibold">Kakkanad Unit:</span> Sali MA — 9847873472</div>
                <div><span className="font-semibold">Kangarapady Unit:</span> Nasar — 7510228619</div>
                <div><span className="font-semibold">Mattekkad Unit:</span> Wahab — 8921318657</div>
                <div><span className="font-semibold">Kalamassery Unit:</span> Rafeek KB — 9387584316</div>
                <div><span className="font-semibold">Edappalli Unit:</span> Mahin — 9947914955</div>
                <div><span className="font-semibold">Cheranalloor Unit:</span> Shebin — 8891808889</div>
                <div><span className="font-semibold">Padamugal Unit:</span> Latheef — 9567839629</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Velicham;
