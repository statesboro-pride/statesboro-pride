import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";
import LoremIpsum from "./LoremIpsum";

export default function Partnerships() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-partnerships.jpg">
        <h1>Annual Partnerships</h1>
      </PageHeader>
      <PageContents>
        <LoremIpsum />
      </PageContents>
    </React.Fragment>
  );
}
