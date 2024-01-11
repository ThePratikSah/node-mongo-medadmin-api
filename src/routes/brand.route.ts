import { Router } from "express";
import { checkBrandPayloadData } from "../middleware/brand.middleware";
import { createBrandController } from "../controllers/brand/create-brand.controller";
import {
  getAllBrnadsController,
  getBrandByIdController,
} from "../controllers/brand/get-brand.controller";
import { deleteBrandController } from "../controllers/brand/delete-brand.controller";

export const router = Router();

router.post("/", checkBrandPayloadData, createBrandController);
router.get("/:brandId", getBrandByIdController);
router.get("/", getAllBrnadsController);
router.delete("/:brandId", deleteBrandController);
