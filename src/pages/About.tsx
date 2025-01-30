import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";

export default function About() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-about.jpg">
        <h1>Our Mission</h1>
      </PageHeader>
      <PageContents>
        <p style={{textAlign: "center", fontSize: "24px"}}>
          Boro Pride is a non-profit organization, established in 2019, that is focused on community building. We strive
          to advocate for the visibility, inclusion, celebration, equality, and safety of LGBTQIAP+ people in
          Statesboro-Bulloch County, Georgia, and the surrounding areas.
        </p>
      </PageContents>
    </React.Fragment>
  );
}
