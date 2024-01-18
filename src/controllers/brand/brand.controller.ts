import { Request, Response } from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
} from "../../models/Brand";
import { ExtendedRequest } from "../../middleware/auth.middleware";

export async function createBrandController(
  req: ExtendedRequest,
  res: Response
) {
  try {
    await createBrand(req.body);
    return res.status(200).json({ msg: "Brand created successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Failed creating brand in database", error });
  }
}

export async function getAllBrnadsController(_req: Request, res: Response) {
  const brands = await getAllBrands();
  return res.status(200).json({ brands });
}

export async function getBrandByIdController(req: Request, res: Response) {
  const { brandId } = req.params;
  const brand = await getBrandById(brandId);
  return res.status(200).json({ brand });
}

export async function updateBrandController(req: Request, res: Response) {
  const { brandId } = req.params;
  try {
    await updateBrand(brandId, req.body);
    return res.status(200).json({ msg: "Brand updated successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed updating brand in database" });
  }
}

export async function deleteBrandController(req: Request, res: Response) {
  const { brandId } = req.params;
  try {
    await deleteBrand(brandId);
    return res.status(200).json({ msg: "Brand deleted successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed deleting brand from database" });
  }
}
