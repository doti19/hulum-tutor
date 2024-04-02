import React from "react";
import illustration from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container mt-20 flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10  space-y-0 ">
          {/* The Left Item */}
          <div className="md:flex flex-col mb-32 space-y-12 md:w-1/2 md:text-left">
            <h1 className="max-w-middle text-4xl  font-bold text-center md:text-5xl ">
              Free Education For All!
            </h1>
            <p className="max-w-sm text-lg text-center text-darkGrayishBlue md:text-left">
              At Hulum Tutors, we simplify learning for all, unlocking your genius through
              accessibility, understanding, and creativity.
            </p>
            <div className=" flex justify-center md:justify-start">
              <a
                href="#register"
                className="p-3 px-6 pt-2 text-white bg-brightGreen rounded-full baseline hover:bg-brightRedLight"
              >
                Register
              </a>
            </div>
            <p className="max-w-md text-lg text-center text-darkGrayishBlue md:text-left">
              Of all regions, sub-Saharan Africa has the highest rates of education exclusion
              Over one-fifth of children between the ages of about 6 and 11 are out of school,
              followed by one-third of youth between the ages of about 12 and 14. According to
              UIS data, almost 60% of youth between the ages of about 15 and 17 are not in school.
            </p>
          </div>
          <div className="  md:w-1/2 ">
            <img src={illustration} alt="image of hulum" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
