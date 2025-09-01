import React, {  useState } from "react";
import { easeInOut, motion } from "framer-motion";
import video from "../../../public/Videos/Wingrush-trailer.mp4";
import img1 from '../../../public/PlaneImages/img11.png'
// import {text} from '../Components/Text/text.png'
import Title from '../../../public/Title.png'
import { FaYoutube } from "react-icons/fa6";


function HeroSection() {
  const [showTrailer, setShowTrailer] = useState(false);

  // Open Trailer Modal
  const handleOpenTrailer = () => {
    setShowTrailer(true);
    document.body.style.overflow = "hidden"; // Disable background scroll
  };

  // Close Trailer Modal
  const handleCloseTrailer = () => {
    setShowTrailer(false);
    document.body.style.overflow = "auto"; // Enable scroll again
  };

  return (
    <div
      id="home"
      className="max-w-[1600px] mx-auto relative w-full bg-fixed h-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>

      {/* Desktop Section */}
      <motion.div
        className="hidden md:block pt-72 px-60 lg:pt-40 lg:px-60 md:h-screen shadow-lg relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        <div className="md:text-8xl font-bold space-y-2 tracking-wide">
          <img
            src={Title}
            alt="picture"
            className="w-64 h-44 lg:h-50 lg:w-1/2 "
          />
        </div>
        <p className="mt-1.5 text-white text-xl">
          Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
          Welcome to Wingrush!
        </p>
        <div className="mt-5 space-x-5 space-y-2">
          <button className="bg-orange-500 px-9 py-2 hover:font-semibold text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
            <a
              href="https://play.google.com/store/search?q=wingrush&c=apps&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </button>
          <button
            onClick={handleOpenTrailer}
            className="border-amber-600 border hover:bg-orange-500 px-5 py-2 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500"
          >
            Watch Trailer
          </button>
        </div>
      </motion.div>

      {/* Mobile Section */}
      <div className=" md:px-16 md:pt-36  top-1/3 flex flex-col items-center md:hidden relative z-10 ">
        <div className="text-4xl sm:text-5xl text-white font-bold space-y-2 tracking-wide">
          {/* <h1>WingRush</h1> */}
          <img src={Title} alt="" className="w-52 h-36 sm:w-64 sm:h-44" />
        </div>
        <p className="text-md mt-1.5 flex items-center justify-center text-center text-white">
          Wingrush: Soar Beyond Limits,
          <br /> Fast Skies, Fierce Battle — Welcome to Wingrush!
        </p>
        <div className="mt-5 space-x-3 space-y-4">
          <button className="bg-orange-500 px-3 py-1 hover:font-semibold text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
            <a
              href="https://play.google.com/store/search?q=wingrush&c=apps&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </button>
          <button
            onClick={handleOpenTrailer}
            className="border-amber-600 border hover:bg-orange-500 px-2 py-1 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500"
          >
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[50] p-2">
          <div className="relative w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] bg-black rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
            {/* Video Player */}
            <iframe
              src="https://www.youtube.com/embed/CyB1QR-JpoQ?autoplay=0&si=gHQLa05DhoPrcUEd"
              title="Wingrush Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] xl:h-[480px] rounded-lg"
            ></iframe>

            {/* Buttons Section */}
            <div className="flex items-center justify-between w-full px-4 mt-4">
              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/watch?v=CyB1QR-JpoQ&autoplay=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition-all duration-300"
              >
                <FaYoutube className="text-xl sm:text-2xl md:text-3xl" />
                <span className="hidden sm:block">Watch on YouTube</span>
              </a>

              {/* Close Button */}
              <button
                onClick={handleCloseTrailer}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg shadow-md font-semibold text-sm sm:text-base md:text-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
