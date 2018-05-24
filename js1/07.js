//Index into a string #7
//After each step, log the value or question/answer.

//1. Declare the variable example with the value "glad this bus has wifi"
  var commuteStories = 'glad this bus has wifi';
  console.log(commuteStories);

//2. What character is at position 0?
  console.log(commuteStories[0]);
  //g

//3. What character is at position 3?
  console.log(commuteStories[3]);
  //d

/*4. Create a function that, given a source string and a search string, returns a boolean value of whether the search string exists within the source string. Test with the example variable and the search strings "bus" and "dog" */

function doesTheStringInclude(sourceString, searchString){
  if(sourceString.includes(searchString)){
    console.log(true);
  }else{
    console.log(false);
  }
}
doesTheStringInclude('glad this bus has wifi', 'bus'); //true
doesTheStringInclude('glad this bus has wifi', 'dog');
//false

// 5. Return the word "wifi" from the example string

console.log(commuteStories.slice(-4));
//'wifi'

/* 6. Use indexOf in a new function that fulfills the requirements of the fourth question. Test with bus, dog and glad.*/
function findingStr(sourceString, searchString){
  if(sourceString.indexOf(searchString)){
    console.log(true);
  }else{
    console.log(false);
  }
};
findingStr('glad this bus has wifi', 'bus');
findingStr('glad this bus has wifi', 'dog');
findingStr('glad this bus has wifi', 'glad');
