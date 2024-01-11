import { Request, Response } from "express";
import { updateBrand } from "../../models/Brand";

export async function updateBrandController(req: Request, res: Response) {
  const { brandId } = req.params;
  try {
    await updateBrand(brandId, req.body);
    return res.status(200).json({ msg: "Brand updated successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed updating brand in database" });
  }
}
