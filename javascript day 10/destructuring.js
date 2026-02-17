const nums=[1,2,3,4];
const [a,b,,d]=nums; //skping and geting values 
console.log(a,b,d);


//destructuring objects 
const object={
    name:"Murali",
    krishna:"Krishna",
    role:"Backend Intern",
    age:21

}

const {role,...personalDetails}=object; // rest collects multiple values into 1 

console.log(role);
console.log(personalDetails);

// on functions 
function printUser({ name, age }) {
  console.log(name, age);
}

printUser(object);


