const StringCalculator = require("./StringCalculator");
test("should throw an exception for negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3")).toThrow(
    "negative numbers not allowed: -2"
  );
});
