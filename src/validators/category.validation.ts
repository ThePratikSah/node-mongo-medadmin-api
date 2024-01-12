import { Input, minLength, object, safeParse, string, url } from "valibot";

export const categoryBodyPayload = object({
  name: string("Category name must be a string.", [
    minLength(5, "Please enter your category name."),
  ]),
  description: string("Brand description must be a string.", [
    minLength(10, "Please enter your brand description."),
  ]),
  image: string("Brand logo url must be a string.", [
    minLength(5, "Please enter your brand logo."),
    url("The logo url is badly formatted."),
  ]),
});

export const categoryParamsPayload = object({
  categoryId: string("Category id must be a string.", [
    minLength(5, "Please enter your brand id."),
  ]),
});

export type CategoryPayload = Input<typeof categoryBodyPayload>;
export type CategoryParamsPayload = Input<typeof categoryParamsPayload>;

export function parseCategoryBodyPayload(payload: CategoryPayload) {
  return safeParse(categoryBodyPayload, payload);
}

export function parseCategoryParamsPayload(payload: CategoryParamsPayload) {
  return safeParse(categoryParamsPayload, payload);
}
