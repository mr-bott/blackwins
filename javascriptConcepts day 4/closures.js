function outer(){
    let count=0;
    //inner function will store outer function varaibles 
    return function inner(){
        count++;
        return count;
    }
  
}

const counter=outer();

console.log(counter());
console.log(counter());
console.log(counter());