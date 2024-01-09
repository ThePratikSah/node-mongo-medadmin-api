import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import { c } from "./constants";

const app = express();

app.use(cors());
app.use(helmet());

mongoose.Promise = Promise;
mongoose.connect(c.MONGODB_URI);
mongoose.connection.on("error", () =>
  console.error("MongoDB connection error:")
);

app.listen(c.PORT, async () => {
  console.log(`Server listening on port ${c.PORT}`);
});
