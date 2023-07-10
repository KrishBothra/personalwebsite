import labImg from "./Assets/pexels-rodolfo-clix-1366942.jpg";
import financeImg from "./Assets/pexels-pixabay-265087.jpg";
import chicagoImg from "./Assets/pexels-bhargava-marripati-1569012.jpg";


import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import indiaHubIMG from './Assets/indiaHub.png'

import { block } from "million";

const ExampleBlock = block(function Example() {
  
  const picslides = [
    { 
      url: "data:image/png;base64,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"
    },
  ];
  const personslides = [
    {
      name: "National India Hub",
      content: "One of our projects was in partnership with National India Hub, a community oriented organization which aims to serve south-asian communities throughout the country. Their work not only uplifts local societies in meaningful ways, but also serves as a reminder that humanity is more than what we make it out to be. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picslides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === picslides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  return (





    <div className="flex flex-col lg:flex-row bg-gray-300">
      <div className="xl:w-[870px] xl:h-[780px] w-screen h-[500px] m-2 py-4 px-4 xl:py-16 relative group">
        <div
          style={{ backgroundImage: `url(${picslides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {picslides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[780px] py-20 px-4 max-w-lg  text-black">
      <div className="text-black font-semibold text-3xl">
            {personslides[currentIndex].name}
          </div>

          <div className="text-black py-1 text-2xl">
            {personslides[currentIndex].content}
          </div>

          <div className="py-1">
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-cyan-600 rounded-full">Non-profit</span>
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-teal-600 rounded-full">Cultural</span>
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-purple-600 rounded-full">Volunteering</span>

              <div className="py-8">
              <p class="text-gray-700"><a href="https://www.indiahub.org" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Check out the work
              <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a></p>
              </div>
          </div>
        
        
      </div>

    
    </div>
  );
});

export default ExampleBlock;

