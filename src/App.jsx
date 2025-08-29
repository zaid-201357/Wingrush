import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./assets/Components/PrivacyPolicy";
import Components from "./assets/Pages/Components";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
