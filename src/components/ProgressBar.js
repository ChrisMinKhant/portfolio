import React from "react";

export default function ProgressBar({ progressBarTitle, progress }) {
  let progressBarStyle = {
    height: "10px",
    backgroundColor: "#fff",
    border: "#000 solid 2px",
  };

  let progressBarFillStyle = {
    width: progress,
    height: "10px",
    backgroundColor: "##5D98FF",
  };
  return (
    <div className="mb-4">
      <p>{progressBarTitle}</p>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuemin="0"
        aria-valuemax="100"
        style={progressBarStyle}
      >
        <div className="progress-bar" style={progressBarFillStyle}></div>
      </div>
    </div>
  );
}
