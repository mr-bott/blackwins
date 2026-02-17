// doubt
// const fs=require('fs');
// const path=require('path');

// console.log("Starting");

// const filePath=path.join(__dirname,'files','inputFile.txt');

// const readedContent=fs.readFile(filePath,'utf-8',(error,data)=>{ // doubt 
//   console.log(data);
//   console.log("completed");
//   fs.writeFile(path.join(__dirname,'files','newFile.txt'),readedContent,(error,data)=>{
//     console.log("writed New File");
    
//   })
// })

// console.log("Reading File.....");


const fs = require('fs/promises');
const path = require('path');

async function readWriteFile() {
  try {
    console.log("Starting");

    const filePath = path.join(__dirname, 'files', 'inputFile.txt');

    const data = await fs.readFile(filePath, 'utf-8');
    console.log("Reading File.....");
    console.log(data);

    await fs.writeFile(
      path.join(__dirname, 'files', 'newFile.txt'),
      data
    );
    console.log("writed New File");
  } catch (error) {
    console.log(error);
  }
}

readWriteFile();

async function appendDeleteFile(){
    try{
        const content="\nAdding some conetent at the back of the output file";
        await fs.appendFile(path.join(__dirname,'files','output.txt'),content);
        console.log("Added Data To a File ");

        await fs.unlink(path.join(__dirname,'files','deleted.txt'));
        console.log("Deleted file");
    }
    catch(e){
        console.log("Error While appendong",e.message);
    }
}

appendDeleteFile();