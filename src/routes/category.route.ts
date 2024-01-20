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

export const router = Router();

router.post(
  "/",
  checkCategoryPayloadData,
  restrictTo(["admin", "manager"]),
  createCategoryController
);
router.get("/", getAllCategoryController);
router.get("/:categoryId", getCategoryByIdController);
router.put(
  "/:categoryId",
  checkCategoryPayloadData,
  checkCategoryParams,
  restrictTo(["admin", "manager"]),
  updateCategoryController
);
router.delete(
  "/:categoryId",
  restrictTo(["admin", "manager"]),
  deleteCategoryController
);
