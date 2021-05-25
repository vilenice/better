
import React, { useState, useEffect, useCallback, useRef } from "react";
import picture from './img.js';
import './App.css';
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";

function PageFAQ() {
  const swiperRef = useRef(null);

  const [currentIndex, updateCurrentIndex] = useState(0);

  const params = {
    initialSlide: 0,
    spaceBetween: 30,
    loop: true,
    autoplay: false
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const renderItem = useCallback(
    (item, index) => (
      <div key={index} className="flex flex-col w-full items-center justify-center swiper-slide" >
        <div className="text-4xl leading-tight mx-10 sm:mx-0">{item.problem}</div>
        <div className="text-2xl leading-8 mx-10 sm:mx-0">{item.answer}</div>
      </div>
    ),
    []
  );

  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  const dataForFAQ = [
    {
      problem: "1. What is the meaning of the name and logo of the Better project?",
      answer: `Better is a homonym for bettor, and at the same time better means project innovation and transcendence. The logo comes from Spock's gesture in the famous science fiction movie Star Trek, also known as "Spock-hand", which means "Live long and prosper".`
    },
    {
      problem: "2. What is the meaning of the name and logo of the Better project?",
      answer: `Better is a homonym for bettor, and at the same time better means project innovation and transcendence. The logo comes from Spock's gesture in the famous science fiction movie Star Trek, also known as "Spock-hand", which means "Live long and prosper".`
    },
    {
      problem: "3. What is the meaning of the name and logo of the Better project?",
      answer: `Better is a homonym for bettor, and at the same time better means project innovation and transcendence. The logo comes from Spock's gesture in the famous science fiction movie Star Trek, also known as "Spock-hand", which means "Live long and prosper".`
    },
    {
      problem: "4. What is the meaning of the name and logo of the Better project?",
      answer: `Better is a homonym for bettor, and at the same time better means project innovation and transcendence. The logo comes from Spock's gesture in the famous science fiction movie Star Trek, also known as "Spock-hand", which means "Live long and prosper".`
    },
  ];
  return (
    <div className="flex flex-col w-full" >
      <div className="flex items-start justify-center text-white" >
        <img class="hidden sm:flex flex-none w-10 h-10 mt-28 mr-28 opacity-75 hover:opacity-100" src={picture.arrow} onClick={goPrev} />
        <div class="flex w-full sm:w-120 md:w-160 lg:w-180 xl:w-224 mx-8 sm:mx-0">
          <Swiper {...params} ref={swiperRef}>
            {dataForFAQ.map(renderItem)}
          </Swiper>
        </div>
        <img class="hidden sm:flex flex-none w-10 h-10 mt-28 ml-28 transform rotate-180 opacity-75 hover:opacity-100" src={picture.arrow} onClick={goNext} />
      </div>
      <div className="flex flex-nowrap items-center text-center mx-auto my-8 py-4 px-12">
        {dataForFAQ.map((item, index) => {
          return <div key={index} className={`h-2 w-2 rounded-lg bg-white mx-2.5 ${index === currentIndex ? "opacity-100" : "opacity-30"}`}></div>
        })}
      </div>
    </div>
  )
};

export default PageFAQ;
