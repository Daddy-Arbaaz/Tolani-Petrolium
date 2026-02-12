import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Counter } from "@/components/Counter";
import CorporateCard from "@/components/CorporateCards";

import {
  Factory, Shield, Leaf, Droplets, Cog, Zap, FlaskConical,
  Truck, Wrench, Phone, MessageCircle, ChevronRight, ArrowDown,
  Award, TrendingUp, Users, CheckCircle, Sparkles, Star,
  Clock, MapPin, Building2, Package, Settings, Hammer,
  TestTube, Droplet as OilDrop, Thermometer, Wind, Gauge
} from "lucide-react";
import barrelsStacked from "@/assets/barrels-stacked.jpg";
import barrelsRow from "@/assets/barrels-row.png";
import hydraulicOil from "@/assets/hydraulic-oil.jpg";
import gearOil from "@/assets/gear-oil.jpg";
import transformerOil from "@/assets/transformer-oil.jpg";
import compressor from "@/assets/compressor.jpg";
import rubberProcess from "@/assets/rubber-process.jpg";
import grease from "@/assets/grease.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import aboutImg from "../assets/about-tolani.jpg";
import lubricantsImg from "../assets/industrial-lubricants.jpg";
import specialtyImg from "../assets/specialty-oils.jpg";
import rdImg from "../assets/rd-centre.jpg";
import qualityImg from "../assets/quality-control.jpg";
import infraImg from "../assets/infrastructure.jpg"
import Slideshow from "@/components/Slideshow";

const stats = [
  { icon: Factory, label: "Established", value: "1970", desc: "Over 50 years of trust" },
  { icon: Shield, label: "Certified", value: "ISO 9001:2015", desc: "Quality assured" },
  { icon: Leaf, label: "Eco-Friendly", value: "Green Processes", desc: "Sustainable operations" },
];

const cards = [
  { title: "About Tolani", description: "Five decades of excellence in petroleum manufacturing and energy solutions.", image: aboutImg },
  { title: "Industrial Lubricants", description: "High-performance lubricants engineered for heavy machinery and industrial use.", image: lubricantsImg },
  { title: "Specialty Oils", description: "Custom-formulated oils for specialized applications across diverse industries.", image: specialtyImg },
  { title: "R&D Centre", description: "Cutting-edge research driving innovation in petroleum product development.", image: rdImg },
  { title: "Quality Control", description: "Rigorous testing and ISO-certified processes ensuring premium product standards.", image: qualityImg },
  { title: "Infrastructure", description: "World-class manufacturing facilities with advanced processing capabilities.", image: infraImg },
];

const productCategories = [
  { name: "Industrial Lubricating Oils", image: hydraulicOil },
  { name: "Hydraulic Oils", image: gearOil },
  { name: "Gear Oils", image: gearOil },
  { name: "Transformer Oils", image: transformerOil },
  { name: "Compressor Oils", image: compressor },
  { name: "Rubber Processing Oils", image: rubberProcess },
  { name: "Greases", image: grease },
  { name: "Specialty Oils", image: labTesting },
];

const processSteps = [
  { step: "01", title: "Raw Material Sourcing", desc: "Premium base oils & additives" },
  { step: "02", title: "Precision Refining", desc: "Advanced blending technology" },
  { step: "03", title: "Quality Testing", desc: "ISO-certified lab analysis" },
  { step: "04", title: "Eco-Safe Packaging", desc: "Sustainable delivery solutions" },
  { step: "05", title: "Machine Protection", desc: "Reliable performance guaranteed" },
];

const clients = [
  "Tata Steel", "Reliance Industries", "JSW Steel", "Hindalco", "Mahindra",
  "Bajaj Auto", "Godrej Industries", "Larsen & Toubro", "Thermax", "BHEL",
  "ACC Cement", "Grasim Industries",
];

const achievements = [
  { icon: Award, number: 50, suffix: "+", label: "Years of Excellence" },
  { icon: Users, number: 500, suffix: "+", label: "Industrial Clients" },
  { icon: FlaskConical, number: 100, suffix: "+", label: "Product Variants" },
  { icon: TrendingUp, number: 24, suffix: "/7", label: "Technical Support" },
];

const facilities = [
  { icon: MapPin, title: "Navi Mumbai", desc: "Corporate Headquarters & Manufacturing" },
  { icon: Building2, title: "5+ Acres", desc: "State-of-the-art facility" },
  { icon: Package, title: "10,000 KL", desc: "Storage Capacity" },
  { icon: Settings, title: "5 Production Lines", desc: "Advanced blending units" },
];

const certifications = [
  { name: "ISO 9001:2015", icon: Shield, desc: "Quality Management" },
  { name: "ISO 14001", icon: Leaf, desc: "Environmental Management" },
  { name: "ISO 45001", icon: Shield, desc: "Occupational Health & Safety" },
  { name: "ASTM", icon: TestTube, desc: "International Standards" },
];

