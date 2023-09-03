import React from "react";
import "../css/StatsSectionStyle.css";
import DoneLogo from "../resources/logos/done.png";
import OnGoingLogo from "../resources/logos/workflow.png";
import ClientLogo from "../resources/logos/client.png";

export default function StatsSection() {
  return (
    <div className="d-flex-column d-md-flex stats-section p-5">
      <div className="col-md-4 col-12 text-center">
        <img src={DoneLogo} alt="Done Logo" className="my-3 done-logo" />
        <h6>Completed Projects</h6>
        <h3 className="text-primary mb-3">+1</h3>
      </div>
      <div className="col-md-4 col-12 text-center">
        <img
          src={OnGoingLogo}
          alt="On Going Logo"
          className="my-3 ongoing-logo"
        />
        <h6>On Going Projects</h6>
        <h3 className="text-warning mb-3">+1</h3>
      </div>
      <div className="col-md-4 col-12 text-center">
        <img src={ClientLogo} alt="Client Logo" className="my-3 client-logo" />
        <h6>Happy Clients</h6>
        <h3 className="text-success mb-3">+2</h3>
      </div>
    </div>
  );
}
