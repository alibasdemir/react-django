import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function CategoryPage() {
    const { categoryId } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        
        const fetchEvents = async () => {
          try {
            const response = await fetch(`http://localhost:8000/categories/${categoryId}/events`);
            if (response.ok) {
              const data = await response.json();
              setEvents(data); 
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
        <br />

        <h2>Category {categoryId} Page</h2>
      <div>
        {/* Eventleri burada göster */}
        {events.map((event) => (
  <div key={event.id}>
    <h3>{event.name}</h3> {/* event.name olarak güncellendi */}
    {/* Diğer event bilgilerini burada göster */}
  </div>
))}
      </div>


        <Footer />
      </div>
    );
  }

export default CategoryPage;
