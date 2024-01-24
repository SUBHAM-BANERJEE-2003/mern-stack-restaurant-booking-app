import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SliderCards from "./SliderCards";
const list = ['biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani', 'biryani']

const ScrollButtons = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 100;

    return (
        <div className="flex ml-32">
            <button
                className="nav-btn mr-10"
                onClick={() => {
                    const container = sliderRef.current;
                    container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                }} >
                <FaChevronLeft />
            </button>
            <div className="flex max-w-[1200px] overflow-scroll scroll-smooth transition-scroll duration-300 ease-in-out" ref={sliderRef}>
                {
                    list.map((prod) => {
                        return <SliderCards foodname={prod} key={prod} />;
                    })
                }
            </div>
            <button
                className="nav-btn ml-10"
                onClick={() => {
                    const container = sliderRef.current;
                    container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                }}
            >
                <FaChevronRight />
            </button>
        </div >
    );
};

export default ScrollButtons;