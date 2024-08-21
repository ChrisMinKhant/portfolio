import React from "react";
import Showcase from "./Showcase";
import loadedData from "../resources/featured.json";

export default function FeaturedSection() {
  return (
    <Showcase
      showcaseTitle={"Going To Finish Oneday"}
      showCaseItems={loadedData.featuredProjects}
    />
  );
}
