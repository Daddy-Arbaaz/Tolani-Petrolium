import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Counter } from "@/components/Counter";
import { motion } from "framer-motion";
import { 
  Shield, Leaf, Microscope, Users, Award, Droplet, Factory, TrendingUp,
  MapPin, Building2, Package, Settings, CheckCircle, Star, Clock,
  FlaskConical, Truck, Globe, Handshake, Target, Zap
} from "lucide-react";
import barrelsRow from "@/assets/Gemini_Generated_Image_jdayycjdayycjday.png";
import barrelsStacked from "@/assets/barrels-stacked.jpg";
import labTesting from "@/assets/lab-testing.jpg";
import heroImage from "@/assets/hero-refinery.jpg";
import aboutImg from "@/assets/about-tolani.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import qualityLab from "@/assets/quality-lab.jpg";

const timeline = [
  { year: "1970", event: "Founded in Navi Mumbai with a vision for industrial excellence" },
  { year: "1985", event: "Expanded product line to include specialty industrial lubricants" },
  { year: "2000", event: "Achieved ISO 9001 certification for quality management" },
  { year: "2010", event: "Launched eco-friendly product range and green manufacturing" },
  { year: "2020", event: "Upgraded to ISO 9001:2015 with modernized R&D facilities" },
  { year: "Today", event: "Serving 500+ industrial clients across India" },
];

const values = [
  { icon: Shield, title: "Quality First", desc: "Every product passes rigorous ISO-certified lab testing before delivery", image: labTesting },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly refining processes and responsible waste management", image: heroImage },
  { icon: Microscope, title: "Innovation", desc: "Continuous R&D to develop tailor-made solutions for unique needs", image: labTesting },
  { icon: Users, title: "Partnership", desc: "Long-term relationships built on trust and technical expertise", image: barrelsRow },
];

const milestones = [
  { number: "50+", label: "Years of Excellence", icon: Award },
  { number: "500+", label: "Industrial Clients", icon: Factory },
  { number: "100+", label: "Product Variants", icon: Droplet },
  { number: "24/7", label: "Technical Support", icon: TrendingUp },
];

const facilities = [
  { icon: MapPin, title: "Navi Mumbai", desc: "Corporate Headquarters" },
  { icon: Building2, title: "50+ Acres", desc: "Manufacturing Facility" },
  { icon: Package, title: "10,000 KL", desc: "Storage Capacity" },
  { icon: Settings, title: "5 Lines", desc: "Advanced Blending Units" },
];

const certifications = [
  { name: "ISO 9001:2015", icon: Shield, desc: "Quality Management" },
  { name: "ISO 14001", icon: Leaf, desc: "Environmental Management" },
  { name: "ISO 45001", icon: Shield, desc: "Health & Safety" },
  { name: "ASTM", icon: FlaskConical, desc: "International Standards" },
];

const team = [
  { name: "50+", title: "Engineers & Technicians", icon: Microscope },
  { name: "25+", title: "R&D Specialists", icon: FlaskConical },
  { name: "100+", title: "Skilled Workforce", icon: Users },
  { name: "24/7", title: "Support Team", icon: Clock },
];

const partners = [
  "Indian Oil", "Bharat Petroleum", "Hindustan Petroleum", "Tata Motors",
  "Mahindra & Mahindra", "Ashok Leyland", "Siemens", "ABB", "L&T", "Godrej"
];

