import React, { useRef } from "react";
import SlickSlider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/65758d5165254c9a931eb0f23782cffc.webp",
    title: "Altı Üstü Stand Up Gecesi",
    caption:
      "Aralarında BKM açık mikrofon komedyenlerininde bulunduğu 4 komedyenin birbirinden farklı hikayelerine şahitlik edeceğiniz eğlence dolu Stand up gecesi!",
  },
  {
    image:
      "https://yildirimgazetesicom.teimg.com/crop/1280x720/yildirimgazetesi-com/uploads/2023/08/agency/iha/jekyll-hyde-muzikaline-bursada-yogun-ilgi.jpg",
    title: "Jekyll&Hyde",
    caption:
      "İyi ve kötü aynı bedende, birbirine karşı acımasız bir savaş halinde. Ama her şeyin bir sonu vardır.",
  },
  {
    image:
      "https://staticg.sportskeeda.com/editor/2023/07/419f7-16896018885746-1920.jpg?w=840",
    title: "Red Bull Campus Clutch Dünya Finali",
    caption:
      "VALORANT turnuvası, Red Bull Campus Clutch Dünya Finali'nde İstanbul’da karşı karşıya geliyor! ",
  },
  {
    image: "https://firsat.me/img/big1024/67134_6538fb9ae26c5_1920x1080.webp",
    title: "Dracula Müzikali",
    caption:
      "Bram Stoker’ın klasik eseri DRACULA sahne sanatlarıyla bir araya geliyor.",
  },
  {
    image:
      "https://cdn.kayiprihtim.com/wp-content/uploads/2023/06/Meksika-Acmazi-Film-Oluyor.jpg",
    title: "Meksika Açmazı",
    caption:
      "İstanbul Komedi Festivali, 6. Yılında Maximum Kart Ana Sponsorluğunda!",
  },
  {
    image:
      "https://tiyatronline.com/isDosyalar/2019/10/20/hakikat-elbet-bir-gun-d_EtxgV47bSf.jpg",
    title: "Hakikat Elbet Bir Gün Oyunu",
    caption:
      "Berkay Ateş'e 25.Cevdet Kudret Edebiyat Ödülü'nü kazandıran, 'Hakikat, Elbet Bir Gün' oyunuyla geliyor!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <></>, // burada çıkan default ok işaretlerini gizledik
  nextArrow: <></>,
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
    <div className="flex items-center justify-center py-10 bg-gray-100 h-screen">
      <div className="relative w-full max-w-screen-lg">
        <SlickSlider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="p-2 relative">
              <Link to="/">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-96 object-fill rounded-xl border-2 border-indigo-200"
                />
              </Link>
              <div className="absolute bottom-2 left-2 right-2 bg-[#111827] bg-opacity-70 text-white p-2 rounded-b-xl">
                <p className="text-left font-bold">{slide.title}</p>
                <p className="text-left text-sm text-gray-300 truncate">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
      <div className="absolute left-[140px] top-2/3 transform -translate-y-1/2">
        <button
          className="bg-purple-300 text-gray-700 p-2 m-2 rounded-full transition-transform transform hover:scale-110 hover:bg-fuchsia-600 hover:text-white animate-bounce lg:block hidden"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute right-[140px] top-2/3 transform -translate-y-1/2">
        <button
          className="bg-purple-300 text-gray-700 p-2 m-2 rounded-full transition-transform transform hover:scale-110 hover:bg-fuchsia-600 hover:text-white animate-bounce lg:block hidden"
          onClick={goToNextSlide}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
