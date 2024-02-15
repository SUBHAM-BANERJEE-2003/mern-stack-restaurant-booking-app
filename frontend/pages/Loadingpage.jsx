const LoaderComp = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="spinner_5nOS"
            >
                <style>
                    {`
            .spinner_5nOS {
              transform-origin: center;
              animation: spinner_sEAn 0.75s infinite linear;
            }
            @keyframes spinner_sEAn {
              100% {
                transform: rotate(360deg);
              }
            }
          `}
                </style>
                <path
                    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    opacity=".25"
                />
                <path
                    d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                    className="spinner_5nOS" // Add class name here
                />
            </svg>
        </div>
    );
};

export default LoaderComp;
