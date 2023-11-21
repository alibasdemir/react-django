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


  return (
    <div>
      <Header />
      <div className='p-10 bg-gray-100'>
        <div className='ml-[78px] mr-[78px]'>
          <div className='mt-6 mb-12 ' >
          <h2 className="text-center font-bold text-blue-600" style={{ textShadow: '2px 2px 2px rgba(100, 100, 255, 0.7)' }}>
  {categoryTitle}
</h2>

          </div>

          {categoryImage && (
            <img
              src={categoryImage}
              alt={categoryTitle}
              className="mx-auto rounded-lg shadow-lg  transition duration-300 transform hover:scale-105  "
              style={{
                width: '800px',
                height: '400px',
                borderRadius: '10px',
                objectFit: 'cover',
                marginBottom: "75px"
              }}
            />
          )}

          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-[4px] justify-center">
            {events.map((event) => (
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

                      <div className="absolute top-6 -right-5 bg-red-500 p-2 text-white font-bold rounded-md text-sm hover:scale-110 hover:bg-red-700 cursor-pointer transform transition-transform ease-in-out duration-300 animate-pulse origin-right rotate-12 ">
                        <i>Biletinizi Tükenmeden Alın!</i>
                      </div>

                      <div className="flex flex-row items-center justify-center pr-6 pl-6 ">
                          <MdDateRange className="mr-2 text-gray-600 mb-3" />
                          <p className="text-sm  text-gray-400 ">
                            {/* Thu, Nov 2, 2023 8:00 PM +03 */}
                            {event.start_date} / {event.end_date}
                          </p>
                        </div>


                      <div className="flex justify-center">
                        <a href={`/events/${event.id}`} className="text-indigo-800 no-underline text-md rounded-3xl font-bold h-10 w-48 bg-indigo-100 mb-3 mt-1 flex flex-row justify-center items-center hover:bg-indigo-500 hover:ease-out duration-500 hover:text-white hover:scale-105">
                          Etkinlik Detayı
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
