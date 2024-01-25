
const SliderCards = ({ foodname, photoname }) => {
    return (
        <div className="mr-16 flex flex-col items-center">
            <img src={`/SliderImages/${photoname}`} alt={foodname} className="mt-16 w-40 h-40 max-w-[170%]" />
            <p className="ml-10 mt-2 text-lg text-slate-600 font-bold">{foodname}</p>
        </div>

    )
}

export default SliderCards