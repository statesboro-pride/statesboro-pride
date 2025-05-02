import { type LazyExoticComponent, type JSX } from "react";
import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const About = lazy(() => import("../pages/About"));
export const You = lazy(() => import("../pages/You"));
export const Resources = lazy(() => import("../pages/Resources"));
export const Events = lazy(() => import("../pages/Events"));
export const Partnerships = lazy(() => import("../pages/Partnerships"));
export const Contact = lazy(() => import("../pages/Contact"));
export const NotFound = lazy(() => import("../pages/NotFound"));

export const pages: [string, LazyExoticComponent<() => JSX.Element>][] = [
  ["/home", Home],
  ["/about", About],
  ["/you", You],
  ["/resources", Resources],
  ["/events", Events],
  ["/partnerships", Partnerships],
  ["/contact", Contact],
];

export default pages;
