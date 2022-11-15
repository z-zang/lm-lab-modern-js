const add = require("./rest_parameters");

test("it adds all the numbers passed in", () => {
  expect(add(1, 2)).toBe(3);
  //   expect(add(1, 2, 3, 4, 5)).toBe(15);
});
