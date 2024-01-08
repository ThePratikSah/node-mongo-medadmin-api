import { MongoClient } from "mongodb";
import { c } from "../constants";

let cachedClient: MongoClient | null = null;

export async function getMongoClient() {
  if (cachedClient) return cachedClient;

  const uri = c.MONGODB_URI;
  cachedClient = new MongoClient(uri);

  try {
    await cachedClient.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit with error code
  }

  return cachedClient;
}
