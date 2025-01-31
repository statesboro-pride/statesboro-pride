import Home from "./Home";
import About from "./About";
import You from "./You";
import Resources from "./Resources";
import Events from "./Events";
import Partnerships from "./Partnerships";
import Contact from "./Contact";
import NotFound from "./NotFound";

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
