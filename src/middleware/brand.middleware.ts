import { NextFunction, Request, Response } from "express";
import { Input, minLength, object, safeParse, string, url } from "valibot";

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
