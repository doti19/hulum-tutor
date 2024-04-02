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
              About Hulum Tutors and its core values
            </h2>
            <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
              Right now, Hulum Tutors is a non-profit organization through which we aim to
              address all and any kind of education based on society's values and morals for free.
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
                    Accessibility
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Accessibility
                </h3>
                <p className="text-darkGrayishBlue">
                Hulum Tutors is committed to making education accessible to all individuals, regardless of their background, 
                location, or financial status. We believe that everyone deserves the opportunity to learn and grow, and we 
                strive to remove barriers that might prevent individuals from accessing quality education. This value drives 
                us to offer our tutoring services free of charge and to continuously seek ways to reach and serve diverse communities.
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
                    Empowerment
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Empowerment
                </h3>
                <p className="text-darkGrayishBlue">
                At Hulum Tutors, we believe in empowering learners to take control of their own education and 
                realize their full potential. We aim to provide not only academic support but also the tools, 
                resources, and encouragement necessary for students to become independent and confident learners. 
                Through personalized guidance and mentorship, we empower individuals to overcome challenges, set and 
                achieve goals, and cultivate a lifelong love for learning. 
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
                    Inclusivity
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-4 font-bold pt-1 hidden md:block">
                  Inclusivity
                </h3>
                <p className="text-darkGrayishBlue">
                Inclusivity is at the heart of everything we do at Hulum Tutors. We celebrate diversity in 
                all its forms and create a welcoming and inclusive environment where every individual feels valued, 
                respected, and supported. We recognize the unique strengths and perspectives that each person brings to the 
                learning process and strive to create opportunities for collaboration, dialogue, and mutual understanding. By fostering an 
                inclusive community, we enrich the learning experience for everyone involved and promote a culture of belonging and acceptance.
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
