import React from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const You = React.lazy(() => import("./You"));
const Resources = React.lazy(() => import("./Resources"));
const Events = React.lazy(() => import("./Events"));
const Partnerships = React.lazy(() => import("./Partnerships"));
const Contact = React.lazy(() => import("./Contact"));
const NotFound = React.lazy(() => import("./NotFound"));

export default function Page({ name }: { name: string }) {
  switch (name) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "You":
      return <You />;
    case "Resources":
      return <Resources />;
    case "Events":
      return <Events />;
    case "Partnerships":
      return <Partnerships />;
    case "Contact":
      return <Contact />;
  }
  return <NotFound />;
}
