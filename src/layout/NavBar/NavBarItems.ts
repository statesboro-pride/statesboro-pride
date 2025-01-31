import Config from "../../config";

const navItems = [...Config.navs].filter(([, nav]) => nav.showInNav && nav.type !== "social");
const socialItems = [...Config.navs].filter(([, nav]) => nav.showInNav && nav.type === "social");

export { navItems, socialItems };
