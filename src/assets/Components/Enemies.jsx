import React, { useState } from "react";
import img8 from "../../../public/PlaneImages/img8.png";
import img1 from "../../../public/Enemies/enemy/rotate/1.gif";
import img2 from "../../../public/Enemies/enemy/rotate/2.gif";
import img3 from "../../../public/Enemies/enemy/rotate/4.gif";
import img4 from "../../../public/Enemies/enemy/rotate/6.gif";
import img6 from "../../../public/Enemies/enemy/rotate/9.gif";
import img7 from "../../../public/Enemies/enemy/rotate/13.gif";
import img888 from "../../../public/Enemies/enemy/rotate/28.gif";
import img9 from "../../../public/Enemies/enemy/rotate/26.gif";
import img13 from "../../../public/Enemies/enemy/rotate/10.gif";
import imgBG from "../../../public/Enemies/enemy/4.png";
import {motion,easeInOut} from 'framer-motion'


// Array of slides (image + content)
const slides = [
  {
    image: img1,
    title: "Chaos Crawler",
    description:
      "A grotesque, mutant with jagged limbs that crush anything in its path. It stalks the land tearing planes from the sky with unpredictable strikes.",
  },
  {
    image: img2,
    title: "Van's Enemy RV-1043",
    description:
      "The Van's Enemy RV-1043 is a four-seat, single-engine, low-wing airplane, first delivered in 2003. It can carry 3 passengers 825 mi/1328 km with a cruise speed of 171 km/h. In real life, the RV-10 is sold as an assembly kit to homebuilders.",
  },
  {
    image: img3,
    title: "Shade Reaper",
    description:
      "This agile shadow figure, cloaked in dark hues, emerges from the mountain with a deadly scythe-like arm. The Shade Reaper is a swift and relentless ground monster that strikes fear into the city defenders. Its eerie movements make it hard to target, and it thrives in close combat.",
  },
  {
    image: img4,
    title: "Azure Wyvern",
    description:
      "A majestic bright blue dragon-like creature with sharp horns and radiant wings, The Azure Wyvern dominates the skies, attacking your plane with icy breath and swift dives.",
  },
  {
    image: img6,
    title: "Verdant Wyvern",
    description:
      "A green, luminous dragon-like creature with bright yellow wings, The Verdant Wyvern soars high above the battlefield, spreading poisonous gas to weaken city defenses. Its agility in the air makes it a challenging foe for the plane to counter.",
  },
  {
    image: img7,
    title: "Frost Phantom",
    description:
      "An icy, pale purple dragon with frost-covered wings. The Frost Phantom freezes anything it touches, slowing down the city's response and shattering defenses. Its icy breath can immobilize even the fastest planes, making it a formidable aerial threat.",
  },
  {
    image: img888,
    title: "Cart Raptor",
    description:
      "A cunning green raptor that pulls a wooden cart loaded with mysterious cargo. Despite its unusual job, the Cart Raptor is agile and ready to defend its treasure with ferocious speed.",
  },
  {
    image: img9,
    title: "Dread Viper",
    description:
      "A sleek black jet armed with heat-seeking missiles and rapid-fire guns. Fast, agile, and deadly, it relentlessly hunts you in the skies to ensure the city's downfall.",
  },
  {
    image: img13,
    title: "Inferno Drake",
    description:
      "This fiery dragon with orange and red wings spews molten lava from its mouth, setting the city ablaze. The Inferno Drake is a ferocious attacker that deals heavy damage to buildings and spreads chaos with its fire attacks.",
  },
];

const Enemies = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="enemies" className="pt-5">
      <div className="flex justify-center text-2xl  md:text-5xl  pt-4 pb-5 relative z-10 text-white font-bold">
        Enemies
      </div>
      <motion.div
        className="relative border border-gray-400  duration-500 w-full max-w-6xl mx-auto  pb-10 md:pb-7 h-auto md:h-[425px] md:rounded-2xl overflow-hidden  flex flex-col md:flex-row items-center justify-center"
        style={{
          backgroundImage: `url(${imgBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-12 pb-16 md:pb-0">
          {/* LEFT: Image For Desktop */}
          <div className="w-full md:w-[350px] md:flex justify-center md:mr-10 hidden">
            <img
              src={slides[current].image}
              className="w-full max-h-[180px] md:max-h-[350px] object-contain mt-16 rounded-lg"
            />
          </div>

          {/* LEFT: Image For Mobile */}
          <div className="w-full md:w-[350px] flex justify-center md:mr-10 md:hidden">
            <img
              src={slides[current].image}
              className="w-full max-h-[250px] pt-6 object-contain rounded-lg"
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="text-center md:text-left max-w-lg mb-6 md:mb-0 md:ml-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {slides[current].title}
            </h1>
            <p className="mt-3 text-gray-200 text-sm md:text-xl leading-relaxed">
              {slides[current].description}
            </p>
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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

export default Enemies;
