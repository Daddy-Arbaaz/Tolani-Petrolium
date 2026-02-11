import { useRef, useCallback } from "react";
import gsap from "gsap";

interface CorporateCardProps {
  title: string;
  description: string;
  image: string;
}

const CorporateCard = ({ title, description, image }: CorporateCardProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tl.to(imgRef.current, { opacity: 0.2, duration: 0.4, ease: "power2.out" }, 0)
      .to(overlayRef.current, { opacity: 0.7, duration: 0.4, ease: "power2.out" }, 0)
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0.05
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.35, ease: "power2.out" },
        0.15
      );
    tlRef.current = tl;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tl.to(lineRef.current, { scaleX: 0, opacity: 0, duration: 0.25, ease: "power2.in" }, 0)
      .to(textRef.current, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" }, 0)
      .to(overlayRef.current, { opacity: 0, duration: 0.35, ease: "power2.in" }, 0.05)
      .to(imgRef.current, { opacity: 1, duration: 0.4, ease: "power2.in" }, 0.05);
    tlRef.current = tl;
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded cursor-pointer aspect-[4/3] shadow-lg border border-border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-primary opacity-0"
        style={{ mixBlendMode: "multiply" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center px-4 opacity-0" style={{ transform: "translateY(20px)" }}>
          <h3 className="text-primary-foreground font-semibold text-lg md:text-xl leading-tight tracking-wide">
            {title}
          </h3>
          <div
            ref={lineRef}
            className="h-[3px] bg-accent w-20 mx-auto mt-3 origin-left"
            style={{ transform: "scaleX(0)", opacity: 0 }}
          />
          <p className="text-primary-foreground/70 text-xs md:text-sm mt-3 max-w-[220px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateCard;
