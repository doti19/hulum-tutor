import React from "react";
import logoWhite from "../assets/hulum.png";
import FacebookLink from "../assets/icon-facebook.svg";
import InstagramLink from "../assets/icon-instagram.svg";
import PinterestLink from "../assets/icon-pinterest.svg";
import Twitterink from "../assets/icon-twitter.svg";
import YoutubeLink from "../assets/icon-youtube.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/*logo and social links are here man */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div>
              <img
                src={logoWhite}
                alt="White logo image"
                className="h-20 w-25"
              />
            </div>

            <div className="flex justify-center space-x-4 p-3 ">
              <a target="_blank" href="https://www.facebook.com/hulumtutors">
                <img src={FacebookLink} alt="" />
              </a>
              {/* ----------------- */}
              <a target="_blank" href="https://www.youtube.com/@hulumtutor">
                <img src={YoutubeLink} alt="YouTube" />
              </a>
              {/* ----------------- */}
              <a target="_blank" href="https://tiktok.com/@hulumtutors">
                <img src={TiktokLink} alt="TikTok" />
              </a>
              {/* ----------------- */}
            </div>
            <div className="flex text-white  font-bold">
              <p>Phone Numbers: </p><br/>
              <p>Eth: +251946364642</p>
              <p>USA: +12023917988</p>
            </div>
          </div>
          {/* end of Social links */}

          <div className="flex justify-around space-x-32 mx-auto">
            <div className="flex flex-col space-y-3 text-white">
              <a className="hover:text-brightRed" href="#home">
                Home
              </a>
              <a className="hover:text-brightRed">Pricing</a>
              <a className="hover:text-brightRed">Products</a>
              <a className="hover:text-brightRed">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a className="hover:text-brightRed">Careers</a>
              <a className="hover:text-brightRed">Community</a>
              <a className="hover:text-brightRed">Privacy Policy</a>
            </div>
          </div>
          <div className="flex flex-col justify-between mx-auto">
            <form hidden action="">
              <div className="felx space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none "
                />
              </div>
            </form>
          </div>
        </div>
        <div className="text-white container mx-auto text-center">
          <p> Copyright &copy; 2024, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
