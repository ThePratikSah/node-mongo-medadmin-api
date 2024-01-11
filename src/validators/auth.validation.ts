import { string, email, minLength, object, safeParse, Input } from "valibot";

const AuthPayloadBodySchema = object({
  email: string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  password: string("Your password must be a string.", [
    minLength(8, "Your password must have 8 characters or more."),
  ]),
});

export type AuthRequestBody = Input<typeof AuthPayloadBodySchema>;

export function parseAuthBodyPayload(payload: AuthRequestBody) {
  return safeParse(AuthPayloadBodySchema, payload);
}
