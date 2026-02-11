import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, ChevronRight, 
  Facebook, Twitter, Linkedin, Instagram, 
  Award, Shield, Clock, Droplet,
  Send, MessageCircle, Factory, Truck
} from "lucide-react";
import logoImg from "@/assets/logo-drop.png";

export const Footer = () => (
  <footer className="bg-gradient-to-r from-[#4a0b15] to-[#6a1a24] text-white">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        
        {/* Company Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <img src={logoImg} alt="Tolani Petroleum" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">TOLANI</h3>
              <p className="text-xs text-amber/90 font-medium">PETROLEUM</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            Precision-engineered petroleum products for modern industry. 
            Trusted by 500+ clients across India since 1970.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Award className="w-3.5 h-3.5 text-amber" />
              <span className="text-xs text-gray-300">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Shield className="w-3.5 h-3.5 text-amber" />
              <span className="text-xs text-gray-300">Made in India</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber/20 border border-white/10 hover:border-amber/50 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-400 group-hover:text-amber" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber/20 border border-white/10 hover:border-amber/50 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-400 group-hover:text-amber" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber/20 border border-white/10 hover:border-amber/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-amber" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber/20 border border-white/10 hover:border-amber/50 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400 group-hover:text-amber" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-amber font-semibold text-sm tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-amber/50" />
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {["Home", "About", "Products", "Quality", "Contact", "Careers", "Blog", "FAQs"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-amber transition-colors duration-300 flex items-center gap-1.5 group"
              >
                <ChevronRight className="w-3 h-3 text-amber/50 group-hover:text-amber group-hover:translate-x-1 transition-all duration-300" />
                {link}
              </Link>
            ))}
          </div>
          
          {/* Certificate Badge */}
          <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Quality Certified</p>
                <p className="text-sm font-semibold text-white">ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-amber font-semibold text-sm tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-amber/50" />
            Contact Us
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-amber" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Corporate Office</p>
                <p className="text-sm text-white font-medium">MIDC Industrial Area</p>
                <p className="text-xs text-gray-400">Navi Mumbai, Maharashtra 400701</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors duration-300">
                <Phone className="w-4 h-4 text-amber" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Phone Numbers</p>
                <p className="text-sm text-white font-medium">+91 22 6789 1234</p>
                <p className="text-xs text-gray-400">+91 22 6789 1235</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors duration-300">
                <Mail className="w-4 h-4 text-amber" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Email Addresses</p>
                <p className="text-sm text-white font-medium">info@tolanipetroleum.com</p>
                <p className="text-xs text-gray-400">sales@tolanipetroleum.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors duration-300">
                <Clock className="w-4 h-4 text-amber" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Business Hours</p>
                <p className="text-sm text-white font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-xs text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & WhatsApp */}
        <div>
          <h4 className="text-amber font-semibold text-sm tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-amber/50" />
            Stay Connected
          </h4>
          
          <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-amber" />
              </div>
              <h5 className="text-white font-semibold text-sm">Newsletter</h5>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe for product updates and industry insights
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-amber"
              />
              <button className="px-3 py-2 bg-amber text-gray-900 rounded-r-lg font-medium text-xs hover:bg-amber/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#25D366] hover:bg-[#20ba5a] transition-colors duration-300 rounded-xl p-4 group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-white" />
              <div>
                <p className="text-white text-xs font-medium">Chat with us</p>
                <p className="text-white/90 text-sm font-bold">WhatsApp Enquiry</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <Factory className="w-4 h-4 text-amber mb-1" />
              <p className="text-white font-bold text-sm">50+</p>
              <p className="text-gray-400 text-xs">Years</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <Truck className="w-4 h-4 text-amber mb-1" />
              <p className="text-white font-bold text-sm">500+</p>
              <p className="text-gray-400 text-xs">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Tolani Petroleum Products. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-amber transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber transition-colors">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="hover:text-amber transition-colors">
              Sitemap
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">ISO 9001:2015</span>
            <span className="text-gray-700">|</span>
            <span className="text-xs text-gray-600">Made in India</span>
            <Droplet className="w-3 h-3 text-amber ml-1" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);