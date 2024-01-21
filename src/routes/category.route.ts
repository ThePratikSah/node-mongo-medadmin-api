import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  updateCategoryController,
} from "../controllers/category/category.controller";
import {
  checkCategoryParams,
  checkCategoryPayloadData,
} from "../middleware/category.middleware";
import { restrictTo } from "../middleware/auth.middleware";
import { permissions } from "../models/Category";

export const router = Router();

router.post(
  "/",
  checkCategoryPayloadData,
  restrictTo(permissions.create),
  createCategoryController
);
router.get("/", getAllCategoryController);
router.get("/:categoryId", getCategoryByIdController);
router.put(
  "/:categoryId",
  checkCategoryPayloadData,
  checkCategoryParams,
  restrictTo(permissions.update),
  updateCategoryController
);
router.delete(
  "/:categoryId",
  restrictTo(permissions.delete),
  deleteCategoryController
);
