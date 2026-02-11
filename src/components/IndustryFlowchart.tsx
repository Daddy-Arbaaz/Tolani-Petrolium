import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

Placeholder images - uncomment originals when you have them locally
import tankerImg from "@/assets/tanker.png";
import rollingMillImg from "@/assets/industry-rolling-mill.jpg";
import steelPlantImg from "@/assets/industry-steel-plant.jpg";
import textileImg from "@/assets/industry-textile.jpg";
import sugarPlantImg from "@/assets/industry-sugar-plant.jpg";
import rubberProductsImg from "@/assets/industry-rubber-products.jpg";
import rubberPlantImg from "@/assets/industry-rubber-plant.jpg";
import chemicalPlantImg from "@/assets/industry-chemical-plant.jpg";
import engineeringImg from "@/assets/industry-engineering.jpg";

// import barrelCenter from "@/assets/barrel-center.png";
// import rollingMillImg from "@/assets/industry-rolling-mill.jpg";
// import steelPlantImg from "@/assets/industry-steel-plant.jpg";
// import textileImg from "@/assets/industry-textile.jpg";
// import sugarPlantImg from "@/assets/industry-sugar-plant.jpg";
// import rubberProductsImg from "@/assets/industry-rubber-products.jpg";
// import rubberPlantImg from "@/assets/industry-rubber-plant.jpg";
// import chemicalPlantImg from "@/assets/industry-chemical-plant.jpg";
// import engineeringImg from "@/assets/industry-engineering.jpg";

const industries = [
  { name: "Engineering Unit", desc: "Precision machinery & fabrication", img: engineeringImg, color: "#E8D8C4" },
  { name: "Rolling Mill", desc: "Heavy-duty metal rolling operations", img: rollingMillImg, color: "#C7B7A3" },
  { name: "Steel Plant", desc: "High-temperature steel manufacturing", img: steelPlantImg, color: "#E8D8C4" },
  { name: "Textile", desc: "High-speed textile processing units", img: textileImg, color: "#C7B7A3" },
  { name: "Sugar Plant", desc: "Industrial sugar refining systems", img: sugarPlantImg, color: "#E8D8C4" },
  { name: "Rubber Products", desc: "Tyres & molded rubber goods", img: rubberProductsImg, color: "#C7B7A3" },
  { name: "Rubber Plant", desc: "Natural rubber processing plants", img: rubberPlantImg, color: "#E8D8C4" },
  { name: "Chemical Plant", desc: "Petrochemical & industrial compounds", img: chemicalPlantImg, color: "#C7B7A3" },
];

// Desktop: radial layout positions (percentage from center)
const desktopPositions = [
  { x: 20, y: 15 },  // Engineering Unit - top left
  { x: 50, y: 8 },   // Rolling Mill - top center
  { x: 80, y: 15 },  // Steel Plant - top right
  { x: 88, y: 50 },  // Textile - right
  { x: 80, y: 85 },  // Sugar Plant - bottom right
  { x: 50, y: 92 },  // Rubber Products - bottom center
  { x: 20, y: 85 },  // Rubber Plant - bottom left
  { x: 12, y: 50 },  // Chemical Plant - left
];

const IndustryFlowchart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <section ref={containerRef} className="py-16 px-6" style={{ background: "#0A1F44" }}>
        {/* Mobile: Title + barrel + grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-black text-white mb-2">
            INDUSTRIES WE <span style={{ color: "#E8D8C4" }}>SERVE</span>
          </h2>
          <p style={{ color: "#C7B7A3" }} className="text-sm">
            Powering Global Industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <img src={barrelCenter} alt="Tolani Petroleum Barrel" className="w-40 h-auto" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-full overflow-hidden border-2 mb-2 group relative cursor-pointer"
                style={{ borderColor: item.color }}
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <span className="text-white text-[10px] leading-tight">{item.desc}</span>
                </div>
              </div>
              <span className="text-white text-xs font-bold">{item.name.toUpperCase()}</span>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: radial flowchart
  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ background: "#0A1F44", height: "100vh", minHeight: "700px" }}
    >
      {/* Left Panel */}
      <div className="absolute left-0 top-0 bottom-0 w-[30%] flex flex-col justify-center px-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            TOLANI<br />PETROLEUM
          </h2>
          <p style={{ color: "#E8D8C4" }} className="text-lg mb-6">
            Powering Global Industry
          </p>
          <div className="w-64 h-1 mb-6" style={{ background: "#E8D8C4" }} />
          <p style={{ color: "#C7B7A3" }} className="text-sm leading-relaxed">
            Petroleum is the lifeblood of modern manufacturing industries.
            From high-performance lubricants to critical process fuels,
            Tolani Petroleum ensures operational excellence, reliability,
            and efficiency across global industrial sectors.
          </p>
        </motion.div>
      </div>

      {/* Stage - right side with radial layout */}
      <div className="absolute right-0 top-0 bottom-0 w-[70%]">
        {/* SVG Lines */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ zIndex: 1 }}>
          {industries.map((item, i) => {
            const pos = desktopPositions[i];
            return (
              <motion.line
                key={i}
                x1="50%" y1="50%"
                x2={`${pos.x}%`} y2={`${pos.y}%`}
                stroke={item.color}
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              />
            );
          })}
        </svg>

        {/* Center Barrel */}
        <motion.div
          className="absolute z-10"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <img
            src={barrelCenter}
            alt="Tolani Petroleum Barrel"
            className="w-48 lg:w-64 h-auto hover:scale-105 transition-transform duration-400 cursor-pointer"
          />
        </motion.div>

        {/* Industry Nodes */}
        {industries.map((item, i) => {
          const pos = desktopPositions[i];
          return (
            <motion.div
              key={item.name}
              className="absolute z-20"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.4, ease: "backOut" }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-[3px] cursor-pointer group relative"
                  style={{ borderColor: item.color }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <span className="text-white text-xs leading-tight">{item.desc}</span>
                  </div>
                </div>
                <span className="text-white text-xs font-bold mt-2 tracking-wide">
                  {item.name.toUpperCase()}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustryFlowchart;
