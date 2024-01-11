import { Router } from "express";
import { checkBrandPayloadData } from "../middleware/brand.middleware";

export const router = Router();

router.get("/:brandId", (req, res) => res.send("Ok"));
router.get("/", (req, res) => res.send("Ok"));
router.post("/", checkBrandPayloadData, (req, res) => res.send("Ok"));
