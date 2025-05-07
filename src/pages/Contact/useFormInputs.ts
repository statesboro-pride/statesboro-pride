import { type JSX, type RefObject, useRef } from "react";

export type FormInput = JSX.IntrinsicElements["input"] | null;
export type FormInputs = {
  firstName: RefObject<FormInput>;
  lastName: RefObject<FormInput>;
  pronouns: RefObject<FormInput>;
  phone: RefObject<FormInput>;
  email: RefObject<FormInput>;
  subject: RefObject<FormInput>;
  message: RefObject<FormInput>;
};
export type FormValues = {
  [k in keyof FormInputs]: string;
};

export default function useFormInputs(): FormInputs {
  const firstName = useRef<FormInput>(null);
  const lastName = useRef<FormInput>(null);
  const pronouns = useRef<FormInput>(null);
  const phone = useRef<FormInput>(null);
  const email = useRef<FormInput>(null);
  const subject = useRef<FormInput>(null);
  const message = useRef<FormInput>(null);
  return {
    firstName,
    lastName,
    pronouns,
    phone,
    email,
    subject,
    message,
  };
}
