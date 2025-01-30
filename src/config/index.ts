export type NavComponent = {
  type: "page" | "social" | "external";
  path: string;
  label: string;
  showInNav: boolean;
};

const navs: Map<string, NavComponent> = new Map(
  Object.entries({
    Home: {
      type: "page",
      path: "/home",
      label: "Home",
      showInNav: false,
    },
    About: {
      type: "page",
      path: "/about",
      label: "About",
      showInNav: true,
    },
    You: {
      type: "page",
      path: "/you",
      label: "You",
      showInNav: true,
    },
    Resources: {
      type: "page",
      path: "/resources",
      label: "Resources",
      showInNav: true,
    },
    Events: {
      type: "page",
      path: "/events",
      label: "Events",
      showInNav: true,
    },
    Partnerships: {
      type: "page",
      path: "/partnerships",
      label: "Partnerships",
      showInNav: true,
    },
    Contact: {
      type: "page",
      path: "/contact",
      label: "Contact",
      showInNav: true,
    },
    Linktree: {
      type: "external",
      path: "https://linktr.ee/statesboropride",
      label: "Linktree",
      showInNav: false,
    },
    Shop: {
      type: "external",
      path: "https://statesboro-pride.printify.me/products",
      label: "Shop",
      showInNav: false,
    },
    Instagram: {
      type: "social",
      path: "http://instagram.com/statesboropride",
      label: "Instagram",
      showInNav: true,
    },
    Facebook: {
      type: "social",
      path: "https://www.facebook.com/StatesboroPride",
      label: "Facebook",
      showInNav: true,
    },
    Bluesky: {
      type: "social",
      path: "https://bsky.app/profile/statesboropride.bsky.social",
      label: "Bluesky",
      showInNav: true,
    },
  })
);

const redirects = new Map(
  Object.entries({
    "/": navs.get("Home")?.path,
    "/instagram": navs.get("Instagram")?.path,
    "/facebook": navs.get("Facebook")?.path,
    "/bluesky": navs.get("Bluesky")?.path,
    "/linktree": navs.get("Linktree")?.path,
    "/shop": navs.get("Shop")?.path,
  }).filter(([, redirect]) => redirect !== undefined) as [string, string][]
);

export default {
  navs,
  redirects,
};
