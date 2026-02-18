const fs=require('fs');
const path=require('path');

const inputFilePath=path.join(__dirname,"input.txt");
const outFilePath=path.join(__dirname,"output.txt");


const rs=fs.createReadStream(inputFilePath,'utf-8');

const ws=fs.createWriteStream(outFilePath)

rs.on("data",(chunk)=>{
     ws.write(chunk);
})

rs.on("error",(chunk)=>{
     console.log(chunk.message);
})

rs.on("end",(chunk)=>{
     console.log("ended");
})


