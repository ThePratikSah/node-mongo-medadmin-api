import { Router } from "express";
import { loginController, signupController } from "../controllers/auth";
import { checkAuthData } from "../middleware/auth.middleware";

export const router = Router();

router.post("/login", checkAuthData, loginController);
router.post("/signup", checkAuthData, signupController);
router.get("/", (req, res) => res.send("Ok"));
