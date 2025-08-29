import React, { useState } from "react";
import img12 from "../../../public/PlaneImages/img12.png";
import { easeInOut, motion } from "framer-motion";
import PlanesCarousel from '../Components/PlanesCarousel'
import Enemies from '../Components/Enemies'
import Gallery from "./Gallery";
import { link } from "framer-motion/client";
import video1 from '../../../public/missions videos/1.mp4'
import video2 from '../../../public/missions videos/2.mp4'
import video3 from '../../../public/missions videos/3.mp4'
import video4 from '../../../public/missions videos/4.mp4'
import video5 from '../../../public/missions videos/5.mp4'
import video6 from '../../../public/missions videos/6.mp4'
import video7 from '../../../public/missions videos/7.mp4'
import video8 from "../../../public/missions videos/8.mp4";
import img1 from '../../../public/Missions-planetumbnails/1.jpg'
import img2 from '../../../public/Missions-planetumbnails/2.jpg'
import img3 from '../../../public/Missions-planetumbnails/3.jpg'
import img4 from '../../../public/Missions-planetumbnails/6.jpg'
import img5 from '../../../public/Missions-planetumbnails/5.jpg'
import img6 from '../../../public/Missions-planetumbnails/4.jpg'
import img7 from "../../../public/Missions-planetumbnails/7.jpg";
import img8 from "../../../public/Missions-planetumbnails/8.jpg";
const Mission = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videos = [
    {
      id: 1,
      title: "Video 1",
      desc: "Fly through narrow valleys, dogdge enemy fire and destroy  towers to weaken enemy control . upgrade your plane to survive growing threats",
      img: img1,
       link: video1,
    },
    {
      id: 2,
      title: "Video 2",
      desc: "Destroy towers, fight monsters and dragons, and shoot gas tanks for extra points while navigating deadly defenses in the mountains.",
      img: img2,
      link: video2,
    },
    {
      id: 3,
      title: "Video 3",
      desc: "Blast monsters on the bridge before they reach the city. Aim carefully—each shot counts against the heavily armed enemies",
      img: img3,
      link: video3,
    },
    {
      id: 4,
      title: "Video 4",
      desc: "Take down the patrol plane before it alerts reinforcements. Use precise timing and quick reflexes to clear the skies.",
      img: img4,
      link: video4,
    },
    {
      id: 5,
      title: "Video 5",
      desc: "Stop fast, deadly reptors from crossing the bridge. Use your firepower to protect the city before they break through.",
      img: img5,
      link: video5,
    },
    {
      id: 6,
      title: "Video 6",
      desc: "Dodge heavy fire and hit weak points to defeat a powerful enemy with advanced weapons. This is your toughest battle yet.",
      img: img6,
      link: video6,
    },
    {
      id: 7,
      title: "Video 7",
      desc: "Make a perfect landing on the platform to secure the city. One wrong move could risk the mission—precision is key.",
      img: img7,
      link: video7,
    },
    {
      id: 8,
      title: "Video 8",
      desc: "Dodge flames and shoot down rampaging dragons. Hit their weak spots to survive their fiery onslaught and protect your plane.",
      img: img8,
      link: video8,
    },
  ];

  const openModal = (link) => {
    setVideoUrl(link);
    setOpen(true);
  };

  return (
    <div
      className="relative bg-fixed w-full h-full  bg-center bg-cover overflow-hidden py-5"
      style={{ backgroundImage: `url(${img12})` }}
    >
      {/* 🔹 Black Overlay */}

      {/* <PlanesCarousel />   */}
      <div className="absolute inset-0  bg-black/80 "></div>
      <PlanesCarousel />

      <div
        className="text-white relative pt-10 z-20 text-2xl md:text-5xl flex justify-center items-center font-bold "
        id="missions"
      >
        Missoins
      </div>
      {/* 🔹 Main Content */}
      <motion.div
        className="relative z-10  max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-6 py-10 px-4 md:px-0  "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: easeInOut }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{ backgroundImage: `url(${video.img})` }}
            className="relative bg-cover w-[380px] bg-center h-52 flex items-center justify-center rounded-lg group border-white border  hover:shadow-[0_0_10px_rgba(200,200,200)]  hover:scale-105 duration-500 "
          >
            <div className="absolute inset-0 bg-black/3 rounded-lg"></div>
            {/* <span className="text-lg font-semibold hidden group-hover:block text-white">
              {video.title}
            </span> */}

            {/* Hover overlay */}
            <div className="absolute inset-0  md:bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-xl text-black font-semibold md:text-white p-3 rounded-lg">
              <button
                onClick={() => openModal(video.link)}
                className="mb-2 text-white text-xs text-center md:text-sm cursor-pointer"
              >
                {video.desc}
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 🔹 Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black/50 w-4/6 p-2 md:p-6 rounded-lg shadow-lg relative">
            {/* Video */}
            <div className="w-full h-48 md:h-96">
              <iframe
                className="w-full h-full rounded-lg"
                src={videoUrl}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-4 mt-4">
              {/* <a
                href={videoUrl.replace("embed/", "watch?v=")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:px-4 md:py-2 text-xs bg-red-500 hover:bg-red-600 text-white rounded hover:cursor-pointer"
              >
                Watch on YouTube
              </a> */}
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-xs md:px-4 md:py-2 bg-gray-500 hover:bg-gray-600 text-white rounded hover:cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Enemies />
      <Gallery />
    </div>
  );
};

export default Mission;

