import { type LazyExoticComponent, type JSX } from "react";
import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));
export const About = lazy(() => import("../pages/About/About"));
export const Resources = lazy(() => import("../pages/Resources/Resources"));
export const GetInvolved = lazy(() => import("../pages/GetInvolved/GetInvolved"));
export const Events = lazy(() => import("../pages/Events/Events"));
export const Partnerships = lazy(() => import("../pages/Partnerships/Partnerships"));
export const Contact = lazy(() => import("../pages/Contact/Contact"));
export const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const pages: [string, LazyExoticComponent<() => JSX.Element>][] = [
  ["/home", Home],
  ["/about", About],
  ["/resources", Resources],
  ["/get-involved", GetInvolved],
  ["/events", Events],
  ["/partnerships", Partnerships],
  ["/contact", Contact],
];

export default pages;
