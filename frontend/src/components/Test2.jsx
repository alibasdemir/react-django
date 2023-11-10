import React, { useState, useEffect } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/events/")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h1>İKİNCİ TEST KISIMI</h1>
      <h2>Event List + Details</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <p>Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Location URL: {event.locationUrl}</p>
            <p>Owner: {event.owner}</p>
            <p>Description: {event.description}</p>
            <p>IsActive: {event.isActive ? "True" : "False"}</p>
            <p>Start Date: {event.start_date}</p>
            <p>End Date: {event.end_date}</p>
            <p>Category: {event.category.title}</p>
            <p>Category Img URL: {event.category.img_url}</p>
            <p>Seats:</p>
            <ul>
              {event.seats.map((seat) => (
                <li key={seat.id}>
                  <p>Seat Number: {seat.seatNumber}</p>
                  <p>Seat Price: {seat.seatCategory.seatPrice}</p>
                  <p>Seat Class: {seat.seatCategory.seatClass}</p>
                  
                  {/* <p>Total Seat: {seat.seatCategory.totalSeat}</p> */}

                  {/* TOTAL SEAT şuan gerekli değil .... GEREKLİ OLURSA KULLANIRIZ. BACKEND TARAFINDA DATABASE'E KOLTUKLARI TEK TEK ELİMLE EKLEMEK YERİNE TOPLAM KOLTUK SAYISI KADAR OTOMATİK EKLESİN DİYE MODELDE BUNU OLUŞTURDUM :D TEMBELLİK MODE ON!!! */}
                </li>
              ))}
            </ul>
            <ul>
              {event.eventImages.map((image) => (
                <li key={image.id}>
                  <p>EVENT IMAGES: {image.image}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
