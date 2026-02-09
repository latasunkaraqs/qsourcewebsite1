import React from "react";
import industrytabimage1 from "../../assets/oilpump.svg";
import industrytabimage2 from "../../assets/thunderbolt.svg";
import industrytabimage3 from "../../assets/rpa.svg";
import industrytabimage4 from "../../assets/supply-chain.svg";
import industrytabimage5 from "../../assets/e-business.svg";
import industrytabimage6 from "../../assets/health.svg";
import industrytabimage7 from "../../assets/technology.svg";
import industrytabimage8 from "../../assets/telecommunication.svg";

export const Outcome1 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage1}
          alt="Industry Tab 1"
          className="w-[55px] h-[55px]"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Oil & Gas
      </p>
    </div>
  );
};

export const Outcome2 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage2}
          alt="Industry Tab 2"
          className="w-[56px] h-[56px]"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Energy & Utilities
      </p>
    </div>
  );
};

export const Outcome3 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage3}
          alt="Industry Tab 3"
          className="w-[60px] h-[60px] -translate-y-1"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Manufacturing
      </p>
    </div>
  );
};

export const Outcome4 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage4}
          alt="Industry Tab 4"
          className="w-[61px] h-[61px]"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Logistics
      </p>
    </div>
  );
};

export const Outcome5 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage5}
          alt="Industry Tab 5"
          className="w-[60px] h-[60px] -translate-x-2.5"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Retail & E-commerce
      </p>
    </div>
  );
};

export const Outcome6 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage6}
          alt="Industry Tab 6"
          className="w-[48px] h-[48px]"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Healthcare
      </p>
    </div>
  );
};

export const Outcome7 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage7}
          alt="Industry Tab 7"
          className="w-[50px] h-[50px]"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Banking Financial Services
      </p>
    </div>
  );
};

export const Outcome8 = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center">
        <img
          src={industrytabimage8}
          alt="Industry Tab 8"
          className="w-[60px] h-[60px] translate-x-1"
        />
      </div>
      <p className="font-onest text-[20px] font-medium leading-[100%] tracking-[-0.03em] text-white text-center max-w-[131px]">
        Tele communications
      </p>
    </div>
  );
};

export const Outcome = ({ text }) => {
  return (
    <div className="px-4 py-2 md:px-[19px] md:py-[16px] bg-white rounded-full flex items-center justify-center">
      <p className="font-onest text-[16px] lg:text-[18px] font-medium leading-[100%] tracking-[-0.03em] text-[#021933]">
        {text}
      </p>
    </div>
  );
};

export const EnterpriseOutcomesIcons = () => {
  return (
    <div className="w-full flex flex-wrap gap-5">
      <Outcome1 />
      <Outcome2 />
      <Outcome3 />
      <Outcome4 />
      <Outcome5 />
      <Outcome6 />
      <Outcome7 />
      <Outcome8 />
    </div>
  );
};
export const EnterpriseOutcomes = () => {
  return (
    <div className="w-full flex flex-wrap gap-3 md:gap-4 lg:gap-5">
      <Outcome text="Oil & Gas" />
      <Outcome text="Energy & Utilities" />
      <Outcome text="Manufacturing" />
      <Outcome text="Logistics & Supply Chain" />
      <Outcome text="Retail & E-commerce" />
      <Outcome text="Healthcare & Life Sciences" />
      <Outcome text="Banking, Financial Services & Insurance (BFSI)" />
      <Outcome text="Telecommunications & Media" />
    </div>
  );
};

export const GovernmentOutcomes = () => {
  return (
    <div className="w-full flex flex-wrap gap-3 md:gap-4 lg:gap-5">
      <Outcome text="Central, State & Local Government" />
      <Outcome text="Public Sector Undertakings (PSUs)" />
      <Outcome text="Smart Cities & Urban Modernization" />
      <Outcome text="Public Infrastructure & Transportation" />
      <Outcome text="Defense & Public Safety" />
    </div>
  );
};

export const CommercialOutcomes = () => {
  return (
    <div className="w-full flex flex-wrap gap-3 md:gap-4 lg:gap-5">
      <Outcome text="Real Estate & Property Management" />
      <Outcome text="Education & Research Institutions" />
      <Outcome text="Travel, Hospitality & Aviation" />
      <Outcome text="Automotive & Mobility" />
      <Outcome text="Professional Services" />
    </div>
  );
};

export const SpecialOutcomes = () => {
  return (
    <div className="w-full flex flex-wrap gap-3 md:gap-4 lg:gap-5">
      <Outcome text="Technology & SaaS Providers" />
      <Outcome text="Non-Profit & Social Impact Organizations" />
      <Outcome text="Renewable Energy & Sustainability" />
      <Outcome text="Startups & High-Growth Enterprises" />
    </div>
  );
};
