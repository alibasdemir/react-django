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
// bg-gray-100 border border-gray-200//
  return (
    <div className="pl-[64px] pr-[64px] pt-9 pb-9 mt-1 ">
    <div className="h-screen md:p-20 lg:pr-20 pl-20 pt-10 pb-0 relative bg-white border rounded-md border-slate-300 overflow-hidden">
      <SlickSlider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2 relative  ">
            <Link to="/">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96  object-cover rounded-xl border-2 border-indigo-200"
              />
            </Link>
            <div className="absolute bottom-2 left-2 right-2 bg-[#111827] bg-opacity-50 text-white p-2 rounded-b-xl ">
              <p className="text-left font-semibold">{slide.title}</p>
              <p className="text-left">{slide.caption}</p>
            </div>
          </div>
        ))}
      </SlickSlider>
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 ">
        <button
          className="bg-purple-300 text-gray-700 p-2 m-2 rounded-full transition-transform transform hover:scale-110 hover:bg-fuchsia-600 hover:text-white animate-bounce"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft className="text-2xl bg-" />
        </button>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-purple-300 text-gray-700 p-2 m-2 rounded-full transition-transform transform hover:scale-110 hover:bg-fuchsia-600 hover:text-white animate-bounce" 
          onClick={goToNextSlide}
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  </div>
  );
};

export default Slider;