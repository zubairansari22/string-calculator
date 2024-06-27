class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = StringCalculator;
