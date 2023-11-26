import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider/Slider";
import Events from "../components/Events/Events";
import ShareModal from "../components/Events/ShareModal";
import photo1 from "../components/images/photo1.jpg";
import photo3 from "../components/images/photo3.jpg";
import FinishedEvents from "../components/Events/FinishedEvents";
import axios from "axios";

const Home = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/events")
      .then((response) => {
        console.log("Tüm etkinlikler:", response.data);

        const latestEvents = response.data.slice(0, 8);
        console.log("Sınırlı etkinlikler:", latestEvents);

        setEventData(latestEvents);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <img
        src={photo3}
        alt="Event 1"
        className="w-full md:w-2/3 lg:w-1/2 xl:w-screen mx-auto pt-14 lg:px-16 px-3 pb-12"
      />
      <FinishedEvents />
      <Events events={eventData} />
      <ShareModal />
      <img
        src={photo1}
        alt="Event 1"
        className="w-full md:w-2/3 lg:w-1/2 xl:w-screen mx-auto pt-14 lg:px-16 px-3 pb-12"
      />
      <Footer />
    </div>
  );
};
export default Home;
