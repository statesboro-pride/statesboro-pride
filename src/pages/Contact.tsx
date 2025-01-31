import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";
import LoremIpsum from "./LoremIpsum";

export default function Contact() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-contact.jpg">
        <h1>Contact Us</h1>
      </PageHeader>
      <PageContents>
        <LoremIpsum />
      </PageContents>
    </React.Fragment>
  );
}
