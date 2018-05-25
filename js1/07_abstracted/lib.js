function doesTheStringInclude(sourceString, searchString){
  return sourceString.includes(searchString);
}

function findingStr(sourceString, searchString){
  return sourceString.indexOf(searchString) !== -1;
}

module.exports = {
  doesTheStringInclude,
  findingStr
};
