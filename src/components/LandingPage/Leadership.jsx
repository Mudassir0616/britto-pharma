import React from "react";

const Leadership = () => {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container leadership-container">
        <div className="leadership-content">
          <p className="eyebrow">OUR LEADERSHIP</p>
          <h2>
            Rohan <span>Britto</span>
          </h2>
          <h4>Founder & Managing Director</h4>
          <p>
            Rohan Britto leads the vision for Britto Pharmaceuticals, focusing
            on quality excellence, strategic partnerships, and sustainable
            global growth. Under his leadership, the group has expanded its
            capabilities across manufacturing, development, and international
            distribution, building a trusted presence in the pharmaceutical
            industry.
          </p>
        </div>

        <div className="leadership-visual">
          <div className="leader-frame">
            <img src="/images/choose-1.png" alt="Rohan Britto" />
          </div>
          <div className="leader-badge">
            <img src="/images/logo.png" alt="Britto Pharmaceuticals" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
