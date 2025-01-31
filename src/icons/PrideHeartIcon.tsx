import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

export default function PrideHeartIcon({ style, ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} style={{ width: "24px", height: "24px", ...style }}>
      <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="prideFlag" x1="0" x2="0" y1="0" y2="1">
            <stop offset="16.67%" stop-color="#E40303" />
            <stop offset="33.33%" stop-color="#FF8C00" />
            <stop offset="50%" stop-color="#FFED00" />
            <stop offset="66.67%" stop-color="#008026" />
            <stop offset="83.33%" stop-color="#24408E" />
            <stop offset="100%" stop-color="#732982" />
          </linearGradient>
        </defs>
        <path
          d="M100,170 C-40,70 50,-20 100,40 C150,-20 240,70 100,170 Z"
          fill="url(#prideFlag)"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </SvgIcon>
  );
}
