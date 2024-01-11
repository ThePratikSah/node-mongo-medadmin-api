import { NextFunction, Request, Response } from "express";
import { getBrandById } from "../models/Brand";
import {
  BrandParamsPayload,
  BrandPayload,
  parseBrandBodyPayload,
  parseBrandParamsPayload,
} from "../validators/brand.validation";

export async function checkBrandPayloadData(
  req: Request<object, object, BrandPayload>,
  res: Response,
  next: NextFunction
) {
  const result = parseBrandBodyPayload(req.body);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }
  return next();
}

export async function checkBrandParams(
  req: Request<BrandParamsPayload>,
  res: Response,
  next: NextFunction
) {
  const result = parseBrandParamsPayload(req.params);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }

  const { brandId } = req.params;
  const brand = await getBrandById(brandId);

  if (!brand) {
    return res.status(404).json({ msg: "Brand not found" });
  }
  return next();
}
