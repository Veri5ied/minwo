/* test for baseUri and must match dummyjson.com/products */
import { BASE_URI } from "./baseUri";

test("baseUri", () => {
  expect(BASE_URI).toBe("https://dummyjson.com/products/");
});
