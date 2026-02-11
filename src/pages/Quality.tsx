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

const stats = [
  { icon: Clock, value: "50+", label: "Years of Excellence" },
  { icon: FlaskConical, value: "100+", label: "Test Parameters" },
  { icon: Award, value: "9", label: "ISO Standards" },
  { icon: Users, value: "500+", label: "Happy Clients" },
];

const Quality = () => (
  <div className="min-h-screen pt-20 h-full bg-white">
    {/* Hero Section - COMPLETELY FIXED IMAGE FITTING */}
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with proper positioning */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src={barrelsRow} 
          alt="Quality" 
          className="w-full h-full"
          style={{ 
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 0.85
          }}
          onError={(e) => {
            e.currentTarget.src = qualityBarrels;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
      
      {/* Floating Quality Badge - Repositioned */}
      <motion.div
        className="absolute top-32 right-10 hidden lg:block z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-amber/20 blur-2xl rounded-full" />
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber" />
              </div>
              <div>
                <div className="text-white font-bold">ISO 9001:2015</div>
                <div className="text-white/60 text-sm">Quality Certified</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-1 bg-amber rounded-full" />
            <span className="text-amber text-sm font-semibold tracking-[0.3em] uppercase">
              Since 1970
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Quality Without{' '}
            <span className="text-amber relative inline-block">
              Compromise
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-4 bg-amber/30 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-200 text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Five decades of uncompromising quality standards, certified excellence, 
            and continuous innovation in petroleum product testing.
          </motion.p>
          
          {/* Stats Counter - Updated colors */}
          <motion.div 
            className="flex items-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-amber">50+</div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-amber">100+</div>
              <div className="text-sm text-gray-300">Test Parameters</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-amber">9</div>
              <div className="text-sm text-gray-300">ISO Standards</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber rounded-full mt-2" />
        </div>
      </motion.div>
    </section>

    {/* Quick Info Bar - NEW */}
    <div className="bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4 text-amber" />
            <span className="text-sm">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Microscope className="w-4 h-4 text-amber" />
            <span className="text-sm">NABL Accredited Lab</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4 text-amber" />
            <span className="text-sm">24/7 Quality Monitoring</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber font-semibold text-sm">Made in India</span>
          </div>
        </div>
      </div>
    </div>

    {/* Certifications Banner - Updated colors */}
    <section className="py-16 bg-gradient-to-r from-[#5a0e1a] to-[#7a1f2b] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
              Our Accreditations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Certified Excellence
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-amber/20 blur-xl rounded-full group-hover:bg-amber/30 transition-all duration-300" />
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-amber/50 group-hover:bg-amber/20 transition-all duration-300">
                    <cert.icon className="w-7 h-7 text-amber group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-white/60 text-xs">{cert.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* QUALITY CONTROL SECTION - COMPLETELY UNTOUCHED */}
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-amber pl-4">
                Quality Control & R&D
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Tolani Petroleum Products, quality control is at the heart of our operations. Innovation
                drives our processes, allowing us to develop products that meet and exceed market expectations.
                Our advanced facilities and experienced technical team ensure consistent quality across our
                entire product range.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden group shadow-xl">
              <img src={qualityBarrels} alt="Quality barrels" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </ScrollReveal>
        </div>

        {/* State of the Art Facilities - UNTOUCHED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden group order-2 lg:order-1 shadow-xl">
              <img src={qualityLab} alt="Lab facilities" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-amber pl-4">
                State-of-the-Art Facilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We utilize state-of-the-art standard laboratory facilities to measure and evaluate various
                petroleum products against their respective parameters. Before unloading, all base oils stored
                in our tanks are thoroughly tested to ensure compliance with required standards.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Customer First - UNTOUCHED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-amber pl-4">
                Customer-First Approach
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Customer satisfaction is our top priority. Every product dispatched to customers undergoes
                extensive testing to ensure it meets specified standards and customer requirements. This
                rigorous process guarantees reliability, performance, and long-term satisfaction.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden group shadow-xl">
              <img src={qualityCustomer} alt="Customer approach" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </ScrollReveal>
        </div>

        {/* Testing Parameters - UNTOUCHED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden group shadow-xl">
              <img src={labTesting} alt="Lab testing" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-amber pl-4">
                Lubricants & Grease Testing Includes:
              </h2>
              <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                {testingParams.map((param) => (
                  <StaggerItem key={param}>
                    <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                      <span className="text-sm">{param}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Quality Stats Section - NEW */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-amber" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Excellence Banner - Updated colors */}
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img src={qualityLab} alt="Laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90" />
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-amber/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber" />
            <span className="text-amber text-sm font-semibold">Our Promise</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Committed to{' '}
            <span className="text-amber relative">
              Excellence
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-amber/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Every batch, every product, every delivery — tested, verified, and certified 
            to meet the highest international standards of quality and performance.
          </p>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber" />
              <span className="text-white/80">100% Batch Testing</span>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber" />
              <span className="text-white/80">ISO Certified</span>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber" />
              <span className="text-white/80">5 Year Warranty</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Quality;