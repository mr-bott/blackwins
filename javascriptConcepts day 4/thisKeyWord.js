let user={
    name:"Murali Krishna",
    role:"Backend Intern",
    graduation:"B Tech",
    getDetails:function(){
        // console.log(name); can not access directly 
        console.log(user.name);
        console.log(this.name);// this refers to the user object 
        console.log(this.role); 
        // this of this function refers to who called the function 
    }
    , 
    getDetailsWithArrowFunction:()=>{
        console.log("Arrow "+this.name);
        // it will print undefined 
    },
    greet:function(){
       (() =>{
        console.log("HI "+this.name);
        //it print as expected arrow function take this from its parent (or) lexical order
    })
    ();
}
}

user.getDetails();
user.getDetailsWithArrowFunction();
user.greet();

console.log(this);// this usually refers to the browser window 
//in nodejs it refers to the module.exports in strict mode undefined 

