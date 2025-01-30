import React from "react";
import IconButton from "@mui/material/IconButton";
import SocialMediaIcon from "../icons/SocialMediaIcon";

export type SocialMediaButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: React.CSSProperties["color"] | undefined;
  first?: boolean | undefined;
};

export default function SocialMediaButton({ label, onClick, color, first }: SocialMediaButtonProps) {
  const iconButtonStyle = {
    marginTop: "auto",
    marginBottom: "auto",
    color: color ?? "inherit",
  };

  return (
    <IconButton
      title={label}
      className={"SocialMediaButton" + (first ? " First" : "")}
      style={iconButtonStyle}
      onClick={onClick}
    >
      <SocialMediaIcon name={label} />
    </IconButton>
  );
}
