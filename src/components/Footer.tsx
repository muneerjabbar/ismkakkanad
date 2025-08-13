
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
                src={import.meta.env.BASE_URL + 'lovable-uploads/6c18632e-9182-4cc0-ad91-99517f38543e.png'} 
                alt="ISM Kakkanad" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">ISM Kakkanad</h3>
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
              <a href="#" className="bg-slate-800 hover:bg-green-600 p-2 rounded-lg transition-colors duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
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
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Qur'an Studies</a></li>
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
            © 2025 ISM Kakkanad · Proudly part of Kerala Nadvathul Mujahideen
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
