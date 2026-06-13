import "./HeroSlider.css";
import { useState, useEffect } from "react";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/header1.jpg",
    "/images/header2.jpg",
    "/images/header3.jpg",
    "/images/header4.jpg",
    "/images/header5.jpg",
    "/images/header6.jpg",
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      {/* Navigation Arrows */}
      <button className="control-prev" onClick={prevSlide}>
        &#129144;
      </button>
      <button className="control-next" onClick={nextSlide}>
        &#129146;
      </button>

      {/* Slides */}
      <div className="slider-images">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`header-slider ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
