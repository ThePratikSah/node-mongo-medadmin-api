import { faker } from "@faker-js/faker";
import { IBrand, createBrand } from "./models/Brand";
import { ICategory, createCategory } from "./models/Category";
import { IUser, createUser } from "./models/Users";
import { connect } from "mongoose";
import { c } from "./constants";

(async () => {
  connect(c.MONGODB_URI, {
    dbName: c.DB_NAME,
  }).then(() => {
    console.log("Connected to MongoDB");
  });
  // seed brand names
  const brands: IBrand[] = [];
  const categories: ICategory[] = [];
  const users: IUser[] = [];

  for (let i = 0; i < 10; i++) {
    brands.push({
      name: faker.company.name(),
      logo: faker.image.url({ height: 100, width: 100 }),
      website: faker.internet.url(),
      description: faker.commerce.productDescription(),
    });
    categories.push({
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.url({ height: 100, width: 100 }),
    });
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number(),
      name: faker.person.fullName(),
    });
  }

  const userPromise = users.map((user) => createUser(user));
  const brandPromise = brands.map((brand) => createBrand(brand));
  const categoryPromise = categories.map((category) =>
    createCategory(category)
  );
  await Promise.all([userPromise, brandPromise, categoryPromise]);
})();
