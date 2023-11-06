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
        <h2>Event List</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <p>Title: {event.name}</p>
              <p>Location: {event.location}</p>
              <p>Location URL: {event.locationUrl}</p>
              <p>Owner: {event.owner}</p>
              <p>Description: {event.description}</p>
              <p>Category: {event.category.title}</p>
              <p>IsActive: {event.isActive ? "True" : "False"}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default EventList;