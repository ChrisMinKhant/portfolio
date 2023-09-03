import React from "react";
import "../css/NormalButtonStyle.css";

function NormalButton({ buttonName, goTo }) {
  return (
    <a href={goTo}>
      <button className="btn-normal rounded-2 me-3">{buttonName}</button>
    </a>
  );
}

export default NormalButton;
