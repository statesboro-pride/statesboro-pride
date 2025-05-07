import { type FormInputs, type FormValues } from "./useFormInputs";

export default function handleSubmit(inputs: FormInputs) {
  const values = Object.fromEntries(
    Object.entries(inputs).map(([name, value]) => [name, encodeURIComponent((value.current?.value ?? "") as string)])
  ) as FormValues;

  const url = new URL(import.meta.env.VITE_CONTACT_FORM_URL);
  url.searchParams.append("usp", "pp_url");
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_NAME, `${values.firstName} ${values.lastName}`);
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_PRONOUNS, values.pronouns);
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_EMAIL, values.email);
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_PHONE, values.phone);
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_SUBJECT, values.subject);
  url.searchParams.append(import.meta.env.VITE_CONTACT_FORM_MESSAGE, values.message);

  window.location.replace(url.toString());
}
