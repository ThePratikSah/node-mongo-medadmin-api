import { Request, Response } from "express";
import { createBrand } from "../../models/Brand";

export async function createBrandController(req: Request, res: Response) {
  try {
    await createBrand(req.body);
    return res.status(200).json({ msg: "Brand created successfully" });
  } catch (error) {
    return res.status(400).json({ msg: "Failed creating brand in database" });
  }
}
