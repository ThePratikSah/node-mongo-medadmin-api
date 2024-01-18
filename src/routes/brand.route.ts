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
import { checkAuth, restrictTo } from "../middleware/auth.middleware";

export const router = Router();

router.post(
  "/",
  checkBrandPayloadData,
  checkAuth,
  restrictTo(["admin", "manager"]),
  createBrandController
);
router.get("/:brandId", checkBrandParams, getBrandByIdController);
router.get("/", getAllBrnadsController);
router.put(
  "/:brandId",
  checkBrandParams,
  checkBrandPayloadData,
  checkAuth,
  updateBrandController
);
router.delete("/:brandId", checkBrandParams, checkAuth, deleteBrandController);
