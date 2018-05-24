# Find the length of a string #6
## After each step, log the value or question/answer.

## 1. Declare the value of the variable `today` as the string `I-580 is a parking lot`.
`let today = 'I-580 is a parking lot';
console.log(today);`

## 2. What is the length of `today`?
`console.log(today.length);`

## 3. Create a function that accepts a value and returns the length of a string or 0 if it has no length. Test it with the string `"the bus driver is really impatient"`, with the value `undefined` and the value `null`.

```js
function returnLength(string){
  if(typeof string === 'undefined' || typeof string === 'object'){
  return typeof string;
  } else {
    let newString = string.length;
    return newString;
  }
}
returnLength('the bus driver is really impatient'); //34
returnLength(undefined); //'undefined'
returnLength(null); //'object'
```