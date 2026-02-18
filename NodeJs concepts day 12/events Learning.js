const event=require("./MyModules/event");

const myevent=new event();

function checking(){       // normal 
    console.log("Listened to my event 1")
}
function notChecking(){
     console.log("Listened to my event 22")
}

myevent.on("justChecking",checking);

myevent.on("justChecking",notChecking)

// myevent.once("justChecking",notChecking)

myevent.off("justChecking",checking);  //off 

myevent.on("justChecking",()=>{
    console.log("Something");
})
myevent.emit("justChecking"); //emmiting an event

// myevent.emit("justChecking"); //emmiting an event


// Method	Use
// on()	Listen to event
// emit()	Trigger event
// once()	Run only once   //doubt 
// off()	Remove listener //doubt
