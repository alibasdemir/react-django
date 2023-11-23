import React, { useState, useEffect } from 'react';

function Sepet({ selectedSeatDetails }) {
  const totalSeats = selectedSeatDetails.length;
  const totalPrice = selectedSeatDetails.reduce((total, seat) => total + parseFloat(seat.seatCategory.seatPrice), 0).toFixed(2);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handlePayment = () => {
    if (isLoggedIn) {
      alert('ÖDEME BAŞARILI!');
    } else {
      alert('GİRİŞ YAPINIZ!');
    }
  };

  return (
    <div className='relative bg-gray-100 border rounded-lg p-4 lg:w-96 mx-auto'>
      <h3 className='text-indigo-900 font-bold border-b border-indigo-200 pb-3'>Sepetim</h3>
      <h4 className='py-2 text-indigo-700'>Sepete Eklenen Koltuklar</h4>
      <table className="table table-md">
        <thead>
          <tr>
            <th scope="col" className='lg:w-1/2'>Koltuk</th>
            <th scope="col" className='lg:w-1/2'>Fiyat (TL)</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeatDetails.map((seat, index) => (
            <tr key={index}>
              <td>{seat.seatCategory.seatClass}{seat.seatNumber}</td>
              <td>{seat.seatCategory.seatPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p className='font-semibold pb-3 border-b border-indigo-200'>
          <span className='text-indigo-700'>Seçilen Koltuk Sayısı: </span>
          {totalSeats}
        </p>
        <p className='font-semibold'>
          <span className='text-indigo-700'>Toplam Fiyat: </span>
          {totalPrice} TL
        </p>
      </div>
      <div>
      <div>
          <button
            onClick={handlePayment}
            className='bg-indigo-500 py-2 px-4 rounded-full text-white hover:scale-105 hover:ease-out transition duration-500 absolute right-3'
          >
            Ödeme Yap ({totalPrice} TL)
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Sepet;
