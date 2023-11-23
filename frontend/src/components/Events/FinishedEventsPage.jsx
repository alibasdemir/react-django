import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";



const FinishedEventsPage = () => {
  const [events, setEvents] = useState([]);
  const targetDate = new Date('2023-12-25'); // Hedef tarih: 25 Aralık 2023
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/events/')
      .then(response => {
        const currentDate = new Date();
        const filteredEvents = response.data.filter(event => {
          const endDate = new Date(event.end_date);
          // Etkinlik bitiş tarihi, hedef tarihten küçük ve etkinlik aktifse
          return endDate < currentDate && endDate < targetDate;
        });

        filteredEvents.sort((a, b) => a.id - b.id);

        setEvents(filteredEvents);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className='bg-gray-100 px-40 py-20'>
        <div className='bg-white px-20 py-10 rounded-2xl' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>
          <div className='pb-8 flex flex-row items-center'>
          <Link to="/" className=' no-underline  hover:scale-105 '>
              <BiSolidHome className='text-2xl mr-1 mb-2 text-rose-500 hover:text-rose-500' />
            </Link>
            <RiArrowRightSLine className='text-2xl  text-indigo-500' />
            <span className='text-indigo-500  no-underline'>Etkinlik</span>
            <RiArrowRightSLine className='text-2xl  text-indigo-500' /><span className='text-rose-500 text-lg font-bold '>Süresi Geçen Etkinlikler</span>
          </div>

          <div>
            <div className=''>
              {events.map(event => (
                <div key={event.id} className='mb-4 flex flex-row border border-gray-700 p-3 rounded-2xl space-x-4 justify-between ' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>
                  <div className='flex flex-row space-x-8'>
                    <Link to={`/event/${event.id}`}>
                      {event.eventImages && event.eventImages.length > 0 && (
                        <div
                          style={{
                            width: '120px',
                            height: '120px',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={event.eventImages[0].image}
                            alt={event.category.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                            className="rounded-2xl"
                          />
                        </div>
                      )}
                    </Link>  
                    <div>
                      <span className='text-lg text-indigo-700 font-bold'>{event.name}</span>
                      <div className=" mt-4 mr-2 bg-red-500 p-2 text-white font-bold rounded-md text-sm hover:scale-110 cursor-pointer hover:bg-red-500 transition-colors ease-in-out duration-500 animate-pulse ">
                <i>Üzgünüz, bu etkinliğin tarihi geçti!</i>
              </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row  space-x-8'>

                    <div className='flex flex-col p-3 space-y-2'>
  <div className='flex flex-row justify-center px-2 items-center'>
    <FaMapMarkerAlt className='text-rose-500 mr-1' />
    <span className='font-bold'>{event.owner}</span>
  </div>
  <div className='flex flex-row justify-center px-2 items-center'>
    <p className='text-gray-700 text-sm'>{event.location}</p>
  </div>
</div>

                      <div className='flex flex-row justify-center  pt-3'>
                        <MdDateRange className="text-rose-600 mr-1" />
                        <span className='text-sm'>Bitiş Tarihi: {formatDate(event.end_date)}</span>
                        {/* Diğer bilgileri buraya ekleyebilirsiniz */}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
              {/* <div className=''>
                    <p>{event.description}</p>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FinishedEventsPage;
