import express from "express";
import cors from "cors";
import helmet from "helmet";
import { c } from "./constants";

const app = express();

app.use(cors());
app.use(helmet());

app.listen(c.PORT, async () => {
  console.log(`Server listening on port ${c.PORT}`);
});
