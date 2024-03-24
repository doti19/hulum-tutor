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
              Let's come together and learn something great
            </h1>
            <p className="max-w-sm text-lg text-center text-darkGrayishBlue md:text-left">
              at HuLuM we make things simpler so that you can comprehend,
              understand ,and Innovate with the Genius in You.
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi id vitae, minus facilis dolor, repellendus, expedita ad
              consequatur aliquid mollitia hic voluptatibus dolores recusandae
              eius quas! Odit velit dolores incidunt. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Excepturi id vitae, minus
              facilis dolor, repellendus, expedita ad consequatur aliquid
              mollitia hic voluptatibus dolores recusandae eius quas! Odit velit
              dolores incidunt.
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
