'use client';

import { useState } from 'react';
import slide1 from "@/assets/images/home/slide1.jpg";
import slide2 from "@/assets/images/home/slide2.jpg";
import slide3 from "@/assets/images/home/slide3.jpg";

const HeroBanner = () => {
  const images = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className='w-full h-screen relative overflow-hidden'>
      {/* Image Slider */}
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img.src})` }}
            className='flex-shrink-0 w-full h-screen bg-cover bg-center'
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center z-20 text-white'>
        <h1 className='text-7xl font-krona font-bold text-center'>CARBON Y MAR</h1>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
