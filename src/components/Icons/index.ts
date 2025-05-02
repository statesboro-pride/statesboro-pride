import type { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type * from "@mui/material/SvgIcon";
export type SvgIconComponent = OverridableComponent<SvgIconTypeMap> & { muiName: string };
export type ImgIconProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export type ImgIconComponent = (props: ImgIconProps) => ReactNode;
export type IconComponent = SvgIconComponent | ImgIconComponent;

export { default as Facebook } from "@mui/icons-material/Facebook";
export { default as Instagram } from "@mui/icons-material/Instagram";
export { default as QuestionMark } from "@mui/icons-material/QuestionMark";
export { default as Bluesky } from "./Bluesky";
export { default as BoroPride } from "./BoroPride";
export { default as Linktree } from "./Linktree";
export { default as PrideHeart } from "./PrideHeart";
export { default as TransHeart } from "./TransHeart";
