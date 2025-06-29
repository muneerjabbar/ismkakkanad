
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/6c18632e-9182-4cc0-ad91-99517f38543e.png" 
                alt="ISM Kakkānad" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">ISM Kakkānād</h3>
                <p className="text-slate-400 text-sm">Youth Wing of KNM</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering tomorrow's leaders through faith, knowledge, and community service. 
              Building a generation of confident, compassionate young Muslims.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">About ISM</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Events</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Membership</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Qur'ān Studies</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Youth Seminars</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Community Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Leadership Training</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Cultural Events</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 ISM Kakkānād · Proudly part of Kerala Nadvathul Mujāhidīn
          </p>
          <p className="text-slate-400 text-sm">
            <span className="text-emerald-400 font-semibold">KNM Proud:</span> Uplifting our community with faith, wisdom & action.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
