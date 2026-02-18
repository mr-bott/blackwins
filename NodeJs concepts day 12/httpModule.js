const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    if(req.url=="/numbers" && req.method==="GET"){
        res.write(JSON.stringify([1,2,3,3,4,4,5,5,5,55]));
        res.statusCode=200;
        res.end();
    }
     if(req.url=="/"){
        res.write("Hello Iam Servev");
        res.end();
    }
})

server.on("connection",(socket)=>{

    console.log("New Connection",socket.remoteAddress);
})


server.listen(3000,()=>{
         console.log("Running on port 3000")
})