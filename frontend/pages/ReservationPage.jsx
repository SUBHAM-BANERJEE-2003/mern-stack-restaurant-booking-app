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
      <h1 className='mt-5 flex items-center justify-center text-blue-700' style={{ fontSize: '25px', fontFamily: 'Oxygen', fontWeight: 'bolder' }}>Check all reservations</h1>
      <div className="min-h-screen bg-gray-100 py-5" style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }}>
        <div className="w-full max-w-7xl mx-auto px-4 mt-10">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table id="task-tbl" className="task-tbl w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Registration #</th>
                    <th className="px-4 py-3">Booking Name</th>
                    <th className="px-4 py-3">Booking Day</th>
                    <th className="px-4 py-3">Booking Date</th>
                    <th className="px-4 py-3">Booking time slot</th>
                    <th className="px-4 py-3">Status</th>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReservationPage;
