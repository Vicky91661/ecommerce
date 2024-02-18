import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";

export const adminOnly = async(req:Request,res:Response,next:NextFunction )=>{
    const {id} = req.query;
    console.log(id)
    if(!id){
        return res.status(400).json({
            status:false,
            message:"not logged in"
        })
    }
    try {
        const admin = await User.findOne({_id:id});
        if(!admin){
            return res.status(400).json({
                status:false,
                message:"Admin not exist"
            })
        }else if(admin.role!=="admin"){
            
            return res.status(400).json({
                status:false,
                message:"User is not an admin"
            })
            
        }else{
            next();
        }
    } catch (error) {
        return res.status(400).json({
            status:false,
            message:"Went wrong while fetching admin"
        })
    }
}