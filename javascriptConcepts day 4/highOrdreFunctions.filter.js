// hard question 

// Get names in UPPERCASE of users who:
// are active
// age > 18
// and are at even index
// Expected output:
// ["MURALI", "RAVI"]

const usersB = [
  { name: "Murali", age: 22, active: true },
  { name: "Krishna", age: 17, active: true },
  { name: "Arjun", age: 30, active: false },
  { name: "Ravi", age: 25, active: true },
  { name: "Kishore", age: 25, active: true }
];

const userBresult=usersB.filter((o,i)=>{
    if(o.age>=18 && o.active && (i&1)==0 ){
        return true;
    }
}).map(o=>o.name);

console.log(userBresult);

//listing only active users 
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const activeUsers=users.filter(o=>o.active===true).map(n=>n.name);
console.log(activeUsers);

// only odd numers will get squaes 

const a=[1,2,3,4,5,6,7,8,9,10];

const oddnumbers=a.filter((num,i)=>(num&1)===1).map(num=>num*num);
console.log(oddnumbers);


