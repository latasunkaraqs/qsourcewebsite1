import React from "react";
import ServiceImg1 from "../../assets/technology.svg";
import ServiceImg2 from "../../assets/supply-chain.svg";
import ServiceImg3 from "../../assets/health.svg";
import ServiceImg4 from "../../assets/oilpump.svg";

export const Service1 = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img src={ServiceImg1} alt="Service 1" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
};

export const Service2 = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img src={ServiceImg2} alt="Service 2" className="w-[61px] h-[61px]" />
      </div>
    </div>
  );
};

export const Service3 = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img src={ServiceImg3} alt="Service 3" className="w-[48px] h-[48px]" />
      </div>
    </div>
  );
};

export const Service4 = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img src={ServiceImg4} alt="Service 4" className="w-[55px] h-[55px]" />
      </div>
    </div>
  );
};
