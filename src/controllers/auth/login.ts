import { sendOTP, verifyOTP } from "../../helpers/OTP";
import { generateToken } from "../../helpers/token";
import { createUser, getUserByPhoneNumber } from "../../models/Users";

export async function login(phoneNumber: string): Promise<void | Error> {
  const user = await getUserByPhoneNumber(phoneNumber);

  if (!user) {
    try {
      await createUser({ phoneNumber });
    } catch (error) {
      console.error(error);
      return new Error("Error while creating user");
    }
  }

  await sendOTP(phoneNumber);
}

export async function generateAuthToken(
  phoneNumber: string,
  otp: string
): Promise<string | Error> {
  try {
    const isValid = await verifyOTP(phoneNumber, otp);

    if (!isValid) {
      return new Error("Invalid OTP");
    }

    const userData = await getUserByPhoneNumber(phoneNumber);

    if (!userData) {
      return new Error("User not found");
    }

    const token = generateToken(userData);
    return token;
  } catch (error) {
    console.error(error);
    return new Error("Error while generating auth token");
  }
}
