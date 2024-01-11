import { Request, Response } from "express";
import { BrandPayload } from "../../middleware/brand.middleware";

export async function createBrandController(req: Request, res: Response) {
  const { name, logo, website, description } = req.body as BrandPayload;
}
