const a =[10,20,30,40,50,60,70,80,90,100];

//summ of all numbers 
const sum=a.reduce((acc,num)=>{ 
       return acc+num;
})
console.log(sum);


//maximum of all numbers 
const maxNum=a.reduce((acc,num)=>{
    if(acc<num){
        return acc=num;
    }
    else{
        return acc;
    }
})
console.log(maxNum);

const employees = [
  { name: "A", salary: 3000,active:true },
  { name: "B", salary: 4000,active:false},
  { name: "C", salary: 2500,active:true }
];

//Finding total salary 
const totalSum=employees.map(o=>o.salary)
.reduce((acc,num)=>{
   return acc+num;
})
console.log(totalSum);


const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Laptop", category: "Electronics" }
];

// array to object 
const productsObject=products.reduce((acc,p)=>{

    if(!acc[p.category]){
        acc[p.category]=[];
    }
     acc[p.category].push(p.name);
    return acc;
    
},{});



console.log(productsObject);

// frequency object
const letters = ["a", "b", "a", "c", "b", "a"];

// array to object 
const frequencObject=letters.reduce((acc,p)=>{

    if(!acc[p]){
        acc[p]=0;
    }
    let getCount=acc[p];
     acc[p]=getCount+1;
    return acc;
    
},{});


console.log(frequencObject);