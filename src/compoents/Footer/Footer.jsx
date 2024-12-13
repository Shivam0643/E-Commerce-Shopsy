import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/footer-pattern.jpg";
import { FaInstagram, FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "botton",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div 
        data-aos="zoom-in"
        className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py=8 px-4">
            <h1 className=" flex sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              possimus similique quaerat id odio ad quia natus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* footer link details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Importat Links
                </h1>

                <ul className="flex flex-col gap-4">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>

                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className="flex items-center mt-7 gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center mt-6 gap-3">
                  <FaLocationArrow />
                  <p>Nagpur, Maharashtra</p>
                </div>
                <div className="flex items-center mt-4 gap-3">
                  <FaMobileScreenButton />
                  <p>+91 3456780129</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
