function fetchPayment(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("payment done");
       },1500);
    });
}

function fetchTimeout(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        reject("Timeout");
       },1000);
    });
}

async function processPayment(){
  try{
     const result=await Promise.race([
        fetchPayment(),
        fetchTimeout()
     ]);

     console.log(result);
  }
  catch(e){
    console.log("Error while paying",e);
  }
}

processPayment();