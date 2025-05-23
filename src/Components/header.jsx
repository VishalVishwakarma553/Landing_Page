import React, { useState } from "react";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-20 flex items-center ">
      <div className="container mx-auto flex justify-between">
        <img src="./logo.png" alt="logo" className="w-[170px] object-fill" />
        <div className="flex gap-9 items-center font-medium font-[Raleway]">
          <ul className=" gap-2 text-[#0E1F51] text-[16px] hidden sm:flex">
            <li>About US</li>
            <li>Features</li>
            <li>More Option</li>
            <li>Contact</li>
          </ul>
          <div className="sm:flex gap-2 hidden">
            <button className="p-2 px-6 border border-red-400 rounded-md text-[#FF3E54]">
              Log In
            </button>
            <button className="p-2 px-6 border border-red-400 rounded-md bg-[#FF3E54] text-white">
              Sign Up
            </button>
          </div>
          <div className="text-black text-6xl sm:hidden flex pr-2" onClick={() => setIsOpen(true)}>=</div>
        </div>
        {IsOpen && (
          <div
            className={`fixed top-0 right-0 w-64 z-50 shadow-lg bg-white transition-transform duration-500 ease-in-out ${
              IsOpen ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </button>
            <div className="flex flex-col items-center gap-6 p-12  space-y-4">
              <p className="text-[#0E1F51] text-[16px]">About US</p>
              <p className="text-[#0E1F51] text-[16px]">Features</p>
              <p className="text-[#0E1F51] text-[16px]">More Option</p>
              <p className="text-[#0E1F51] text-[16px]">Contact</p>
              <div className="flex gap-2">
                <button className="p-2 px-6 border border-red-400 rounded-md text-[#FF3E54]">
                  Log In
                </button>
                <button className="p-2 px-6 border border-red-400 rounded-md bg-[#FF3E54] text-white">
                  Sign Up
                </button>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
