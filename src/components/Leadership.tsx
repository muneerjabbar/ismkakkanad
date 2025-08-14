
import React from 'react';

interface Leader {
  name: string;
  position: string;
  image: string;
}

interface Convenor {
  name: string;
  title: string;
  description: string;
}

const Leadership = () => {
  const leaders: Leader[] = [
    {
      name: "Muneer Jabbar",
      position: "President",
      image: import.meta.env.BASE_URL + 'lovable-uploads/muneer_jabbar.png'
    },
    {
      name: "Mohammad Babu",
      position: "Secretary",
      image: import.meta.env.BASE_URL + 'lovable-uploads/babu.png'
    },
    {
      name: "Rafeek K.B.",
      position: "Organization Secretary",
      image: import.meta.env.BASE_URL + 'lovable-uploads/rafeek.png'
    },
    {
      name: "Moosa",
      position: "Treasurer",
      image: import.meta.env.BASE_URL + 'lovable-uploads/moosa.png'
    }
  ];

  const convenors: Convenor[] = [
    {
      name: "Riyas",
      title: "QHLS Convenor",
      description: "Heads the Qur'an & Hadith Learning Series, focusing on scriptural literacy and scholarly engagement."
    },
    {
      name: "Moosa",
      title: "Eelaaf Convenor",
      description: "Leads Eelaaf, ISM's volunteer wing engaged in dawah, social outreach, and charitable initiatives, fostering community welfare and active civic participation."
    },
    {
      name: "Unais M.A.",
      title: "Velicham Convenor",
      description: "Leads Velicham, ISM's grassroots Qur'an learning initiative inspired by the prophetic saying, \"The best among you are those who learn the Qur'an and teach it.\""
    },
    {
      name: "Fadil Mohammad",
      title: "IT Convenor",
      description: "Oversees digital infrastructure, tech-based outreach, and innovation in organizational communication."
    },
    {
      name: "Hashim Rishad",
      title: "Inspire Convenor",
      description: "Leads Inspire, the professional wing of ISM, working to engage Muslim professionals in value-based leadership and service."
    },
    {
      name: "Ameer M.N.",
      title: "Dawah Convenor",
      description: "Heads dawah initiatives, focusing on Islamic outreach, interfaith understanding, and community education."
    }
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
            Our Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Dedicated leaders guiding ISM Kakkānād towards its mission of youth empowerment and community service
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Executive Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-emerald-500">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {leader.name}
                </h4>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {leader.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Convenors */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Program Convenors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {convenors.map((convenor, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {convenor.name}
                </h4>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                  {convenor.title}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {convenor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
