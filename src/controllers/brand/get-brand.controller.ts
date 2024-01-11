import { Request, Response } from "express";
import { getAllBrands, getBrandById } from "../../models/Brand";

export async function getAllBrnadsController(_req: Request, res: Response) {
  const brands = await getAllBrands();
  return res.status(200).json({ brands });
}

export async function getBrandByIdController(req: Request, res: Response) {
  const { brandId } = req.params;
  const brand = await getBrandById(brandId);
  return res.status(200).json({ brand });
}
