const assert = require('assert');

//Perform math operations on numbers #3
  //For each of the following, log the result.

  //1. Add 1 + 2 together
    function adding(numberOne, numberTwo) {
      let total = numberOne + numberTwo;
      return total;
    }
    console.log(adding(1, 2));

    const addingArrow = (numberOne, numberTwo) => numberOne + numberTwo;
    console.log(addingArrow(1, 2));

assert.equal(adding(1,2), 3);
assert.equal(addingArrow(1,2), 3);
assert.equal(adding(1,2), addingArrow(1,2));

  //2. Divide 15 by 3
    function dividing(numberOne, numberTwo) {
      let total = numberOne / numberTwo;
      return total;
    }
    console.log(dividing(15, 3));

    const dividing2 = (numberOne, numberTwo) => numberOne / numberTwo;
    console.log(dividing2(15, 3));

  //3. Calculate 5 to the power of 2
      function toThePowerOf(numberOne, numberTwo){
        let total = Math.pow(numberOne, numberTwo);
        return total;
      }
        console.log(toThePowerOf(5, 2));

      function squareOf(numberOne){
        let total = Math.pow(numberOne, 2);
        return total;
      }
        console.log(squareOf(5));

      const squareOfTwo = numberOne => numberOne ** 2;
      console.log(squareOfTwo(5));

  //4. Find the absolute value of -3.14
    function absoluteValue(numberOne){
      let total = Math.abs(numberOne);
      return total;
      }
      console.log(absoluteValue(-3.14));

    const absoluteValue2 = numberOne => Math.abs(numberOne);
    console.log(absoluteValue2(-3.14));

  //5. Find the square root of 144
      function squareRoot(numberOne){
        let total = Math.sqrt(numberOne);
        return total;
      }
      console.log(squareRoot(144));

      const squareRoot2 = numberOne => Math.sqrt(numberOne);
      console.log(squareRoot2(144));

  //6. Round 6.1234 to the nearest integer
      function roundNumber(numberOne){
        let total = Math.floor(numberOne);
        return total;
      }
      console.log(roundNumber(6.1234));

      const roundNumber2 = numberOne => Math.floor(numberOne);
      console.log(roundNumber2(6.1234));

  //7. Find the remainder when dividing 15 by 4
    function remainder(numberOne, numberTwo){
      let total = numberOne % numberTwo;
      return total;
    }
    console.log(remainder(15, 4));

    const remainder2 = (numberOne, numberTwo) => numberOne % numberTwo;
    console.log(remainder2(15, 4));
