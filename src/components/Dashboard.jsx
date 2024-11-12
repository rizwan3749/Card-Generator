import React from "react";
// import "./LandingPage.css"; 
import { CiCreditCard1 } from "react-icons/ci";
import User from "./User";
import Collection from "./Collection";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900  overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-10">
        <div className="text-white text-xl gap-1 flex font-bold">
          <CiCreditCard1 className="w-5 h-5 mt-1  flex" />
          Card-Generater
        </div>
        <nav className="space-x-8">
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Product
          </a>
          <a href="#" className="text-white">
            Pricing
          </a>
          <a
            href="/Signup"
            className="text-white border hover:bg-gray-200 hover:text-violet-500 font-bold px-4 py-2 rounded-full"
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex justify-between items-center text-center pt-20">
        <div className="max-w-xl ml-14">
          <h1 className="text-5xl font-bold text-white mb-4">
            Payments have never been easier
          </h1>
          <p className="text-white text-lg mb-6">
            Discover the easiest way to manage your personal finances. Save,
            pay, withdraw, and receive money all over the world with no limits!
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
              Get started
            </button>
            <a href="#" className="text-blue-200 mt-3">
              Download App
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mr-28 h-60 mb-10 justify-center">
          {/* First Card */}
          <div className="relative w-[450px] h-62 p-5 -mt-10 mr-4 rounded-3xl bg-white/10 backdrop-blur border border-white/20 text-white shadow-2xl z-20 transform rotate-[14deg]">
            <div className="flex justify-between items-center mb-6">
              <CiCreditCard1 className="w-12 h-12" />
              <p className="text-sm">11/27</p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-widest">
                3516 8643 7614 9242
              </p>
              <p className="text-md mt-12 text-left opacity-75">Card Holder</p>
              <p className="font-semibold text-left text-xl">Joshua Cash</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative w-80 h-48 p-5 rounded-3xl ml-4 -mt-4 bg-white/10 border border-white/40 text-white shadow-2xl z-10 transform rotate-[-12deg]">
            <div className="flex justify-between items-center mb-6">
              <CiCreditCard1 className="w-12 h-10" />
              <p className="text-sm">09/24</p>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-widest">
                5136 7541 0873 0029
              </p>
              <p className="text-sm mt-4 text-left opacity-75">Card Holder</p>
              <p className="font-semibold text-left text-lg">Sarah Gold</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Component */}
      <div>
        <User />
      </div>
      <div>
        <Collection />
      </div>

      {/* Footer */}
      {/* <footer className="text-center mt-32">
        <p className="text-white text-sm">
          Learn more about{" "}
          <a href="#" className="underline">
            digital banking here
          </a>
          .
        </p>
      </footer> */}
    </div>
  );
};

export default LandingPage;
