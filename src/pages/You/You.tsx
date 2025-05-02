import type * as MUI from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import handleSubmit from "./handleSubmit";
import useFormInputs from "./useFormInputs";

const bannerText: MUI.SxProps<MUI.Theme> = {
  width: { xs: "100%", sm: "75%" },
};
const typography: MUI.SxProps<MUI.Theme> = {
  fontSize: {
    xs: "4vh",
    md: "6vh",
  },
};

export function You() {
  const inputs = useFormInputs();

  return (
    <>
      <title>You &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-you-xs.webp", "/images/header/header-you.webp"]}>
        <BannerText sx={bannerText}>You belong here just as much as anyone else.</BannerText>
      </Header>

      <Body>
        <Typography variant="h2" sx={typography}>
          We're so glad you found us.
        </Typography>

        <br />

        <Typography>
          Whether you identify as a member of the LGBTQIA+ community, you're our ally, or if you're still figuring it
          out&mdash;you have a home with us. We want your support and we want to support you, too. Use the form below to
          reach out so that we can welcome you.
        </Typography>

        <br />
        <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }} noValidate autoComplete="off">
          <Stack direction="column" spacing={2}>
            <div>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ margin: 0 }}>
                <div style={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    required
                    name="firstName"
                    label="First Name"
                    style={{ margin: 0 }}
                    inputRef={inputs.firstName}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    required
                    name="lastName"
                    label="Last Name"
                    style={{ margin: 0 }}
                    inputRef={inputs.lastName}
                  />
                </div>
              </Stack>
            </div>
            <div>
              <TextField
                fullWidth
                name="pronouns"
                label="Your Pronouns"
                style={{ margin: 0 }}
                inputRef={inputs.pronouns}
              />
            </div>
            <div>
              <TextField fullWidth name="phone" label="Phone" style={{ margin: 0 }} inputRef={inputs.phone} />
            </div>
            <div>
              <TextField fullWidth required name="email" label="Email" style={{ margin: 0 }} inputRef={inputs.email} />
            </div>
            <div>
              <TextField
                fullWidth
                required
                name="subject"
                label="Subject"
                style={{ margin: 0 }}
                inputRef={inputs.subject}
              />
            </div>
            <div>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                name="message"
                label="Message"
                style={{ margin: 0 }}
                inputRef={inputs.message}
              />
            </div>
            <p>
              Let us know what you're looking for... new friends, community support, resources, volunteer opportunities,
              etc. You can also just say "Hi"!
            </p>
          </Stack>
          <p>
            <Button variant="contained" size="large" color="secondary" onClick={() => handleSubmit(inputs)}>
              Submit
            </Button>
          </p>
        </Box>
      </Body>
      <Footer />
    </>
  );
}

export default You;
