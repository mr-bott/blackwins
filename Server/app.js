const express=require('express');
require('dotenv').config();
const{connectDB} =require("./config/db")
const authRoutes=require('./routes/auth.routes')

const app=express();

app.use(express.json());

//DB Connection
connectDB();

//AuthRoutes
app.use('/api',authRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{  //port Access
    console.log(`Server running on port ${PORT} `)
})