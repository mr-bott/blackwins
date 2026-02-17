const userName="Murali";

console.log(`im ${userName}`);

const arr1=[1,2,3,4];
const arr2=[10,20,30,40];

const newArray=[...arr1,...arr2];
const [a,b,...c]=arr2;
console.log(a,b,c)

function sum(...numbers){
    console.log(numbers);
    // return numbers.reduce((ac,c)=>{
    //     return ac+c;
    // });
}

console.log(sum(...arr1,...arr2));//[1,2,3,4]

// database schema 
// postgers e-commerce 
// user wats to sign up login . user details , user orders , whislist , cart , 
// categorized  products list   // stock 
// categrogied discount 


