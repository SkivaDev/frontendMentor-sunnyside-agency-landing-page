import React from "react";

const ServicesSection = () => {
  return (
    <section>
      <div className="transform w-full flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 md:pl-[164px] pt-[62px] md:pt-[160px] md:pr-[100px] text-center md:text-left">
          <h2 className="text-[33px] md:text-[41px] font-fraunces font-black leading-[40px] md:leading-[47px]">
            Transform your brand
          </h2>
          <p className="mt-[25px] md:mt-[35px] mx-[20px] md:mx-0 text-[17.78px] leading-[29px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className="block relative font-fraunces font-black uppercase mt-[35px] mb-[65px]  md:my-[41px] mx-[9px] tracking-[0.5px]"
            href=""
          >
            Learn more
          </a>
        </div>
        <picture className="md:w-1/2">
          <source media="(min-width:650px)" srcset="./images/desktop/image-transform.jpg"/>
          <img
            src="./images/mobile/image-transform.jpg"
            alt="transform image"
            className="w-full"
          />
        </picture>
      </div>

      <div className="standout w-full flex flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2 px-[30px] md:pl-[110px] md:pr-[160px] pt-[64px] md:pt-[158px] text-center md:text-left">
          <h2 className="text-[33px] md:text-[40.7px] font-fraunces font-black leading-[39px] md:leading-[48px]">
            Stand out to the right audience
          </h2>
          <p className="mt-[26px] md:mt-[35px] text-[17.78px] leading-[29px]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            className="block relative font-fraunces font-black uppercase mt-[36px] mb-[65px] md:my-[42px] mx-[7px] tracking-[0.5px]"
            href=""
          >
            Learn more
          </a>
        </div>
        <picture className="md:w-1/2">
          <source media="(min-width:650px)" srcset="./images/desktop/image-stand-out.jpg"/>
          <img
            src="./images/mobile/image-stand-out.jpg"
            alt="transform image"
            className="w-full"
          />
        </picture>
      </div>

      <div className="design w-full flex flex-col md:flex-row md:h-[600px]">
        <div className="bg-graphic md:w-1/2 flex flex-col items-center justify-end h-[600px] md:h-full">
          <div className="text-center mb-[59px] max-w-[340px]">
            <h2 className="text-[29px] font-fraunces font-black leading-[48px] tracking-[-0.54px]">
              Graphic Design
            </h2>
            <p className=" text-[15.8px] leading-[27.5px] mt-[20px]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="bg-photography md:w-1/2 flex flex-col items-center justify-end h-[600px] md:h-full">
          <div className="text-center mb-[59px] max-w-[340px]">
            <h2 className="text-[29px] font-fraunces font-black leading-[48px] tracking-[-0.54px]">
              Photography
            </h2>
            <p className="text-[15.8px] leading-[27.5px] mt-[20px]">
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
