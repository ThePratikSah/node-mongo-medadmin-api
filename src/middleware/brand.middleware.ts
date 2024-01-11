import { NextFunction, Request, Response } from "express";
import { Input, minLength, object, safeParse, string, url } from "valibot";
import { getBrandById } from "../models/Brand";

const brandBodyPayload = object({
  name: string("Brand name must be a string.", [
    minLength(5, "Please enter your brand name."),
  ]),
  logo: string("Brand logo url must be a string.", [
    minLength(5, "Please enter your brand logo."),
    url("The logo url is badly formatted."),
  ]),
  website: string("Brand website url must be a string.", [
    minLength(5, "Please enter your brand website."),
    url("The website address is badly formatted."),
  ]),
  description: string("Brand description must be a string.", [
    minLength(10, "Please enter your brand description."),
  ]),
});

const brandParamsPayload = object({
  brandId: string("Brand id must be a string.", [
    minLength(5, "Please enter your brand id."),
  ]),
});

export type BrandPayload = Input<typeof brandBodyPayload>;

export async function checkBrandPayloadData(
  req: Request<object, object, BrandPayload>,
  res: Response,
  next: NextFunction
) {
  const result = safeParse(brandBodyPayload, req.body);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }
  return next();
}

export async function checkBrandParams(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = safeParse(brandParamsPayload, req.params);

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
