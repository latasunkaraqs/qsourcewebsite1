import { useLayoutEffect, useRef } from "react";
// import { useRef } from "react";
import HeroSection from "../components/Hero/HeroSection";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import WhatWeOfferSection from "../components/WhatWeOffer/WhatWeOfferSection";
import WhoWeServeSection from "../components/WhoWeServe/WhoWeServeSection";
import ValuesSection from "../components/Values/ValuesSection";
import TrustSection from "../components/Trust/TrustSection";
import ContactSection from "../components/Contact/ContactSection";
import SwigglyLineSVG from "../assets/swigglyLine1.svg?react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// console.log("swigglyLine2", swigglyLine2);

const Home = () => {
  const svgLineRef = useRef(null);
  useLayoutEffect(() => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const svg = svgLineRef.current;
      if (!svg) return;

      const path = svg.querySelector("path");
      if (!path) return;

      const length = path.getTotalLength();

      // hide line initially
      gsap.set(path, {
        strokeDasharray: length,
      });

      // draw on scroll
      gsap.fromTo(
        path,
        {
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 2,
          scrollTrigger: {
            trigger: svgLineRef.current,
            start: "top top",
            end: `${length * 0.7}`,
            scrub: 1,
          },
        },
      );
    }, svgLineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Without Section Ids */}
      {/* <HeroSection />
      <WhatWeDoSection />
      <WhatWeOfferSection />
      <WhoWeServeSection />
      <ValuesSection />
      <TrustSection />
      <ContactSection /> */}

      {/* With Section IDs */}
      <section id="about">
        <HeroSection />
      </section>

      <section id="services">
        <WhatWeDoSection />
      </section>

      <section id="solutions">
        <WhatWeOfferSection />
      </section>

      <section id="industries">
        <WhoWeServeSection />
      </section>

      <section id="approach">
        <ValuesSection />
        <TrustSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <SwigglyLineSVG
        ref={svgLineRef}
        className="absolute top-15 left-0 -z-10 w-full"
      />
    </div>
  );
};

export default Home;
