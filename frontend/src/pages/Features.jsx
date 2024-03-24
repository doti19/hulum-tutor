import React from "react";
import cloud from "../assets/cloud.svg";
const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* Whats Different  */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center">
              What's Different about Hulum ?
            </h2>
            <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
              Our services make us unique to those Nemo, ad beatae facere, quod
              aut magnam nihil, provident perferendis soluta animi mollitia
              minus nisi quo adipisci harum at eaque aliquid cumque.
            </p>
            <img src={cloud} className="h-45" alt="image of cloud" />
          </div>

          {/* Numbered List  */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* https://github.com/doti19  list item */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row mt-20">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex item-center space-x-2">
                  <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brightGreen  hover:bg-brightRedLight">
                    01
                  </div>
                  <h3 className="text-base font-bold pt-2 md:hidden">
                    Track Student-Based progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Track Student-Based progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  officiis perferendis nisi voluptatum, quia quae. Ipsa itaque
                  aspernatur veniam aliquam fugiat neque libero maxime corporis
                  iusto! Debitis similique dignissimos consectetur?
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex item-center space-x-2">
                  <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brightGreen  hover:bg-brightRedLight">
                    02
                  </div>
                  <h3 className="text-base font-bold pt-2 md:hidden">
                    Embrace Diversity
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Embrace Diversity
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  officiis perferendis nisi voluptatum, quia quae. Ipsa itaque
                  aspernatur veniam aliquam fugiat neque libero maxime corporis
                  iusto! Debitis similique dignissimos consectetur?
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex item-center space-x-2">
                  <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brightGreen  hover:bg-brightRedLight">
                    03
                  </div>
                  <h3 className="text-base font-bold pt-2 md:hidden">
                    Activity Based Learning
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Activity Based Learning
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  officiis perferendis nisi voluptatum, quia quae. Ipsa itaque
                  aspernatur veniam aliquam fugiat neque libero maxime corporis
                  iusto! Debitis similique dignissimos consectetur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
