import { c } from "../constants";
import { makeRequest } from "./http";

export async function sendOTP(phoneNumber: string): Promise<void | Error> {
  try {
    const result = await makeRequest({
      url: `https://control.msg91.com/api/v5/otp?mobile=91${phoneNumber}`,
      method: "POST",
      maxBodyLength: Infinity,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authkey: c.AUTH_KEY,
        Cookie: "PHPSESSID=040f50mapd18eg6rq867fpira3",
      },
    });
  } catch (error) {
    console.error(error);
    return new Error("Error while sending OTP\n" + error);
  }
}

export async function verifyOTP(
  phoneNumber: string,
  otp: string
): Promise<boolean | Error> {
  const result = await makeRequest({
    url: `https://control.msg91.com/api/v5/otp/verify?otp=${otp}&mobile=91${phoneNumber}`,
    method: "GET",
    maxBodyLength: Infinity,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authkey: c.AUTH_KEY,
      Cookie: "PHPSESSID=040f50mapd18eg6rq867fpira3",
    },
  });
  return true;
}
