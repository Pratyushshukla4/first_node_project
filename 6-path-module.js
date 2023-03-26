const path = require('path');
let dir = 'C:\Users\Pratyush Shukla\Pictures\Saved Pictures\AaaNodeJs\6-path-module.js'
let pathModuleMethod ={
    dirname : path.dirname(dir),
    // extension : path.extension(dir),
        basename : path.basename(dir),
    parse : path.parse(dir)

}
console.log(pathModuleMethod);