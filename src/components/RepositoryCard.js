import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../css/RepositoryCardStyle.css";
import React from "react";

export default function RepositoryCard({
  repositoryName,
  repositoryDescription,
  repositoryLink,
  stackList,
}) {
  const goToLink = () => {
    console.log("Button CLick");
    window.open(repositoryLink, "_blank", "noreferrer");
  };

  return (
    <div
      className="card my-5 border-0"
      style={{ width: "25rem" }}
      onClick={() => goToLink()}
    >
      <div className="gradient-shadow"></div>
      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title">{repositoryName}</h5>
        <p className="card-text my-auto">{repositoryDescription}</p>
        <div className="d-flex mt-3">
          {
            stackList ? stackList.map(stack => <p className="btn btn-dark rounded-3 me-2">{stack}</p>) : null
          }
        </div>
      </div>
    </div>
  );
}
