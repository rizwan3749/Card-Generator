import { React, useState, useRef } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import "./LandingPage.css"; 

const user = () => {
  const [showNotification, setShowNotification] = useState(false);
  const emailInputRef = useRef(null);

   const handleApplyClick = () => {
     setShowNotification(true);
     if (emailInputRef.current) {
       emailInputRef.current.value = ""; 
     }
     setTimeout(() => {
       setShowNotification(false);
     }, 3000); // Hide notification after 3 seconds
   };


  return (
    <div className="flex mt-44 justify-center items-center min-h-screen bg-gradient-to-br from-purple-800 via-purple-800 to-gray-900">
      <div className="relative p-10 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 rounded-xl shadow-2xl h-[19rem] max-w-5xl mx-auto">
        {/* Decorative 3D shapes */}
        <div className="absolute -top-10 left-5 transform -rotate-12 w-20 h-20 bg-purple-300 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute -bottom-10 right-5 transform rotate-12 w-40 h-40 bg-purple-300 rounded-full filter blur-2xl opacity-30"></div>

        {/* Text Section */}
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold">
            Worldwide Purchase Access From Your Platinum Card
          </h1>
          <p>
            Free upgrade option to our platinum services and get lifetime
            validity.
          </p>
          {/* Form */}
          <div className="mt-10 relative">
            <input
              type="email"
              ref={emailInputRef}
              placeholder="Your Email"
              className="p-3 rounded-l-lg mt-0.5 mb-0.5 ml-0.5 justify-center text-gray-800 focus:outline-none"
            />
            <button
              onClick={handleApplyClick}
              className="p-3 bg-purple-700 hover:bg-purple-800 text-white rounded-r-lg"
            >
              APPLY
            </button>
            <p className="text-center ml-10">Hover Card</p>

            {showNotification && (
              <div className="absolute top-[-50px] left-0 right-0 flex justify-center">
                <div className="p-3 bg-green-500 text-white rounded-lg shadow-lg">
                  Thank you for applying!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Card Section */}
        <div className="relative mr-28 h-60 mb-12 justify-center">
          <div className="flip-card absolute -right-20 -top-[140px] w-[22rem] h-[14rem] rounded-lg p-6 -rotate-3 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="text-white">
                  <h2 className="font-semibold mt-3 ml-3">Platinum Card</h2>
                  <CiCreditCard1 className="w-8 h-8 mt-1 flex ml-3" />
                  <div className="mt-2">
                    <p className="text-center text-lg">6689 2547 2265 1258</p>
                    <p className="text-sm mt-3 ml-4">JESSICA JESSY</p>
                    <p className="text-sm mt-2 ml-4">02/49</p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="text-white">
                  <h2 className="font-semibold mt-3 ml-3">Card Details</h2>
                  <div className="strip mt-2"></div>
                  <div className="mstrip mt-2 "></div>
                  <h2 className="mt-12 ml-40">Cvv ***</h2>
                  <p className="text-center mt-6">This is the back side.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default user;
