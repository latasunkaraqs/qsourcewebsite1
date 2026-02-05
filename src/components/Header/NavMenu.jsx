import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const HEADER_OFFSET = 91;

const NavMenu = () => {
  const [active, setActive] = useState(null);
  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);

    if (!el) return;
    if (selector === "#solutions") {
      const st = ScrollTrigger.getById("solutionsPin");

      if (st) {
        gsap.to(window, {
          duration: 0,
          scrollTo: st.end,
          ease: "power2.out",
          autoKill: false,
        });
        return;
      }
    }

    gsap.to(window, {
      duration: 0,
      scrollTo: {
        y: el,
        offsetY: HEADER_OFFSET, // adjust if you have sticky header
      },
      ease: "power2.out",
    });
  };
  useEffect(() => {
    navItems.forEach((item) => {
      const section = document.querySelector(`#${item.id}`);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => setActive(item.id),
        onEnterBack: () => setActive(item.id),
      });
    });

    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div>
      {/* <ul className="flex items-center justify-end font-onest font-medium text-[16px] leading-[100%] tracking-normal capitalize text-[#1E1E1E] gap-[32px]"> */}
      <ul className="flex items-center justify-end gap-[32px]">
        {/* Routing List items */}
        {/* <li>
          <Link
            to="/about"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            services
          </Link>
        </li>
        <li>
          <Link
            to="/solutions"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            solutions
          </Link>
        </li>
        <li>
          <Link
            to="/industries"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            industries
          </Link>
        </li>
        <li>
          <Link
            to="/differentiators"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            our differentiators
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            contact
          </Link>
        </li> */}

        {/* Anchor Tag List Items */}
        {/* <li>
          <button
            onClick={() => scrollToSection("#about")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            about
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("#services")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            services
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("#solutions")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            solutions
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("#industries")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            industries
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("#differentiators")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            our differentiators
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection("#contact")}
            className="transition-opacity duration-300 ease-out hover:opacity-70"
          >
            contact
          </button>
        </li> */}
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(`#${item.id}`)}
              className={` 
              transition-opacity duration-300 ease-out hover:opacity-70 cursor-pointer
              ${active === item.id ? "opacity-100 font-semibold border-b-[1px]" : "opacity-50"}
            `}
            >
              <span className="font-onest font-medium text-[16px] leading-[100%] tracking-normal capitalize text-[#1E1E1E]">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const navItems = [
  { id: "about", label: "about" },
  { id: "services", label: "services" },
  { id: "solutions", label: "solutions" },
  { id: "industries", label: "industries" },
  { id: "differentiators", label: "our differentiators" },
  { id: "contact", label: "contact" },
];

export default NavMenu;
