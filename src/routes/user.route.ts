import { Router } from "express";
import { loginController, signupController } from "../controllers/auth";

export const router = Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/", (req, res) => res.send("Ok"));
