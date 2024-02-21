import { Detector } from "react-detect-offline";
import Footer from '../src/components/Footer';

const CheckConnection = props => {
    return <>
        <Detector
            render={({ online }) => (
                online ? props.children :
                    <>
                        <div className="flex items-center justify-center">
                            <aside>
                                <img src="/offlinepic.avif" alt="404 not found" className="w-[130px] h-[130px]" />
                            </aside>
                            <div className="ml-8 -mt-[40px]" style={{ fontFamily: "Dynapuff" }}>
                                <h1 className="text-3xl font-bold text-blue-500">Sorry! No internet Connection</h1>
                                <div>
                                    <p style={{ color: '#718096' }}>Please Check your internet Connection...</p>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            )}
        />

    </>
}

export default CheckConnection;