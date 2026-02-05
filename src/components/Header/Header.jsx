import React from "react";
import logo from "../../assets/leftLogo.svg";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[91px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.03)] flex justify-between items-center px-18">
      <div>
        {/* Without Anchor Tags */}
        {/* <Link to="/">
          <img src={logo} alt="QSource" className="w-[267px] h-[62px]" />
        </Link> */}

        {/* With anchor tags */}
        <a href="#about">
          <img src={logo} alt="QSource" className="h-[62px]" />
        </a>
      </div>

      <NavMenu />
    </header>
  );
};

export default Header;
