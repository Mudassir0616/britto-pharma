import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WhatWeDo from "./WhatWeDo";
import OurBusinesses from "./OurBusinesses";
import GrowthStory from "./GrowthStory";
import GlobalPresence from "./GlobalPresence";
import WhyChoose from "./WhyChoose";
import Leadership from "./Leadership";
import LandingFaq from "./LandingFaq";
import ContactSection from "./ContactSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="banner" id="home">
        <video className="banner-video" autoPlay muted loop playsInline>
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className="banner-content">
            <h1>
              Advancing Healthcare. Building the Future of Global
              Pharmaceuticals
            </h1>

            <p>
              Britto Pharmaceuticals delivers reliable pharmaceutical solutions
              through quality-driven manufacturing, strategic partnerships, and
              global distribution.
            </p>

            <a className="cta-btn banner-cta" href="#contact">
              Partner With Us →
            </a>
          </div>
        </div>
      </div>

      <section className="flex-container container flask-container" id="about">
        <div className="img-side">
          <img src="/images/flasks.png" alt="Pharmaceutical laboratory flasks" />
        </div>

        <div className="content-side">
          <p>
            Britto Pharma delivers end-to-end pharmaceutical solutions spanning
            contract manufacturing, generic medicine manufacturing, and global
            distribution. With a focus on consistent quality, regulatory
            compliance and reliable production, we support pharmaceutical brands
            and healthcare partners across diverse markets.Britto Pharma
            delivers end-to-end pharmaceutical solutions spanning contract
            manufacturing, generic medicine manufacturing, and global
            distribution. With a focus on consistent quality, regulatory
            compliance and reliable production, we support pharmaceutical brands
            and healthcare partners across diverse markets.
          </p>
        </div>
      </section>

      <WhatWeDo />
      <OurBusinesses />
      <GrowthStory />
      <GlobalPresence />
      <WhyChoose />
      <Leadership />
      <LandingFaq />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
