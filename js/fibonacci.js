const fibonacci = (num) => {
  if (num == 1) {
    return 1;
  } else if (num == 0) {
    return 0;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

module.exports = { fibonacci };
