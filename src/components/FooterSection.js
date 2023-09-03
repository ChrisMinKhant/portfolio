import React from "react";
import "../css/FooterSectionStyle.css";
import EmailLogo from "../resources/logos/gmail.png";
import PhoneLogo from "../resources/logos/telephone.png";
import FacebookLogo from "../resources/logos/facebook.png";
import LinkedInLogo from "../resources/logos/linkedin.png";

export default function FooterSection() {
  return (
    <div className="col-12 d-flex-column footer-section p-3 pb-1">
      <div id="CONTACT">
        <h1 className="mb-3">CONTACT ME</h1>
        <ul className="list-unstyled">
          <li className="mb-2">
            <img src={EmailLogo} alt="Email" className="me-3" />
            email : kaungminkhant05723123@gmail.com
          </li>
          <li className="mb-2">
            <img src={PhoneLogo} alt="Phone" className="me-3" />
            phone : +979790383481
          </li>
          <li className="mb-2">
            <img src={FacebookLogo} alt="Facebook" className="me-3" />
            facebook : Kaung Min Khant
          </li>
          <li className="mb-2">
            <img src={LinkedInLogo} alt="LinkedIN" className="me-3" />
            LinkedIn : Kaung Min Khant
          </li>
        </ul>
      </div>
      <div className="mt-5 text-center copyright-section">
        <p>© Copyright 2023 Kaung Min Khant</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}
