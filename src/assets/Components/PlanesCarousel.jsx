import React, { useState } from "react";

import img88 from "../../../public/PlaneImages/img8.png";
import img1 from "../../../public/PlaneImages/rotate planes/1.gif";
import img2 from "../../../public/PlaneImages/rotate planes/2.gif";
import img3 from "../../../public/PlaneImages/rotate planes/3.gif";
import img4 from "../../../public/PlaneImages/rotate planes/4.gif";
import img5 from "../../../public/PlaneImages/rotate planes/5.gif";
import img6 from "../../../public/PlaneImages/rotate planes/6.gif";
import img7 from "../../../public/PlaneImages/rotate planes/7.gif";
import img8 from "../../../public/PlaneImages/rotate planes/8.gif";
import img9 from "../../../public/PlaneImages/rotate planes/9.gif";
import img10 from "../../../public/PlaneImages/rotate planes/10.gif";
import img11 from "../../../public/PlaneImages/rotate planes/11.gif";
import img12 from "../../../public/PlaneImages/rotate planes/12.gif";
import img13 from "../../../public/PlaneImages/rotate planes/13.gif";
import img14 from "../../../public/PlaneImages/rotate planes/14.gif";
import img15 from "../../../public/PlaneImages/rotate planes/15.gif";
import { motion, easeInOut } from "framer-motion";
// Array of slides (image + content)
const slides = [
  {
    image: img1,
    title: "Silver Wing",
    description:
      "Fast and agile , perfect for quick strikes. Best for short missions due to low fuel and weak brakes.",
  },
  {
    image: img2,
    title: "Jaguar ",
    description:
      "Balanced speed and control with great braking and fuel , Slightly slower , ideal for tractical missions.",
  },
  {
    image: img3,
    title: "Lazy Fox",
    description:
      "High speed and powerful thrust make it great for hit  and run attacks, Weak brakes needs skillful handling .",
  },
  {
    image: img4,
    title: "Sky Fire",
    description:
      "Stable and precise with desccent fuel and control . Slower speed amkes it better for strategic play.",
  },
  {
    image: img5,
    title: "Hunter",
    description:
      "Versatile with balanced speed and fuel , Limited brakes, but great for mid-range, flexible  combat.",
  },
  {
    image: img6,
    title: "Cooper Head",
    description:
      "Built for long missions with strong endurance, Good speed, but needs care due to weak breakes.",
  },
  {
    image: img7,
    title: "Storm Rider",
    description:
      "Endurance-focused with steady control and fuel , Not very fast, but reliable for longer battles.",
  },
  {
    image: img8,
    title: "Star Blaze",
    description:
      "Fast and powerful with great thrust and fuel , Braking is weaker but excellent for offense.",
  },
  {
    image: img9,
    title: "Night Shade",
    description:
      "Stealthy and fuel efficient with strong control . Lower thrust , ideal for precise , long mission.",
  },
  {
    image: img10,
    title: "Aero Blade",
    description:
      "Durable and stable with hight fuel , Low thrust but handles will - great for long, tactical missions.",
  },
  {
    image: img11,
    title: "Sky Bolt",
    description:
      "Balanced fighter with strong fuel and relaiable speed. Braking is weaker , needs skilled control.",
  },
  {
    image: img12,
    title: "Viper jet",
    description:
      "Speedy and reliable with solid thrust fuel. Needs careful braking but fit many combat roles.",
  },
  {
    image: img13,
    title: "Steel Eagle",
    description:
      "Built for long missions with great control and fuel . Balanced performance but lacks burst power.",
  },
  {
    image: img14,
    title: "Crimson Fury",
    description:
      "Super fast and aggressive with hight thrust. Demands skillful handling , perfect for offensive pilots.",
  },
  {
    image: img15,
    title: "Vulture Strike",
    description:
      "Top-tier speed and power with excellent and fuel . Require skilled pilots for high speed combat",
  },
];

const PlaneCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="plane" className=" pt-5">
      <div className="flex justify-center md:text-5xl text-2xl pt-4 pb-5 relative z-10 text-white font-bold">
        Planes
      </div>
      <motion.div
        className="border border-gray-400 relative w-full max-w-6xl mx-auto m-5 pb-7 h-[400px] md:h-[425px] md:rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${img88})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        {/* ✅ Black Overlay with 10% opacity */}
        <div className="absolute inset-0 bg-black/50 z-10 "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-6 md:px-12">
          {/* LEFT: Text Content */}
          <div className="text-center md:text-left max-w-lg mb-6 md:mb-0 md:ml-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {slides[current].title}
            </h1>
            <p className="mt-3 text-gray-200 text-base md:text-xl">
              {slides[current].description}
            </p>
          </div>

          {/* RIGHT: Image for Desktop */}
          <div className="w-full  md:w-[400px] md:flex justify-center md:mr-10 hidden">
            <img
              src={slides[current].image}
              className="w-full max-h-[200px]  md:max-h-[350px] object-contain rounded-lg"
            />
          </div>

          {/* RIGHT: Image for Mobile */}
          <div className="w-full md:w-[350px] flex justify-center md:mr-10 md:hidden">
            <img
              src={slides[current].image}
              className="w-full max-h-[200px] pt-14 md:max-h-[350px] object-contain rounded-lg"
            />
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❯
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                current === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PlaneCarousel;
