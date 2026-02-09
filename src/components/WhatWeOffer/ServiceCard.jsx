// import { useState, useEffect } from "react";
import bullet from "../../assets/bullet.svg";

const ServiceCard = ({ image: Image, title, solutions }) => {
  return (
    <div className="group border border-[#0085F6] rounded-[20px] pt-6 flex flex-col items-center justify-center bg-[#0085F6] width-[320px] h-[950px]">
      <div className="flex flex-col flex-1 w-full justify-start items-start px-6">
        <div className="justify-start">
          <Image />
        </div>
        <h3
          title={title}
          className="w-full h-[80px] mt-5 text-white font-onest text-[28px] font-bold leading-[100%] tracking-[-0.03em] "
        >
          {title}
        </h3>
      </div>

      <div className="flex-3 w-full mt-5 bg-white rounded-[20px] p-6">
        <ul>
          {solutions.map((solution, idx) => {
            return (
              <li key={idx} className="flex gap-3 items-start py-2">
                <img src={bullet} alt="*" className="mt-1.25" />
                <p className="font-onest text-[16px] font-medium tracking-[0.03em]">
                  {solution}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
