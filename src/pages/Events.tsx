import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";
import LoremIpsum from "./LoremIpsum";

export default function Events() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-events.jpg">
        <h1>Upcoming Events</h1>
      </PageHeader>
      <PageContents>
        <LoremIpsum/>
      </PageContents>
    </React.Fragment>
  );
}
