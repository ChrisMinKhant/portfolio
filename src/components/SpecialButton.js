import React from "react";
import "../css/SpecialButtonStyle.css";

function SpecialButton({ buttonName, goTo }) {
  return (
    <a href={goTo}>
      <button className="btn-special rounded-2">{buttonName}</button>
    </a>
  );
}

export default SpecialButton;
