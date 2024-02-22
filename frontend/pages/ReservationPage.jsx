import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

function ReservationPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://dailycious-mernstack-api.vercel.app/booking');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-5" style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }}>
        <div class='overflow-x'>
          <table class='table-auto overflow-scroll w-full bg-gray-100'>
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3 w-1/6">Registration #</th>
                <th className="px-4 py-3 w-1/6">Booking Name</th>
                <th className="px-4 py-3 w-1/6">Booking Day</th>
                <th className="px-4 py-3 w-1/6">Booking Date</th>
                <th className="px-4 py-3 w-1/6">Booking time slot</th>
                <th className="px-4 py-3 w-1/6">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{reservation.username}</td>
                  <td className="px-4 py-3">{reservation.Day}</td>
                  <td className="px-4 py-3">{reservation.Datetime}</td>
                  <td className="px-4 py-3">{reservation.Timeslot}</td>
                  <td className="px-4 py-3">{reservation.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReservationPage;
