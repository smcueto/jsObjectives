//Perform math operations on numbers #3
  //For each of the following, log the result.

  //1. Add 1 + 2 together
    function adding(numberOne, numberTwo) {
      let total = numberOne + numberTwo;
      console.log(total);
    }
    adding(1, 2);

    const adding2 = (numberOne, numberTwo) => numberOne + numberTwo;
    adding(1, 2);

  //2. Divide 15 by 3
    function dividing(numberOne, numberTwo) {
      let total = numberOne / numberTwo;
      console.log(total);
    }
    dividing(15, 3)

    const dividing2 = (numberOne, numberTwo) => numberOne / numberTwo;

  //3. Calculate 5 to the power of 2
      function toThePowerOf(numberOne, numberTwo){
        let total = Math.pow(numberOne, numberTwo);
        console.log(total);
      }
        toThePowerOf(5, 2);

      function squareOf(numberOne){
        let total = Math.pow(numberOne, 2);
        console.log(total);
      }
        toThePowerOf(5);

      const squareOfTwo = numberOne => x ** 2;
      square(5);

  //4. Find the absolute value of -3.14
    function absoluteValue(numberOne){
      let total = Math.abs(numberOne);
      console.log(total);
      }
      absoluteValue(-3.14);

    const absoluteValue2 = numberOne => Math.abs(numberOne);
    absoluteValue2(-3.14);

  //5. Find the square root of 144
      function squareRoot(numberOne){
        let total = Math.sqrt(numberOne);
        console.log(total);
      }
      squareRoot(144);

      const squareRoot2 = numberOne => Math.sqrt(numberOne);
      squareRoot2(144);

  //6. Round 6.1234 to the nearest integer
      function roundNumber(numberOne){
        let total = Math.floor(numberOne);
        console.log(total);
      }
      roundNumber(6.1234)
      const roundNumber2 = numberOne => Math.floor(numberOne);
      roundNumber2(6.1234);
  //7. Find the remainder when dividing 15 by 4
    function remainder(numberOne, numberTwo){
      let total = numberOne % numberTwo;
      console.log(total);
    }
    remainder(15, 4);

    const remainder2 = (numberOne, numberTwo) => numberOne % numberTwo;
    remainder2(15, 4);
