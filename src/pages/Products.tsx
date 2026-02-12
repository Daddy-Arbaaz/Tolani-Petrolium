import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { 
  ChevronRight, Droplet, Factory, Thermometer, Zap, Beaker, 
  Settings, Wrench, FlaskConical, Award, Shield, Clock,
  Truck, CheckCircle, Star, Package, Microscope, Leaf
} from "lucide-react";
import barrelsStacked from "@/assets/Gemini_Generated_Image_1ey52o1ey52o1ey5.png";
import hydraulicOil from "@/assets/hydraulic-oil.jpg";
import gearOil from "@/assets/gear-oil.jpg";
import transformerOil from "@/assets/transformer-oil.jpg";
import compressor from "@/assets/compressor.jpg";
import rubberProcess from "@/assets/rubber-process.jpg";
import grease from "@/assets/grease.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import barrelsRow from "@/assets/quality-barrels.jpg";
import infraImg from "@/assets/infrastructure.jpg";

const products = [
  {
    category: "Industrial Lubricating Oils",
    image: hydraulicOil,
    items: ["Spindle Oil", "Machine Oil", "Way Oil", "Cutting Oil"],
    desc: "High-performance lubricants for precision machinery and manufacturing equipment.",
    icon: Settings,
    specs: ["ISO 32-220", "Excellent oxidation stability", "Rust & corrosion protection"],
  },
  {
    category: "Hydraulic Oils",
    image: gearOil,
    items: ["HLP 32", "HLP 46", "HLP 68", "HLP 100"],
    desc: "Anti-wear hydraulic fluids for reliable pressure system operation.",
    icon: Droplet,
    specs: ["DIN 51524-2", "VG 32-100", "High viscosity index"],
  },
  {
    category: "Gear Oils",
    image: gearOil,
    items: ["EP 90", "EP 140", "EP 220", "EP 320"],
    desc: "Extreme-pressure gear lubricants for heavy-duty industrial transmissions.",
    icon: Factory,
    specs: ["AGMA 9005-E02", "EP additives", "Thermal stability"],
  },
  {
    category: "Transformer Oils",
    image: transformerOil,
    items: ["Transformer Oil IS 335", "Low Pour Point Oil"],
    desc: "Dielectric insulating fluids for electrical transformers and switchgear.",
    icon: Zap,
    specs: ["IS 335:2018", "High dielectric strength", "Oxidation resistant"],
  },
  {
    category: "Compressor Oils",
    image: compressor,
    items: ["Reciprocating Compressor Oil", "Rotary Compressor Oil", "Refrigeration Oil"],
    desc: "Specialized lubricants for air and gas compressor systems.",
    icon: Thermometer,
    specs: ["DIN 51506", "Carbon residue control", "Non-foaming"],
  },
  {
    category: "Rubber Processing Oils",
    image: rubberProcess,
    items: ["Paraffinic Oil", "Naphthenic Oil", "Aromatic Oil"],
    desc: "Process oils for rubber compounding and plasticizer applications.",
    icon: Beaker,
    specs: ["Low volatility", "Good compatibility", "Consistent quality"],
  },
  {
    category: "Industrial Greases",
    image: grease,
    items: ["Lithium Grease", "Calcium Grease", "EP Grease", "High-Temp Grease"],
    desc: "Multi-purpose and specialized greases for bearings and joints.",
    icon: Wrench,
    specs: ["NLGI 0-3", "Water resistant", "Extreme pressure"],
  },
  {
    category: "Specialty & Tailor-Made Oils",
    image: labTesting,
    items: ["White Oil", "Quenching Oil", "Heat Transfer Oil", "Custom Blends"],
    desc: "Engineered solutions for unique industrial applications.",
    icon: FlaskConical,
    specs: ["Custom formulations", "Application specific", "Technical support"],
  },
];

const certifications = [
  { name: "ISO 9001:2015", icon: Shield, desc: "Quality Management" },
  { name: "ISO 14001", icon: Leaf, desc: "Environmental Management" },
  { name: "ASTM", icon: Microscope, desc: "International Standards" },
  { name: "DIN", icon: Award, desc: "German Standards" },
];

