const arr1 = [1, [5, [[2, 3], 8], 7], 12];

// const arr2=arr1.flatMap();
// console.log(arr2);

//o(n2) time complexity

function flatten(arr){
  let res=[];

  for(let item of arr){
  
    if(typeof(item)===typeof(1)){
      res.push(item);
    }
    else{
      res=res.concat(flatten(item));
    }
  }
  return res;
}

console.log(flatten(arr1))