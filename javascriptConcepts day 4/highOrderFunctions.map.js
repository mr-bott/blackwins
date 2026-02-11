//squares of each number 
let a=[1,2,3,4,5,6,8,9,10];

const result=a.map(num=>num*num);
console.log(result);

//converting smll to upp case 
let strings=["murali","krishna","backend"];

const uppStrings=strings.map(s=>s.toUpperCase());
console.log(uppStrings);

// adding 5 to only even numbrs 
const adding5=a.map((s,i)=>{
    if(i&1===1){
       return s+5;
    }
    return s;
})
console.log(adding5);

//converting number into objects 
let objects=a.map(s=>{
    return {value:s};
});
console.log(objects);

const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 18 }
];

//handling objects with map
const addedAdult=users.map(o=>{
    if(o.age>=18){
        return o.isAdult=true;
    }
    return o.isAdult=false;
})
console.log(addedAdult);

// adding gst to objects

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 }
];

const gstProducts=products.map(p=>{
    return p.totalPrice=p.price+((p.price*18)/100);
})

console.log(gstProducts);

//flattering the matrix or ed array 
const b=[[1, 2], [3, 4]];

const bresult=b.flat().map(num=>num*2);
console.log(bresult);
