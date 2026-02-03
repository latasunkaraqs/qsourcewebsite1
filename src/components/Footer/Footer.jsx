import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/footerLogo.png";
import topArrow from "../../assets/topArrow.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Youtube from "../../assets/Youtube.png";
import Instagram from "../../assets/Instagram.png";

const Footer = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopArrow(true);
      } else {
        setShowTopArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="min-h-[399px] bg-[url('src/assets/footerbg.png')] bg-cover">
      {/* Go to Top*/}
      {showTopArrow && (
        <img
          src={topArrow}
          alt="Go to top"
          className="fixed right-[30px] bottom-[30px] cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}

      {/* Top footer content wrapper — responsive layout */}
      <div className="w-full pt-[38px] px-[20px] pb-[72px] md:px-[75px] flex flex-col md:flex-row gap-6 md:gap-0 items-start">
        {/* Left section — Company branding + description */}
        <div className="w-full md:w-[40%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933]">
          <img src={footerLogo} alt="Qsource" className="w-[250px] h-[95px] " />
          <p className="mt-2">
            Transform your challenges into triumphs
            <br />
            with our comprehensive IT solutions. Your
            <br />
            success story begins with our expertise.
          </p>
        </div>

        {/* Middle section — Contact info + social media */}
        <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4">
          <p className="font-bold">Connect with us:</p>
          <p>
            Call us directly
            <br />
            832-400-2629
          </p>
          <p>
            Mail us directly
            <br />
            hr@qsourcegroupinc.com
          </p>
          <div className="flex gap-5">
            <img src={Facebook} alt="f" className="h-[24px] w-[24px]" />
            <img src={Twitter} alt="t" className="h-[24px] w-[24px]" />
            <img src={Instagram} alt="i" className="h-[24px] w-[24px]" />
            <img src={Youtube} alt="y" className="h-[24px] w-[24px]" />
          </div>
        </div>

        {/* Right section — Office addresses */}
        <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4">
          <p className="font-bold">USA Office:</p>
          <p>
            17302 House & Hahl Rd , Suite #310
            <br />
            Cypress, Texas, 77433 , United States.
          </p>
          <p className="font-bold">India Office:</p>
          <p>
            # 821, Regus,
            <br />
            Manjeera Trinity Corporate, J.N.T.U.
            <br />
            Road, Hyderabad, Telangana - 500072
          </p>
        </div>
      </div>

      {/* Bottom footer bar — copyright + legal links */}
      <div className="w-full flex flex-row justify-between px-[75px]">
        <p className="pb-[72px] font-onest font-medium text-[16px] leading-[100%] tracking-normal text-[#021933]">
          Copyright © {new Date().getFullYear()} Qsource Group Inc. All rights
          reserved.
        </p>
        <p className="pr-[72px] pb-[72px] font-onest font-medium text-[16px] leading-[100%] tracking-normal text-[#021933] flex gap-26">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
