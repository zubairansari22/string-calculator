class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    return parseInt(numbers);
  }
}

export default StringCalculator;
