import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

export default function TransHeartIcon({ style, ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} style={{ width: "24px", height: "24px", ...style }}>
      <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="transFlag" x1="0" x2="0" y1="0" y2="1">
            <stop offset="10%" stop-color="#55CDFC" />
            <stop offset="30%" stop-color="#F7A8B8" />
            <stop offset="50%" stop-color="white" />
            <stop offset="70%" stop-color="#F7A8B8" />
            <stop offset="90%" stop-color="#55CDFC" />
          </linearGradient>
        </defs>
        <path
          d="M100,170 C-40,70 50,-20 100,40 C150,-20 240,70 100,170 Z"
          fill="url(#transFlag)"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </SvgIcon>
  );
}
