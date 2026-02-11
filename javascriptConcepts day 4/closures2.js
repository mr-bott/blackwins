function outer(){
    let count=0;

    return{
        increment:function(){
            count++;
            return count;
        }
        ,
        decrement:function(){
            count--;
            return count;
        }
        ,reset:function(){
            count=0;
        }
    }
}

const counter=outer();

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.decrement());

counter.reset();
console.log(counter.count); // not accisable 

console.log(counter.increment());

