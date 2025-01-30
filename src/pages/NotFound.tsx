import React from "react";
import PageHeader from "../layout/PageHeader";
import PageContents from "../layout/PageContents";

export default function Home() {
  return (
    <React.Fragment>
      <PageHeader imgSrc="/images/header-main.jpg">
        <h1>Girl, what are you doing?</h1>
      </PageHeader>
      <PageContents>
        <p>We couldn't find the page you were looking for. This is either because:</p>
        <ul>
          <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        <p>
          You can return to our homepage by <a href="/">clicking here</a>.
        </p>
      </PageContents>
    </React.Fragment>
  );
}
