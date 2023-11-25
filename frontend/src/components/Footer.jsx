import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube, AiFillGithub } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080243] to-indigo-900 text-white lg:py-10 lg:px-10 bottom-0 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between mb-10 mx-4 md:mx-24 space-y-5 md:space-y-0 md:space-x-10">
        <div className="md:w-1/5 flex flex-col justify-center items-center pr-10 mt-4">
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-3xl font-bold italic text-white mb-3 flex justify-center items-center no-underline"
          >
            <span style={{ color: "#ff4500" }}>TICKET</span>
            <span style={{ color: "#a5b4fc", fontSize: "40px" }}>X</span>
          </Link>

          <div className="w-20 h-px bg-blue-400 mb-3"></div>
          <p className="text-sm text-center text-gray-200">
            <em>
              Lorem ipsum dolor sit, amet conse ctetu radipisicing elit. Iste,
              repellendus!
            </em>
          </p>
        </div>

        <div className="md:w-1/7 pt-5 lg:block hidden">
          <h3 className="text-l font-bold mb-3 pb-2">Hakkımızda</h3>
          <ul>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700 "
              >
                Biz Kimiz
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700"
              >
                Kurum Politikamız
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/7 pt-5 lg:block hidden">
          <h3 className="text-l font-bold mb-3 pb-2">Bağlantılar</h3>
          <ul>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700"
              >
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700"
              >
                Etkinlikler
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700"
              >
                Biletler
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-slate-300 text-sm mb-1 no-underline hover:underline hover:text-purple-700"
              >
                Yardım/SSS
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/7 pt-5 lg:block hidden">
          <h3 className="text-l font-bold mb-3 pb-2">İletişim</h3>
          <address className="text-slate-300 text-sm ">
            <p>Adres: 1234 Sokak No: 5</p>
            <p>
              Telefon:{" "}
              <Link href="tel:(123) 456-7890" className="text-purple-500">
                {" "}
                (123) 456-7890
              </Link>
            </p>
            <p>
              E-posta:{" "}
              <Link href="mailto:info@example.com" className="text-purple-500">
                info@example.com
              </Link>
            </p>
          </address>
        </div>

        <div className="md:w-1/5">
          <div className="flex flex-row mt-10">
            <h3 className="text-gray-200 mt-2 font-bold text-l mb-5 lg:block hidden">
              Bizi Takip Edin
            </h3>
          </div>
          <div className="flex flex-row justify-center space-x-4 mx-auto max-w-xs md:max-w-full">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#3b5998] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link href="#">
                  <FaFacebookF className=" w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#E1306C] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link href="#">
                  <BsInstagram className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#bb0000] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link href="#">
                  <AiOutlineYoutube className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-700 rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link href="#">
                  <RiTwitterXFill className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#2ebd59] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link href="#">
                  <BsSpotify className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#24292e] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <Link
                  href="https://github.com/FakirHerif/react-django"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-blue-800"></div>
      <div className="flex flex-col md:flex-row items-center pt-5 mx-4 md:mx-24 text-slate-300 text-sm md:space-y-0">
        <p
          className="hover:underline hover:text-purple-700"
          style={{ cursor: "pointer" }}
        >
          Kullanım Şartları
        </p>
        <div className="md:ml-5"></div>
        <p
          className="hover:underline hover:text-purple-700"
          style={{ cursor: "pointer" }}
        >
          Gizlilik politikası
        </p>
        <div className="md:ml-5"></div>
        <p className="md:ml-auto">
          ©Copyright 2023{" "}
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-sm font-bold italic text-white mb-3 no-underline"
          >
            <span style={{ color: "#ff4500" }}>TICKET</span>
            <span style={{ color: "#a5b4fc", fontSize: "16px" }}>X</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
