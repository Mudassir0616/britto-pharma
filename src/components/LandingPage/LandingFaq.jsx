import React, { useState } from "react";
import FAQItem from "../common/FaqItem";

const faqs = [
  {
    question: "What manufacturing capabilities does Britto Pharmaceuticals offer?",
    answer:
      "We provide end-to-end pharmaceutical manufacturing solutions, including formulation development, clinical trial supplies, commercial scale-up, and packaging. Our facilities are designed to support a wide range of dosage forms.",
  },
  {
    question: "How do you ensure quality standards across your operations?",
    answer:
      "Quality is built into each stage of our operations through defined processes, documentation, supplier controls, in-process checks, and release procedures aligned with market expectations.",
  },
  {
    question: "Do you offer custom formulation and product development services?",
    answer:
      "Yes. We support partners with formulation development, analytical research, stability studies, technology transfer, and regulatory documentation for pharmaceutical products.",
  },
  {
    question: "What regions does Britto Pharmaceuticals distribute to globally?",
    answer:
      "We are building relationships across international markets and support export-oriented distribution through partners, distributors, and healthcare organizations.",
  },
  {
    question: "How do you handle regulatory compliance for international markets?",
    answer:
      "Our team supports market-specific documentation, product registration requirements, packaging expectations, and compliance workflows needed for cross-border pharmaceutical supply.",
  },
  {
    question: "Can we partner with Britto Pharmaceuticals for long-term supply agreements?",
    answer:
      "Yes. We work with brands, distributors, and healthcare partners to structure dependable long-term manufacturing and supply relationships.",
  },
];

const LandingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="landing-faq-section" id="faq">
      <div className="container">
        <div className="section-heading centered">
          <p>FREQUENTLY ASKED QUESTIONS</p>
          <h2>
            Your <span>Questions</span> Answered
          </h2>
          <p className="section-description">
            Explore answers to common questions about our manufacturing
            capabilities, partnerships, global distribution, and regulatory
            compliance.
          </p>
        </div>

        <div className="landing-faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
              key={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
