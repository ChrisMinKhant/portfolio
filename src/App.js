import React from "react";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import FeaturedSection from "./components/FeaturedSection";
import ArticleSection from "./components/ArticleSection";

function App() {
  return (
    <div className="outer-wrapper my-5">
      <AboutSection />
      <FeaturedSection />
      <ArticleSection />
      <FooterSection />
    </div>
  );
}

export default App;
