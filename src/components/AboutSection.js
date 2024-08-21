import React from "react";
import "../css/AboutSectionStyle.css";
import ProfilePicture from "../resources/images/photo_2023-08-28_20-49-04.jpg";
import EmailLogo from "../resources/logos/gmail.png";
import LinkedInLogo from "../resources/logos/business.png";
import FacebookLogo from "../resources/logos/facebook.png";
import GitHub from "../resources/logos/github-logo.png";

export default function AboutSection() {
  return (
    <div className="about-section" id="ABOUT">
      <div className="d-flex-column align-items-center justify-content-center">
        <div className="col-12 text-center">
          <img
            src={ProfilePicture}
            alt="ProfilePicture"
            className="rounded-circle shadow-md mb-3"
          />
        </div>
        <div className="col-12 text-center">
          <h1 className="mb-3 text-uppercase fs-3 fs-sm-1">Kaung Min Khant</h1>
          <p className="mb-3 text-justify">
            A tech enthusiast who chose the career path of software development.
            I am proficient in Spring Boot which I am using to develop and
            deliver high-impact solutions to real-world problems. As the tech
            industry is one of the fastest developed industries, loading Golang
            into my arsenal helped me to expand my understanding of the
            technologies. I also deeply believe in blockchain supremacy and
            decentralization of everything. When something is free from some
            control, all we have to do is watch how far it can grow. As I am
            working in the banking industry, I can touch on the importance of
            high availability ( HA ), fault tolerance ( FT ), and disaster
            recovery ( DR ) which are helping in developing high-quality
            software. Also hope to work on the implementation of fast and secure
            decentralized currency for developing countries like my country.
          </p>
          <div id="CONTACT" className="d-flex justify-content-evenly my-5">
            <a href="mailto:kaungminkhant05723123@gmail.com?subject='Contact From Kaung Min Khant Portfolio'">
              <img src={EmailLogo} alt="Email" className="me-3" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083581730413&mibextid=ZbWKwL"
              target="_blank"
            >
              <img src={FacebookLogo} alt="Facebook" className="me-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-min-khant-079729186"
              target="_blank"
            >
              <img src={LinkedInLogo} alt="LinkedIN" className="me-3" />
            </a>
            <a href="https://github.com/ChrisMinKhant" target="_blank">
              <img src={GitHub} alt="GitHub" className="me-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