const keyProducts = [
  { name: "Hydraulic Oils", icon: OilDrop },
  { name: "Gear Oils", icon: Cog },
  { name: "Compressor Oils", icon: Wind },
  { name: "Transformer Oils", icon: Zap },
  { name: "Greases", icon: Hammer },
  { name: "Rubber Oils", icon: Gauge },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero - Slideshow */}
      <Slideshow />

      {/* Quick Info Bar - Dark Background */}
      <div className="bg-[#0a0a0a] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4 py-3 sm:py-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="truncate">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="truncate">Navi Mumbai, Maharashtra</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="truncate">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-amber font-semibold text-xs sm:text-sm">Since 1970</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Cards Section - White Background */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Welcome to Tolani
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
                Excellence in Energy Solutions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Five decades of petroleum excellence, serving India's leading industries with precision-engineered lubricants
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {cards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <CorporateCard title={card.title} description={card.description} image={card.image} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Counter Stats - Maroon Gradient Background */}
      <section className="bg-gradient-to-r from-[#5a0e1a] to-[#7a1f2b] py-12 sm:py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
            {achievements.map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                    <Counter end={item.number} suffix={item.suffix} duration={2} />
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white/70 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facility Overview - Light Gray Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  Our Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  World-Class Manufacturing Facility
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Strategically located in Navi Mumbai, our 50+ acre facility houses state-of-the-art 
                  blending units, quality control laboratories, and automated packaging lines.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {facilities.map((item) => (
                    <div key={item.title} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative mt-4 sm:mt-6 lg:mt-0">
                <img 
                  src={infraImg} 
                  alt="Infrastructure" 
                  className="rounded-xl sm:rounded-2xl shadow-xl w-full h-64 sm:h-72 md:h-80 object-cover"
                />
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Acres</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Snapshot - White Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src={barrelsRow} 
                  alt="Tolani Petroleum barrels" 
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover" 
                />
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">ISO 9001:2015</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Quality Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  Our Legacy
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Why Tolani Petroleum</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  For over five decades, we've delivered uncompromising quality in industrial lubricants. 
                  Our commitment to precision engineering and customer satisfaction has made us a trusted 
                  partner to India's leading manufacturing companies.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                        <stat.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">{stat.value}</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications - Light Gray Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Accredited Excellence
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Our commitment to quality is validated by leading international certifications
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-amber/10 flex items-center justify-center">
                    <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{cert.name}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-2">{cert.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section - White Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Our Products
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Comprehensive Product Range
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Over 100 variants engineered for every industrial application
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {productCategories.map((cat, index) => (
              <StaggerItem key={cat.name}>
                <Link to="/products">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-36 sm:h-40 md:h-48 lg:h-56 group cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load image: ${cat.name}`);
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Tolani+Petroleum';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                      <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight drop-shadow-md line-clamp-2">
                        {cat.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1 sm:mt-2">
                        <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-amber group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-14 transition-all duration-300" />
                      </div>
                      <span className="text-amber/90 text-[10px] sm:text-xs font-medium mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5 sm:gap-1">
                        View products <ChevronRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Key Products Quick View - Light Gray Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  Product Portfolio
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  Specialized Lubricant Solutions
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  From hydraulic systems to heavy-duty industrial gears, our comprehensive range 
                  of lubricants delivers optimal performance and extended equipment life.
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {keyProducts.map((product) => (
                    <div key={product.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border border-gray-200">
                      <product.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber shrink-0" />
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-900 truncate">{product.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-sm mt-4 sm:mt-6 lg:mt-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Custom Formulations</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500">Tailor-made for your needs</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our R&D team develops custom lubricant blends for unique applications. 
                  Whether it's specific viscosity requirements or special additive packages, 
                  we engineer solutions that match your exact specifications.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Banner - Dark Overlay on Image */}
      <section className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
        <img 
          src={barrelsStacked} 
          alt="Tolani Petroleum products" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center px-4 sm:px-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber" />
                <span className="text-amber text-[10px] sm:text-xs font-semibold">Trusted Partner</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
                Trusted by <span className="text-amber whitespace-nowrap">500+ Industries</span>
              </h2>
              <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
                Delivering quality petroleum products across India since 1970
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients Section - White Background */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Our Partners
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Industry Leaders Trust Us
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Proud to serve India's most respected manufacturing companies
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <div className="bg-gray-50 p-3 sm:p-4 md:p-5 text-center rounded-lg border border-gray-200 hover:border-amber/50 transition-colors duration-300">
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-900 line-clamp-1">{client}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Flow - Maroon Gradient Background */}
      <section className="bg-gradient-to-r from-[#5a0e1a] to-[#7a1f2b] py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Our Process
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto px-4">
                From raw material to machine protection — every step is quality-controlled
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-5 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto rounded-full bg-amber flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-[#5a0e1a] font-bold text-xs sm:text-sm md:text-base">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">{step.title}</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 px-1">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 sm:py-18 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Protect Your Machines. Improve Efficiency.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get in touch with our technical team for customized lubricant solutions tailored to your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gray-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Contact Us
              </Link>
              <a
                href="https://wa.me/919920408508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#25D366] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-[#20ba5a] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> WhatsApp Enquiry
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;