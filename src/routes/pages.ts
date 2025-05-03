import { type LazyExoticComponent, type JSX } from "react";
import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const About = lazy(() => import("../pages/About"));
export const Resources = lazy(() => import("../pages/Resources"));
export const GetInvolved = lazy(() => import("../pages/GetInvolved"));
export const Events = lazy(() => import("../pages/Events"));
export const Partnerships = lazy(() => import("../pages/Partnerships"));
export const Contact = lazy(() => import("../pages/Contact"));
export const NotFound = lazy(() => import("../pages/NotFound"));

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
