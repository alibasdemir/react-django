import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider/Slider';
import Events from '../components/Events/Events';
import ShareModal from '../components/Events/ShareModal'
import photo1 from '../components/images/photo1.jpg';
import photo3 from '../components/images/photo3.jpg';

const Home = () => {
  return (
    <div>
      <Header />

      <img src={photo3} alt="Event 1" className="w-screen pt-14 pl-[64px] pr-[64px] pb-12 " />
      <Slider />
      <Events />
      <ShareModal />
      <img src={photo1} alt="Event 1" className="w-screen pt-12 pl-[64px] pr-[64px] pb-12" />
      <Footer />
    </div>
  );
}
export default Home; 