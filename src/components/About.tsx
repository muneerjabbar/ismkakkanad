
import { Users, BookOpen, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            About ISM Kakkanad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Ithihadu Shubbanil Mujaahideen (ISM) is the youth wing of Kerala Nadvathul Mujahideen (KNM), 
              a reformist Islamic movement based in Kerala, India. Founded in the early 20th century, ISM aims 
              to cultivate a morally upright, intellectually enlightened, and socially responsible generation 
              of Muslim youth grounded in authentic Islamic teachings.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              ISM emphasizes Qur'an and Sunnah-based reform, rejecting superstition, innovations (bid'ah), and 
              un-Islamic cultural practices. It works through grassroots initiatives in education, dawah, literature, 
              social service, and community development. With a motto of "Service to Humanity is Worship of Allah," 
              ISM encourages youth to be proactive in social change while maintaining a deep spiritual and ethical foundation.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              The organization has significantly contributed to religious awareness, youth empowerment, and intellectual 
              revival among Kerala's Muslims. It runs various wings and projects, including programs for students, 
              professionals, and families, ensuring Islam remains a lived and practical guide for modern life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 dark:bg-slate-800 rounded-2xl">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Youth Empowerment</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Developing confident, capable young Muslim leaders</p>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 dark:bg-slate-800 rounded-2xl">
              <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Education Focus</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Promoting Islamic education and scholarly engagement</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 dark:bg-slate-800 rounded-2xl">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Community Service</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Serving humanity through charitable initiatives</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 dark:bg-slate-800 rounded-2xl">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Global Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Contributing to worldwide Islamic renaissance</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">About Kerala Nadvathul Mujahideen (KNM)</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Kerala Nadvathul Mujahideen (<a href="https://knm.org.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://knm.org.in/</a>) 
              is a socio-religious organisation established in 1950 with K M Moulavi as founder president and N V Abdussalam 
              moulavi as founder general Secretary. It is registered under societies registration act XXI of 1860 with No. 2/57. 
              The organisation aims at the development and reformist activities of the society with focus on the upliftment of 
              weaker sections of the society.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The parent organization of KNM is Kerala Jamiyyathul Ulama, the first recognized forum of Muslim scholars in Kerala. 
              KNM shares a close ideological affiliation with the All-India Jamaat-e-Ahl-i Hadith, a national-level movement 
              committed to the same foundational principles of Tawheed (monotheism), adherence to authentic Hadith, and revival 
              of Islamic values across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
