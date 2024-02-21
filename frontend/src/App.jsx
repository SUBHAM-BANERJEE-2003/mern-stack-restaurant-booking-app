import Featurecards from "./components/Featurecards";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  const fooddesc = "Our menu consists of all types of indian,continental,chinese,western meals. London style breakfast is also available. Fast food like egg roll,chowmien,burger,pizza available. Deserts like icecream,curd. Check Details...";
  const booktable = "We give option to book our restaurant in available slots. 5 star hotels available in an afforbadle prices. Beautiful interior design and tables availble. Book your slot now..."
  const openinghrdet = <div>Dailycious restaurant is open all the 7 days of a week. Hence our name is dialycious...,except public holidays
    <div>Our Timings are:</div>
    <div>Mon - Fri: 2 PM - 10 PM</div>
    <div>Saturday: 2 PM - 11 PM</div>
    <div>Sunday: 2 PM - 9 PM</div>
  </div>
  const resdet = "We offer one of the facilities to our customers in terms of ease. Booking a table in our resturant is super easy.You can check whether any slots are open or not by checking out our reservation list. Check now..."
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex flex-row gap-4 flex-wrap">
        <Featurecards title='Our Menu' imgpath='menucard.jpg' description={fooddesc} pathto='menu' linktext='Check Out Menu...' />
        <Featurecards title='Book a Table' imgpath='foodontable.jpg' description={booktable} pathto='bookslot' linktext='Book a Table...' />
        <Featurecards title='Our Opening Hours' imgpath='waiter.jpg' description={openinghrdet} pathto='about' linktext='Read About Us...' />
        <Featurecards title='Check Reservations' imgpath='sittingpeople.jpg' description={resdet} pathto='reservation' linktext='Check Reservations...' />
      </div>
      <Footer />
    </>
  )
}

export default App