const About = () => (
  <div className="min-h-screen pt-16 sm:pt-20 bg-background overflow-x-hidden">
    {/* Hero Section */}
    <section className="relative overflow-hidden min-h-[60vh] sm:h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img 
            src={barrelsRow} 
            alt="Tolani Petroleum barrels" 
            className="w-full h-full object-contain md:object-cover"
            style={{ 
              objectFit: "contain",
              objectPosition: "center",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              margin: "0 auto"
            }}
            onError={(e) => {
              e.currentTarget.src = barrelsStacked;
              e.currentTarget.style.objectFit = "cover";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10 py-12 sm:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 sm:w-12 h-0.5 bg-amber" />
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Since 1970
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Engineering{" "}
              <span className="text-amber relative whitespace-nowrap">
                Trust
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" stroke="#fbbf24" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-8">
              From a small workshop in Navi Mumbai to a trusted name in industrial petroleum — 
              our journey has been powered by precision, quality, and unwavering commitment.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber" />
                <span className="text-xs sm:text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber" />
                <span className="text-xs sm:text-sm">500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber" />
                <span className="text-xs sm:text-sm">Made in India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 text-white/10 text-6xl sm:text-[120px] font-black leading-none select-none z-0">
        1970
      </div>
      <div className="absolute top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 border border-white/10 rounded-full z-0" />
      <div className="absolute bottom-20 right-20 sm:right-40 w-16 sm:w-32 h-16 sm:h-32 border border-white/10 rounded-full z-0" />
    </section>

    {/* Legacy Section */}
    <section className="py-12 sm:py-16 md:section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={barrelsStacked} 
                  alt="Product barrels" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-sm sm:text-base truncate">ISO 9001:2015</div>
                      <div className="text-white/60 text-xs sm:text-sm">Quality Certified Since 2000</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Pattern */}
              <div className="absolute -z-10 -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-40 sm:w-64 h-40 sm:h-64 border-8 border-amber/10 rounded-3xl" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber animate-pulse" />
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-wide">Five Decades of Excellence</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Quality Since{' '}
                <span className="text-amber relative whitespace-nowrap">
                  1970
                  <span className="absolute bottom-1 left-0 w-full h-2 sm:h-3 bg-amber/20 -z-10" />
                </span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  For over five decades, Tolani Petroleum has been at the forefront of industrial lubricant manufacturing. 
                  Our commitment to quality, innovation, and customer satisfaction has made us one of the most trusted names 
                  in the Indian petroleum industry.
                </p>
                <p>
                  From our state-of-the-art manufacturing facility in Navi Mumbai, spanning over 50 acres of advanced 
                  processing infrastructure, we serve over 500 industrial clients with more than 100 specialized product variants.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                    <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-sm sm:text-base truncate">5+ Acres</div>
                    <div className="text-xs text-gray-500 truncate">Manufacturing Facility</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-sm sm:text-base truncate">500+ Clients</div>
                    <div className="text-xs text-gray-500 truncate">Across India</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Facility Overview - NEW SECTION */}
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              Our Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
              World-Class Manufacturing Facility
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              State-of-the-art infrastructure spanning 50+ acres in Navi Mumbai
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {facilities.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 truncate">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Counter Stats - REDUCED HEIGHT & MOVED HERE */}
    <section className="bg-gradient-to-r from-[#5a0e1a] to-[#7a1f2b] relative overflow-hidden py-10 sm:py-12">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {milestones.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-amber/20 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">{item.number}</div>
                <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider px-1">{item.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications - NEW SECTION */}
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Certified Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Our commitment to quality validated by international standards
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.1}>
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-gray-200 hover:border-amber/50 transition-all duration-300 group">
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

    {/* Our Team - NEW SECTION */}
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              Our People
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Expert Team Behind the Quality
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Dedicated professionals committed to engineering excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {team.map((member, index) => (
            <ScrollReveal key={member.title} delay={index * 0.1}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-amber/10 flex items-center justify-center">
                  <member.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">{member.name}</div>
                <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">{member.title}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Journey Section - UNTOUCHED */}
    <section className="py-12 sm:py-16 md:section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber -translate-x-1.25 sm:-translate-x-1.5 mt-2" />
                <div className="ml-8 sm:ml-10 md:ml-0 md:w-1/2 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <span className="text-amber font-bold text-base sm:text-lg">{item.year}</span>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{item.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Partners - NEW SECTION */}
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
              Trusted By
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Valued Partners
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Proud to serve India's most respected industrial organizations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner} delay={index * 0.05}>
              <div className="bg-gray-50 p-2 sm:p-3 md:p-4 text-center rounded-lg border border-gray-200 hover:border-amber/50 hover:bg-amber/5 transition-all duration-300">
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 line-clamp-1">{partner}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-12 sm:py-16 md:section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-amber/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1 sm:mb-2 block">
              What Drives Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Principles that guide our every decision and define our relationship with clients
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group relative h-[320px] sm:h-[350px] md:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xl">
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    e.currentTarget.src = barrelsStacked;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40 group-hover:from-gray-900 group-hover:via-gray-900/90 group-hover:to-gray-900/50 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-3 md:mb-4 border border-white/20 group-hover:bg-amber/20 group-hover:border-amber/50 transition-all duration-300">
                    <v.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-amber transition-colors duration-300">
                    {v.title}
                  </h3>
                  <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-amber/50 mb-2 sm:mb-3 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 group-hover:bg-amber" />
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed transform translate-y-2 sm:translate-y-3 md:translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-3 sm:line-clamp-none">
                    {v.desc}
                  </p>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-white/20 group-hover:border-amber/50 transition-colors duration-300" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Why Choose Us - NEW SECTION */}
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <ScrollReveal>
            <div>
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Tolani Advantage
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">50+ Years of Experience</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Five decades of industry expertise and continuous innovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">ISO Certified Quality</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Rigorous testing and quality control at every stage</p>
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
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Custom Solutions</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Tailor-made lubricant blends for unique applications</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <img 
                src={qualityLab} 
                alt="Quality Lab" 
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">100% Quality</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Every batch tested</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <img 
        src={infraImg} 
        alt="Infrastructure" 
        className="absolute inset-0 w-full h-full object-cover object-center" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
        <ScrollReveal>
          <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 md:mb-4 block">
            Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Ready to experience the{' '}
            <span className="text-amber whitespace-nowrap">Tolani</span> difference?
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Join 500+ industrial clients who trust us for their critical lubrication needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-amber text-gray-900 font-semibold text-sm sm:text-base rounded-full hover:bg-amber/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber/30">
              Get in Touch
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              Download Brochure
            </button>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 bg-amber/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-6 sm:top-10 right-4 sm:right-10 w-32 sm:w-60 h-32 sm:h-60 bg-amber/10 rounded-full blur-3xl animate-pulse" />
    </section>
  </div>
);

export default About;