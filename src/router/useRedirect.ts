import React from "react";
import { useNavigate } from "react-router";

export default function useRedirect() {
  const navigate = useNavigate();
  const redirect = React.useCallback(
    async (to: string) => {
      if (to.startsWith("http")) {
        window.location.replace(to);
        return Promise.resolve();
      }
      await navigate(to);
    },
    [navigate]
  );
  return redirect;
}
