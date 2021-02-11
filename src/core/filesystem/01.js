const fs = require('fs');
const path = require('path');

console.log("require.main.path", require.main.path); // /Users/fernandoghisi/Projects/www/playground.nodejs/src/core/filesystem
console.log("__dirname", __dirname); // /Users/fernandoghisi/Projects/www/playground.nodejs/src/core/filesystem

console.log("process.mainModule.filename", process.mainModule.filename); //@deprecated
console.log("require.main.filename", require.main.filename); // /Users/fernandoghisi/Projects/www/playground.nodejs/src/core/filesystem/01.js

const p = path.join(__dirname, 'data', 'items.json'); // /Users/fernandoghisi/Projects/www/playground.nodejs/src/core/filesystem/01.js/data/items.json
console.log(p);

const getItemsFromFile = function () {
  //...
  fs.readFile();
}