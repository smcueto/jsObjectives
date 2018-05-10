function adding(numberOne, numberTwo) {
    let total = numberOne + numberTwo;
    return total;
}

function dividing(numberOne, numberTwo) {
    let total = numberOne / numberTwo;
    return total;
}

function toThePowerOf(numberOne, numberTwo){
    let total = Math.pow(numberOne, numberTwo);
    return total;
}

function squareOf(numberOne){
    let total = Math.pow(numberOne, 2);
    return total;
}

function absoluteValue(numberOne){
    let total = Math.abs(numberOne);
    return total;
}

function squareRoot(numberOne){
    let total = Math.sqrt(numberOne);
    return total;
}

function roundNumber(numberOne){
    let total = Math.floor(numberOne);
    return total;
}

function remainder(numberOne, numberTwo){
    let total = numberOne % numberTwo;
    return total;
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