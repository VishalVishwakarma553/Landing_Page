import React from "react";
import { featuresConstant } from "../constants/features";

const FeaturesSection = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 space-y-8">
      <h1 className="text-center text-4xl font-bold text-[#0E1F51]">
        Transform Your Productivity with Our <br /> Innovative To-Do List
        Features
      </h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 grid-cols gap-4 px-2">
        {featuresConstant.map((item, idx) => (
          <div className="p-5 bg-[#F7F7F7] space-y-4 rounded-md relative" key={idx}>
            <h1 className="absolute right-2 top-3 text-[42px] text-[#0E1F51] opacity-10 font-extrabold" >0{idx+1}</h1>
            <div className="w-[65px] h-[60px] rounded-lg bg-[#FFFFFF] p-2">{item.logo}</div>
            <div>
              <h2 className="text-[#0E1F51] font-bold">{item.slogan}</h2>
              <div className={`flex items-center h-[6px] gap-2 ${(idx != 1)?"mt-4":""} `}>
                <div className="w-[60px] h-full rounded-md bg-[#FF3E54]"></div>
                <div className="w-[20px] h-full rounded-md bg-[#FF3E54]"></div>
              </div>
            </div>
            <p className="font-medium text-lg text-[#000000]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
