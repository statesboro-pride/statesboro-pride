import React from "react";
import useRedirect from "./useRedirect";

export type RedirectProps = {
  to: string;
};

export default function Redirect({ to }: RedirectProps) {
  const redirect = useRedirect();
  React.useEffect(() => {
    redirect(to);
  }, [redirect, to]);
  return null;
}
