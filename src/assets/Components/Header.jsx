
import React, { useState } from "react";
import logo from "../../../public/images/logo.png";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { navLinksdata } from "../Constant/index";
import { Link } from "react-scroll";

function Header() {
  const [toggle, setToggle] = useState(false);


  return (
    //  bg-[#110475] color
    <>
      {/* // Header main container */}
      <div className="max-w-[1600px] mx-auto sticky z-50 top-0  ">
        <div className="flex justify-evenly md:justify-between items-center  px-14 pt-2  text-white backdrop-blur-[4px]    bg-black/30">
          {/* Logo Portion  */}
          <div className="w-[200px] ">
            <img
              // onClick={showToggle}
              src={logo}
              alt=""
              className="w-16 h-16 md:w-20 md:h-20  pl-2 "
            />
          </div>

          {/* Navbar section  */}
          {/* Desktop section  */}
          <ul className=" hidden  w-[700px] md:flex items-center  space-x-3 ml-3  lg:space-x-6 justify-center">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="  text-xl font-normal  tracking-wide cursor-pointer hover:text-orange-500 hover:font-semibold duration-300 hover:border-b-2 border-white hover:text-xl"
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

          {/* Mobile section  */}
          <ul
            className={`duration-500 md:hidden fixed top-16 w-full  sm:w-[500px] sm:text-center items-center justify-center p-20 h-screen
    ${toggle ? "left-0" : "left-[-100%]"} 
    bg-black text-white`}
          >
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="font-normal  text-gray-50 tracking-wide cursor-pointer hover:text-orange-500 hover:border-b-2 border-amber-500 duration-300 py-3"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={900}
                  onClick={() => setToggle(false)} // ✅ Hides menu after clicking
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3.5">
            <button className="bg-orange-500 px-3 text-xs md:px-5 hover:font-semibold py-1 text-white md:text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
              <a
                href="https://play.google.com/store/search?q=wingrush&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </button>
            {toggle ? (
              <IoClose
                onClick={() => setToggle(!toggle)}
                className="text-2xl "
              />
            ) : (
              <IoMdMenu
                onClick={() => setToggle(!toggle)}
                className="text-2xl md:hidden "
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
