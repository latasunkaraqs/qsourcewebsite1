import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const HEADER_OFFSET = 91;

const navItems = [
  { id: "about", label: "about" },
  { id: "services", label: "services" },
  { id: "solutions", label: "solutions" },
  { id: "industries", label: "industries" },
  { id: "approach", label: "approach" },
  { id: "contact", label: "contact" },
];

const NavMenu = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // ✅ Clear highlight when not on home
  useEffect(() => {
    if (!isHome) setActive(null);
  }, [isHome]);

  // ✅ Scroll only on home route
  const scrollToSection = (selector) => {
    if (!isHome) return;

    setMenuOpen(false);

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
        offsetY: HEADER_OFFSET,
      },
      ease: "power2.out",
    });
  };

  // ✅ Register ScrollTriggers only on home
  useEffect(() => {
    if (!isHome) return;

    const triggers = navItems.map((item) => {
      const section = document.querySelector(`#${item.id}`);
      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(item.id),
        onEnterBack: () => setActive(item.id),
      });
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t && t.kill());
    };
  }, [isHome]);

  // ✅ Sidebar animation
  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;

    if (menuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.25,
      });

      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25,
      });

      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div>
      {/* Mobile hamburger */}
      <button
        className="lg:hidden z-50 flex flex-col gap-1"
        onClick={() => setMenuOpen(true)}
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center justify-end gap-[32px] navlinks">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(`#${item.id}`)}
              className={`
                transition-opacity duration-300 ease-out hover:opacity-70 cursor-pointer
                ${
                  isHome && active === item.id
                    ? "opacity-100 font-semibold border-b-[1px]"
                    : "opacity-50"
                }
              `}
            >
              <span className="font-onest font-medium text-[16px] capitalize text-[#1E1E1E]">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none lg:hidden z-40"
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="
          fixed top-0 right-0 h-full w-[280px]
          bg-white shadow-xl
          translate-x-full
          lg:hidden z-50
          p-8
        "
      >
        <button
          className="mb-8 text-sm opacity-70"
          onClick={() => setMenuOpen(false)}
        >
          Close ✕
        </button>

        <ul className="flex flex-col gap-6 navlinks">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(`#${item.id}`)}
                className={`text-left text-lg capitalize
                  ${
                    isHome && active === item.id
                      ? "opacity-100 font-semibold border-b-[1px]"
                      : "opacity-70"
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
