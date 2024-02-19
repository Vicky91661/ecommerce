import { NextFunction, Request, Response } from "express";
import { newProductRequest } from "../types/types.js";
import { Product } from "../models/products.js";
import { rm } from "fs";

export const newProduct = async(req:Request<{},{},newProductRequest>,res:Response,next:NextFunction)=>{
    const {name,price,catagory,stock} = req.body;

    const photo = req.file;
    if(!photo){
        return res.status(400).json({
            status:false,
            message:"give photo"
        })
    }

    if(!name || !price || !catagory || !stock){
        rm(photo.path,()=>{
            console.log("photo deleted")
        })

        return res.status(400).json({
            status:false,
            message:"give all the input photo"
        })
    }

    try {
        const product = await Product.create({
            name,
            price,
            catagory,
            stock,
            photo:photo?.path
        })
        return res.status(200).json({
            status:true,
            message:"product created sucessfull"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status:false,
            message:"product not created"
        })
    }
    
}