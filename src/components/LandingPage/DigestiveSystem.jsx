import React from "react";
import Heading from "../common/Heading";

const DigestiveSystem = () => {
  return (
    <section>
      <div className="container">
        <Heading
          name={"Understanding Your Digestive System"}
          title={
            "A closer look at digestive organs and their most common conditions."
          }
        />
        <div className="digestive-system-container">
          {/* Your digestive system content here */}
        </div>
      </div>
    </section>
  );
};

export default DigestiveSystem;
