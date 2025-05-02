import React from "react";
import type { ImgIconComponent } from ".";

export const BoroPride: ImgIconComponent = (props: React.JSX.IntrinsicElements["img"]) => {
  return <img src="/images/logo-512.png" {...props} />;
};

export default BoroPride;
