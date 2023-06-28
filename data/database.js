import mongoose from "mongoose"

export const connectdb =()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"todoapp",
}).then((c)=>console.log(`database connected ${c.connection.host}`)).catch((e)=>{
    console.log("error")
})
}