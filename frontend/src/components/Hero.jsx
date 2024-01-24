import HorizontalScroll from "./HorizontalScroll"

function Hero() {
  return (
    <div>
      <div className="w-full h-52 bg-gradient-to-b from-transparent via-gray-300 to-gray-300 rounded-b-3xl">
        <div className="ml-40 mt-16 text-4xl italic font-extrabold">Place Your First Order Now!</div>
        <div className="ml-40 mt-4 text-lg font-extrabold">Get 30% off on first order</div>
        <div className="ml-40 mt-5"><svg width="10%" height="10%" viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" strokeWidth="1.5"></path></svg></div>
        <button className="hover:bg-slate-500 w-32 h-9 ml-52 border border-gray-800 rounded-sm mt-5">Get Started! </button>
        <div className=" ml-[900px] -mt-52">
          <img src="/4800418.webp" className=" h-60 w-60"></img>
        </div>
      </div>
      <div className="ml-32 mt-5 text-xl"><b>What you want to eat today ?</b></div>
      <HorizontalScroll />
    </div>
  )
}

export default Hero