import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function ReservationPage() {
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
                  <tr>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">John Doe</td>
                    <td className="px-4 py-3">Monday</td>
                    <td className="px-4 py-3">2023-09-25</td>
                    <td className="px-4 py-3">2 PM</td>
                    <td className="px-4 py-3">Pending</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">John Cena</td>
                    <td className="px-4 py-3">Tuesday</td>
                    <td className="px-4 py-3">2023-09-26</td>
                    <td className="px-4 py-3">2 PM</td>
                    <td className="px-4 py-3">Pending</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">Seth Rollins</td>
                    <td className="px-4 py-3">Wednesday</td>
                    <td className="px-4 py-3">2023-09-27</td>
                    <td className="px-4 py-3">2 PM</td>
                    <td className="px-4 py-3">Pending</td>
                  </tr>
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
