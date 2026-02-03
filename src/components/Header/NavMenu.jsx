import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <ul className="flex items-center font-onest font-medium text-[16px] leading-[100%] tracking-normal uppercase text-[#1E1E1E] gap-[32px] pr-[28px]">
        <li>
          <Link to="/about" className="transition-opacity duration-300 ease-out hover:opacity-70">about</Link>
        </li>
        <li>
          <Link to="/services" className="transition-opacity duration-300 ease-out hover:opacity-70">services</Link>
        </li>
        <li>
          <Link to="/solutions" className="transition-opacity duration-300 ease-out hover:opacity-70">solutions</Link>
        </li>
        <li>
          <Link to="/industries" className="transition-opacity duration-300 ease-out hover:opacity-70">industries</Link>
        </li>
        <li>
          <Link to="/differentiators" className="transition-opacity duration-300 ease-out hover:opacity-70">our differentiators</Link>
        </li>
        <li>
          <Link to="/contact" className="transition-opacity duration-300 ease-out hover:opacity-70">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
