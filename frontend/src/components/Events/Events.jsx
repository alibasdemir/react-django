import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShare } from "react-icons/fa";
import ShareModal from "./ShareModal";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const Events = ({ events }) => {
  const [eventData, setEventData] = useState(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Axios ile verileri çekmek için bir GET isteği yapın.
    axios
      .get("http://127.0.0.1:8000/events")
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  const openShareModal = (event) => {
    setSelectedEvent(event);
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setSelectedEvent(null);
    setIsShareModalOpen(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };
  return (
    <div className="h-full bg-gray-100 p-20" >
      <div id="events" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-[4px] justify-center  ">
        {events &&
          events.map((event) => {
            const defaultImageIndex = Math.floor(
              Math.random() * event.eventImages.length
            );

            return (
              <div className="p-4" key={event.id}>
                <div className="h-full bg-white rounded-2xl  relative hover:shadow-2xl hover:shadow-indigo-400 cursor-pointer transform transition-transform ease-in-out duration-300 hover:scale-105">
                  <article className="w-full block">
                    <Link to="/">
                      {event.eventImages.length > 0 && (
                        <img
                          src={event.eventImages[defaultImageIndex].image}
                          alt={event.category.title}
                          className="w-full h-48 object-cover rounded-2xl "
                        />

                      )}
                    </Link>
                    <div className="mt-1 ">
                      {" "}
                      <Link to="/" className="no-underline">

                        <h2 className=" pb-2  text-xl sm:text-2xl md:text-lg font-bold text-black pl-6 pt-3  transform hover:scale-105 ">
                          {event.name}
                        </h2>

                        {/* <h3>{event.name}</h3> */}

                        <div className="flex flex-row pr-6 pl-6" >
                          <div >
                            <FaLocationDot className="text-indigo-700" />
                          </div>
                          <div className="truncate">
                            <p className="ml-2 text-gray-400 truncate text-sm">{event.owner}</p>
                          </div>
                        </div>

                        <div className="border-b border-purple-200">
                          <span></span>
                        </div>

                        <div className="flex items-center pr-6 pl-6">
                          <MdDateRange className="mr-2 text-red-600 " />
                          <p className="text-sm mt-3 text-gray-400 ">
                            {/* Thu, Nov 2, 2023 8:00 PM +03 */}
                            {formatDate(event.start_date)} / {formatDate(event.end_date)}
                          </p>
                        </div>


                        {/* <div className="border-b border-purple-300">
                          <span></span>
                        </div> */}
                        {/* <p className="text-[#6f7287] pt-3 text-sm truncate pr-6 pl-6 ">
                          {event.description}
                        </p> */}

                        <Link to={`/events/${event.id}`}  className="text-indigo-800 no-underline text-md rounded-3xl font-bold h-12 mr-14 ml-6  bg-indigo-100 mb-3 flex flex-row justify-center items-center hover:bg-indigo-500 hover:ease-out duration-500 hover:text-white hover:scale-105 hover:text-scale-105">
                          Etkinlik Detayı
                        </Link>
                      </Link>
                    </div>
                  </article>

                  <div className="text-center absolute bottom-6 right-3 border rounded-full p-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:scale-110">
                    <FaShare onClick={() => openShareModal(event)} />
                  </div>

                </div>
              </div>
            );
          })}
       
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        event={selectedEvent}
      />
    </div>
  );
};

export default Events;
