import React from "react";
import { Outlet } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import LoadingSpinner from "../LoadingSpinner";
import NavBar from "../NavBar";
import PageFooter from "../PageFooter";
import ScrollToTopButton from "../ScrollToTopButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export type PageProps = {
  children?: React.ReactNode;
};

export default function PageLayout({ children }: PageProps) {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme={true} />
      <NavBar />
      <React.Suspense fallback={<LoadingSpinner>Loading</LoadingSpinner>}>{children ?? <Outlet />}</React.Suspense>
      <PageFooter />
      <ScrollToTopButton>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopButton>
    </React.Fragment>
  );
}
