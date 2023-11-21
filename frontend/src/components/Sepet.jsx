import React from 'react';

function Sepet({ selectedSeatDetails }) {
  const totalSeats = selectedSeatDetails.length;
  const totalPrice = selectedSeatDetails.reduce((total, seat) => total + parseFloat(seat.seatCategory.seatPrice), 0).toFixed(2);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '300px', margin: 'auto' }}>
      <h4>Sepete Eklenen Koltuklar</h4>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Koltuk</th>
            <th scope="col">Fiyat (TL)</th>
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
      <p style={{ fontSize: '20px' }}>Seçilen Koltuk Sayısı: {totalSeats}</p>
      <p style={{ fontSize: '20px' }}>Toplam Fiyat: {totalPrice} TL</p>
    </div>
  );
}

export default Sepet;
