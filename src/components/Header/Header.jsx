import React from "react";
import logo from "../../assets/QSource-Logo.png";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[91px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.03)] flex items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="QSource"
          className="w-[267px] h-[62px] top-[12px] left-[28px]"
        />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
