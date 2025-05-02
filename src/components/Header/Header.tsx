import HeaderAppBar from "./HeaderAppBar";
import HeaderBanner, { type HeaderBannerProps } from "./HeaderBanner";

export type HeaderProps = HeaderBannerProps;

export function Header(props: HeaderProps) {
  return (
    <>
      <HeaderAppBar />
      <HeaderBanner {...props} />
    </>
  );
}

export default Header;
