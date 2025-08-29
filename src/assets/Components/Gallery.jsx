import React from "react";
import img1 from "../../../public/Gallery/13.png";
import img2 from "../../../public/Gallery/2.jpg";
import img3 from "../../../public/Gallery/8.jpg";
import img4 from "../../../public/Gallery/4.jpg";
import img5 from "../../../public/Gallery/23.png";
import img6 from "../../../public/Gallery/6.jpg";
import img7 from "../../../public/Gallery/7.jpg";
import img8 from "../../../public/Gallery/8.png";
import img9 from "../../../public/Gallery/9.png";
import img10 from "../../../public/Gallery/11.png";
import img11 from "../../../public/Gallery/0.png";
import {motion,easeInOut} from 'framer-motion'

const Gallery = () => {
  // ✅ Store images in an array with extra info
//  For Desktop array
  const images = [
    { src: img1, tall: true }, // ✅ Make img1 taller
    { src: img2 },
    { src: img3, wide: true },
    { src: img4 },
    { src: img5, tall: true },
    { src: img6 },
    { src: img7, wide: true },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11, wide: true },
  ];

  // For Mobile and Ipad array 
  const img = [
    { src: img1,  }, // ✅ Make img1 taller
    { src: img2,},
    { src: img3, wide: true },
    { src: img4 },
    { src: img5, },
    { src: img6 , wide: true},
    { src: img7, wide: true },
    { src: img8 },
    { src: img9 },
    { src: img10 , wide : true },
    { src: img11, wide: true },
  ];

  return (
    <section id="gallery">
      {/* Outer container */}
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8">
        {/* ✅ Heading */}
        <div className="flex justify-center items-center relative z-10 mt-12 text-white w-40 sm:w-48 mx-auto text-2xl sm:text-3xl xl:text-5xl rounded-xl pt-8">
          Gallery
        </div>

        {/* ✅ Container */}
        {/* For Desktop  */}
        <motion.div
          className="md:hidden xl:block bg-black w-full sm:w-[95%] mx-auto rounded-4xl border border-[#dfdff0] p-4 sm:p-8 lg:p-10 mt-10 sm:mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          {/* ✅ Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative group bg-[#052b2f] rounded-2xl border border-black
                  overflow-hidden shadow-[0_0_10px_rgba(200,200,200)]  ]
                  transition-all duration-500 hover:scale-105 active:scale-105
                  ${img.tall ? "sm:row-span-2" : ""}
                  ${img.wide ? "sm:col-span-2" : ""}`}
              >
                {/* ✅ Image */}
                <img
                  src={img.src}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full object-cover bg-center bg-cover transition-all duration-500 group-hover:scale-110 group-active:scale-110 opacity-80 
                    ${img.tall ? "h-full sm:h-[530px]" : "h-52 sm:h-64"}`}
                />

                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/7 to-transparent p-4"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* For Mobile and Ipad  */}
        <div className="hidden sm:block xl:hidden bg-gray-800 w-full sm:w-[95%] mx-auto rounded-4xl border border-[#dfdff0] p-4 sm:p-8 lg:p-10 mt-10 sm:mt-14">
          {/* ✅ Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4  gap-4 sm:gap-6">
            {img.map((img, index) => (
              <div
                key={index}
                className={`relative group bg-[#052b2f] rounded-2xl border border-black
                  overflow-hidden shadow-[0_0_10px_rgba(0,0,0)]
                  transition-all duration-500 hover:scale-105 active:scale-105
                  ${img.tall ? "sm:row-span-2" : ""}
                  ${img.wide ? "sm:col-span-2" : ""}`}
              >
                {/* ✅ Image */}
                <img
                  src={img.src}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full object-cover bg-center bg-cover transition-all duration-500 group-hover:scale-110 group-active:scale-110 opacity-80 
                    ${img.tall ? "h-full sm:h-[530px]" : "h-52 sm:h-64"}`}
                />

                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/7 to-transparent p-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

