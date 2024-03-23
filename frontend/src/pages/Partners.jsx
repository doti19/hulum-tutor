import React from "react";
import udemy from "../assets/udemy.png";
import khanA from "../assets/Khan_Academy.svg";
import Au from "../assets/AU.svg";
import gates from "../assets/gates.png";
import Eu from "../assets/Eu.png";
import Un from "../assets/UN.png";

const PartnerSection = () => {
  return (
    <section id="partners">
      <div className=" h-30">
        <div className="justify-evenly bg-white mx-20  md:px-10 md:flex p-50">
          <a className="my-auto" href="http://www.udemy.com" target="_blank">
            <img src={udemy} className="h-20 w-40" alt="" />
          </a>
          <a className="" href="https://www.khanacademy.org/" target="_blank">
            <img src={khanA} className="h-20 w-40" alt="" />
          </a>
          <a className=" " href="https://au.int/" target="_blank">
            <img src={Au} className="h-20 w-30" alt="" />
          </a>
          <a
            className=" "
            href="https://www.gatesfoundation.org/"
            target="_blank"
          >
            <img src={gates} className="h-20 w-40" alt="" />
          </a>
          <a
            className=""
            href="https://european-union.europa.eu/"
            target="_blank"
          >
            <img src={Eu} className="h-20 w-30 " alt="" />
          </a>
          <a className=" " href="https://www.un.org/en/" target="_blank">
            <img src={Un} className="h-20 w-30 md:mt-0 mt-5" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
