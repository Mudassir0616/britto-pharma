import React from "react";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    description:
      "Britto Pharmaceuticals Pvt. Ltd. was founded with a vision to build a trusted pharmaceutical company focused on quality, innovation, and global healthcare opportunities.",
  },
  {
    year: "2025",
    title: "Building the Foundation",
    description:
      "Established core business operations across pharmaceutical manufacturing, product development, quality systems, and international business.",
  },
  {
    year: "2025",
    title: "Building Our Brand Portfolio",
    description:
      "Introduced and developed pharmaceutical brands under the Britto Pharma umbrella, including Androcure, with a focus on professionally developed healthcare solutions.",
  },
  {
    year: "2025",
    title: "Expanding Global Opportunities",
    description:
      "Started developing international business opportunities and building relationships with pharmaceutical distributors and healthcare partners across global markets.",
  },
  {
    year: "2026",
    title: "Global Healthcare Vision",
    description:
      "Britto Pharma continues to work toward becoming a globally recognized pharmaceutical company built on quality, trust, innovation, and long-term partnerships.",
  },
];

const TimelineItem = ({ milestone, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.55,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`growth-item ${index % 2 === 0 ? "left" : "right"} ${
        inView ? "active" : ""
      }`}
    >
      <div className="growth-node" />
      <div className="growth-content">
        <span>{milestone.year}</span>
        <h3>{milestone.title}</h3>
        <p>{milestone.description}</p>
      </div>
    </div>
  );
};

const GrowthStory = () => {
  return (
    <section className="growth-story-section" id="growth">
      <div className="container">
        <div className="section-heading centered light">
          <p>OUR GROWTH STORY</p>
          <h2>
            From <span>Pharmaceutical Expertise</span> to a Growing Healthcare
            Group
          </h2>
        </div>

        <div className="growth-timeline">
          <div className="growth-line" />
          {milestones.map((milestone, index) => (
            <TimelineItem
              milestone={milestone}
              index={index}
              key={`${milestone.year}-${milestone.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
