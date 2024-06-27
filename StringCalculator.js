class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numArray = numbers.split(/[\n,]/).map(Number);
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = StringCalculator;
