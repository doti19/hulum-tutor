import React from "react";
import CEO from "../assets/avatar-richard.png";
import Button from "../components/Button";
const Testimonials = () => {
  return (
    <>
      <section id="Tesimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold">Expore your Limitless Mind</h2>
          {/* Testimonial container  */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial Items */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={CEO} alt="CEO" />
              <h5 className="text-lg font-bold">Saminas H</h5>
              <p className="text-sm text-darkGrayishBlue">
                " when life gives you lemons, wait for Timket and throw it at
                your crush"
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={CEO} alt="CEO" />
              <h5 className="text-lg font-bold">Saminas H</h5>
              <p className="text-sm text-darkGrayishBlue">
                " when life gives you lemons, wait for Timket and throw it at
                your crush"
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={CEO} alt="CEO" />
              <h5 className="text-lg font-bold">Saminas H</h5>
              <p className="text-sm text-darkGrayishBlue">
                " when life gives you lemons, wait for Timket and throw it at
                your crush"
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <Button text={"Get Started Now"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
