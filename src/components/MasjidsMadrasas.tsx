import { Building, GraduationCap } from "lucide-react";

const MasjidsMadrasas = () => {

    return (
        <section id="masjids-madrasas" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
                        Masjids & Madrasas
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                        Discover the Islamic institutions serving our community across ISM Kakkanad Zone
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Masjids Card */}
                        <div
                            onClick={() => {
                                window.location.href = import.meta.env.BASE_URL + 'masjids';
                            }}
                            className="group cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-3xl border-2 border-emerald-200 dark:border-slate-500 hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                        >
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                    <Building className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                    Masjids
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                                    Find Salafi Masjids in different units of ISM Kakkanad Zone.
                                    Connect with your local mosque community for prayers and events.
                                </p>
                                <div className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold text-lg group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                                    Explore Masjids
                                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Madrasas Card */}
                        <div
                            onClick={() => {
                                window.location.href = import.meta.env.BASE_URL + 'madrasas';
                            }}
                            className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-3xl border-2 border-blue-200 dark:border-slate-500 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                        >
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                    <GraduationCap className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    Madrasas
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                                    Discover Islamic educational institutions providing
                                    quality religious education and character development in our zone.
                                </p>
                                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold text-lg group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                    Explore Madrasas
                                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasjidsMadrasas;