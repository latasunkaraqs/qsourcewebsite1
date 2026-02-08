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
    <footer className="relative min-h-[399px] bg-[url('src/assets/footerbg.png')] bg-cover">
      {/* Go to Top*/}
      {showTopArrow && (
        <img
          src={topArrow}
          alt="Go to top"
          className="absolute right-6 top-6 md:right-10 md:top-20 z-20 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 ">
        {/* Top footer content wrapper — responsive layout */}
        <div className="w-full pt-[38px] pb-[72px] flex flex-col md:flex-row items-start">
          {/* Left section — Company branding + description */}
          <div className="w-full md:w-[40%] pt-8 font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex items-center justify-center md:justify-start md:items-start">
            <img src={footerLogo} alt="Qsource" className="h-[90px]" />
            {/* <p className="mt-2 text-center md:text-start">
              Transform your challenges into triumphs
              <br />
              with our comprehensive IT solutions. Your
              <br />
              success story begins with our expertise.
            </p> */}
          </div>

          {/* Middle section — Contact info + social media */}
          <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4 justify-center items-center md:items-start">
            <p className="font-bold">Connect with us:</p>
            <p className="text-center md:text-start">
              Phone
              <br />
              +1 832-400-2629
            </p>
            <p className="text-center md:text-start">
              Email
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

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <div className="w-full pt-10 md:w-[30%] font-onest font-medium text-[16px] leading-[130%] tracking-[-0.03em] text-[#021933] flex flex-col gap-4 justify-center items-center md:items-start md:justify-start">
            <p className="font-bold text-center md:text-start">USA:</p>
            <p className="text-center md:text-start">
              17302 House & Hahl Rd , Suite #310
              <br />
              Cypress, Texas, 77433 , United States.
            </p>
            <p className="font-bold text-center md:text-start">India:</p>
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
        <div className="w-full flex flex-col-reverse gap-6 md:gap-4 lg:flex-row lg:items-center lg:justify-between pb-10 md:pb-14 lg:pb-[72px]">
          {/* Copyright */}
          <div className="font-onest font-medium text-sm md:text-base leading-tight text-[#021933] text-center lg:text-left">
            Copyright © {new Date().getFullYear()} QSource Group Inc. All rights
            reserved.
          </div>

          {/* Legal links */}
          <div
            className="
    font-onest font-medium text-sm md:text-base leading-tight text-[#021933]
    flex flex-wrap gap-x-5 gap-y-2
    justify-center lg:justify-end
  "
          >
            <Link to="/privacy-policy" className="cursor-pointer">
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms-of-service" className="cursor-pointer">
              <span>Terms of Service</span>
            </Link>
            <Link to="/cookie-policy" className="cursor-pointer">
              <span>Cookie Policy</span>
            </Link>
            <Link to="/security-compliance" className="cursor-pointer">
              <span>Security & Compliance</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
