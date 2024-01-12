import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import helmet from "helmet";

import { c } from "./constants";

import { router as authRouter } from "./routes/auth.route";
import { router as brandRouter } from "./routes/brand.route";
import { router as categoryRouter } from "./routes/category.route";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect(c.MONGODB_URI, {
  dbName: c.DB_NAME,
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(c.PORT, async () => {
    console.log(`Server listening on port ${c.PORT}`);
  });
});

app.get("/", (req, res) => {
  res.send("Ok");
});

app.use("/auth", authRouter);
app.use("/brand", brandRouter);
app.use("/category", categoryRouter);
