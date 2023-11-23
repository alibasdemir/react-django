import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import { BiSolidHome } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaShare } from "react-icons/fa";
import ShareModal from "./Events/ShareModal";

function CategoryPage() {
  const { categoryId } = useParams();
  const [events, setEvents] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  //state onChange for Date filter
  const [date, setDate] = useState({
    start: "",
    end: ""
  })

  //function for managing date state
  const handleDate = (e) => {
    const {name, value} = e.target 
    setDate(preVal => ({
        ...preVal,
        [name]: value
    }))
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let endpoint;
        if (categoryId === 'all') {
          const allCategory = {
            title: 'TÜM ETKİNLİKLER',
            img_url: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/01/22/thumbs/800x531/252949.jpg'
          };
          setCategoryTitle(allCategory.title);
          setCategoryImage(allCategory.img_url);
          endpoint = 'http://localhost:8000/events'
        } else {
          endpoint = `http://localhost:8000/categories/${categoryId}/events`;
        }
        const response = await fetch(endpoint);
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          if (data.length > 0 && categoryId !== 'all') {
            const { category } = data[0];
            setCategoryTitle(category.title);
            setCategoryImage(category.img_url);
          }
        } else {
          throw new Error('Something went wrong while fetching events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [categoryId]);


  //Filter array to adjust filters 

  const [filterEvents, setFilterEvents] = useState([])
  useEffect(() => {
    setFilterEvents(events)
  }, [events])
  
  // Function to manage all filter events regarding their type and id
  const handleFilter = (e) => {
    const {id, type} = e.target
    if(type === "location" && !filterEvents.every(event => event.location === id)
    || (type === "owner" && !filterEvents.every(event => event.owner === id)))
    {
      setFilterEvents(events.filter(item  => {
        return type === "location" ? item.location === id : item.owner === id
      }))
    }
    if(id === "search" && ((date.start && date.end) && date.start <= date.end)){
      setFilterEvents(events.filter(item => (item.start_date <= date.start && item.end_date >= date.start) || 
        (item.start_date >= date.start && item.start_date <= date.end)))
    }
  }

  //Location list from all object to list them on page according to filterEvents
  const locationCount = filterEvents.reduce((acc, event) => {
    const location = event.location;
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {});

//Owner list from all object to list them on page according to filterEvents
  const ownerCount = filterEvents.reduce((acc, event) => {
    const owner = event.owner;
    acc[owner] = (acc[owner] || 0) + 1;
    return acc;
  }, {});

//Clear function to clear all filters
  const handleClear = () => {
    setFilterEvents(events)
    setDate({
    start: "",
    end: ""
    })
  }

  const openShareModal = (event) => {
    setSelectedEvent(event);
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setSelectedEvent(null);
    setIsShareModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className='p-4 sm:p-6 lg:p-10 bg-gray-100'>
        <div className='ml-[1.5rem] mr-[1.5rem]'>
          <div className='mb-6 mt-3 lg:mb-12'>
            <div className='flex flex-row justify-between items center border-b border-indigo-500 mb-1 px-4 '>

              <h2 className="text-start font-bold text-blue-900">
              {categoryTitle}
              </h2>
              <div className='flex flex-row text-blue-900 pt-3'>
                <BiSolidHome className='text-xl mr-1 text-blue-900'/>
                <Link to="/" className='text-blue-900 no-underline mr-2 hover:text-blue-600'>Anasayfa</Link>
                <span style={{width:"5px", height:"5px", borderRadius:"50%"}} className='bg-blue-900 mt-2.5'></span>
                <p className='ml-2'>{categoryTitle}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between '>
            {categoryImage && (
              <img
                src={categoryImage}
                alt={categoryTitle}
                className="mx-auto rounded-lg shadow-lg  transition duration-300 transform hover:scale-105 "
                style={{
                  width: '800px',
                  height: '400px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  marginBottom: "75px"
                }}
              />
            )}

            <div className='w-auto h-auto mt-4'>
              <div className='bg-gray-200 p-4 rounded-2xl mx-20' >
                <div className='filter-div flex flex-row bg-white/75 rounded-2xl shadow-lg shadow-indigo-500/50 justify-around'>
                  <div className='owner flex flex-col  px-6 m-2 border-r border-indigo-300 py-3'>
                    <h5 className="text-blue-600 flex items-center text-lg mb-2 ">Tarih</h5>
                    <div className='flex flex-row gap-2 items-center'>
                      <p className="text-sm flex flex-col mb-2 pb-1 items-center border-b border-indigo-300 mr-3 ">
                        <b>Başlangıç Tarihi: </b><input type="date" onChange={handleDate} name="start" value={date.start} />
                      </p>
                      <p className="text-sm flex flex-col mb-2 pb-1 items-center border-b border-indigo-300 mr-3">
                        <b>Bitiş Tarihi:</b> <input type="date" onChange={handleDate} name="end" value={date.end} />
                      </p>
                      <div className='flex flex-col '>
                        <button className='cursor-pointer flex flex-row justify-center items-center bg-blue-500 text-white rounded-md p-2 mb-3 hover:bg-indigo-700 transition-colors ease-in-out duration-300 hover:scale-105 text-center' id='search' onClick={handleFilter}>
                          ARA
                        </button>
                        <div className='clear-btn '>
                          <button
                            className='bg-red-500 text-white rounded-md text-sm w-40 h-10 p-2  text-center flex justify-center items-center cursor-pointer hover:bg-red-700 transition-colors ease-in-out duration-300 hover:scale-105'
                            onClick={handleClear}
                          >
                            <MdClear className=" text-lg mr-1" /> Filtreleri Temizle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                    <div className='location flex flex-col px-2 m-2  items-center '>
                      <h5 className="text-blue-600  text-base mb-2 border-b border-indigo-400">Konum</h5>
                      <ul className='p-0 flex flex-col gap-2'>
                        {Object.entries(locationCount).map(([location, count]) => (
                          <li
                            className='cursor-pointer  text-xs p-1'
                            onClick={() => handleFilter('location', location)}
                            key={location}
                          >
                            {location} ({count})
                          </li>
                        ))}
                      </ul>
                    </div>
                    

                    <div className='owner flex flex-col pr-2 pl-2 m-2  items-center'>
                      <h5 className="text-blue-600 flex  text-base mb-2 border-b border-indigo-400">Mekan</h5>
                      <ul className='p-0 flex flex-col gap-1'>
                        {Object.entries(ownerCount).map(([owner, count]) => (
                          <li
                            className='cursor-pointer  text-xs p-1'
                            onClick={() => handleFilter('owner', owner)}
                            key={owner}
                          >
                            {owner} ({count})
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-[4px] justify-center">
            {filterEvents.map((event) => (
              <div className="p-4 relative" key={event.id}>
                <div className="h-full bg-white rounded-2xl relative hover:shadow-2xl hover:shadow-indigo-400 cursor-pointer transform transition-transform ease-in-out duration-300 hover:scale-105">
                  <article className="w-full block">
                    {event.eventImages.length > 0 && (
                      <img
                        src={event.eventImages[0].image}
                        alt={event.category.title}
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                    )}
                    <div className="mt-1 text-center">
                      <h2 className="pb-2 text-xl sm:text-2xl md:text-lg font-bold text-black pt-3">
                        {event.name}
                      </h2>

                      <div className="flex flex-row pr-6 pl-6 justify-center" >
                        <div >
                          <FaLocationDot className="text-indigo-700" />
                        </div>
                        <div className="truncate">
                          <p className="ml-2 text-gray-400 truncate text-sm">{event.location}</p>
                        </div>
                      </div>

                      <div className="absolute top-6 -right-5 bg-red-500 p-2 text-white font-bold rounded-md text-sm hover:scale-110  cursor-pointer hover:bg-red-700 transition-colors ease-in-out duration-300 animate-pulse origin-right rotate-12 ">
                        <i>Biletinizi Tükenmeden Alın!</i>
                      </div>

                      <div className="flex flex-row items-center justify-center pr-6 pl-6 ">
                        <MdDateRange className="mr-2 text-gray-600 mb-3" />
                        <p className="text-sm  text-gray-400 ">
                          {event.start_date} / {event.end_date}
                        </p>
                      </div>

                      <div className="flex justify-center mr-2">
                        <a href={`/events/${event.id}`} className="text-indigo-800 no-underline text-md rounded-3xl font-bold h-10 w-48 bg-indigo-100 mb-3 mt-1 flex flex-row justify-center items-center hover:bg-indigo-500 hover:ease-out duration-500 hover:text-white hover:scale-105 ">
                          Etkinlik Detayı
                        </a>
                        
                      </div>
                       <div className="text-center absolute bottom-5 right-1.5 border rounded-full p-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:scale-110">
                    <FaShare onClick={() => openShareModal(event)} />
                  </div>
                    </div>
                   

          
                  </article>
                </div>
              </div>
            ))}
          </div>
          <ShareModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        event={selectedEvent}
      />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
