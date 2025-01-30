import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";

export default function Resources() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-resources.jpg">
        <h1>Not sure what you're looking for? Maybe it's here.</h1>
      </PageHeader>
      <PageContents>Resources</PageContents>
    </React.Fragment>
  );
}
