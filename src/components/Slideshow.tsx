import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images directly
import slide1 from '@/assets/hero-refinery.jpg';
import slide2 from '@/assets/hero-slide2.jpeg';
import slide3 from '@/assets/hero-slide4.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  path: string; // Added path property for navigation
}

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const slides: Slide[] = [
    { 
      id: 1, 
      image: slide1, 
      title: 'Industrial Oils & Lubricants',
      description: 'Precision-engineered petroleum products for heavy machinery and industrial applications.',
      buttonText: 'Explore Products',
      path: '/products' // Redirect to Products page
    },
    { 
      id: 2, 
      image: slide2, 
      title: 'Premium Grade Specialty Oils',
      description: 'Custom-formulated solutions for transformers, compressors, and hydraulic systems.',
      buttonText: 'Learn More',
      path: '/about' // Redirect to About page
    },
    { 
      id: 3, 
      image: slide3, 
      title: 'Sustainable Eco-Safe Solutions',
      description: 'Environmentally responsible products that deliver performance without compromise.',
      buttonText: 'Discover More',
      path: '/green-earth' // Redirect to Green Earth page
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 800);
    }
  };

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="slideshow">
      {/* Full Width Images */}
      <div className="images-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`image-wrapper ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="background-image"
            />
            <div className="overlay" />
          </div>
        ))}
      </div>

      {/* Centered Content Overlay */}
      <div className="content-container">
        <div className="content">
          <span className="since-badge">Since 1970 · ISO 9001:2015</span>
          <h1 className="title">
            {slides[currentSlide].title}
          </h1>
          <p className="description">
            {slides[currentSlide].description}
          </p>
          <button 
            className="button"
            onClick={() => handleButtonClick(slides[currentSlide].path)}
          >
            {slides[currentSlide].buttonText}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .slideshow {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        /* Full Width Images - No white space */
        .images-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }

        .image-wrapper.active {
          opacity: 1;
          z-index: 1;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.05);
          transition: transform 8s ease;
        }

        .image-wrapper.active .background-image {
          transform: scale(1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        /* Centered Content - Overlay on top of full width images */
        .content-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          pointer-events: none;
        }

        .content {
          max-width: 800px;
          padding: 0 24px;
          text-align: center;
          pointer-events: auto;
          animation: fadeUp 0.8s ease forwards;
          color: white;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .since-badge {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #fbbf24;
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(251, 191, 36, 0.5);
        }

        .title {
          font-size: 56px;
          font-weight: 700;
          color: white;
          margin: 0 0 20px 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 40px 0;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fbbf24;
          color: #000;
          border: none;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
        }

        .button:hover {
          background: #eab308;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(251, 191, 36, 0.3);
        }

        .arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .button:hover .arrow {
          transform: translateX(5px);
        }

        /* Indicators - Centered at bottom */
        .indicators {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .indicator.active {
          background: #fbbf24;
          border-color: #fbbf24;
          transform: scale(1.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 40px;
          }
          
          .description {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
          }
          
          .since-badge {
            font-size: 12px;
            letter-spacing: 2px;
          }
          
          .button {
            padding: 14px 32px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 32px;
          }
          
          .description {
            font-size: 14px;
            margin-bottom: 30px;
          }
          
          .content {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Slideshow;