import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from '../src/Usercontext';
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

function OrderFood() {
    const params = useParams();
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState([]);
    const [finalAmount, setFinalAmount] = useState(0);
    const [formData, setFormData] = useState({
        food_id: 0,
        username: undefined,
        paymentmode: '1', // set default payment mode
        quantity: 1,
        totalamount: 0,
        address: ''
    });
    const { username } = useUserContext();

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getmenubyid/${params.id}`);
                setMenuData(response.data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        }
        fetchMenuData();
    }, [params]);

    useEffect(() => {
        setFinalAmount(menuData.price * formData.quantity);
    }, [menuData, formData.quantity]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'quantity') {
            newValue = Math.max(1, parseInt(value));
        }
        setFormData({
            ...formData,
            food_id: menuData.foodId,
            username: username,
            totalamount: finalAmount,
            [name]: newValue
        });
    };


    const handleOrder = async (e) => {
        e.preventDefault();
        if (username) {
            try {
                console.log('Ordering food:', formData);
                const response = await axios.post('http://localhost:3000/orderfood', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Order placed successfully');
                console.log(response.data);
                navigate('/thanks');
            } catch (error) {
                console.error('Error placing order:', error);
            }
        } else {
            navigate('/login');
        }
    };

    return <>
        <Navbar />
        <div className="flex items-center justify-center" style={{ fontFamily: "Oxygen" }}>
            <aside>
                <img src={`/MenuItems/${menuData.imgpath}`} alt="pizza" style={{ width: '450px', height: "450px", margin: '50px', marginLeft: '-50px' }} />
                <p className="ml-12 text-3xl font-bold text-blue-500">{menuData.foodname}</p>
                <p>{menuData.description}</p>
                <p><b>Price:</b>
                    <span className='text-orange-600'> ₹{menuData.price}</span></p>
                <p><b>Categories: </b>
                    {menuData.Category && menuData.Category.map((category, index) => {
                        return <span key={index} className="bg-gray-200 border border-solid border-gray-400 rounded-sm px-2 py-1" > {category} </span>
                    })}
                </p>
            </aside>
            <div className="ml-8 -mt-[40px]" style={{ fontFamily: "Dynapuff" }}>
                <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Order it Now</h2>
                    <form onSubmit={handleOrder}>
                        <div className="mb-4">
                            <label htmlFor="paymentmode" className="block text-gray-600 font-semibold">Payment Mode<span className='text-red-600'>*</span></label>
                            <select value={formData.paymentmode} onChange={(e) => setFormData({ ...formData, paymentmode: e.target.value })}>
                                <option value="1">Credit Card</option>
                                <option value="2">Cash On Delivery</option>
                                <option value="3">UPI/NETBANKING</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-600 font-semibold">Quantity<span className='text-red-600'>*</span></label>
                            <input
                                type="number"
                                id="quantity"
                                name='quantity'
                                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter the quantity"
                                value={formData.quantity}
                                min={1}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-600 font-semibold">Address<span className='text-red-600'>*</span></label>
                            <textarea
                                type="text"
                                id="address"
                                name='address'
                                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                                placeholder="Enter the address"
                                rows={4}
                                cols={4}
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <b>Price: </b> <span className="text-blue-500">₹ {menuData.price * formData.quantity}</span>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Order Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default OrderFood;