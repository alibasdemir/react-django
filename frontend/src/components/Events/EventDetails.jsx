import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function EventDetails() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/events/${eventId}`);
        if (response.ok) {
          const data = await response.json();
          setEvent(data);
        } else {
          throw new Error('Error fetching event');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots-class'
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }); 

  return (
    <div className="">
      <Header />
      <div>
        <div className="eventHeader">
          <h1>{event.name}</h1>
        </div>

        <Slider {...settings}>
      {event.eventImages.map((image, index) => (
        <div key={index}>
          <img
            style={{ width: "25vw", height: "25vw", margin: "auto" }}
            src={image.image}
            alt=""
          />
        </div>
      ))}
    </Slider>


        <div>
          <span>{event.location}</span>
          <span>Etkinlik Başlangıç tarihi: {event.start_date}</span>
          <span>Etkinlik Bitiş tarihi: {event.end_date}</span>
          <span>Bugünün Tarihi: {formattedDate}</span>
          <p><span className='font-semibold'>Etkinlik İsmi:</span> {event.name}</p>                  
          <p><span className='font-semibold'>Etkinlik Sahibi:</span> {event.owner}</p>
          <p><span className='font-semibold'>Açıklama:</span> {event.description}</p>
          <p><span className='font-semibold'>Etkinlik Türü:</span> {event.category.title}</p>
          {/* <p><span className='font-semibold'>Gösteri devam ediyor mu?:</span> {(formattedDate < event.end_date) ? "Evet" : "Hayır"}</p> */}
          <p><span className='font-semibold'>Konum:</span> {event.location}</p>
          <p><span className='font-semibold'>Konum URL:</span> 
          <iframe src={event.locationUrl} frameborder="0" style={{width: "500px", height: "500px"}}></iframe></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;
