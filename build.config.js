const fs = require('fs');
fs.mkdirSync("./dist/types/");
fs.copyFileSync("./src/types/index.d.ts","./dist/types/index.d.ts");
console.log("dist/types/index.d.ts")