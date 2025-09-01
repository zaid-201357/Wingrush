import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Mission from "../Components/Mission";

function Components() {
  return (
    <>
      <div className="sticky z-50 top-0">
        <Header />
      </div>
      <div className="overflow-x-hidden">
        <HeroSection />
        <Mission />
        <Footer />
      </div>
    </>
  );
}

export default Components;
