import React from "react";

const strengths = [
  {
    title: "Specialized Expertise",
    description:
      "Focused pharmaceutical expertise across research, development, manufacturing, supply, and market access.",
    image: "/images/choose-1.png",
    featured: true,
  },
  {
    title: "Global Perspective",
    image: "/images/choose-1.png",
  },
  {
    title: "Integrated Capabilities",
    image: "/images/choose-1.png",
  },
  {
    title: "Strategic Growth",
    image: "/images/choose-1.png",
  },
  {
    title: "Trusted Partnerships",
    image: "/images/choose-1.png",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container">
        <div className="section-heading centered">
          <p>WHY CHOOSE BRITTO PHARMA</p>
          <h2>
            The Strength of a <span>Connected Pharmaceutical Group</span>
          </h2>
        </div>

        <div className="choose-track">
          {strengths.map((strength) => (
            <article
              className={`choose-card ${strength.featured ? "featured" : ""}`}
              key={strength.title}
            >
              <img src={strength.image} alt={strength.title} />
              <div className="choose-overlay" />
              <div className="choose-content">
                <h3>{strength.title}</h3>
                {strength.description && <p>{strength.description}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="choose-cta">
          <button type="button" className="cta-btn">
            Partner With Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
