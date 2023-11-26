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
  const currentDate = new Date(); // Güncel tarih
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/events/')
      .then(response => {
        const filteredEvents = response.data.filter(event => {
          const endDate = new Date(event.end_date);
          // Etkinlik bitiş tarihi, bugünkü tarihten önceyse ve etkinlik aktifse
          return endDate < currentDate;
        });

        filteredEvents.sort((a, b) => a.id - b.id);

        setEvents(filteredEvents);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, [currentDate]);

  return (
    <div>
      <Header />

      <div className='bg-gray-100 px-10 lg:px-40 py-10 lg:py-20'>
        <div className='bg-white px-10 lg:px-20 py-10 rounded-2xl' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>
          <div className='pb-8 flex flex-row items-center space-x-1'>
            <Link to="/" className='no-underline hover:scale-105'>
              <BiSolidHome className='text-2xl mr-1 mb-2 text-rose-500 hover:text-rose-500' />
            </Link>
            <Link to="/categories/all" style={{ textDecoration: 'none' }} className="flex items-center">
              <RiArrowRightSLine className='text-2xl text-indigo-500' />
              <span className='text-indigo-500 no-underline mb-0.5'>Etkinlik</span>
            </Link>
            <RiArrowRightSLine className='text-2xl text-indigo-500' />
            <span className='text-rose-500 text-lg font-bold'>Süresi Geçen Etkinlikler</span>
          </div>

          <div>
            <div>
              {events.map(event => (
                <div key={event.id} className='mb-4 flex flex-col lg:flex-row border border-gray-700 p-3 rounded-2xl space-x-4 justify-between ' style={{ boxShadow: '0 4px 8px #cbd5e1' }}>
                  <div className='flex flex-col lg:flex-row space-x-4 lg:space-x-8 justify-center '>

                    {event.eventImages && event.eventImages.length > 0 && (
                      <div
                        style={{
                          width: '120px',
                          height: '120px',
                          overflow: 'hidden',
                        }}
                        className='mx-auto lg:mx-0'
                      >
                        <img
                          src={event.eventImages[0].image}
                          alt={event.category.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          className="rounded-2xl "
                        />
                      </div>
                    )}

                    <div className='my-3 lg:my-0 '>
                      <span className=' text-sm lg:text-lg text-indigo-700 font-bold'>{event.name}</span>
                      {new Date(event.end_date) < new Date() && (
                        <div className=" mt-4 mr-0 lg:mr-2 bg-red-500 p-2 text-white font-bold rounded-md text-xs lg:text-sm hover:scale-110 cursor-pointer hover:bg-red-500 transition-colors ease-in-out duration-500 animate-pulse " style={{ cursor: 'default' }}>
                          <i>Üzgünüz, bu etkinliğin tarihi geçti!</i>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-8'>
                      <div className='flex flex-col p-0 lg:p-3 space-y-2'>
                        <div className='flex flex-row justify-center px-0 lg:px-2 items-center'>
                          <FaMapMarkerAlt className='text-rose-500 mr-1' />
                          <span className='font-bold'>{event.owner}</span>
                        </div>
                        <div className='flex flex-row justify-center px-0 lg:px-2 items-center'>
                          <p className='text-gray-700 text-sm'>{event.location}</p>
                        </div>
                      </div>
                      <div className='flex flex-row justify-center pt-1 lg:pt-3'>
                        <MdDateRange className="text-rose-600 mr-1" />
                        <span className='text-sm'>Bitiş Tarihi: {formatDate(event.end_date)}</span>
                        {/* Diğer bilgileri buraya ekleyebilirsiniz */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FinishedEventsPage;
