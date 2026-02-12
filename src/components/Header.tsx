import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronRight, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-drop.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
  { label: "Green Earth", path: "/green-earth" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // FIX: Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "instant" instead of "smooth" for immediate scroll
    });
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Logo animation variants
  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.08, 
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{ backgroundColor: '#800000' }}
      >
        {/* Animated oil drop background effect - subtle */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute right-20 top-2"
          >
            <Droplet className="w-40 h-40 text-[#FFB347]" />
          </motion.div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20 md:h-24 max-w-7xl mx-auto">
            {/* Logo with full brand name */}
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={logoVariants}
              className="relative group flex-shrink-0"
            >
              <Link 
                to="/" 
                className="flex items-center gap-3"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
              >
                <div className="relative">
                  <img 
                    src={logoImg} 
                    alt="Tolani Petroleum" 
                    className="h-16 w-auto md:h-20 lg:h-24 object-contain drop-shadow-2xl" 
                    style={{ 
                      minWidth: '64px',
                      filter: 'brightness(1.2) contrast(1.1)'
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FFB347]/30 blur-2xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.8 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                
                {/* Refined brand typography */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-xl lg:text-2xl font-bold leading-tight text-white tracking-tight">
                    TOLANI
                  </span>
                  <span className="text-xs lg:text-sm font-medium leading-tight text-[#FFB347]/90 tracking-wider uppercase">
                    Petroleum Products
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                    }}
                    className={`relative text-sm lg:text-base font-medium tracking-wide px-1 py-2 transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-[#FFB347]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <motion.span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#FFB347] rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: location.pathname === link.path ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="tel:+919999999999"
                className="relative group flex items-center gap-2 bg-[#FFB347] text-[#800000] px-6 py-2.5 rounded-full text-sm lg:text-base font-bold overflow-hidden shadow-lg hover:shadow-[#FFB347]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="relative flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Enquire Now
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white relative w-10 h-10 flex items-center justify-center bg-[#FFB347]/20 rounded-full"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[#FFB347]/20"
              style={{ backgroundColor: '#800000' }}
            >
              <div className="px-4 py-4 max-w-7xl mx-auto">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => {
                          setMobileOpen(false);
                          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        }}
                        className={`block text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                          location.pathname === link.path
                            ? "text-[#FFB347] bg-[#FFB347]/10"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.a
                    href="tel:+919920408508"
                    className="flex items-center justify-center gap-2 bg-[#FFB347] text-[#800000] px-4 py-3 rounded-lg text-base font-bold mt-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call for Enquiry
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* CRITICAL FIX: Negative margin spacer that adapts to all pages */}
      <div 
        className="w-full" 
        style={{ 
          height: 0,
          marginTop: 0,
          paddingTop: 0
        }} 
      />
    </>
  );
};

export default Header;