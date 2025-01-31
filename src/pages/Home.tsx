import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";
import LoremIpsum from "./LoremIpsum";

export default function Home() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-main.jpg">
        <h1>NEW! We now have an online store where you can help support Boro Pride!</h1>
        <p className="" style={{ whiteSpace: "pre-wrap" }}>
          <a href="https://statesboro-pride.printify.me/products" target="_blank">
            SHOP NOW &gt;
          </a>
        </p>
      </PageHeader>
      <PageContents>
        <LoremIpsum />
      </PageContents>
    </React.Fragment>
  );
}
