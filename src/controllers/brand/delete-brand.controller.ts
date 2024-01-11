import { Request, Response } from "express";
import { deleteBrand } from "../../models/Brand";

export async function deleteBrandController(req: Request, res: Response) {
  const { brandId } = req.params;
  try {
    await deleteBrand(brandId);
    return res.status(200).json({ msg: "Brand deleted successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed deleting brand from database" });
  }
}
