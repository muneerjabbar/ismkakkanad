
import { BookOpen, Users, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              About ISM Kakkānād
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          {/* Main About Content */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="text-xl mb-6">
                Ithihadu Shubbanil Mujaahideen (ISM) is the youth wing of Kerala Nadvathul Mujahideen (KNM), 
                a reformist Islamic movement based in Kerala, India. Founded in the early 20th century, ISM aims 
                to cultivate a morally upright, intellectually enlightened, and socially responsible generation 
                of Muslim youth grounded in authentic Islamic teachings.
              </p>
              
              <p className="text-lg mb-6">
                ISM emphasizes Qur'an and Sunnah-based reform, rejecting superstition, innovations (bid'ah), 
                and un-Islamic cultural practices. It works through grassroots initiatives in education, dawah, 
                literature, social service, and community development. With a motto of "Service to Humanity is 
                Worship of Allah," ISM encourages youth to be proactive in social change while maintaining a 
                deep spiritual and ethical foundation.
              </p>
              
              <p className="text-lg mb-8">
                The organization has significantly contributed to religious awareness, youth empowerment, and 
                intellectual revival among Kerala's Muslims. It runs various wings and projects, including 
                programs for students, professionals, and families, ensuring Islam remains a lived and 
                practical guide for modern life.
              </p>
            </div>
          </div>
          
          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Our Foundation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Rooted in authentic Islamic teachings, emphasizing Qur'an and Sunnah-based reform and 
                rejecting superstitions and innovations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cultivating morally upright, intellectually enlightened, and socially responsible Muslim 
                youth through comprehensive development programs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Our Values</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                "Service to Humanity is Worship of Allah" - encouraging proactive social change while 
                maintaining deep spiritual and ethical foundations.
              </p>
            </div>
          </div>

          {/* Parent Organization Info */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Kerala Nadvathul Mujahideen (KNM)</h3>
            <div className="grid md:grid-cols-2 gap-6 text-emerald-50">
              <div>
                <p className="mb-4">
                  <a href="https://knm.org.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                    Kerala Nadvathul Mujahideen
                  </a> is a socio-religious organisation established in 1950 with K M Moulavi as founder 
                  president and N V Abdussalam moulavi as founder general Secretary. It is registered under 
                  societies registration act XXI of 1860 with No. 2/57.
                </p>
                <p>
                  The organisation aims at the development and reformist activities of the society with focus 
                  on the upliftment of weaker sections of the society.
                </p>
              </div>
              <div>
                <p>
                  The parent organization of KNM is Kerala Jamiyyathul Ulama, the first recognized forum of 
                  Muslim scholars in Kerala. KNM shares a close ideological affiliation with the All-India 
                  Jamaat-e-Ahl-i Hadith, a national-level movement committed to the same foundational 
                  principles of Tawheed (monotheism), adherence to authentic Hadith, and revival of Islamic 
                  values across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
