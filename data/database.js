import mongoose from "mongoose"

export const connectdb =()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"todoapp",
}).then(()=>console.log("database connected")).catch((e)=>{
    console.log("error")
})
}