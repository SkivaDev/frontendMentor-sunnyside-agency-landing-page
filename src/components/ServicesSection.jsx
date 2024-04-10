import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="transform w-full flex">
        <div className="w-1/2 pl-[164px] pt-[160px] pr-[100px]">
          <h2 className="text-[41px] font-fraunces font-black leading-[47px]">Transform your brand</h2>
          <p className="mt-[35px] text-[17.78px] leading-[29px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="block relative font-fraunces font-black uppercase my-[41px] mx-[9px] tracking-[0.5px]" href="">Learn more</a>
        </div>
        <div className="w-1/2">
          <img src="./images/desktop/image-transform.jpg" alt='transform image' className="w-full"/>
        </div>
      </div>

      <div className="standout w-full flex flex-row-reverse">
        <div className="w-1/2 pl-[110px] pt-[158px] pr-[160px]">
          <h2 className="text-[40.7px] font-fraunces font-black leading-[48px]">Stand out to the right audience</h2>
          <p className="mt-[35px] text-[17.78px] leading-[29px]">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
          </p>
          <a className="block relative font-fraunces font-black uppercase my-[41px] mx-[7px] tracking-[0.5px]" href="">Learn more</a>
        </div>
        <div className="w-1/2">
          <img src="./images/desktop/image-stand-out.jpg" alt='transform image' className="w-full"/>
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
