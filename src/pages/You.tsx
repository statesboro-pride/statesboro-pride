import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";

export default function You() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-you.jpg">
        <h1>You belong here just as much as anyone else.</h1>
      </PageHeader>
      <PageContents>You</PageContents>
    </React.Fragment>
  );
}
