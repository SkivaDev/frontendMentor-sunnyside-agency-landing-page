import React from "react";

const TestimonialComponent = () => {
  return (
    <section>
      <div className="pt-[3.875rem] md:pt-[9.875rem] px-[1.5625rem] md:px-[10.0125rem] pb-[5.5625rem] md:pb-[10.0625rem]">
        <h1 className="text-[1rem] md:text-[1.3125rem] font-fraunces font-black uppercase text-center tracking-[.25rem] md:tracking-[.2781rem] text-grayish-blue">
          Client Testimonials
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[3.875rem] md:mt-[4.6875rem] mx-auto gap-[4rem] md:gap-[1.3125rem]">
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
      <img src={image} alt={name} className="w-[4.5625rem] rounded-full" />
      <p className="text-center text-[1.0625rem] mt-[1.875rem] md:mt-[3.625rem] tracking-[.025rem] md:tracking-[.0313rem] leading-[2rem] text-dark-grayish-blue">
        {testimonial}
      </p>
      <div className="mt-[1.875rem] md:mt-[4.125rem] md:mr-[.875rem] text-center">
        <h2 className="text-[1.25rem] font-fraunces font-black tracking-[-0.0625rem]">
          {name}
        </h2>
        <h3 className="mt-[.25rem] tracking-[-0.0625rem] text-grayish-blue">{position}</h3>
      </div>
    </div>
  );
};
export default TestimonialComponent;
