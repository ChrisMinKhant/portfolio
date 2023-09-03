import React from "react";
import "../css/NavBar.css";
import MenuLogo from "../resources/logos/menu.png";
import KaungMinKhantLogo from "../resources/logos/KAUNG MIN KHNAT_No_BG.png";
import NormalButton from "./NormalButton";

export default function NavBar() {
  return (
    <div className="nav d-flex justify-content-between align-items-center shadow shadow-md py-3 sticky-top">
      <div className="col-5 ms-3">
        <img src={KaungMinKhantLogo} alt="Kaung Min Khant Logo" />
      </div>

      <div
        className="col-3 d-none d-md-flex justify-content-end align-items-center"
        id="NonCol-NavBar"
      >
        <NormalButton buttonName="HOME" goTo="#HOME" />
        <NormalButton buttonName="ABOUT" goTo="#ABOUT" />
        <NormalButton buttonName="CONTACT" goTo="#CONTACT" />
      </div>

      <div className="col-3 d-flex-column text-center d-md-none">
        <button
          className="navbar-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <img
            className="menu-logo rounded-3 p-1 px-2"
            src={MenuLogo}
            alt="menu button"
          />
        </button>
        <div
          className="collapse position-absolute bg-light shadow-sm rounded-3 card mt-3 ms-sm-5"
          id="collapseWidthExample"
        >
          <a
            className="collapse-nav-btn text-decoration-none text-center p-1"
            href="#HOME"
          >
            HOME
          </a>
          <a
            className="collapse-nav-btn text-decoration-none text-center p-1"
            href="#ABOUT"
          >
            ABOUT
          </a>
          <a
            className="collapse-nav-btn text-decoration-none text-center p-1"
            href="#CONTACT"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}
