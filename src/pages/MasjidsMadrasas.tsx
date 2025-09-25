import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const MasjidsMadrasas = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
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
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Masjids & Madrasas</h1>
                        <p className="text-xl text-emerald-100">
                            Discover the Islamic institutions in ISM Kakkanad Zone
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                            Choose a Category
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Explore the Masjids and Madrasas serving our community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Masjids Card */}
                        <div
                            onClick={() => navigate('/masjids')}
                            className="group cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border-2 border-emerald-200 dark:border-slate-600 hover:border-emerald-400 dark:hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Building className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    Masjids
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    Find Salafi Masjids in different units of ISM Kakkanad Zone.
                                    Connect with your local mosque community.
                                </p>
                                <div className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                                    Explore Masjids
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Madrasas Card */}
                        <div
                            onClick={() => navigate('/madrasas')}
                            className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border-2 border-blue-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <GraduationCap className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                                    Madrasas
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    Discover Islamic educational institutions providing
                                    quality religious education in our zone.
                                </p>
                                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                    Explore Madrasas
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MasjidsMadrasas;