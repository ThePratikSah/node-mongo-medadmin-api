import { Router } from "express";
import {
  checkBrandParams,
  checkBrandPayloadData,
} from "../middleware/brand.middleware";
import {
  createBrandController,
  getAllBrnadsController,
  getBrandByIdController,
  updateBrandController,
  deleteBrandController,
} from "../controllers/brand/brand.controller";

export const router = Router();

router.post("/", checkBrandPayloadData, createBrandController);
router.get("/:brandId", checkBrandParams, getBrandByIdController);
router.get("/", getAllBrnadsController);
router.put(
  "/:brandId",
  checkBrandParams,
  checkBrandPayloadData,
  updateBrandController
);
router.delete("/:brandId", checkBrandParams, deleteBrandController);
