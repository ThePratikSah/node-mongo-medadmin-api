import dotenv from "dotenv";

dotenv.config();

export const c = {
  PORT: process.env.PORT!,
  DB_NAME: process.env.DB_NAME!,
  MONGODB_URI: process.env.MONGODB_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  AUTH_KEY: process.env.AUTH_KEY!,
};
