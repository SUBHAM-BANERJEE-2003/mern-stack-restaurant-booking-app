import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../Usercontext';
function BookForm() {
  const navigate = useNavigate();
  const { username } = useUserContext();
  const [bookingerr, setBookingerr] = useState(''); // to show booking error
  const [formData, setFormData] = useState({
    username: undefined,
    Day: '',
    Timeslot: '9:00 AM - 10:00 AM',
    Datetime: new Date(),
    Status: 'Pending'
  });

  useEffect(() => {
    // extract day from date, like monday, tuesday, etc
    const date = new Date(formData.Datetime);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    setFormData({ ...formData, Day: day });
  }, [formData.Datetime])

  const handleBooking = async (e) => {
    e.preventDefault();
    formData.username = username;
    console.log('Booking:', formData);
    if (username) {
      try {
        console.log('Booking:', formData);
        const response = await axios.post('http://localhost:3000/booking', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
        navigate('/reservation');
      } catch (error) {
        console.error('Error booking:', error);
        setBookingerr('Timeslot is already booked');
      }
    }
    else {
      navigate('/login');
    }
  }
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Book your slot now</h2>
        {bookingerr && (
          <div className="mb-4 sm:w-96" style={{ width: "330px" }}>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{bookingerr}</span>
            </div>
          </div>
        )}
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label htmlFor="bookingdate" className="block text-gray-600 font-semibold">Booking date:<span className='text-red-600'>*</span></label>
            <input
              type="date"
              id="bookingdate"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter booking date"
              value={formData.Datetime}
              onChange={(e) => setFormData({ ...formData, Datetime: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="timeslot" className="block text-gray-600 font-semibold">Select your desired Timeslot<span className='text-red-600'>*</span></label>
            <select
              id="timeslot"
              value={formData.Timeslot}
              onChange={(e) => setFormData({ ...formData, Timeslot: e.target.value })}
              required
            >
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
              <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
              <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
              <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
              <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
              <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
              <option value="7:00 PM - 8:00 PM">7:00 PM - 8:00 PM</option>
              <option value="8:00 PM - 9:00 PM">8:00 PM - 9:00 PM</option>
              <option value="9:00 PM - 10:00 PM">9:00 PM - 10:00 PM</option>
              <option value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</option>
              <option value="11:00 PM - 12:00 AM">11:00 PM - 12:00 AM</option>
              <option value="12:00 AM - 1:00 AM">12:00 AM - 1:00 AM</option>
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
              <li>1) Check out the reservations page to check if that timeslot is open or not </li>
              <li><Link to="/reservation" className='text-blue-400 underline'>Click here to check reservations</Link></li>
              <li>2) In case you dont have an account, then register yourself</li>
            </ul>
          </div>
        </form>
      </div>
    </div>

  );
}

export default BookForm;
