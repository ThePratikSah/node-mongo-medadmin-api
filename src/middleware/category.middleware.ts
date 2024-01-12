import { NextFunction, Request, Response } from "express";
import {
  CategoryParamsPayload,
  CategoryPayload,
  parseCategoryBodyPayload,
  parseCategoryParamsPayload,
} from "../validators/category.validation";
import { getCategoryById } from "../models/Category";

export async function checkCategoryPayloadData(
  req: Request<object, object, CategoryPayload>,
  res: Response,
  next: NextFunction
) {
  const result = parseCategoryBodyPayload(req.body);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }
  return next();
}

export async function checkCategoryParams(
  req: Request<CategoryParamsPayload>,
  res: Response,
  next: NextFunction
) {
  const result = parseCategoryParamsPayload(req.params);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }

  const { categoryId } = req.params;
  const category = await getCategoryById(categoryId);

  if (!category) {
    return res.status(404).json({ msg: "Category not found" });
  }
  return next();
}
