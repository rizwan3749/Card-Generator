import React, { useState } from "react";

const CardDisplay = () => {
  const [selectedCard, setSelectedCard] = useState("Visa");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const cards = [
    { id: 1, title: "Visa" },
    { id: 2, title: "MasterCard" },
    { id: 3, title: "American Express" },
    { id: 4, title: "Discover" },
  ];

  const handleCardChange = (e) => {
    setSelectedCard(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Card Details Submitted:\nType: ${selectedCard}\nNumber: ${cardNumber}\nCVV: ${cvv}`
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 min-h-[130vh]">
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 bg-white/20 rounded-lg shadow-md border"
      >
        <label htmlFor="cardType" className="block font-semibold mb-2">
          Select Card Type:
        </label>
        <select
          id="cardType"
          value={selectedCard}
          onChange={handleCardChange}
          className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {cards.map((card) => (
            <option key={card.id} value={card.title}>
              {card.title}
            </option>
          ))}
        </select>

        <label htmlFor="cardNumber" className="block font-semibold mb-2">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
          className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="cvv" className="block font-semibold mb-2">
          CVV:
        </label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
          required
          className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      <div className="flex justify-around flex-wrap">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-48 p-4 ${
              card.style
            } text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 ${
              selectedCard === card.title ? "border-2 w-72 h-42 rounded-2xl border-white" : "hidden"
            }`}
          >
            <div className="flip-card mt-6 ml-2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="heading_8264">{card.title}</p>
                  <p className="number">
                    Card Number: {cardNumber || "**** **** **** ****"}
                  </p>
                  <p className="valid_thru">VALID THRU</p>
                  <p className="date_8264">12/24</p>
                  <p className="name">BRUCE WAYNE</p>
                </div>
                <div className="flip-card-back">
                  <div className="Anotherstrip"></div>
                  <div className="mstrip"></div>
                  <div className="sstrip">
                    <p className="code">{cvv || "***"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
