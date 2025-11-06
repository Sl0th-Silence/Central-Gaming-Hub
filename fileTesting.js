const fileReader = require("fs");

const steamDIR = "C:/Program Files (x86)/Steam/steamapps/common";

const gameArr = fileReader.readdirSync(steamDIR);

console.log(gameArr);