import React from "react";
import RepositoryCard from "./RepositoryCard";
import "../css/ShowcaseStyle.css";

export default function Showcase({ showcaseTitle, showCaseItems }) {
  return (
    <div className="showcase p-1">
      <div>
        <p className="fs-3">{showcaseTitle}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {showCaseItems.map((items) => (
          <RepositoryCard
            repositoryName={items.repositoryName}
            repositoryDescription={items.repositoryDescription}
            repositoryLink={items.repositoryLink}
            stackList={items.stack}
          ></RepositoryCard>
        ))}
      </div>
    </div>
  );
}
