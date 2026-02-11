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
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section - COMPLETELY FIXED IMAGE FITTING */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
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
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-amber" />
              <span className="text-amber text-sm font-semibold tracking-[0.3em] uppercase">
                Our Products
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Complete Lubricant{' '}
              <span className="text-amber relative">
                Solutions
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-amber/30 -z-10" />
              </span>
            </h1>
            
            <p className="text-gray-200 text-xl max-w-2xl leading-relaxed">
              Over 100 product variants engineered for peak industrial performance, 
              backed by five decades of manufacturing expertise.
            </p>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl font-bold text-amber">100+</span>
                <span className="text-sm">Product Variants</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl font-bold text-amber">8</span>
                <span className="text-sm">Categories</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl font-bold text-amber">50+</span>
                <span className="text-sm">Years</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Badge */}
        <motion.div 
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-white/90 text-sm font-medium flex items-center gap-2">
            <Award className="w-4 h-4 text-amber" />
            ISO 9001:2015 Certified
          </span>
        </motion.div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between py-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-4 h-4 text-amber" />
              <span className="text-sm">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Truck className="w-4 h-4 text-amber" />
              <span className="text-sm">Pan-India Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4 text-amber" />
              <span className="text-sm">24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber font-semibold text-sm">Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber text-sm font-semibold tracking-[0.3em] uppercase mb-2 block">
                Product Range
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Engineered for Excellence
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Click on any product category to explore detailed specifications and variants
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-12" staggerDelay={0.08}>
            {products.map((product) => (
              <StaggerItem key={product.category}>
                <div
                  className={`group relative rounded-2xl overflow-hidden h-56 md:h-64 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedCategory === product.category ? "ring-4 ring-amber shadow-2xl shadow-amber/30 scale-[1.02]" : "hover:shadow-xl"
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
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/20 group-hover:bg-amber/20 group-hover:border-amber/50 transition-all duration-300">
                      <product.icon className="w-5 h-5 text-white group-hover:text-amber transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2">
                      {product.category}
                    </h3>
                    
                    <div className={`h-0.5 bg-amber transition-all duration-500 ${
                      selectedCategory === product.category ? "w-16" : "w-10 group-hover:w-16"
                    }`} />
                    
                    {selectedCategory === product.category && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 bg-amber rounded-full flex items-center justify-center"
                      >
                        <span className="text-gray-900 text-xs font-bold">✓</span>
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
              className="mt-12"
            >
              {products
                .filter((p) => p.category === selectedCategory)
                .map((product) => (
                  <div
                    key={product.category}
                    className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl"
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber via-amber/80 to-amber/60" />
                    
                    <div className="flex flex-col lg:flex-row gap-8 p-8 lg:p-10">
                      <div className="lg:w-2/5">
                        <div className="relative rounded-2xl overflow-hidden group">
                          <img 
                            src={product.image} 
                            alt={product.category} 
                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                          
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                              <product.icon className="w-4 h-4 text-amber" />
                              <span className="text-white text-sm font-medium">{product.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-3/5 space-y-6">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            {product.category}
                          </h3>
                          <div className="w-20 h-1 bg-amber rounded-full" />
                        </div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {product.desc}
                        </p>
                        
                        <div className="bg-gray-50 rounded-2xl p-6">
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Key Specifications
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {product.specs.map((spec, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                                <span className="text-gray-600">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Available Variants
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {product.items.map((item) => (
                              <div
                                key={item}
                                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-amber hover:shadow-md transition-all duration-300 group"
                              >
                                <span className="text-sm font-medium text-gray-700 group-hover:text-amber transition-colors">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button className="flex-1 bg-amber text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/30 flex items-center justify-center gap-2">
                            Request Quote
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <button className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                            Technical Data Sheet
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                    >
                      <span className="text-2xl leading-none text-gray-600 hover:text-gray-900">×</span>
                    </button>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Industries We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted Across Sectors
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our lubricants power critical operations in diverse industrial environments
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <StaggerItem key={app}>
                <div className="bg-white p-5 text-center rounded-xl border border-gray-200 hover:border-amber/50 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber">{app}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quality Assured
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our products meet the highest international standards
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:border-amber/50 transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber/10 flex items-center justify-center group-hover:bg-amber/20">
                    <cert.icon className="w-7 h-7 text-amber" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-600">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Banner */}
      <section className="relative overflow-hidden py-20">
        <img src={barrelsRow} alt="Tolani barrels" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.2'%3E%3Cpath d='M50 50h-4v-4h4v4zm0-20h-4v4h4v-4zm-20 0h-4v4h4v-4zm0 20h-4v-4h4v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-amber/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-amber text-sm font-semibold tracking-wide">Custom Solutions</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Need a{' '}
              <span className="text-amber relative">
                Tailor-Made
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-amber/30 -z-10" />
              </span>{' '}
              Solution?
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Can't find what you need? Our R&D team engineers custom lubricant blends specifically 
              designed for your unique machinery requirements and operating conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-amber text-gray-900 font-semibold rounded-full hover:bg-amber/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber/30 flex items-center gap-2">
                Request Custom Formulation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Contact Technical Team
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-amber" />
                <span className="text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-amber" />
                <span className="text-sm">50+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckCircle className="w-4 h-4 text-amber" />
                <span className="text-sm">Made in India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Tolani Advantage
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">50+ Years of Expertise</h3>
                      <p className="text-sm text-gray-600">Five decades of lubricant manufacturing excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">100+ Product Variants</h3>
                      <p className="text-sm text-gray-600">Comprehensive range for every industrial application</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">ISO Certified Quality</h3>
                      <p className="text-sm text-gray-600">Rigorous testing at every stage of production</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Pan-India Presence</h3>
                      <p className="text-sm text-gray-600">Serving 500+ clients across all major industrial hubs</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img 
                  src={infraImg} 
                  alt="Manufacturing Facility" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-amber" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">50+ Acres</div>
                      <div className="text-xs text-gray-600">Manufacturing Facility</div>
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