import React from "react";
import partnersImage from "../../assets/partners.png";
import accredition1Image from "../../assets/accreditation1.png";
import accredition2Image from "../../assets/accreditation2.png";
import accredition3Image from "../../assets/accreditation3.png";
import accredition4Image from "../../assets/accreditation4.png";

const TrustSection = () => {
  return (
    <div className="flex px-[40px] py-[72px] gap-40 justify-center items-center">
      {/* Partnership */}
      <div className="flex justify-center gap-2">
        <div className="flex flex-col gap-5">
          <p className="font-onest text-[30px] font-medium leading-[100%] tracking-[-0.03em]">
            Our Partnership
          </p>
          <img
            src={partnersImage}
            alt="Partners"
            className="w-[175px] h-[57px]"
          />
        </div>
      </div>

      {/* Vertical Line*/}
      <div className="w-[0.5px] h-[129px] bg-black"></div>

      {/* Accreditations */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-5">
          <p className="font-onest text-[30px] font-medium leading-[100%] tracking-[-0.03em]">
            Accreditations
          </p>
          <div className="flex gap-10 items-center ">
            <img
              src={accredition1Image}
              alt="Accreditation1"
              className="w-[117px] h-[66px]"
            />
            <img
              src={accredition2Image}
              alt="Accreditation2"
              className="w-[131px] h-[83px]"
            />
            <img
              src={accredition3Image}
              alt="Accreditation3"
              className="w-[224px] h-[65px]"
            />
            <img
              src={accredition4Image}
              alt="Accreditation4"
              className="w-[108px] h-[83px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
