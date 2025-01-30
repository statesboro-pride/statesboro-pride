import React from "react";

export type AppNavHooks = {
  anchorElNav: HTMLElement | false | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: (event: object, reason: "backdropClick" | "escapeKeyDown") => void;
  handleOnClick: (selected: string) => Promise<void>;
};

export default function useAppNav(onClick: (selected: string) => Promise<void>): AppNavHooks {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | false | null>(null);

  const onOpen = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) =>
      setAnchorElNav((current) => {
        return current !== false ? event.currentTarget : null;
      }),
    [setAnchorElNav]
  );

  const onClose = React.useCallback(
    (event: object, reason: "backdropClick" | "escapeKeyDown") =>
      event && setAnchorElNav(reason === "backdropClick" ? false : null),
    [setAnchorElNav]
  );

  const handleOnClick = React.useCallback(
    (selected: string): Promise<void> => {
      setAnchorElNav(false);
      return onClick(selected);
    },
    [onClick, setAnchorElNav]
  );

  return { anchorElNav, onOpen, onClose, handleOnClick };
}
