import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Droplets, Wind, Sun, Recycle, Globe, Truck, Shield, TreePine, Factory, Fuel, Heart } from "lucide-react";

// FIXED: Import the truck image correctly (ONLY THIS CHANGE)
import truckImg from "@/assets/truck.png";

gsap.registerPlugin(ScrollTrigger);

// Using Unsplash placeholder images
const greenHero1 = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80";
const greenHero2 = "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200&auto=format&fit=crop&q=80";
const greenHero3 = "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&auto=format&fit=crop&q=80";

const heroSlides = [
  { image: greenHero1, title: "Green Earth", subtitle: "Save Earth · Save Petroleum · Save Future" },
  { image: greenHero2, title: "Protect Our Planet", subtitle: "Responsible energy for a sustainable tomorrow" },
  { image: greenHero3, title: "Renewable Future", subtitle: "Investing in clean energy and green technology" },
];

const stats = [
  { icon: Globe, value: "50+", label: "Years of Responsibility" },
  { icon: Recycle, value: "30%", label: "Waste Reduction" },
  { icon: Leaf, value: "100+", label: "Green Initiatives" },
  { icon: Droplets, value: "40%", label: "Water Conservation" },
];

const initiatives = [
  {
    icon: TreePine,
    title: "Reforestation",
    description: "Planted 50,000+ trees to offset carbon emissions.",
    color: "#10B981",
    animation: "scale"
  },
  {
    icon: Recycle,
    title: "Waste Recovery",
    description: "95% waste recycled into reusable materials.",
    color: "#059669",
    animation: "slideLeft"
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    description: "Zero liquid discharge with 40% water reuse.",
    color: "#0EA5E9",
    animation: "slideUp"
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "60% facilities powered by solar energy.",
    color: "#F59E0B",
    animation: "rotate"
  },
  {
    icon: Wind,
    title: "Carbon Neutral",
    description: "Targeting carbon neutrality by 2035.",
    color: "#8B5CF6",
    animation: "slideRight"
  },
  {
    icon: Shield,
    title: "Eco Products",
    description: "Biodegradable lubricants & low-emission fuels.",
    color: "#EC4899",
    animation: "scale"
  },
];

const conservationTips = [
  "Use public transport or carpool",
  "Regular vehicle maintenance",
  "Switch to energy-efficient appliances",
  "Support renewable energy companies",
  "Recycle petroleum-based products",
  "Advocate for sustainable policies",
  "Reduce, reuse, and recycle",
  "Choose biodegradable products",
];

const transportFeatures = [
  { 
    icon: Fuel, 
    title: "Fuel-Efficient", 
    description: "BS-VI engines reduce emissions by 40%",
    color: "#DC2626"
  },
  { 
    icon: Shield, 
    title: "Safety First", 
    description: "GPS tracking & emergency kits",
    color: "#2563EB"
  },
  { 
    icon: Recycle, 
    title: "Green Logistics", 
    description: "AI route optimization",
    color: "#059669"
  },
  { 
    icon: Truck, 
    title: "Modern Tankers", 
    description: "Double-walled construction",
    color: "#7C3AED"
  },
];

