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
    { icon: MapPin, label: "Corporate Address", value: "Plot No. 123, MIDC Industrial Area, Navi Mumbai, Maharashtra 400701", sub: "India" },
    { icon: Phone, label: "Phone Numbers", value: "+91 22 6789 1234", sub: "Mon-Sat, 9AM-6PM" },
    { icon: Mail, label: "Email Addresses", value: "info@tolanipetroleum.com", sub: "sales@tolanipetroleum.com" },
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
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section - ENTIRE IMAGE VISIBLE, NO CROPPING */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-900">
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
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full pointer-events-none z-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-white/5 rounded-full pointer-events-none z-10" />
        
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
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's{' '}
              <span className="text-amber relative">
                Talk
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-amber/30 -z-10" />
              </span>
            </h1>
            
            <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
              Our technical team is ready to help you find the perfect lubricant solution 
              for your specific industrial requirements.
            </p>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-white font-semibold">24/7 Support</div>
                  <div className="text-white/60 text-xs">Technical assistance</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-white font-semibold">Pan-India</div>
                  <div className="text-white/60 text-xs">Fast delivery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Badge */}
        <motion.div 
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hidden lg:block z-30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <div className="text-white font-bold">Quick Response</div>
              <div className="text-white/70 text-sm">Within 24 hours</div>
            </div>
          </div>
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
              <Award className="w-4 h-4 text-amber" />
              <span className="text-sm">50+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-4 h-4 text-amber" />
              <span className="text-sm">500+ Industrial Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber font-semibold text-sm">Made in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <ScrollReveal>
              <div className="space-y-10">
                <div>
                  <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                    Reach Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    We're Here to Help
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Choose your preferred way to connect with our team
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={item.label}
                      className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-amber/30 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                        <item.icon className="w-6 h-6 text-amber" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="font-semibold text-gray-900 text-base mb-1">{item.value}</div>
                        <div className="text-sm text-gray-500">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#20ba5a] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" /> 
                  Chat on WhatsApp
                  <ChevronRight className="w-4 h-4 ml-2" />
                </motion.a>

                {/* Business Hours */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-amber" />
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl">
                {submitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-amber/10 flex items-center justify-center mb-6">
                      <Send className="w-10 h-10 text-amber" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                    <p className="text-gray-600 text-base mb-6">
                      Your enquiry has been sent successfully. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-amber text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-amber/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                        <Send className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                            Full Name <span className="text-amber">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                            Email <span className="text-amber">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1.5">
                          Message <span className="text-amber">*</span>
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 focus:border-amber transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber text-gray-900 py-4 rounded-xl font-bold text-base hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber/30 flex items-center justify-center gap-2 group"
                      >
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Our Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Branch Offices
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Strategically located across India to serve you better
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <StaggerItem key={branch.city}>
                <motion.div 
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-amber" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.city}</h3>
                  <p className="text-sm text-gray-600 mb-3">{branch.address}</p>
                  <div className="flex items-center gap-2 text-amber">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{branch.phone}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Support Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                  Customer Support
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  We're Committed to Your Success
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From technical consultation to after-sales service, our dedicated support team ensures 
                  you get the most out of our products.
                </p>
                
                <div className="space-y-4">
                  {supportFeatures.map((feature, index) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber" />
                    <span className="text-sm text-gray-700">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber" />
                    <span className="text-sm text-gray-700">500+ Clients</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img 
                  src={qualityLab} 
                  alt="Customer Support" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl border border-gray-200 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-amber" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">24/7 Support</div>
                      <div className="text-sm text-gray-600">Technical assistance available</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Visit Us
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Headquarters</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-amber mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">MIDC Industrial Area, Navi Mumbai</p>
                  <p className="text-gray-500 text-sm mt-1">Maharashtra, India 400701</p>
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