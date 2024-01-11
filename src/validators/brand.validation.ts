import { Input, minLength, object, safeParse, string, url } from "valibot";

export const brandBodyPayload = object({
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

export const brandParamsPayload = object({
  brandId: string("Brand id must be a string.", [
    minLength(5, "Please enter your brand id."),
  ]),
});

export type BrandPayload = Input<typeof brandBodyPayload>;
export type BrandParamsPayload = Input<typeof brandParamsPayload>;

export function parseBrandBodyPayload(payload: BrandPayload) {
  return safeParse(brandBodyPayload, payload);
}

export function parseBrandParamsPayload(payload: BrandParamsPayload) {
  return safeParse(brandParamsPayload, payload);
}
