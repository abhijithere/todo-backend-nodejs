import express  from "express";
import userrouter from './routes/user.js'
import { connectdb } from "./data/database.js";
import taskRouter from "./routes/tasks.js"
import {config} from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
config({
    path:"./data/config.env"
});

connectdb();
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use("/api/v1/users",userrouter)
app.use("/api/v1/task",taskRouter) 



app.get("/",(req,res)=>{
    res.send("nice working") 
})


app.listen(process.env.PORT,()=>{
    console.log(`server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})