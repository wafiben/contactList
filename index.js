const express = require("express");
const connect = require("./config/connectDb");
require("dotenv").config({ path: "./config/.env" });
const userRoute=require('./routes/userRoute')
const app = express();
//running the server
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
//connect to database 
connect();
//midelware
app.use(express.json())
app.use('/',userRoute)


