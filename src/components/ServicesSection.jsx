import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="w-full flex">
        <div className="w-1/2 pl-[164px] pt-[160px] pr-[100px]">
          <h2 className="text-[41px] font-fraunces font-black leading-[47px]">Transform your brand</h2>
          <p className="mt-[35px] text-[17.78px] leading-[29px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="block font-fraunces font-black uppercase my-[41px] mx-[9px] tracking-[0.5px]" href="">Learn more</a>
        </div>
        <div className="w-1/2">
          <img src="./images/desktop/image-transform.jpg" alt='transform image' className="w-full"/>
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
