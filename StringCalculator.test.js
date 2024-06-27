test("should return the number itself for a single number", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});
