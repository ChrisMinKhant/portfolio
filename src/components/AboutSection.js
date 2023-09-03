import React from "react";
import "../css/AboutSectionStyle.css";
import ProfilePicture from "../resources/images/photo_2023-08-28_20-49-04.jpg";
import ProgressBar from "./ProgressBar";

export default function AboutSection() {
  return (
    <div className="about-section" id="ABOUT">
      <div className="d-flex-column d-md-flex align-items-center justify-content-center p-5">
        <div className="col-md-6 col-12 text-center">
          <img
            src={ProfilePicture}
            alt="ProfilePicture"
            className="rounded-circle shadow-md mb-3"
          />
        </div>
        <div className="col-md-6 col-12">
          <h1 className="mb-3 text-uppercase fs-3 fs-sm-1">Kaung Min Khant</h1>
          <p className="mb-5 text-justify">
            An energetic{" "}
            <span className="fw-bold text-uppercase">backend developer </span>
            and tech enthusiast, working as an intern Java backend microservices
            developer at YOMA Bank. Continuous learner, who is always eager to
            learn all the new technologies, theories, and concepts. A
            simple-minded thinker with a chill and friendly personality. Fond of
            solving complex problems and providing tech solutions.
            <span className="fw-bold"> Opening to freelace project.</span>
          </p>
          <h4 className="mb-3">WHAT CAN I DO?</h4>
          <ProgressBar progressBarTitle={"Java"} progress={"50%"} />
          <ProgressBar progressBarTitle={"Spring Boot"} progress={"60%"} />
          <ProgressBar progressBarTitle={"API"} progress={"55%"} />
          <ProgressBar progressBarTitle={"Database"} progress={"57%"} />
        </div>
      </div>
    </div>
  );
}
