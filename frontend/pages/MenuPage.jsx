import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Loadingpage from './Loadingpage';

function MenuPage() {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://dailycious-mernstack-api.vercel.app/getmenu');
                setMenuData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching menu data:', error);
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    if (loading) {
        return (
            <Loadingpage />
        )
    }

    if (menuData.length === 0) {
        return (
            <>
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <div className="flex items-center justify-center text-blue-700 m-5" style={{ fontSize: '25px', fontFamily: 'Oxygen', fontWeight: 'bolder', padding: '20px' }}>
                        No Menu Items Found
                    </div></div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="mt-5 flex items-center justify-center text-blue-700 m-5" style={{ fontSize: '25px', fontFamily: 'Oxygen', fontWeight: 'bolder', padding: '20px' }}>
                Check Our Menu
            </div>
            <div className="ml-32 flex flex-row gap-10 flex-wrap">
                {menuData.map((item, index) => (
                    <Link to={`/foodOrder/${item.foodId}`}>
                        <div key={index} className="card card-compact shadow-xl col-span-1 w-60 md:w-72 lg:w-96 h-fit bg-gray-100 hover:bg-base-200 rounded" style={{ margin: '20px' }}>
                            <div className="relative">
                                <img src={`/MenuItems/${item.imgpath}`} alt={item.foodname} className="w-full h-full object-cover" />
                            </div>
                            <div className="card-body">
                                <div className="card-title font-bold text-xl mb-2">{item.foodname}</div>
                                <div className='card-desc items-center justify-center' style={{ fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
                                    <p>{item.description}</p>
                                    <p><b>Price:</b>
                                        <span className='text-orange-600'> ₹{item.price}</span></p>
                                    <span>
                                        <p className="font-semibold">Categories:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {item.Category.map((categoryItem, categoryIndex) => (
                                                <span key={categoryIndex} className="bg-gray-200 border border-solid border-gray-400 rounded-sm px-2 py-1">
                                                    {categoryItem}
                                                </span>
                                            ))}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default MenuPage;
