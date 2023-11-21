import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

function CategoryPage() {
  const { categoryId } = useParams();
  const [events, setEvents] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

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
        const response = await fetch(`http://localhost:8000/categories/${categoryId}/events`);
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          if (data.length > 0) {
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

  return (
    <div>
      <Header />
      <br />

      <h2 className="text-center">{categoryTitle} ETKİNLİKLERİ</h2> {/*STİL VERİLEBİLİR...*/}
      <br />
      {categoryImage && (
            <img
              src={categoryImage}
              alt={categoryTitle}
              className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              style={{ width: '1000px', height: '400px', borderRadius: '10px' }}
            />
          )}
      <br />
      <div className='filter-div flex gap-40 justify-center p-1 ' >
        <div className="date flex flex-col align-center">
          <h2>Tarih Aralığı</h2>
          <p>Başlangıç Tarihi: <input type="date" onChange={handleDate} name="start" value={date.start}  /> </p>
          <p>Bitiş Tarihi: <input type="date" onChange={handleDate} name="end" value={date.end} /> </p>
          <span className="cursor-pointer" onClick={handleFilter} id='search'>ARA</span>
        </div>
        <div className="location flex flex-col align-center">
          <h2>Konum</h2>
          <ul className='p-0 flex flex-col align-center'>
            {Object.entries(locationCount).map(([location, count]) => (
              <li className='cursor-pointer' 
              onClick={handleFilter} key={location} id={location} type='location'>
                {location} ({count})
              </li>
            ))}
          </ul>
          
        </div>
        <div className="owner flex flex-col align-center">
          <h2>Etkinlik Sahibi</h2>
          <ul>
            {Object.entries(ownerCount).map(([owner, count]) => (
              <li className='cursor-pointer '
              onClick={handleFilter} key={owner} id={owner} type='owner'>
               {owner} ({count})
              </li>
            ))}
          </ul>
        </div>
        <div className="clear-btn"><button onClick={handleClear}>Filtreleri Temizle</button></div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-[4px] justify-center">
        {filterEvents.map((event) => (
          <div className="p-4" key={event.id}>
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
                            <p className="ml-2 text-gray-400 truncate text-sm">Etkinlik Yeri: {event.location}</p>
                          </div>
                        </div>

                        <div className="border-b border-purple-200">
                          <span>Biletinizi Tükenmeden Alın!</span>
                        </div>

                        <div className="flex items-center pr-6 pl-6 justify-center">
                          <MdDateRange className="mr-2 text-gray-600 " />
                          <p className="text-sm mt-3 text-gray-400 ">
                            Başlangıç: {event.start_date} / Bitiş: {event.end_date}
                          </p>
                        </div>


                  <div className="flex justify-center">
                    <a href={`/events/${event.id}`} className="text-indigo-800 no-underline text-md rounded-3xl font-bold h-10 w-48 bg-indigo-100 mb-3 flex flex-row justify-center items-center hover:bg-indigo-500 hover:ease-out duration-500 hover:text-white hover:scale-105">
                      Etkinlik Detayı
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;
