import { Link } from 'react-router-dom';
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

function ThankYouPage() {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "#f0f0f0" }}>
                <img src='/deliver.png' style={{ width: "395px", height: "395px", margin: "0 auto" }} />
                <h1 className="text-3xl font-bold text-blue-800 mb-4">Thanks for ordering food at our website !!</h1>
                <h1 className="text-3xl font-bold text-blue-500 mb-4">Your Order is on the way!! </h1>
                <Link to="/menu">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                        Go back to menu
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default ThankYouPage;
