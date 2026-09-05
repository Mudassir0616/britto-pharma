import React, { useState } from "react";

const services = [
  {
    id: "contract-manufacturing",
    label: "Contract Manufacturing",
    title: "Contract Manufacturing",
    description:
      "End-to-end pharmaceutical manufacturing solutions for brands and healthcare partners, supported by quality-focused processes, consistent production standards, and reliable supply capabilities.",
    image: "/images/what-we-do-1.png",
  },
  {
    id: "generic-medicine",
    label: "Generic Medicine Manufacturing",
    title: "Generic Medicine Manufacturing",
    description:
      "Reliable generic medicine manufacturing built around compliant facilities, robust formulation knowledge, and scalable production that helps partners bring dependable therapies to market.",
    image: "/images/what-we-do-1.png",
  },
  {
    id: "export-distribution",
    label: "Export & Global Distribution",
    title: "Export & Global Distribution",
    description:
      "Export and distribution support for pharmaceutical businesses expanding across borders, with a focus on documentation, market readiness, and consistent product movement.",
    image: "/images/what-we-do-1.png",
  },
  {
    id: "quality-compliance",
    label: "Quality & Regulatory Compliance",
    title: "Quality & Regulatory Compliance",
    description:
      "Quality systems and regulatory support designed to keep manufacturing, packaging, and distribution aligned with the expectations of diverse healthcare markets.",
    image: "/images/what-we-do-1.png",
  },
];

const WhatWeDo = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="what-we-do-section" id="services">
      <div className="container">
        <div className="section-heading centered">
          <p>WHAT WE DO</p>
          <h2>
            A <span>Pharmaceutical Partner</span> Built for Global Healthcare
          </h2>
        </div>

        <div className="what-we-do-card">
          <div className="what-we-do-tabs hide-scrollbar">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`tab-btn ${
                  activeService.id === service.id ? "active" : ""
                }`}
                onClick={() => setActiveService(service)}
                aria-pressed={activeService.id === service.id}
              >
                {service.label}
              </button>
            ))}
          </div>

          <div className="what-we-do-body">
            <div className="what-we-do-content">
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
            </div>

            <div className="what-we-do-media">
              <img src={activeService.image} alt={activeService.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
