import { Link } from 'react-router-dom'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center">
                <aside>
                    <img src="/notfound.jpg" alt="404 not found" className="w-[130px] h-[130px]" />
                </aside>
                <div className="ml-8 -mt-[40px]" style={{ fontFamily: "Dynapuff" }}>
                    <p
                        style={{
                            marginTop: "-40px",
                            fontSize: '7rem',
                            fontWeight: "bolder",
                            textShadow: "7px 7px orange, 18px 18px black",
                            WebkitTextStrokeWidth: "4px",
                            WebkitTextStrokeColor: "white",
                            WebkitTextFillColor: "transparent",
                        }}>
                        404
                    </p>
                    <h1 className="text-3xl font-bold text-blue-500">Oh no! Page not found</h1>
                    <div>
                        <p style={{ color: '#718096' }}>You won't be able to find your favorite food here :(</p>
                        <p style={{ color: '#718096' }}>The page you are looking for doesn't exist. Please check any typos in the URL.</p>
                        <p style={{ color: '#718096' }}>If you were forwarded here, we apologize for the inconvenience.</p>
                        <p style={{ color: '#718096' }}>Just hit the button below to go to the homepage.</p>
                    </div>
                    <div className='mt-10'>
                        <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go to Homepage
                        </button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound