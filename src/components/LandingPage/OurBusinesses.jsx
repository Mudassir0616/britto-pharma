import React from "react";

const businesses = [
  {
    id: "androcure",
    name: "Androcure Medicare",
    description:
      "A pharmaceutical manufacturing and export-focused company serving healthcare partners across international markets. Androcure Medicare offers a diverse pharmaceutical portfolio supported by quality-focused manufacturing, secure packaging, global distribution capabilities, and solutions designed to meet the requirements of diverse healthcare markets.",
    image: "/images/androcure.png",
    cta: "Visit Androcure Medicare",
  },
  {
    id: "gamma",
    name: "Gamma Biotechs",
    description:
      "A science-driven pharmaceutical company combining research, formulation development, advanced manufacturing, quality assurance, and global supply capabilities. Gamma Biotechs supports pharmaceutical development across areas including injectable and oral solid dosage manufacturing, while its R&D capabilities extend to formulation development and analytical research.",
    image: "/images/gammabiotechs.png",
    cta: "Visit Gamma Biotechs",
  },
];

const OurBusinesses = () => {
  return (
    <section className="our-businesses-section" id="businesses">
      <div className="container">
        <div className="section-heading left">
          <p>OUR BUSINESSES</p>
          <h2>
            Building Healthcare Businesses for a <span>Global Market</span>
          </h2>
        </div>

        <div className="business-list">
          {businesses.map((business, index) => (
            <article
              className={`business-card ${index % 2 === 1 ? "reverse" : ""}`}
              key={business.id}
            >
              <div className="business-media">
                <img src={business.image} alt={business.name} />
              </div>

              <div className="business-content">
                <h3>{business.name}</h3>
                <p>{business.description}</p>
                <button type="button" className="cta-btn business-btn">
                  {business.cta} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBusinesses;
