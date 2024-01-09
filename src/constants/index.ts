import dotenv from "dotenv";

dotenv.config();

export const c = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017",
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  AUTH_KEY: process.env.AUTH_KEY || "key",
};
