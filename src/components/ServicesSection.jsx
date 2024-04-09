import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

const ServiceComponent = ({ title, description, image }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ServicesSection;
