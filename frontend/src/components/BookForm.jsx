import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../Usercontext';
function BookForm() {
  const {username} = useUserContext();
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([
    '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ]);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Define your available time slots based on the day of the week
    let newTimeSlots = [];

    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Mon - Fri
      newTimeSlots = ['2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
    } else if (dayOfWeek === 6) { // Saturday
      newTimeSlots = ['2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
    } else if (dayOfWeek === 0) { // Sunday
      newTimeSlots = ['2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM','9 PM'];
    }

    setSelectedDate(date);
    setAvailableTimeSlots(newTimeSlots);
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split('T')[0]; 

    if (selectedDate >= currentDate) {
      setSelectedDate(selectedDate);
    } else {
      alert('Please select a date in the future.');
      setSelectedDate('');
    }
  };
  return (
      username ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Book your slot now</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="bookingdate" className="block text-gray-600 font-semibold">Booking date:<span className='text-red-600'>*</span></label>
            <input
              type="date"
              id="bookingdate"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter booking date"
              required
              onInput={handleDateChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="timeslot" className="block text-gray-600 font-semibold">Select your desired Timeslot<span className='text-red-600'>*</span></label>
            <select id="timeslot" required>
              {availableTimeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </button>
            <h6>Note:</h6>
            <ul>
              <li>1) Check out the reservations page to check if that timeslot is open or not</li>
              <li>2) In case you don't have an account, then register yourself</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
            Please Login to Continue
          </button>
        </Link>
    </div>
      )
    );
}

export default BookForm;
