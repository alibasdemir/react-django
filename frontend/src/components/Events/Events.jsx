import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShare } from "react-icons/fa";
import ShareModal from "./ShareModal";

const Events = () => {
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

  return (
    <div className="h-full bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 justify-center">
        {eventData &&
          eventData.map((event) => {
            const defaultImageIndex = Math.floor(
              Math.random() * event.eventImages.length
            );

            return (
              <div className="p-4" key={event.id}>
                <div className="h-full bg-white rounded-2xl p-6 relative hover:shadow-2xl cursor-pointer">
                  <article className="w-full block">
                    <Link to="/">
                      {event.eventImages.length > 0 && (
                        <img
                          src={event.eventImages[defaultImageIndex].image}
                          alt={event.name}
                          className="w-full h-48 object-cover rounded-2xl"
                        />
                      )}
                    </Link>
                    <div className="mt-4 py-4">
                      {" "}
                      <Link to="/">
                        <h2 className="text-xl sm:text-2xl md:text-lg font-semibold">
                          {event.category.title}
                        </h2>
                        {/* <h3>{event.name}</h3> */}
                        <p>{event.owner}</p>
                        <p className="text-sm text-[#d1410c]">
                          {/* Thu, Nov 2, 2023 8:00 PM +03 */}
                          {event.start_date} / {event.end_date}
                        </p>
                        <p className="text-[#6f7287] text-sm truncate">
                          {event.description}
                        </p>
                      </Link>
                    </div>
                  </article>
                  <div className="text-center absolute bottom-1 right-2 border rounded-full p-2">
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
