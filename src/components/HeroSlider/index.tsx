"use client";

import { useEffect, useState } from "react";
import slide1 from "@/assets/images/home/slide1.jpg";
import slide2 from "@/assets/images/home/slide2.jpg";
import slide3 from "@/assets/images/home/slide3.jpg";
import { usePathname } from "next/navigation";

const HeroBanner = () => {
  const images = [slide1, slide2, slide3];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const pathname = usePathname();

  const handleNext = () => {
    setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((currentSlideIndex - 1 + images.length) % images.length);
  };

  const slideIntervalTime = 5000

  useEffect(() => {
    const autoSlide = setInterval(() => {handleNext()}, slideIntervalTime);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className={`w-full ${pathname === "/" ? "h-screen" : "h-72"} relative overflow-hidden`}>
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img.src})` }}
            className="flex-shrink-0 w-full h-screen bg-cover bg-center"
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white">
        <h1 className="text-7xl font-krona font-bold text-center uppercase">Ocean & Flame</h1>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`w-4 h-4 rounded-full ${currentSlideIndex === index ? "bg-white" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20"
        >
          <i className="ri-arrow-left-s-line bg-black bg-opacity-50 text-white p-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
        >
          <i className="ri-arrow-right-s-line bg-black bg-opacity-50 text-white p-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
