// import { useLayoutEffect, useRef } from "react";
import { useRef } from "react";
import HeroSection from "../components/Hero/HeroSection";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import WhatWeOfferSection from "../components/WhatWeOffer/WhatWeOfferSection";
import WhoWeServeSection from "../components/WhoWeServe/WhoWeServeSection";
import ValuesSection from "../components/Values/ValuesSection";
import TrustSection from "../components/Trust/TrustSection";
import ContactSection from "../components/Contact/ContactSection";
import SwigglyLineSVG from "../assets/swigglyLine.svg?react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// console.log("swigglyLine2", swigglyLine2);

const Home = () => {
  const svgLineRef = useRef(null);
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const svg = svgLineRef.current;
  //     if (!svg) return;

  //     const paths = svg.querySelectorAll("path, line, polyline");

  //     paths.forEach((path) => {
  //       const length = path.getTotalLength();

  //       // hide line initially
  //       gsap.set(path, {
  //         strokeDasharray: length,
  //         strokeDashoffset: length,
  //       });

  //       // scroll scrub draw
  //       gsap.to(path, {
  //         strokeDashoffset: 0,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: svg,
  //           start: "top 80%",
  //           end: "bottom 30%",
  //           scrub: true,
  //         },
  //       });
  //     });
  //   }, svgLineRef);

  //   return () => ctx.revert();
  // }, []);

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

      <section id="differentiators">
        <ValuesSection />
        <TrustSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <SwigglyLineSVG
        ref={svgLineRef}
        className="absolute -top-8 left-0 -z-10 w-full"
      />
    </div>
  );
};

export default Home;
