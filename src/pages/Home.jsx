import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import WhatWeOfferSection from "../components/WhatWeOffer/WhatWeOfferSection";
import WhoWeServeSection from "../components/WhoWeServe/WhoWeServeSection";
import ValuesSection from "../components/Values/ValuesSection";
import TrustSection from "../components/Trust/TrustSection";
import ContactSection from "../components/Contact/ContactSection";

import swigglyLine1 from "../assets/swigglyLine1.svg";
import swigglyLine2 from "../assets/swigglyLine2.svg";

console.log("swigglyLine2", swigglyLine2);

const Home = () => {
  return (
    <div>
      {/* Without Section Ids */}
      {/* <HeroSection />
      <WhatWeDoSection />
      <WhatWeOfferSection />
      <WhoWeServeSection />
      <ValuesSection />
      <TrustSection />
      <ContactSection /> */}

      {/* With Section IDs */}
      <div className="relative">
        <section id="about">
          <HeroSection />
        </section>
        <img
          src={swigglyLine1}
          alt="Swiggly Line 1"
          className="absolute left-130 top-124 z-20"
        />

        <section id="services">
          <WhatWeDoSection />
        </section>
      </div>

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
    </div>
  );
};

export default Home;
