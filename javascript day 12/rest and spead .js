const user={
    name:"Murali",
    krishna:"Krishna",
    role:"Backend Intern",
    age:21
}

const {role,...personalDetails}=user; // rest collects multiple values into 1 
console.log(role,personalDetails);

// using in functions 
function sum(...numbers) { // collecting all numers 
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); 


// SPREAD OPERATOR // one varaible to multiple values 

const updatedUser = {
  ...user,
   status:true
};

console.log(updatedUser);

