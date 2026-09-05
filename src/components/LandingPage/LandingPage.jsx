import { East } from "@mui/icons-material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="banner">
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

            <button className="cta-btn">Partner With Us →</button>
          </div>
        </div>
      </div>

      <section className="flex-container container flask-container">
        <div className="img-side">
          <img src="/images/flasks.png" alt="" />
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
    </div>
  );
};

export default LandingPage;
