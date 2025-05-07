import Typography from "@mui/material/Typography";

export default function Vendor() {
  return (
    <>
      <Typography variant="h4" component="p" style={{ textAlign: "center" }}>
        Vendors
      </Typography>
      <p>
        Interested in being a vendor at our Pride Festival?{" "}
        <a href="/vendor" target="_blank">
          Sign up here!
        </a>
      </p>
      <p>
        Set up time and location will be announced closer to the festival date of <strong>Oct 4th, 2025</strong> - it is
        not required to stay until Festival closes, but strongly encouraged.
      </p>
      <p>Pricing for one 10ft x 5ft space:</p>
      <ul>
        <li>501c3 - $20</li>
        <li>Food Vendor - $75</li>
        <li>All Other - $150</li>
      </ul>
      <p>
        Registration fees can be paid through Venmo (
        <a href="/venmo" target="_blank">
          @StatesboroPride
        </a>
        ), CashApp (
        <a href="/cashapp" target="_blank">
          $StatesboroPride
        </a>
        ), PayPal (<a href="/paypal">@StatesboroPride912</a>), cash or check made payable to Statesboro Pride.
      </p>
      <p>
        Setup details will be provided closer to the festival date. Registration is not complete and space is not
        reserved until payment is complete.
      </p>
    </>
  );
}
