const path=require('path');

console.log(__filename); //fullpath upto file 
console.log(__dirname); //fullpath upto directory

console.log(path.basename(__dirname));  //file name 
console.log(path.basename(__filename)); //foldername

console.log(path.extname(__dirname)); //extension anme
console.log(path.extname(__filename)); //extension name

console.log(path.parse(__dirname));

console.log(path.join(__dirname,"files","output.txt"));//create new path 

console.log(__dirname.split(path.sep));

