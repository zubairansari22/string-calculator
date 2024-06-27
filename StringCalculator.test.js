const StringCalculator = require("./StringCalculator");

test("should support different delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});
