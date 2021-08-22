const fs = require('fs');

const dir = "./public";
const filename = "output.json";

const json = {
  "postfix": "MyUnits",
  "color": "green",
  "data": {
    "value": 5678
  }
};


if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

fs.writeFileSync( dir + "/" + filename, JSON.stringify(json));

// function hello(name: string): string {
//     return `Hello, ${name}!`;
// }
  
// console.log(hello("World"));
