import type { CSSProperties } from "@mui/material";

export const backgroundImage: [string, string] = [
  "/images/header/header-events-xs.webp",
  "/images/header/header-events.webp",
];

export const bannerTextStyle: CSSProperties = { textAlign: "center" };

export const iframeStyle: CSSProperties = { border: 0, minHeight: "600px" };

export const calendarUrl =
  "https://calendar.google.com/calendar/embed?" +
  new URLSearchParams({
    src: import.meta.env.VITE_EVENTS_CALENDAR,
    ctz: "America/New_York",
    mode: "AGENDA",
    showPrint: "0",
    showCalendars: "0",
  }).toString();
