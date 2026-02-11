var a=10;

function add(){
    let b=5; // only inside function will work 
    console.log(a+b);

    if(a===10){
        const c=20; // only work in if block 
        console.log(a+b+c);
    }
    // console.log(c); is undefined 
}

add();
console.log("a: "+a);
// console.log("b: "+b); b is undefined 

// const can not be modified once declared 
//except for objects 
