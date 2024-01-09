export async function sendOTP(phoneNumber: string): Promise<void> {
  console.log(`Sending OTP to ${phoneNumber}`);
}

export async function verifyOTP(phoneNumber: string, otp: string): Promise<boolean | Error> {
  console.log(`Verifying OTP ${otp} for ${phoneNumber}`);
  return true;
}