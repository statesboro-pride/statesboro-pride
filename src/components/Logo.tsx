import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function HeaderLogo() {
  return (
    <Stack className="header-logo" direction="row" spacing={0}>
      <Link href="/home">
        <img src="/images/logo/logo.webp" alt="Boro Pride" />
      </Link>
    </Stack>
  );
}
