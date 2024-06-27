const StringCalculator = require("./StringCalculator");
test("should return the sum of multiple numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3")).toBe(6);
});
