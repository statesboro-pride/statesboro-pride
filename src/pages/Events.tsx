import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";

export default function Events() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-events.jpg">
        <h1>Upcoming Events</h1>
      </PageHeader>
      <PageContents>Events</PageContents>
    </React.Fragment>
  );
}
