import React from "react";
import ButtonWhite from "../components/ButtonWhite";

const ContactUs = () => {
  return (
    <>
      <section id="CTA" className="bg-brightGreen mt-10">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simpify The learning Process Today
          </h2>
          <a
            href="#register"
            className="p-3 px-6 pt-2 text-black text-bold bg-white rounded-full baseline hover:bg-brightRedLight hover:text-white"
          >
            Register
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
