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

export const router = Router();

router.post("/", checkCategoryPayloadData, createCategoryController);
router.get("/", getAllCategoryController);
router.get("/:categoryId", getCategoryByIdController);
router.put(
  "/:categoryId",
  checkCategoryPayloadData,
  checkCategoryParams,
  updateCategoryController
);
router.delete("/:categoryId", deleteCategoryController);
