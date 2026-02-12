import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { 
  Award, 
  FlaskRound, 
  Microscope, 
  Beaker, 
  Thermometer, 
  Droplet, 
  Wind, 
  Ruler, 
  Gauge,
  Shield,
  CheckCircle,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  FlaskConical
} from "lucide-react";
import qualityBarrels from "@/assets/quality-barrels.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import qualityCustomer from "@/assets/quality-customer.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import barrelsRow from "@/assets/Gemini_Generated_Image_fotvulfotvulfotv.png";

const testingParams = [
  "ASTM Colour",
  "Density Testing",
  "Kinematic Viscosity",
  "Flash Point",
  "Pour Point",
  "Moisture Content",
  "Acidity (Inorganic)",
  "Drop Point (for Grease)",
  "Penetration (for Grease)",
];

const certifications = [
  { name: "ISO 9001:2015", icon: Award, description: "Quality Management Systems" },
  { name: "ASTM Standards", icon: Beaker, description: "International Testing Methods" },
  { name: "IS 335:2018", icon: Shield, description: "Transformer Oil Specification" },
  { name: "DIN Standards", icon: Gauge, description: "German Institute for Standardization" },
];

const Quality = () => (
  <div className="min-h-screen pt-16 sm:pt-20 h-full bg-white overflow-x-hidden">
    {/* Hero Section - ENTIRE IMAGE VISIBLE, NO CROPPING */}
    <section className="relative min-h-[60vh] sm:h-[70vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image - CONTAIN shows full image without cropping */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${barrelsRow})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay - Affects entire container */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/50" />
      </div>
      
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-64 lg:w-96 h-64 lg:h-96 border border-white/10 rounded-full pointer-events-none z-10" />
      <div className="hidden md:block absolute bottom-20 left-20 w-48 lg:w-64 h-48 lg:h-64 border border-white/5 rounded-full pointer-events-none z-10" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] border border-white/5 rounded-full pointer-events-none z-10" />
      
      {/* Floating Quality Badge - Hidden on mobile/tablet */}
      <motion.div
        className="absolute top-32 right-10 hidden xl:block z-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-amber/20 flex items-center justify-center">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 text-amber" />
            </div>
            <div>
              <div className="text-white font-bold text-xs lg:text-sm">ISO 9001:2015</div>
              <div className="text-white/60 text-[10px] lg:text-xs">Quality Certified</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-20 py-12 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 sm:w-12 md:w-16 h-1 bg-amber rounded-full" />
            <span className="text-amber text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Since 1970
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Quality Without{' '}
            <span className="text-amber relative inline-block">
              Compromise
              <motion.span 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 md:h-4 bg-amber/30 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Five decades of uncompromising quality standards, certified excellence, 
            and continuous innovation in petroleum product testing.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-amber rounded-full mt-1.5 sm:mt-2" />
        </div>
      </motion.div>
    </section>

    {/* Certifications Banner */}
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-[#5a0e1a] to-[#7a1f2b] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 sm:mb-2 block">
              Our Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
              Certified Excellence
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="relative inline-block">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-amber/50 group-hover:bg-amber/20 transition-all duration-300">
                    <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 truncate px-1">
                  {cert.name}
                </h3>
                <p className="text-white/60 text-[10px] sm:text-xs line-clamp-2 px-1">
                  {cert.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* QUALITY CONTROL SECTION - COMPLETELY UNTOUCHED STRUCTURE, ONLY RESPONSIVE SCALING */}
    <section className="py-12 sm:py-16 md:section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Quality Control & R&D */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <ScrollReveal>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 border-l-4 border-amber pl-3 sm:pl-4">
                Quality Control & R&D
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                At Tolani Petroleum Products, quality control is at the heart of our operations. Innovation
                drives our processes, allowing us to develop products that meet and exceed market expectations.
                Our advanced facilities and experienced technical team ensure consistent quality across our
                entire product range.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg sm:shadow-xl">
              <img 
                src={qualityBarrels} 
                alt="Quality barrels" 
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </ScrollReveal>
        </div>

        {/* State of the Art Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <ScrollReveal>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden group order-2 lg:order-1 shadow-lg sm:shadow-xl">
              <img 
                src={qualityLab} 
                alt="Lab facilities" 
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 border-l-4 border-amber pl-3 sm:pl-4">
                State-of-the-Art Facilities
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We utilize state-of-the-art standard laboratory facilities to measure and evaluate various
                petroleum products against their respective parameters. Before unloading, all base oils stored
                in our tanks are thoroughly tested to ensure compliance with required standards.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Customer First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <ScrollReveal>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 border-l-4 border-amber pl-3 sm:pl-4">
                Customer-First Approach
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Customer satisfaction is our top priority. Every product dispatched to customers undergoes
                extensive testing to ensure it meets specified standards and customer requirements. This
                rigorous process guarantees reliability, performance, and long-term satisfaction.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg sm:shadow-xl">
              <img 
                src={qualityCustomer} 
                alt="Customer approach" 
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Testing Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg sm:shadow-xl">
              <img 
                src={labTesting} 
                alt="Lab testing" 
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 border-l-4 border-amber pl-3 sm:pl-4">
                Lubricants & Grease Testing Includes:
              </h2>
              <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {testingParams.map((param) => (
                  <StaggerItem key={param}>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700 bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm line-clamp-1">{param}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default Quality;