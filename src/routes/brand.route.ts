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
import { permissions } from "../models/Brand";

export const router = Router();

router.post(
  "/",
  checkBrandPayloadData,
  checkAuth,
  restrictTo(permissions.create),
  createBrandController
);
router.get(
  "/:brandId",
  checkBrandParams,
  restrictTo(permissions.read),
  getBrandByIdController
);
router.get("/", restrictTo(permissions.read), getAllBrnadsController);
router.put(
  "/:brandId",
  checkBrandParams,
  checkBrandPayloadData,
  checkAuth,
  restrictTo(permissions.update),
  updateBrandController
);
router.delete(
  "/:brandId",
  checkBrandParams,
  checkAuth,
  restrictTo(permissions.delete),
  deleteBrandController
);
