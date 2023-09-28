import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import MenuCards from '../src/components/MenuCards';

const combinedCardData = [
    {
        foodname: 'Pizza',
        imgpath: 'pizza.jpg',
        description: 'Delicious Italian Pizza with Oregano, Chicken Bits and Mushrooms with mozzarella cheese',
        price: 999,
    },
    {
        foodname: 'Burger',
        imgpath: 'burger.jpg',
        description: 'Delicious chicken value burgers - at a deal price',
        price: 248,
    },
    {
        foodname: 'Biryani',
        imgpath: 'biryani.jpg',
        description: 'Delicious Indian Chicken Biryani with a boiled egg at a very affordable price',
        price: 299,
    },
    {
        foodname: 'Chinese Chicken Hakka noodles',
        imgpath: 'hakkanoodles.jpg',
        description: 'Sizzling delicious hot Chinese style chicken hakka noodles',
        price: 99,
    },
    {
        foodname: 'English Breakfast',
        imgpath: 'engbreakfast.jpg',
        description: 'A perfect start of the day with English style breakfast with salad, bread, boiled eggs, beans, and tea',
        price: 169,
    },
    {
        foodname: 'Chicken Barbecue',
        imgpath: 'barbecue.jpg',
        description: 'Delicious chicken barbecue, sizzling hot',
        price: 399,
    },
    {
        foodname: 'Butter Onion Masala Dosa',
        imgpath: 'dosa.jpg',
        description: 'Delicious Indian Onion masala dosa with chutney at a very affordable price',
        price: 89,
    },
    {
        foodname: 'Veg Meal chapati rice',
        imgpath: 'vegmeal.jpg',
        description: 'Hot meal with vegetable meal with paneer, chapati, and rice and a plethora of other goodies',
        price: 199,
    },
];

function MenuPage() {
    // Chunk the combined data array into groups of four
    const chunkedData = [];
    for (let i = 0; i < combinedCardData.length; i += 4) {
        chunkedData.push(combinedCardData.slice(i, i + 4));
    }

    return (
        <>
            <Navbar />
            <h1 className='mt-5 flex items-center justify-center text-blue-700' style={{ fontSize: '25px', fontFamily: 'Oxygen', fontWeight: 'bolder' }}>Check Our Menu</h1>
            {chunkedData.map((chunk, index) => (
                <div key={index} className="grid grid-cols-4 gap-4">
                    <div className="container flex mt-3 mx-auto">
                        {chunk.map((card, cardIndex) => (
                            <MenuCards
                                key={cardIndex}
                                foodname={card.foodname}
                                imgpath={card.imgpath}
                                description={card.description}
                                price={card.price}
                            />
                        ))}
                    </div>
                </div>
            ))}
            <Footer />
        </>
    );
}

export default MenuPage;


{/** This is how we split an array in 4 4 parts
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const chunkSize = 4;
const result = [];
for (let i = 0; i < array.length; i += chunkSize) {
  result.push(array.slice(i, i + chunkSize));
}
console.log(result); */
}