import { NextFunction, Request,Response } from "express"
import { User } from "../models/user.js";
import { newUserRequest } from "../types/types.js";;

export const newUser = async (req:Request<{},{},newUserRequest>,res:Response,next:NextFunction)=>{

    const {_id,name,email,photo,gender,dob} =  req.body;
    if(!_id || !name || !email || !photo || !gender || !dob){
        return res.status(400).json({
            status:false,
            message:"enter valid input",
            
        })
    }

    try {
        const isUser=await User.findOne({_id})
        if(isUser){
            return res.status(200).json({
                status:false,
                message:"user already exist created",
            })
        }
        const user = await User.create({_id,name,email,photo,gender,dob:new Date(dob)})
        return res.status(200).json({
            status:true,
            message:"user created",

        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:"user not created",
            status:false
        })
    }
}


export const getAllUsers = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const Alluser = await User.find({})
        return res.status(200).json({
            status:true,
            message:"ok",
            data:Alluser
        })
    } catch (error) {
        return res.status(400).json({
            status:false,
            message:"something went wrong file fething all users",
        })
    }
}

export const getUser = async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id = req.params.id

        const user = await User.findOne({_id:id})
        if(!user){
            return res.status(400).json({
                status:false,
                message:"user does not exist",
            })
        }
        return res.status(200).json({
            status:true,
            message:"ok",
            data:user
        })
    } catch (error) {
        return res.status(400).json({
            status:false,
            message:"something went wrong file fething user",
        })
    }
}

export const deleteUser = async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id;

    try {
        const response = await User.deleteOne({_id:id})
        if(!response.deletedCount){
            return res.status(400).json({
                status:false,
                message:"user does not exist to delete",
            })
        }
        return res.status(200).json({
            status:true,
            message:"user deleted",
        })
    } catch (error) {
        return res.status(400).json({
            status:false,
            message:"something went wrong while deleting a user",
        })
    }
}