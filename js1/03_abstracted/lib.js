function adding(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function dividing(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function toThePowerOf(numberOne, numberTwo) {
  return Math.pow(numberOne, numberTwo);
}

function squareOf(numberOne) {
  return Math.pow(numberOne, 2);
}

function absoluteValue(numberOne) {
  return Math.abs(numberOne);
}

function squareRoot(numberOne) {
  return Math.sqrt(numberOne);
}

function roundNumber(numberOne) {
  return Math.floor(numberOne);
}

function remainder(numberOne, numberTwo) {
  return numberOne % numberTwo;
}

module.exports = {
  adding,
  dividing,
  toThePowerOf,
  squareOf,
  absoluteValue,
  squareRoot,
  roundNumber,
  remainder
};
