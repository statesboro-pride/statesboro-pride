import { createSvgIcon } from "./createSvgIcon";

export const TransHeart = createSvgIcon(
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="transFlag" x1="0" x2="0" y1="0" y2="1">
        <stop offset="10%" stopColor="#55CDFC" />
        <stop offset="30%" stopColor="#F7A8B8" />
        <stop offset="50%" stopColor="white" />
        <stop offset="70%" stopColor="#F7A8B8" />
        <stop offset="90%" stopColor="#55CDFC" />
      </linearGradient>
    </defs>
    <path d="M100,170 C-40,70 50,-20 100,40 C150,-20 240,70 100,170 Z" fill="url(#transFlag)" />
  </svg>
);

export default TransHeart;
