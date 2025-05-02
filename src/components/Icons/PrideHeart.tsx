import { createSvgIcon } from "./createSvgIcon";

export const PrideHeart = createSvgIcon(
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="prideFlag" x1="0" x2="0" y1="0" y2="1">
        <stop offset="16.67%" stopColor="#E40303" />
        <stop offset="33.33%" stopColor="#FF8C00" />
        <stop offset="50%" stopColor="#FFED00" />
        <stop offset="66.67%" stopColor="#008026" />
        <stop offset="83.33%" stopColor="#24408E" />
        <stop offset="100%" stopColor="#732982" />
      </linearGradient>
    </defs>
    <path d="M100,170 C-40,70 50,-20 100,40 C150,-20 240,70 100,170 Z" fill="url(#prideFlag)" />
  </svg>
);

export default PrideHeart;
