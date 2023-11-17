import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";

function EventDetails() {
    const [events, setEvents] = useState([]);
    const param = useParams()
    useEffect(() => {
      fetch(`http://localhost:8000/events/`)
        .then((response) => response.json())
        .then((data) => setEvents(data.filter(item => item.id === Number(param.id))));
    }, []);
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('tr-TR', options); // Türkçe tarih formatı örneği

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <>
    <div className="">
        <Link to="/events"><h1>Etkinliklere geri dön</h1></Link>
        <ul>
          {events.map(event => (
            <div>
                <div className="eventHeader">
                  <h1>{event.name}</h1>
                </div>
                <div className="eventHeader-details py-5 w-2/3 flex justify-between	" 
                style={{fontSize: "calc(0.8rem + 0.5vw)"}}>
                  <span>{event.location}</span>
                  <span>Etkinlik Başlangıç tarihi: {event.start_date}</span>
                  <span>Etkinlik Bitiş tarihi:{event.end_date}</span>
                  <span>Bugünün Tarihi: {formattedDate}</span>
                </div>
                <div style={{}}>
                  <Slider {...settings}>
                        {event.eventImages.map((image) => (                      
                            <div style={{}}>
                              <img style={{width: "25vw", height: "25vw", margin: "auto"}}
                              className={``} src={image.image} alt="" />
                            </div>
                          ))}     
                  </Slider>
                </div>
                <div key={event.id} className="py-5"
                style={{fontSize: "calc(0.8rem + 0.5vw)"}}>
                    <div className='flex justify-between pb-5'>
                      <h2>Etkinlik Detayı</h2>
                      <button>Paylaş</button> 
                    </div>
                  <p><span className='font-semibold'>Etkinlik İsmi:</span> {event.name}</p>                  
                  <p><span className='font-semibold'>Etkinlik Sahibi:</span> {event.owner}</p>
                  <p><span className='font-semibold'>Açıklama:</span> {event.description}</p>
                  <p><span className='font-semibold'>Etkinlik Türü:</span> {event.category.title}</p>
                  <p><span className='font-semibold'>Gösteri devam ediyor mu?:</span> {(formattedDate < event.end_date) ? "Evet" : "Hayır"}</p>
                  <p><span className='font-semibold'>Konum:</span> {event.location}</p>
                  <p><span className='font-semibold'>Konum URL:</span> <iframe 
                  src={event.locationUrl} frameborder="0"
                  style={{width: "500px", height: "500px"}}></iframe></p>
                  
                </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default EventDetails