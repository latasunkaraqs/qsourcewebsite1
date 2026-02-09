import React from "react";
import partnersImage from "../../assets/uipath.svg";
import accredition1Image from "../../assets/womenowned.svg";
import accredition2Image from "../../assets/nmsdc.svg";
import accredition3Image from "../../assets/sbawosb.svg";
import accredition4Image from "../../assets/hub.svg";

const TrustSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-20 px-8 md:px-12 lg:px-18 py-[72px] justify-between items-center">
      {/* Partnership */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-6 justify-start items-center">
          <p className="font-onest text-[26px] font-medium leading-[100%] tracking-[-0.03em] text-center">
            Our Partnerships
          </p>
          <img
            src={partnersImage}
            alt="Partners"
            className="w-[175px] h-[57px] opacity-100 lg:grayscale lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0 transition duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Vertical Line*/}
      {/* <div className="w-[0.5px] h-[129px] bg-black hidden lg:block"></div> */}

      {/* Accreditations */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 justify-center">
          <p className="font-onest text-[26px] font-medium leading-[100%] tracking-[-0.03em] text-center">
            Our Accreditations
          </p>
          <div className="flex flex-wrap gap-15 md:gap-25 items-center justify-center">
            <img
              src={accredition1Image}
              alt="Accreditation1"
              className="w-[117px] h-[66px] opacity-100 lg:grayscale lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition2Image}
              alt="Accreditation2"
              className="w-[131px] h-[83px] opacity-100 lg:grayscale lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition3Image}
              alt="Accreditation3"
              className="w-[224px] h-[65px] opacity-100 lg:grayscale lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0 transition duration-300 cursor-pointer"
            />
            <img
              src={accredition4Image}
              alt="Accreditation4"
              className="w-[108px] h-[83px] opacity-100 lg:grayscale lg:opacity-70 lg:hover:opacity-100 lg:hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
