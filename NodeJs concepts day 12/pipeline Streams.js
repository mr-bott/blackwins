const { pipeline } = require("stream/promises");
const fs=require('fs');
const path=require('path');

const inputFilePath=path.join(__dirname,"input.txt");

const outputFilePath=path.join(__dirname,"output.txt");

const rs=fs.createReadStream(inputFilePath,"utf-8");

const ws=fs.createWriteStream(outputFilePath);

// pipeline(rs,ws,(err)=>{
  
//     if(err){
//         console.log("Eroor"),err.message;
//     }
//     else{
//         console.log("COmpleted Successfully");
//     }
// })

//using Promises 

async function testingPipeLilne() {
    
    try{
        await pipeline(rs,ws);
        console.log("Done");
    }
    catch(e){
        console.log("Error",e.message);
    }
}

testingPipeLilne();
