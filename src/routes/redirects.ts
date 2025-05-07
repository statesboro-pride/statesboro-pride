export const redirects: [string, string][] = [
  // Internal
  ["/", "/home"],

  // Social Media
  ["/instagram", "https://www.instagram.com/statesboropride"],
  ["/bluesky", "https://bsky.app/profile/statesboropride.bsky.social"],
  ["/facebook", "https://www.facebook.com/StatesboroPride"],
  ["/discord", "https://discord.gg/f2BsHPpgap"],

  // Linktree
  ["/linktree", "https://linktr.ee/statesboropride"],
  ["/links", "https://linktr.ee/statesboropride"],

  // Forms
  ["/volunteer", import.meta.env.VITE_VOLUNTEER_FORM_URL],
  ["/vendor", import.meta.env.VITE_VENDOR_FORM_URL],
  ["/pageant", import.meta.env.VITE_PAGEANT_FORM_URL],
  ["/nominate", import.meta.env.VITE_NOMINATE_FORM_URL],

  // Donations & Shop
  ["/shop", "https://statesboro-pride.printify.me"],
  ["/donate", "https://donorbox.org/proud-to-give"],
  ["/cashapp", "https://cash.app/$StatesboroPride"],
  ["/paypal", "https://www.paypal.com/paypalme/StatesboroPride912"],
  ["/venmo", "https://venmo.com/StatesboroPride"],
];

export default redirects;
