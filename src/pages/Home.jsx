import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import WhatWeDoSection from "../components/WhatWeDo/WhatWeDoSection";
import WhatWeOfferSection from "../components/WhatWeOffer/WhatWeOfferSection";
import WhoWeServeSection from "../components/WhoWeServe/WhoWeServeSection";
import ValuesSection from "../components/Values/ValuesSection";
import TrustSection from "../components/Trust/TrustSection";
import ContactSection from "../components/Contact/ContactSection";

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
    </div>
  );
};

export default Home;
