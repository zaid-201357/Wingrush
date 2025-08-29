import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Mission from "../Components/Mission";


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



