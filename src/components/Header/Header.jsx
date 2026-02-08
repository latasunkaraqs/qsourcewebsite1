import React from "react";
import logo from "../../assets/leftLogo.svg";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[91px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1440px] mx-auto h-full flex justify-between items-center px-6 md:px-10">
        <div>
          <a href="#about">
            <img src={logo} alt="QSource" className="h-[62px]" />
          </a>
        </div>

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
