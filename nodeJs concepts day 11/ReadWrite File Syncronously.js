const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'inputFile.txt');

const bufferData = fs.readFileSync(filePath);
console.log(bufferData);               // Buffer
console.log(typeof bufferData);        // object

const stringData = fs.readFileSync(filePath, 'utf-8');
console.log(stringData);               // String
console.log(typeof stringData);        // string


fs.writeFileSync(path.join(__dirname,'files','output.txt'),stringData);