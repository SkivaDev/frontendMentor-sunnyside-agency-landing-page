import React from "react";

const TestimonialComponent = () => {
  return (
    <section>
      <div className="pt-[158px] px-[160.2px] pb-[161px]">
        <h1 className="text-[21px] font-fraunces font-black uppercase text-center tracking-[4.45px]">
          Client Testimonials
        </h1>
        <div className="flex justify-center items-center mt-[75px] mx-auto gap-[21px]">
          <TestimonialCard
            name={"Emily R."}
            position={"Marketing Director"}
            image={"./images/image-emily.jpg"}
            testimonial={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
          />
          <TestimonialCard
            name={"Thomas S."}
            position={"Chief Operating Officer"}
            image={"./images/image-thomas.jpg"}
            testimonial={
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
          />
          <TestimonialCard
            name={"Jennie F."}
            position={"Business Owner"}
            image={"./images/image-jennie.jpg"}
            testimonial={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, position, image, testimonial }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <img src={image} alt={name} className="w-[73px] rounded-full" />
      <p className="text-center text-[17px] mt-[58px] tracking-[0.5px] leading-[32px]">
        {testimonial}
      </p>
      <div className="mt-[66px] mr-[14px] text-center">
        <h2 className="text-[20px] font-fraunces font-black tracking-[-1px]">
          {name}
        </h2>
        <h3 className="mt-[4px] tracking-[-1px]">{position}</h3>
      </div>
    </div>
  );
};
export default TestimonialComponent;