import React, { useRef } from "react";
import SlickSlider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title - Title",
    caption: "Caption for Slide 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556906361-853d90896071?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title - Title",
    caption: "Caption for Slide 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556906360-21ecb6d73117?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title - Title",
    caption: "Caption for Slide 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title - Title",
    caption: "Caption for Slide 4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609103254482-dc7beedc47bf?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title - Title",
    caption: "Caption for Slide 5",
  },
  // Add more slides as needed
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider = () => {
  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="p-10 h-screen md:p-20 lg:p-40 relative">
      <SlickSlider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2 relative">
            <Link to="/">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-xl"
              />
            </Link>
            <div className="absolute bottom-2 left-2 right-2 bg-[#111827] bg-opacity-50 text-white p-2 rounded-b-xl">
              <p className="text-left font-semibold">{slide.title}</p>
              <p className="text-left">{slide.caption}</p>
            </div>
          </div>
        ))}
      </SlickSlider>
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-white text-gray-700 p-2 rounded-full"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-white text-gray-700 p-2 rounded-full"
          onClick={goToNextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
