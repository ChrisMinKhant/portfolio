import React from "react";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="outer-wrapper">
      <NavBar />
      <HomeSection />
      <AboutSection />
      <StatsSection />
      <FooterSection />
    </div>
  );
}

export default App;
