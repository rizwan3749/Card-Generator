import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./LandingPage.css";

const Collection = () => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate("/CardDisplay"); 
  };

  return (
    <div className="grid items-center gap-10 justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900">
      <h1 className="text-center text-white text-3xl font-bold bg-black/60 px-6 py-2 rounded-lg">
        Card Collections
      </h1>

      <div className="flex gap-10 mb-36">
        <figure
          className="border w-48 rounded-lg cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            src="/c1.png"
            alt="The Black Metallic Card"
            className="hover-image h-48 w-48"
          />
          <figcaption>The Black Metallic Card</figcaption>
        </figure>
        <figure
          className="border w-48 rounded-lg cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            src="/c2.png"
            alt="The White Metallic Card"
            className="hover-image h-48 w-48"
          />
          <figcaption>The White Metallic Card</figcaption>
        </figure>
        <figure
          className="border w-48 rounded-lg cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            src="/c3.png"
            alt="The White Metallic Card"
            className="hover-image h-48 w-48"
          />
          <figcaption>The White Metallic Card</figcaption>
        </figure>
        <figure
          className="border w-48 rounded-lg cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            src="/c4.png"
            alt="The White Metallic Card"
            className="hover-image h-48 w-48"
          />
          <figcaption>The White Metallic Card</figcaption>
        </figure>
        <figure
          className="border w-48 rounded-lg cursor-pointer"
          onClick={handleCardClick}
        >
          <img
            src="/c5.png"
            alt="The White Metallic Card"
            className="hover-image h-48 w-48"
          />
          <figcaption>The White Metallic Card</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Collection;