const applications = [
  "Automotive Manufacturing", "Steel Plants", "Power Generation", "Cement Industry",
  "Mining Operations", "Food Processing", "Textile Mills", "Chemical Plants"
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white overflow-x-hidden">
      {/* Hero Section - COMPLETELY FIXED IMAGE FITTING */}
      <section className="relative min-h-[60vh] sm:h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with proper positioning */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900">
            <img 
              src={barrelsStacked} 
              alt="Tolani Petroleum products" 
              className="w-full h-full"
              style={{ 
                objectFit: "cover",
                objectPosition: "center",
                opacity: 0.9
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/80" />
        </div>
        
        {/* Decorative Elements - Hidden on mobile, adjusted for larger screens */}
        <div className="hidden md:block absolute top-20 right-20 w-64 lg:w-96 h-64 lg:h-96 border border-white/10 rounded-full" />
        <div className="hidden md:block absolute bottom-20 left-20 w-48 lg:w-64 h-48 lg:h-64 border border-white/5 rounded-full" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-[500px] h-80 lg:h-[500px] border border-white/5 rounded-full" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-20 py-12 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-0.5 bg-amber" />
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Our Products
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Complete Lubricant{' '}
              <span className="text-amber relative inline-block">
                Solutions
                <span className="absolute -bottom-2 left-0 w-full h-2 sm:h-3 bg-amber/30 -z-10" />
              </span>
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Over 100 product variants engineered for peak industrial performance, 
              backed by five decades of manufacturing expertise.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                <span className="text-xl sm:text-2xl font-bold text-amber">100+</span>
                <span className="text-xs sm:text-sm">Product Variants</span>
              </div>
              <div className="w-px h-5 sm:h-8 bg-white/20" />
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                <span className="text-xl sm:text-2xl font-bold text-amber">8</span>
                <span className="text-xs sm:text-sm">Categories</span>
              </div>
              <div className="w-px h-5 sm:h-8 bg-white/20" />
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                <span className="text-xl sm:text-2xl font-bold text-amber">50+</span>
                <span className="text-xs sm:text-sm">Years</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Badge */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-white/90 text-[10px] sm:text-xs md:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber" />
            ISO 9001:2015 Certified
          </span>
        </motion.div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4 py-3 sm:py-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm truncate">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm truncate">Pan-India Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm truncate">24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-amber font-semibold text-[10px] sm:text-xs md:text-sm">Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1 sm:mb-2 block">
                Product Range
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
                Engineered for Excellence
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Click on any product category to explore detailed specifications and variants
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12" staggerDelay={0.08}>
            {products.map((product) => (
              <StaggerItem key={product.category}>
                <div
                  className={`group relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 ${
                    selectedCategory === product.category ? "ring-2 sm:ring-4 ring-amber shadow-lg sm:shadow-2xl shadow-amber/30 scale-[1.01] sm:scale-[1.02]" : "hover:shadow-md sm:hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === product.category ? null : product.category)}
                >
                  <img
                    src={product.image}
                    alt={product.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    selectedCategory === product.category 
                      ? "bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/40" 
                      : "bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-gray-900/30 group-hover:from-gray-900/90 group-hover:via-gray-900/70"
                  }`} />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 border border-white/20 group-hover:bg-amber/20 group-hover:border-amber/50 transition-all duration-300">
                      <product.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white group-hover:text-amber transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-white font-bold text-xs sm:text-sm md:text-sm lg:text-base leading-tight mb-1 sm:mb-2 line-clamp-2">
                      {product.category}
                    </h3>
                    
                    <div className={`h-0.5 bg-amber transition-all duration-500 ${
                      selectedCategory === product.category ? "w-8 sm:w-10 md:w-12 lg:w-16" : "w-6 sm:w-8 md:w-8 lg:w-10 group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 lg:group-hover:w-16"
                    }`} />
                    
                    {selectedCategory === product.category && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-amber rounded-full flex items-center justify-center"
                      >
                        <span className="text-gray-900 text-[8px] sm:text-[10px] md:text-xs font-bold">✓</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Expanded Product Details */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              {products
                .filter((p) => p.category === selectedCategory)
                .map((product) => (
                  <div
                    key={product.category}
                    className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-lg sm:shadow-xl"
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-amber via-amber/80 to-amber/60" />
                    
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-6 md:p-8 lg:p-10">
                      <div className="lg:w-2/5">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
                          <img 
                            src={product.image} 
                            alt={product.category} 
                            className="w-full h-48 sm:h-56 md:h-60 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                              <product.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-amber" />
                              <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium truncate">{product.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-3/5 space-y-4 sm:space-y-5 lg:space-y-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            {product.category}
                          </h3>
                          <div className="w-12 sm:w-16 lg:w-20 h-1 bg-amber rounded-full" />
                        </div>
                        
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                          {product.desc}
                        </p>
                        
                        <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
                          <h4 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
                            Key Specifications
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                            {product.specs.map((spec, idx) => (
                              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber shrink-0" />
                                <span className="text-gray-600">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
                            Available Variants
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                            {product.items.map((item) => (
                              <div
                                key={item}
                                className="bg-white border border-gray-200 rounded-lg px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 text-center hover:border-amber hover:shadow-md transition-all duration-300 group"
                              >
                                <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 group-hover:text-amber transition-colors line-clamp-1">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                          <button className="flex-1 bg-amber text-gray-900 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:bg-amber/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg sm:hover:shadow-xl hover:shadow-amber/30 flex items-center justify-center gap-1.5 sm:gap-2">
                            Request Quote
                            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                          </button>
                          <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                            Technical Data Sheet
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                    >
                      <span className="text-xl sm:text-2xl leading-none text-gray-600 hover:text-gray-900">×</span>
                    </button>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Industries We Serve
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
                Trusted Across Sectors
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Our lubricants power critical operations in diverse industrial environments
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {applications.map((app, index) => (
              <StaggerItem key={app}>
                <div className="bg-white p-3 sm:p-4 md:p-5 text-center rounded-lg sm:rounded-xl border border-gray-200 hover:border-amber/50 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group">
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 group-hover:text-amber line-clamp-1">
                    {app}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Quality Assured
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Our products meet the highest international standards
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 hover:border-amber/50 transition-all duration-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-amber/10 flex items-center justify-center group-hover:bg-amber/20">
                    <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{cert.name}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Banner */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <img src={barrelsRow} alt="Tolani barrels" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.2'%3E%3Cpath d='M50 50h-4v-4h4v4zm0-20h-4v4h4v-4zm-20 0h-4v4h4v-4zm0 20h-4v-4h4v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-amber text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">Custom Solutions</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              Need a{' '}
              <span className="text-amber relative inline-block">
                Tailor-Made
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-amber/30 -z-10" />
              </span>{' '}
              Solution?
            </h2>
            
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
              Can't find what you need? Our R&D team engineers custom lubricant blends specifically 
              designed for your unique machinery requirements and operating conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-amber text-gray-900 font-semibold text-xs sm:text-sm md:text-base rounded-full hover:bg-amber/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber/30 flex items-center gap-1.5 sm:gap-2">
                Request Custom Formulation
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white/30 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Contact Technical Team
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/60">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/60">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm">50+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white/60">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm">Made in India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  Why Choose Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  The Tolani Advantage
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">50+ Years of Expertise</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Five decades of lubricant manufacturing excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">100+ Product Variants</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Comprehensive range for every industrial application</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">ISO Certified Quality</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Rigorous testing at every stage of production</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">Pan-India Presence</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Serving 500+ clients across all major industrial hubs</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative mt-6 sm:mt-8 lg:mt-0">
                <img 
                  src={infraImg} 
                  alt="Manufacturing Facility" 
                  className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-4 sm:-left-5 md:-left-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl sm:shadow-2xl border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">50+ Acres</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Manufacturing Facility</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;