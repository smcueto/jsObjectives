const lib = require('./lib');

const source = 'glad this bus has wifi';

console.log(`source: ${source}`);

const targets = ['bus', 'dog', 'glad'];

targets.forEach(target => {
  console.log(`doesTheStringInclude - ${target} - ${lib.doesTheStringInclude(source, target)}`);
  console.log(`findingStr - ${target} - ${lib.findingStr(source, target)}`);
});
