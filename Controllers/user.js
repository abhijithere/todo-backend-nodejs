import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendcookie } from "../utils/features.js";
export const getAllUsers = async(req,res)=>{


}

export const login = async (req,res,next)=>{

    const {email,password} =req.body;
    let user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({
        success:false,
        message:"invalid email or password",
    });

    const isMatch = await bcrypt.compare(password,user.password);
     
    if(!isMatch) return res.status(404).json({
        success:false,
        message:"invalid email or password",
    });

    sendcookie(user,res,`welcome back ${user.name}`,201)
}

export const register = async (req,res)=>{
  const {name,email,password} =req.body;
  let user = await User.findOne({email});

  if(user) return res.status(404).json({
        success:false,
        message:"user already exist",
    });
        

    const hashedpassword = await bcrypt.hash(password,10)

    user = await User.create({name,email,password:hashedpassword})

    
    sendcookie(user,res,"registered successfully",201)
}


export const getUserDetail =  (req,res)=>{
        

    res.status(200).json({
        success:true,
        user:req.user,
    })
}


export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV==="Development"?"lax":"none",
        secure : process.env.NODE_ENV==="Development"?false:true,
    
    }).json({
        success:true,
        user:req.user,
    })
}