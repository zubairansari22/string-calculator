const StringCalculator = require("./StringCalculator");
test("should return the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});