const GreenEarth = () => {
  const heroRef = useRef(null);
  const heroImagesRef = useRef([]);
  const heroTextsRef = useRef([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroIntervalRef = useRef(null);
  const statsRef = useRef(null);
  const initiativesRef = useRef(null);
  const tipsRef = useRef(null);
  const transportRef = useRef(null);
  const truckRef = useRef(null);
  const initiativeCardsRef = useRef([]);
  const transportCardsRef = useRef([]);
  const statCardsRef = useRef([]);
  const tipItemsRef = useRef([]);

  const animateHeroSlide = useCallback((index, prev) => {
    if (heroImagesRef.current[prev]) {
      gsap.to(heroImagesRef.current[prev], { opacity: 0, duration: 1, ease: "power2.inOut" });
    }
    if (heroTextsRef.current[prev]) {
      gsap.to(heroTextsRef.current[prev], { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" });
    }
    if (heroImagesRef.current[index]) {
      gsap.fromTo(heroImagesRef.current[index],
        { opacity: 0, scale: 1.15, x: 60 },
        { opacity: 1, scale: 1.05, x: 0, duration: 1.4, ease: "power2.out" }
      );
      gsap.to(heroImagesRef.current[index], { x: -30, scale: 1, duration: 6, ease: "none" });
    }
    if (heroTextsRef.current[index]) {
      gsap.fromTo(heroTextsRef.current[index],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );
    }
  }, []);

  useEffect(() => {
    heroImagesRef.current.forEach((img, i) => {
      if (img) gsap.set(img, { opacity: i === 0 ? 1 : 0 });
    });
    heroTextsRef.current.forEach((txt, i) => {
      if (txt) gsap.set(txt, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
    });

    const interval = setInterval(() => {
      setHeroIndex((prev) => {
        const next = (prev + 1) % heroSlides.length;
        animateHeroSlide(next, prev);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats cards - fade in from different directions
      statCardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: { trigger: statsRef.current, start: "top 90%" },
            y: i % 2 === 0 ? 30 : -30,
            x: i % 2 === 0 ? -30 : 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "back.out(1.7)"
          });
        }
      });

      // Initiative cards - different animations based on type
      initiativeCardsRef.current.forEach((card, i) => {
        if (card) {
          const initiative = initiatives[i];
          let animationProps = {};
          
          switch(initiative.animation) {
            case 'scale':
              animationProps = { scale: 0, opacity: 0 };
              break;
            case 'slideLeft':
              animationProps = { x: -100, opacity: 0, rotation: -10 };
              break;
            case 'slideRight':
              animationProps = { x: 100, opacity: 0, rotation: 10 };
              break;
            case 'slideUp':
              animationProps = { y: 100, opacity: 0 };
              break;
            case 'rotate':
              animationProps = { rotation: -180, opacity: 0, scale: 0.5 };
              break;
            default:
              animationProps = { y: 50, opacity: 0 };
          }
          
          gsap.from(card, {
            scrollTrigger: { trigger: initiativesRef.current, start: "top 85%" },
            ...animationProps,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power2.out"
          });
        }
      });

      // Tips - staggered fade in
      tipItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: { trigger: tipsRef.current, start: "top 85%" },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out"
          });
        }
      });

      // Truck entrance
      if (truckRef.current) {
        gsap.from(truckRef.current, {
          scrollTrigger: { trigger: transportRef.current, start: "top 80%" },
          x: -300,
          opacity: 0,
          rotation: -20,
          duration: 1.5,
          ease: "power3.out",
        });
      }

      // Transport cards - cascading animation
      transportCardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: { trigger: transportRef.current, start: "top 75%" },
            y: 100,
            opacity: 0,
            rotation: i % 2 === 0 ? -15 : 15,
            duration: 0.7,
            delay: 0.2 + (i * 0.2),
            ease: "elastic.out(1, 0.5)"
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f9fafb",
      overflowX: "hidden", // ONLY ADDED: prevent horizontal scroll
      width: "100%" // ONLY ADDED: ensure full width
    }}>
      {/* Hero Slideshow - ONLY SCALING, NO LAYOUT CHANGE */}
      <section 
        ref={heroRef} 
        style={{ 
          position: "relative", 
          width: "100%", 
          height: "90vh", 
          overflow: "hidden", 
          backgroundColor: "#561C24" 
        }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => { heroImagesRef.current[i] = el; }}
            style={{ 
              position: "absolute", 
              inset: 0, 
              width: "100%", 
              height: "100%",
              opacity: i === 0 ? 1 : 0,
              transition: "opacity 1s"
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                opacity: 2.5 
              }} 
            />
          </div>
        ))}
        
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to bottom, rgba(86,28,36,0.6) 0%, rgba(86,28,36,0.9) 100%)" 
        }} />
        
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => { heroTextsRef.current[i] = el; }}
            style={{ 
              position: "absolute", 
              inset: 0, 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              textAlign: "center", 
              padding: "0 20px",
              opacity: i === 0 ? 1 : 0,
              transition: "opacity 1s"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
              <Leaf style={{ width: "32px", height: "32px", color: "#4ade80" }} />
              <Globe style={{ width: "28px", height: "28px", color: "#fef3c7" }} />
              <Leaf style={{ width: "32px", height: "32px", transform: "scaleX(-1)", color: "#4ade80" }} />
            </div>
            
            <h1 style={{ 
              fontSize: "clamp(1.5rem, 6vw, 1.75rem)", // ONLY ADDED: responsive font
              fontWeight: 800, 
              letterSpacing: "0.05em", 
              textTransform: "uppercase",
              marginBottom: "12px", 
              color: "#fef3c7",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>
              {slide.title}
            </h1>
            
            <div style={{ width: "60px", height: "3px", backgroundColor: "#f59e0b", margin: "0 auto 16px" }} />
            
            <p style={{ 
              fontSize: "clamp(0.85rem, 4vw, 1rem)", // ONLY ADDED: responsive font
              fontWeight: 600,
              letterSpacing: "0.025em",
              marginBottom: "12px", 
              color: "#fde68a"
            }}>
              {slide.subtitle}
            </p>
            
            <p style={{ 
              fontSize: "clamp(0.7rem, 3vw, 0.8rem)", // ONLY ADDED: responsive font
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
              color: "rgba(254,243,199,0.85)"
            }}>
              At Tolani Petroleum, we believe that responsible energy production and environmental
              stewardship go hand in hand.
            </p>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div style={{ 
          position: "absolute", 
          bottom: "20px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          display: "flex", 
          gap: "8px", 
          zIndex: 10 
        }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const prev = heroIndex;
                setHeroIndex(i);
                animateHeroSlide(i, prev);
                if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
                heroIntervalRef.current = setInterval(() => {
                  setHeroIndex((p) => {
                    const next = (p + 1) % heroSlides.length;
                    animateHeroSlide(next, p);
                    return next;
                  });
                }, 5000);
              }}
              style={{
                width: i === heroIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: i === heroIndex ? "#f59e0b" : "rgba(254,243,199,0.4)",
                transition: "all 0.3s",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section - ONLY RESPONSIVE GRID, NO LAYOUT CHANGE */}
      <div 
        ref={statsRef} 
        style={{ 
          padding: "40px 16px", 
          backgroundColor: "#fef3c7" 
        }}
      >
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "16px",
          // ONLY ADDED: mobile fallback using media query in style object
          "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(2, 1fr)"
          }
        }}>
          {stats.map((stat, i) => (
            <div 
              key={i}
              ref={(el) => { statCardsRef.current[i] = el; }}
              style={{ 
                textAlign: "center", 
                padding: "20px 12px", 
                borderRadius: "12px", 
                backgroundColor: "#561C24",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <stat.icon style={{ width: "28px", height: "28px", margin: "0 auto 8px", color: "#fef3c7" }} />
              <p style={{ fontSize: "clamp(1.2rem, 5vw, 1.5rem)", fontWeight: 800, color: "#fef3c7", margin: "4px 0" }}>{stat.value}</p>
              <p style={{ fontSize: "clamp(0.6rem, 2.5vw, 0.7rem)", letterSpacing: "0.025em", color: "#fde68a", lineHeight: 1.2 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Save Petroleum - NO LAYOUT CHANGE, ONLY TEXT SCALING */}
      <section style={{ 
        padding: "60px 16px", 
        backgroundColor: "#ffffff" 
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "clamp(1.3rem, 6vw, 1.5rem)", // ONLY ADDED: responsive font
            fontWeight: 700, 
            letterSpacing: "0.05em", 
            textTransform: "uppercase",
            marginBottom: "12px", 
            color: "#561C24"
          }}>
            Why Save Petroleum?
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            fontSize: "clamp(0.75rem, 3.5vw, 0.8rem)", // ONLY ADDED: responsive font
            marginBottom: "32px", 
            maxWidth: "600px", 
            margin: "0 auto 32px", 
            lineHeight: 1.6, 
            color: "#6D2932"
          }}>
            Petroleum is finite. Conserving it is an environmental, economic, and social necessity.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            <div style={{ 
              padding: "24px", 
              borderRadius: "12px", 
              backgroundColor: "rgba(86,28,36,0.05)",
              border: "1px solid rgba(86,28,36,0.1)"
            }}>
              <h3 style={{ 
                fontSize: "clamp(0.9rem, 4vw, 1rem)", // ONLY ADDED: responsive font
                fontWeight: 700, 
                marginBottom: "12px", 
                display: "flex", 
                alignItems: "center", 
                gap: "6px", 
                color: "#561C24" 
              }}>
                <Factory style={{ width: "20px", height: "20px" }} /> The Reality
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["50-60 years of reserves left", "100M barrels daily", "30% of CO₂ emissions", "Oil spills devastate ecosystems"].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "6px", fontSize: "clamp(0.7rem, 3vw, 0.75rem)", lineHeight: 1.4, color: "#6D2932" }}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ 
              padding: "24px", 
              borderRadius: "12px", 
              backgroundColor: "rgba(86,28,36,0.05)",
              border: "1px solid rgba(86,28,36,0.1)"
            }}>
              <h3 style={{ 
                fontSize: "clamp(0.9rem, 4vw, 1rem)", // ONLY ADDED: responsive font
                fontWeight: 700, 
                marginBottom: "12px", 
                display: "flex", 
                alignItems: "center", 
                gap: "6px", 
                color: "#561C24" 
              }}>
                <Heart style={{ width: "20px", height: "20px" }} /> The Solution
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Invest in renewables", "Fuel-efficient engines", "Biodegradable alternatives", "Strict emission controls"].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "6px", fontSize: "clamp(0.7rem, 3vw, 0.75rem)", lineHeight: 1.4, color: "#6D2932" }}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Green Initiatives - NO LAYOUT CHANGE, ONLY RESPONSIVE GRID */}
      <section 
        ref={initiativesRef} 
        style={{ 
          padding: "60px 16px", 
          backgroundColor: "#561C24" 
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "clamp(1.3rem, 6vw, 1.5rem)", // ONLY ADDED: responsive font
            fontWeight: 700, 
            letterSpacing: "0.05em", 
            textTransform: "uppercase",
            marginBottom: "8px", 
            color: "#fef3c7"
          }}>
            Our Green Initiatives
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            fontSize: "clamp(0.75rem, 3.5vw, 0.8rem)", // ONLY ADDED: responsive font
            letterSpacing: "0.025em",
            marginBottom: "40px", 
            color: "#fde68a"
          }}>
            Sustainable practices for a cleaner tomorrow
          </p>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "20px",
            // ONLY ADDED: mobile fallback
            "@media (max-width: 768px)": {
              gridTemplateColumns: "repeat(2, 1fr)"
            },
            "@media (max-width: 480px)": {
              gridTemplateColumns: "repeat(1, 1fr)"
            }
          }}>
            {initiatives.map((item, i) => (
              <div
                key={i}
                ref={(el) => { initiativeCardsRef.current[i] = el; }}
                style={{ 
                  padding: "20px", 
                  borderRadius: "16px", 
                  backgroundColor: "rgba(254,243,199,0.1)",
                  border: `1px solid ${item.color}40`,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "12px", 
                  backgroundColor: `${item.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px"
                }}>
                  <item.icon style={{ width: "22px", height: "22px", color: item.color }} />
                </div>
                
                <h3 style={{ fontSize: "clamp(0.85rem, 3.5vw, 0.95rem)", fontWeight: 700, color: "#fef3c7", marginBottom: "8px" }}>{item.title}</h3>
                
                <div style={{ 
                  width: "24px", 
                  height: "2px", 
                  backgroundColor: item.color, 
                  margin: "4px 0 10px",
                  borderRadius: "2px"
                }} />
                
                <p style={{ fontSize: "clamp(0.7rem, 3vw, 0.75rem)", lineHeight: 1.4, color: "#fde68a", flex: 1 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Tips - NO LAYOUT CHANGE, ONLY RESPONSIVE GRID */}
      <section 
        ref={tipsRef} 
        style={{ 
          padding: "60px 16px", 
          backgroundColor: "#fef3c7" 
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "clamp(1.3rem, 6vw, 1.5rem)", // ONLY ADDED: responsive font
            fontWeight: 700, 
            letterSpacing: "0.05em", 
            textTransform: "uppercase",
            marginBottom: "8px", 
            color: "#561C24"
          }}>
            How You Can Help
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            fontSize: "clamp(0.75rem, 3.5vw, 0.8rem)", // ONLY ADDED: responsive font
            marginBottom: "32px", 
            color: "#6D2932"
          }}>
            Small actions create big change
          </p>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: "12px",
            // ONLY ADDED: mobile fallback
            "@media (max-width: 640px)": {
              gridTemplateColumns: "repeat(1, 1fr)"
            }
          }}>
            {conservationTips.map((tip, i) => (
              <div
                key={i}
                ref={(el) => { tipItemsRef.current[i] = el; }}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px", 
                  padding: "14px 16px", 
                  borderRadius: "12px", 
                  backgroundColor: "rgba(86,28,36,0.08)",
                  borderLeft: `4px solid #${((i * 30) % 360).toString(16).padStart(6, '0')}`
                }}
              >
                <span
                  style={{ 
                    flexShrink: 0,
                    width: "28px", 
                    height: "28px", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "0.7rem", 
                    fontWeight: 700,
                    backgroundColor: "#561C24", 
                    color: "#fef3c7" 
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: "clamp(0.75rem, 3vw, 0.8rem)", lineHeight: 1.4, color: "#561C24", flex: 1 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section - NO LAYOUT CHANGE, ONLY RESPONSIVE GRID */}
      <section
        ref={transportRef}
        style={{
          padding: "60px 16px",
          backgroundColor: "#6D2932"
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "clamp(1.3rem, 6vw, 1.5rem)", // ONLY ADDED: responsive font
            fontWeight: 700, 
            letterSpacing: "0.05em", 
            textTransform: "uppercase",
            marginBottom: "8px", 
            color: "#fef3c7"
          }}>
            Transportation & Logistics
          </h2>
          
          <p style={{ 
            textAlign: "center", 
            fontSize: "clamp(0.75rem, 3.5vw, 0.8rem)", // ONLY ADDED: responsive font
            letterSpacing: "0.025em",
            marginBottom: "40px", 
            color: "#fde68a"
          }}>
            Safe, efficient, and eco-conscious delivery
          </p>

          {/* Truck + description - NO LAYOUT CHANGE */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "32px", 
            marginBottom: "40px" 
          }}>
            <div 
              ref={truckRef} 
              style={{ width: "100%", maxWidth: "280px" }}
            >
              <div style={{ 
                width: "100%", 
                borderRadius: "16px", 
                overflow: "hidden", 
                boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
                border: "3px solid rgba(245,158,11,0.3)"
              }}>
                <img
                  src={truckImg} // FIXED: now works with import
                  alt="Tolani Petroleum Transportation Truck"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            
            <div style={{ textAlign: "center", maxWidth: "600px" }}>
              <h3 style={{ 
                fontSize: "clamp(1rem, 4vw, 1.1rem)", // ONLY ADDED: responsive font
                fontWeight: 700, 
                marginBottom: "12px", 
                color: "#fef3c7"
              }}>
                Our Fleet, Your Trust
              </h3>
              
              <div style={{ width: "40px", height: "3px", backgroundColor: "#f59e0b", margin: "0 auto 16px" }} />
              
              <p style={{ 
                fontSize: "clamp(0.75rem, 3vw, 0.8rem)", // ONLY ADDED: responsive font
                lineHeight: 1.6, 
                color: "#fde68a"
              }}>
                Modern, eco-friendly fleet with real-time GPS monitoring and AI-powered route optimization 
                for minimal environmental impact.
              </p>
            </div>
          </div>

          {/* Transport cards - NO LAYOUT CHANGE, ONLY RESPONSIVE GRID */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "16px", 
            marginBottom: "40px",
            // ONLY ADDED: mobile fallback
            "@media (max-width: 768px)": {
              gridTemplateColumns: "repeat(2, 1fr)"
            },
            "@media (max-width: 480px)": {
              gridTemplateColumns: "repeat(1, 1fr)"
            }
          }}>
            {transportFeatures.map((feat, i) => (
              <div
                key={i}
                ref={(el) => { transportCardsRef.current[i] = el; }}
                style={{ 
                  padding: "20px", 
                  borderRadius: "16px", 
                  textAlign: "center", 
                  backgroundColor: "rgba(254,243,199,0.1)",
                  border: `1px solid ${feat.color}40`,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  minHeight: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) rotate(2deg)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${feat.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "12px", 
                  backgroundColor: `${feat.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px"
                }}>
                  <feat.icon style={{ width: "24px", height: "24px", color: feat.color }} />
                </div>
                
                <h3 style={{ fontSize: "clamp(0.85rem, 3vw, 0.9rem)", fontWeight: 700, color: "#fef3c7", marginBottom: "6px" }}>{feat.title}</h3>
                
                <div style={{ width: "20px", height: "2px", backgroundColor: feat.color, margin: "0 auto 8px", borderRadius: "2px" }} />
                
                <p style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.7rem)", lineHeight: 1.3, color: "#fde68a" }}>{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Fleet stats - NO LAYOUT CHANGE, ONLY RESPONSIVE GRID */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "12px",
            // ONLY ADDED: mobile fallback
            "@media (max-width: 640px)": {
              gridTemplateColumns: "repeat(2, 1fr)"
            }
          }}>
            {[
              { value: "200+", label: "Fleet Vehicles", color: "#f59e0b" },
              { value: "50K+", label: "Daily Capacity", color: "#10B981" },
              { value: "99.9%", label: "Safe Deliveries", color: "#3B82F6" },
              { value: "24/7", label: "GPS Monitored", color: "#8B5CF6" },
            ].map((s, i) => (
              <div key={i} style={{ 
                textAlign: "center", 
                padding: "16px 12px", 
                borderRadius: "12px", 
                backgroundColor: "rgba(254,243,199,0.1)",
                borderLeft: `4px solid ${s.color}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <p style={{ fontSize: "clamp(1.1rem, 4vw, 1.3rem)", fontWeight: 800, color: "#fef3c7", margin: "0" }}>{s.value}</p>
                <p style={{ fontSize: "clamp(0.6rem, 2.5vw, 0.65rem)", letterSpacing: "0.05em", textTransform: "uppercase", color: "#fde68a", marginTop: "4px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - NO LAYOUT CHANGE, ONLY TEXT SCALING */}
      <section style={{ 
        padding: "60px 16px", 
        textAlign: "center", 
        backgroundColor: "#fef3c7" 
      }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <Leaf style={{ width: "48px", height: "48px", margin: "0 auto 20px", color: "#561C24" }} />
          
          <h2 style={{ 
            fontSize: "clamp(1.3rem, 6vw, 1.5rem)", // ONLY ADDED: responsive font
            fontWeight: 700, 
            letterSpacing: "0.05em", 
            textTransform: "uppercase",
            marginBottom: "12px", 
            color: "#561C24"
          }}>
            Together for a Greener Tomorrow
          </h2>
          
          <p style={{ 
            fontSize: "clamp(0.75rem, 3.5vw, 0.8rem)", // ONLY ADDED: responsive font
            lineHeight: 1.6, 
            marginBottom: "24px", 
            color: "#6D2932"
          }}>
            Join us in our mission to create a cleaner, greener, and more sustainable future.
          </p>
          
          <a
            href="/"
            style={{ 
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "clamp(0.75rem, 3vw, 0.8rem)", // ONLY ADDED: responsive font
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              backgroundColor: "#561C24",
              color: "#fef3c7",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(86,28,36,0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(86,28,36,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(86,28,36,0.3)";
            }}
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default GreenEarth;