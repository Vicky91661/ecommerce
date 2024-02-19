import mongoose from "mongoose";


const schema =new mongoose.Schema(
    {
        // _id:{
        //     type:String,
        //     require:[true,"Please enter ID"],

        // },
        name:{
            type:String,
            require:[true,"Please enter Name"],

        },
        price:{
            type:Number,
            require:[true,"Please enter Price"],

        },
        stock:{
            type:Number,
            require:[true,"Please enter Stock"],

        },
        photo:{
            type:String,
            require:[true,"Please Add Photo"],

        },
        category:{
            type:String,
            require:[true,"Please enter category"],
            trim:true,
        },
    }
    ,{
        timestamps:true
    }
);


export const Product = mongoose.model("Product",schema)