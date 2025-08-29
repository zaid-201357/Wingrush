import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/missions";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";


function Components() {
  return (
    <>
      <Header/>
      <div className="overflow-x-hidden">
        <HeroSection />
        <Mission />
        <Footer />
      </div>
    </>
  );
}

export default Components;



