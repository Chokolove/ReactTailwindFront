'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import slide1 from "@/assets/images/home/slide1.jpg";
import slide2 from "@/assets/images/home/slide2.jpg";
import slide3 from "@/assets/images/home/slide3.jpg";

const HeroBanner = () => {
  const pathname = usePathname();
  const images = [slide1, slide2, slide3]

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    console.log((currentSlide + 1) % images.length);

    setCurrentSlide((currentSlide + 1) % images.length);
  }

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  }

  return (
    <div className='w-full h-screen relative'>
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img.src})` }}
            className='flex-shrink-0 w-full h-full bg-cover bg-center'
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className='relative h-full z-10 flex flex-col justify-center items-center'>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <h1 className='text-7xl text-white font-krona font-bold'>CARBON Y MAR</h1>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ❯
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeroBanner