const fs=require('fs');
const path=require('path');

const inputFilePath=path.join(__dirname,"input.txt");
const outFilePath=path.join(__dirname,"output.txt");


const rs=fs.createReadStream(inputFilePath,'utf-8');

const ws=fs.createWriteStream(outFilePath)

rs.pipe(ws); // internally pipe hadle rs.on(data,end);

ws.on("finish",()=>{
    console.log("Writing Completed");
})

ws.on("error",()=>{
    console.log("error in writing",error.message);
})

rs.on("error",()=>{
    console.log("error in reading",error.message);
})




