import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube, AiFillGithub } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsSpotify } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <footer className="bg-[#080243] to-indigo-900 text-white py-6 bottom-0">
      <div className="flex justify-between mb-10 mx-24">
        <div className="w-1/5 flex flex-col justify-center items-center pr-10">
          
          <Link to="/" onClick={scrollToTop} className="text-3xl font-bold italic text-white mb-3 flex justify-center items-center">
            <span style={{ color: "#ff4500" }}>TICKET</span>
            <span style={{ color: "#a5b4fc", fontSize: "40px" }}>X</span>
          </Link>

          <div className="w-20 h-px bg-blue-400 mb-3"></div>
          <p className='text-sm text-center text-gray-200'><em>Lorem ipsum dolor sit, amet conse ctetu radipisicing elit. Iste, repellendus!</em></p>
        </div>

        <div className="w-1/7 pt-5">
          <h3 className="text-l font-bold mb-3 pb-2">Hakkımızda</h3>
          <ul>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Biz Kimiz</a></li>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Kurum Politikamız</a></li>
          </ul>
        </div>

        <div className="w-1/7 pt-5">
          <h3 className="text-l font-bold mb-3 pb-2">Bağlantılar</h3>
          <ul>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Anasayfa</a></li>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Etkinlikler</a></li>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Biletler</a></li>
            <li><a href="#" className='text-slate-300 text-sm mb-1 hover:underline hover:text-purple-700'>Yardım/SSS</a></li>
          </ul>
        </div>

        <div className="w-1/7 pt-5">
          <h3 className="text-l font-bold mb-3 pb-2">İletişim</h3>
          <address className="text-slate-300 text-sm mb-2">
            <p>Adres: 1234 Sokak No: 5</p>
            <p>Telefon: <a href="tel:(123) 456-7890" className="text-purple-500"> (123) 456-7890</a></p>
            <p>E-posta: <a href="mailto:info@example.com" className="text-purple-500">info@example.com</a></p>
          </address>
        </div>

        <div className="w-1/5">
          <div className='flex flex-row'>
            <h3 className="text-gray-200 mt-2 font-bold text-l mb-5">Bizi Takip Edin</h3>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#3b5998] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="#"><FaFacebookF className=" w-6 h-6 text-white" /></a>
              </div>
            </div>
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#E1306C] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="#"><BsInstagram className="w-6 h-6 text-white" /></a>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#bb0000] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="#"><AiOutlineYoutube className="w-6 h-6 text-white" /></a>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-700 rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="#"><RiTwitterXFill className="w-6 h-6 text-white" /></a>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#2ebd59] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="#"><BsSpotify className="w-6 h-6 text-white" /></a>
              </div>
            </div>

            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center bg-[#24292e] rounded-full transform transition-transform ease-in-out hover:scale-110 hover:shadow-lg">
                <a href="https://github.com/FakirHerif/react-django" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-px bg-blue-800'></div>
      <div className='flex items-center pt-5 ml-20 mr-20 text-slate-300 text-sm'>
        <p className='hover:underline hover:text-purple-700' style={{ cursor: 'pointer' }}>Kullanım Şartları</p>
        <div className='ml-5'></div>
        <p className='hover:underline hover:text-purple-700' style={{ cursor: 'pointer' }}>Gizlilik politikası</p>
        <div className='ml-5'></div>
        <p className=' ml-auto'>©Copyright 2023 TICKET <b>X</b></p>
      </div>
    </footer>
  );
}

export default Footer;