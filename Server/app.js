const express = require("express");
require("dotenv").config();
const { connectDB } = require("./config/db");
const env = require("./config/env");
const authRoutes = require("./routes/auth.routes");
const categoryRoutes=require("./routes/category.routes")

const app = express();

app.use(express.json());

//DB Connection
connectDB();

//AuthRoutes
app.use("/api", authRoutes);
app.use("/category",categoryRoutes);

const PORT = env.PORT;
app.listen(PORT, () => {
  //port Access
  console.log(`Server running on port ${PORT} `);
});
