//doubt
// [Running] node "d:\blackwinsPratice\javascriptConcepts\Promise and async and await.js\promise.js"
// { name: 'Murali Krishna', gender: 'Male', age: 21 }
// error occured not complateble

// [Done] exited with code=0 in 0.076 seconds

//older version of code for promise handling 
const m = new Promise((resolve, reject) => {
  let something = false;

  if (something === true) {
    resolve("done");
  } else {
    reject("not complateble");
  }
}).then((result) => {
  console.log(result);
}).catch((error)=>{
    console.log("error occured "+error);

});

//newer version of writng promises using async and await 
function fetchData(){
    return user={
        name:"Murali Krishna",
        gender:"Male",
        age:21
    }
}
async function gettingData(){
        
      try{
            const result=await fetchData();
            console.log(result);
      }
      catch(error){
        console.log("Eroor while fetcing data"+error);
      }
}

gettingData();

