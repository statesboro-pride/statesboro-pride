import { type FormInputs, type FormValues } from "./useFormInputs";

export function handleSubmit(inputs: FormInputs) {
  const values = Object.fromEntries(
    Object.entries(inputs).map(([name, value]) => [name, encodeURIComponent((value.current?.value ?? "") as string)])
  ) as FormValues;
  console.log(values);

  const url = new URL(
    "https://docs.google.com/forms/d/e/1FAIpQLSeZPtXNw9bnO6G7Wmwvk3Lz5FwgLdjeURvJ6JdneQ1t98rKeg/viewform"
  );
  url.searchParams.append("usp", "pp_url");
  url.searchParams.append("entry.223720298", `${values.firstName} ${values.lastName}`);
  url.searchParams.append("entry.605354859", values.pronouns);
  url.searchParams.append("entry.1664652871", values.email);
  url.searchParams.append("entry.165192586", values.phone);
  url.searchParams.append("entry.169685876", values.subject);
  url.searchParams.append("entry.520088505", values.message);

  window.location.replace(url.toString());
}

export default handleSubmit;
