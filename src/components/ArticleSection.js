import React from "react";
import Showcase from "./Showcase";
import loadedData from "../resources/article.json"

export default function ArticleSection() {

  return (
    <Showcase
      showcaseTitle={"Yesterday I Read"}
      showCaseItems={loadedData.articles}
    />
  );
}
