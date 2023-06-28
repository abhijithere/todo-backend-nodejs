import express  from "express";

import {  getAllUsers, getUserDetail, login, logout, register } from "../Controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/all",getAllUsers) 

router.post("/new",register)

router.post("/login",login)

router.get("/logout",logout)


router.get("/me",isAuthenticated,getUserDetail)



export default router