import { useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet";
// import { useRef } from "react";
import HeroSection from "../components/Hero/HeroSection";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import WhatWeOfferSection from "../components/WhatWeOffer/WhatWeOfferSection";
import WhoWeServeSection from "../components/WhoWeServe/WhoWeServeSection";
import ValuesSection from "../components/Values/ValuesSection";
import TrustSection from "../components/Trust/TrustSection";
import ContactSection from "../components/Contact/ContactSection";
// import SwigglyLineSVG from "../assets/swigglyLine1.svg?react";
import SwigglyLineSVG from "../assets/swigglyLine.svg?react";
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

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const svg = svgLineRef.current;
  //     if (!svg) return;

  //     const path = svg.querySelector("path");
  //     if (!path) return;

  //     const length = path.getTotalLength();

  //     // hide line initially
  //     gsap.set(path, {
  //       strokeDasharray: length,
  //     });

  //     // draw on scroll
  //     gsap.fromTo(
  //       path,
  //       {
  //         strokeDashoffset: length,
  //       },
  //       {
  //         strokeDashoffset: 0,
  //         duration: 2,
  //         scrollTrigger: {
  //           trigger: svgLineRef.current,
  //           start: "top top",
  //           end: `${length * 0.7}`,
  //           scrub: 1,
  //         },
  //       },
  //     );
  //   }, svgLineRef);

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    const svg = svgLineRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      // hide line
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // animate draw
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true, // ties animation to scroll
        },
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          QSource Group Inc. | Enterprise Technology Services & Solutions |
          Scalable, Reliable IT Delivery
        </title>
        <meta
          name="description"
          content="Enterprise technology services and solutions for complex, regulated, and large-scale environments. We design, modernize, and operate mission-critical systems with disciplined execution and long-term business focus."
        />
        <meta
          name="keywords"
          content="enterprise technology services, enterprise IT solutions, digital transformation services, cloud infrastructure operations, data analytics AI services, application modernization, enterprise systems integration, IT consulting and delivery, regulated industry IT solutions, mission-critical systems"
        />
      </Helmet>
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
          className="absolute -top-8 left-1/2 -translate-x-1/2 -z-10 max-w-[1440px]"
        />
      </div>
    </>
  );
};

export default Home;
