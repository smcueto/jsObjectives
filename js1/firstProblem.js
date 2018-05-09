// Create descriptive variable names #1

//1. What are the characteristics of good variable names? Give an example.
   - In Javascript, it is important to write a descriptive variable to help identify class vs variables/functions and const.
   - The rule of thump is to write variable names, function name and const in lowerCamelCase. For class, is used in UpperCamelCase.

//2. What are some bad variable names and why?
   - var Chicago = 10; It is not following syntax of lowerCamelCase nor is it descriptive to why it is storing 10 in it.
   - class something {}; It is a bad function name because it is not following the UpperCamelCase syntax and it is not descriptive of what the class will contain

  //Ex:(taken from
  //https://github.com/i0natan/nodebestpractices#-36-naming-conventions-for-variables-constants-functions-and-classes)

  // for class name we use UpperCamelCase
  // class SomeClassExample {}

  // for const names we use the const keyword and lowerCamelCase
  // const config = {
  //    key: 'value'
  //  };

  // for variables and functions names we use lowerCamelCase
  //let someVariableExample = 'value';
  //function doSomething() {}
