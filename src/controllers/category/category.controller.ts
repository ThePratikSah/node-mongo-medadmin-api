import { Request, Response } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../../models/Category";

export async function createCategoryController(req: Request, res: Response) {
  try {
    await createCategory(req.body);
    return res.status(200).json({ msg: "Category created successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Failed creating category in database", error });
  }
}

export async function getAllCategoryController(_req: Request, res: Response) {
  const brands = await getAllCategories();
  return res.status(200).json({ brands });
}

export async function getCategoryByIdController(req: Request, res: Response) {
  const { categoryId } = req.params;
  const category = await getCategoryById(categoryId);
  return res.status(200).json({ category });
}

export async function updateCategoryController(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    await updateCategory(categoryId, req.body);
    return res.status(200).json({ msg: "Category updated successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Failed updating category in database" });
  }
}

export async function deleteCategoryController(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    await deleteCategory(categoryId);
    return res.status(200).json({ msg: "Category deleted successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Failed deleting category from database" });
  }
}
