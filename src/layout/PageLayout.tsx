import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import PageFooter from "./PageFooter";

export type PageProps = {
  children?: React.ReactNode;
};

export default function PageLayout({ children }: PageProps) {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme={true} />
      <NavBar />
      {children}
      <PageFooter />
    </React.Fragment>
  );
}
