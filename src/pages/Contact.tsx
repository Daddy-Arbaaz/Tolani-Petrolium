import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { 
  Phone, Mail, MapPin, MessageCircle, Send, 
  Clock, Users, Shield, Award, ChevronRight, Building2,
  Headphones, Truck, FileText, CheckCircle, Star
} from "lucide-react";
import barrelsRow from "@/assets/Gemini_Generated_Image_wak1mkwak1mkwak1.png";
import infraImg from "@/assets/infrastructure.jpg";
import qualityLab from "@/assets/quality-lab.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: "Corporate Address", value: "Sector No :-1 , MIDC Industrial Area, Navi Mumbai, Maharashtra 400701", sub: "India" },
    { icon: Phone, label: "Phone Numbers", value: "+91 99204 08508", sub: "Mon-Sat, 9AM-6PM" },
    { icon: Mail, label: "Email Addresses", value: "sales@tolanipetroleum.com", sub: "sales@tolanipetroleum.com" },
  ];

  const branches = [
    { city: "Mumbai", address: "MIDC Industrial Area, Navi Mumbai", phone: "+91 22 6789 1234" },
    { city: "Delhi", address: "Okhla Industrial Estate, New Delhi", phone: "+91 11 4567 8901" },
    { city: "Chennai", address: "Ambattur Industrial Estate, Chennai", phone: "+91 44 2345 6789" },
    { city: "Kolkata", address: "Taratala Road, Kolkata", phone: "+91 33 5678 9012" },
  ];

  const supportFeatures = [
    { icon: Headphones, title: "24/7 Technical Support", desc: "Round-the-clock assistance for critical issues" },
    { icon: Truck, title: "Pan-India Delivery", desc: "Fast and reliable logistics network" },
    { icon: FileText, title: "Product Documentation", desc: "MSDS, TDS, and certification papers" },
    { icon: Users, title: "On-site Consultation", desc: "Expert engineers at your facility" },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white overflow-x-hidden">
      {/* Hero Section - ENTIRE IMAGE VISIBLE, NO CROPPING */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-gray-900">
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
        <div className="hidden md:block absolute top-20 right-20 w-48 lg:w-64 h-48 lg:h-64 border border-white/10 rounded-full pointer-events-none z-10" />
        <div className="hidden md:block absolute bottom-20 left-20 w-64 lg:w-96 h-64 lg:h-96 border border-white/5 rounded-full pointer-events-none z-10" />
        
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
              <span className="text-amber text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let's{' '}
              <span className="text-amber relative inline-block">
                Talk
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-amber/30 -z-10" />
              </span>
            </h1>
            
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Our technical team is ready to help you find the perfect lubricant solution 
              for your specific industrial requirements.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-sm">24/7 Support</div>
                  <div className="text-white/60 text-[10px] sm:text-xs">Technical assistance</div>
                </div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/20" />
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-sm">Pan-India</div>
                  <div className="text-white/60 text-[10px] sm:text-xs">Fast delivery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Badge - Hidden on mobile/tablet */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hidden xl:block z-30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900" />
            </div>
            <div>
              <div className="text-white font-bold text-xs sm:text-sm">Quick Response</div>
              <div className="text-white/70 text-[10px] sm:text-xs">Within 24 hours</div>
            </div>
          </div>
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
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm truncate">50+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-amber shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm truncate">500+ Industrial Clients</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-amber font-semibold text-[10px] sm:text-xs md:text-sm">Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left Column - Contact Information */}
            <ScrollReveal>
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <div>
                  <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                    Reach Us
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    We're Here to Help
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                    Choose your preferred way to connect with our team
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={item.label}
                      className="flex items-start gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-amber/30 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-0.5 sm:mb-1">{item.label}</div>
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 break-words">{item.value}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/919920408508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base hover:bg-[#20ba5a] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 w-full sm:w-auto justify-center sm:justify-start"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> 
                  Chat on WhatsApp
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </motion.a>

                {/* Business Hours */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Business Hours</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[10px] sm:text-xs md:text-sm">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-200 shadow-lg sm:shadow-xl">
                {submitted ? (
                  <motion.div 
                    className="text-center py-8 sm:py-10 md:py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-full bg-amber/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                      <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-amber" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Thank You!</h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 px-2">
                      Your enquiry has been sent successfully. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-amber text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:bg-amber/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                        <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Send us a message</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1 sm:mb-1.5">
                            Full Name <span className="text-amber">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="Insha Shaikh"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1 sm:mb-1.5">
                            Email <span className="text-amber">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="sales@tolanipetroleum.com"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1 sm:mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="+91 99204 08508"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1 sm:mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1 sm:mb-1.5">
                          Message <span className="text-amber">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber text-gray-900 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber/30 flex items-center justify-center gap-2 group"
                      >
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        Send Enquiry
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Branch Offices Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Our Presence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
                Branch Offices
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Strategically located across India to serve you better
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {branches.map((branch) => (
              <StaggerItem key={branch.city}>
                <motion.div 
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-amber/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Building2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-amber" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{branch.city}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">{branch.address}</p>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-amber">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium break-all">{branch.phone}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                  Customer Support
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  We're Committed to Your Success
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  From technical consultation to after-sales service, our dedicated support team ensures 
                  you get the most out of our products.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {supportFeatures.map((feature, index) => (
                    <div key={feature.title} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-700">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-700">500+ Clients</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative mt-6 sm:mt-8 lg:mt-0">
                <img 
                  src={qualityLab} 
                  alt="Customer Support" 
                  className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-4 sm:-left-5 md:-left-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl sm:shadow-2xl border border-gray-200 max-w-[220px] sm:max-w-xs">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                      <Headphones className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">24/7 Support</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Technical assistance available</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <span className="text-amber text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                Visit Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Our Headquarters
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-200">
              <div className="h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber mx-auto mb-2 sm:mb-3" />
                  <p className="text-gray-700 font-medium text-sm sm:text-base">MIDC Industrial Area, Navi Mumbai</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1">Maharashtra, India 400701</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;