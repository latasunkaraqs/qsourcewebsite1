import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/croppedLogo.svg";
import topArrow from "../../assets/topArrow.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/Youtube.svg";
import Instagram from "../../assets/Instagram.svg";

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
      <div className="w-full pt-[38px] px-[20px] pb-[72px] md:px-[75px] flex flex-col md:flex-row items-start">
        {/* Left section — Company branding + description */}
        <div className="w-full md:w-[40%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col justify-center items-center md:items-start">
          <img src={footerLogo} alt="Qsource" className="h-[90px]" />
          <p className="mt-2 text-center md:text-start">
            Transform your challenges into triumphs
            <br />
            with our comprehensive IT solutions. Your
            <br />
            success story begins with our expertise.
          </p>
        </div>

        {/* Middle section — Contact info + social media */}
        <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4 justify-center items-center md:items-start">
          <p className="font-bold">Connect with us:</p>
          <p className="text-center md:text-start">
            Call us directly
            <br />
            832-400-2629
          </p>
          <p className="text-center md:text-start">
            Mail us directly
            <br />
            hr@qsourcegroupinc.com
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="h-[24px] w-[24px] cursor-pointer"
              />
            </a>

            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={Twitter}
                alt="Twitter"
                className="h-[24px] w-[24px] cursor-pointer"
              />
            </a>

            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="h-[24px] w-[24px] cursor-pointer"
              />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Youtube}
                alt="YouTube"
                className="h-[24px] w-[24px] cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Right section — Office addresses */}
        <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4 justify-center items-center md:items-start">
          <p className="font-bold text-center md:text-start">USA Office:</p>
          <p className="text-center md:text-start">
            17302 House & Hahl Rd , Suite #310
            <br />
            Cypress, Texas, 77433 , United States.
          </p>
          <p className="font-bold text-center md:text-start">India Office:</p>
          <p className="text-center md:text-start">
            # 821, Regus,
            <br />
            Manjeera Trinity Corporate, J.N.T.U.
            <br />
            Road, Hyderabad, Telangana - 500072
          </p>
        </div>
      </div>

      {/* Bottom footer bar — copyright + legal links */}
      <div className="w-full flex flex-col lg:flex-row justify-between px-[72px] pb-[72px]">
        <p className="pb-6 font-onest font-medium text-[16px] leading-[100%] tracking-normal text-[#021933] text-center lg:text-left">
          Copyright © {new Date().getFullYear()} Qsource Group Inc. All rights
          reserved.
        </p>
        <p className="font-onest font-medium text-[16px] leading-[100%] tracking-normal text-[#021933] flex gap-26 justify-center lg:justify-end">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
