import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import handleSubmit from "./handleSubmit";
import useFormInputs from "./useFormInputs";

export function ContactForm() {
  const inputs = useFormInputs();

  return (
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
          <TextField fullWidth name="pronouns" label="Your Pronouns" style={{ margin: 0 }} inputRef={inputs.pronouns} />
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
  );
}

export default ContactForm;
