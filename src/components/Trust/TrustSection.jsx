import React from "react";
import partnersImage from "../../assets/uipath.svg";
import accredition1Image from "../../assets/womenowned.svg";
import accredition2Image from "../../assets/nmsdc.svg";
import accredition3Image from "../../assets/sbawosb.svg";
import accredition4Image from "../../assets/hub.svg";

const TrustSection = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[40px] py-[72px] gap-40 justify-center items-center lg:items-start">
      {/* Partnership */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-5 justify-start items-center lg:items-start">
          <p className="font-onest text-[30px] font-medium leading-[100%] tracking-[-0.03em] text-center lg:text-left">
            Our Partnership
          </p>
          <img
            src={partnersImage}
            alt="Partners"
            className="w-[175px] h-[57px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Vertical Line*/}
      <div className="w-[0.5px] h-[129px] bg-black hidden lg:block"></div>

      {/* Accreditations */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-5 justify-center lg:justify-start">
          <p className="font-onest text-[30px] font-medium leading-[100%] tracking-[-0.03em] text-center lg:text-left">
            Accreditations
          </p>
          <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-start">
            <img
              src={accredition1Image}
              alt="Accreditation1"
              className="w-[117px] h-[66px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition2Image}
              alt="Accreditation2"
              className="w-[131px] h-[83px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition3Image}
              alt="Accreditation3"
              className="w-[224px] h-[65px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition4Image}
              alt="Accreditation4"
              className="w-[108px] h-[83px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
