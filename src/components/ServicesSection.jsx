import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="transform w-full flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 lg:pl-[10.25rem] pt-[3.875rem] md:pt-0 lg:pt-[10rem] lg:pr-[6.25rem] text-center md:text-left bg-container-color">
          <h2 className="text-[2.0625rem] md:text-[2.5625rem] font-fraunces font-black leading-[2.5rem] md:leading-[2.9375rem]">
            Transform your brand
          </h2>
          <p className="mt-[1.5625rem] md:mt-[2.1875rem] mx-[1.25rem] md:mx-0 text-[1.1113rem] leading-[1.8125rem] text-dark-grayish-blue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className="block relative font-fraunces font-black uppercase mt-[2.1875rem] mb-[4.0625rem]  md:my-[2.5625rem] mx-[.5625rem] tracking-[.0313rem] transition-all"
            href=""
          >
            Learn more
          </a>
        </div>
        <picture className="md:w-1/2">
          <source media="(min-width:40.625rem)" srcset="./images/desktop/image-transform.jpg"/>
          <img
            src="./images/mobile/image-transform.jpg"
            alt="transform image"
            className="w-full"
          />
        </picture>
      </div>

      <div className="standout w-full flex flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2 px-[1.875rem] lg:pl-[6.875rem] lg:pr-[10rem] pt-[4rem] md:pt-0 lg:pt-[9.875rem] text-center md:text-left bg-container-color">
          <h2 className="text-[2.0625rem] md:text-[2.5438rem] font-fraunces font-black leading-[2.4375rem] md:leading-[3rem]">
            Stand out to the right audience
          </h2>
          <p className="mt-[1.625rem] md:mt-[2.1875rem] text-[1.1113rem] leading-[1.8125rem] text-dark-grayish-blue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            className="block relative font-fraunces font-black uppercase mt-[2.25rem] mb-[4.0625rem] md:my-[2.625rem] mx-[.4375rem] tracking-[.0313rem] transition-all"
            href=""
          >
            Learn more
          </a>
        </div>
        <picture className="md:w-1/2">
          <source media="(min-width:40.625rem)" srcset="./images/desktop/image-stand-out.jpg"/>
          <img
            src="./images/mobile/image-stand-out.jpg"
            alt="transform image"
            className="w-full"
          />
        </picture>
      </div>

      <div className="design w-full flex flex-col md:flex-row md:h-[37.5rem]">
        <div className="bg-graphic md:w-1/2 flex flex-col items-center justify-end h-[37.5rem] md:h-full">
          <div className="text-center mb-[3.6875rem] max-w-[21.25rem] text-dark-desaturated-cyan">
            <h2 className="text-[1.8125rem] font-fraunces font-black leading-[3rem] tracking-[-0.0338rem]">
              Graphic Design
            </h2>
            <p className=" text-[.9875rem] leading-[1.7188rem] mt-[1.25rem]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="bg-photography md:w-1/2 flex flex-col items-center justify-end h-[37.5rem] md:h-full">
          <div className="text-center mb-[3.6875rem] max-w-[21.25rem] text-dark-blue">
            <h2 className="text-[1.8125rem] font-fraunces font-black leading-[3rem] tracking-[-0.0338rem]">
              Photography
            </h2>
            <p className="text-[.9875rem] leading-[1.7188rem] mt-[1.25rem] ">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
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
