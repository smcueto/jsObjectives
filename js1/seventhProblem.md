# Index into a string #7
# After each step, log the value or question/answer.

## Declare the variable example with the value "glad this bus has wifi"
  `let commuteStories = 'glad this bus has wifi';`

## What character is at position 0?
  `commuteStories[0];
  //g`

## What character is at position 3?
  `commuteStories[3];
  //d`
## Create a function that, given a source string and a search string, returns a boolean value of whether the search string exists within the source string. Test with the `example` variable and the search strings `"bus"` and `"dog"`
```js
function doesTheStringInclude(sourceString, searchString){
  if(sourceString.includes(searchString)){
    return true;
  }else{
    return false;
  }
}
sourceSearch('glad this bus has wifi', 'bus'); //true
sourceSearch('glad this bus has wifi', 'dog');
//false
```
## Return the word "wifi" from the example string
```js
let commuteStories = 'glad this bus has wifi';
commuteStories.slice(-4);
//'wifi'
```
