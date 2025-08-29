import React from "react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { navLinksdata } from "../Constant";
import { Link } from "react-scroll";
import { motion, easeInOut } from "framer-motion";
import Title from "../../../public/Title.png";

const Footer = () => {
  

  return (
    <footer className="bg-black w-full max-w-8xl mx-auto  lg:px-3 pt-18 pb-28 ">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-6 text-center md:text-left md:mx-8">
        {/* Scroll to Top Button */}
        <motion.div
          className="md:mt-7"
          // framer-animation
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <button
            className="text-white text-md xl:text-xl  font-mono flex justify-center items-center text-center"
            // onClick={() => window.scrollTo(0, 0)}
            onClick={() => {
              window.scrollTo({
                // top: 0,
                top: -100,

                behavior: "smooth", // 👈 this makes it smooth
              });
            }}
          >
            <NavLink to="/PrivacyPolicy">Policy and Privacy</NavLink>
          </button>
        </motion.div>

        {/* Center Section */}
        <motion.div
          className="flex flex-col items-center gap-6 pt-6"
          //  framer-anomation
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/*  */}
            <span className="text-white text-xl font-semibold lg:text-xl">
              {/* WingRush */}
              <img src={Title} alt="" className="w-36 h-10" />
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center  text-sm md:text-md lg:text-xl font-medium">
            <ul className=" md:flex items-center gap-3 lg:gap-5">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  className="  text-base lg:text-xl font-normal text-white tracking-wide cursor-pointer hover:text-orange-600 hover:font-semibold duration-300"
                  key={_id}
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={900}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 text-2xl ">
            <a
              target="_newTab"
              href="https://www.facebook.com/igniPulse/"
              className="text-gray-50  transition"
            >
              <FaFacebookF className=" rounded-full  text-3xl md:text-4xl  bg-blue-700 hover:bg-blue-800 p-2 " />
            </a>
            <a
              target="_newTab"
              href="https://www.tiktok.com/@ignipulse?_t=ZN-8vYUvu4nZZO&_r=1"
              className="text-gray-50  transition"
            >
              <RiTiktokFill className="rounded-full text-3xl md:text-4xl bg-black border border-white p-2 " />
            </a>
            <a
              target="_newTab"
              href="https://www.instagram.com/ignipulse/?igsh=MTd4cDZ4YnZ3OTVnbg%3D%3D#"
              className="text-white transition"
            >
              <FaInstagram className="rounded-full text-3xl md:text-4xl bg-gradient-to-b from-pink-700 to-orange-400 via-red-500 p-2 hover:bg-gradient-to-b hover:from-pink-800 hover:to-orange-600 hover:via-red-700 " />
            </a>
            <a
              target="_newTab"
              href="https://www.youtube.com/channel/UCOI2_8463WfbJJKSBd4RI8g"
              className="text-red-600  transition"
            >
              <FaYoutube className="bg-white text-3xl md:text-4xl p-2 rounded-full" />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-white text-md xl:text-xl md:mt-7 font-mono flex justify-center items-center text-center"
          // framer-animation
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <a href="https://ignipulse.com/" target="_Newblanks">
            {" "}
            © 2025 IgniPulse All Rights Reserved
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
