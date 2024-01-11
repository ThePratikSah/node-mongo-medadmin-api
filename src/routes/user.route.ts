import { Router } from "express";
import { signupController } from "../controllers/auth/signup.controller";
import { checkAuthData } from "../middleware/auth.middleware";
import { loginController } from "../controllers/auth/login.controller";

export const router = Router();

router.post("/login", checkAuthData, loginController);
router.post("/signup", checkAuthData, signupController);
router.get("/", (req, res) => res.send("Ok"));
