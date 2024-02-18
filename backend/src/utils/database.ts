import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb+srv://vicky:v8797572731@cluster0.ufffkaf.mongodb.net/ecommerce_24")
    .then(()=>{
        console.log("database get connected");
    }).catch((error)=>{
        console.log("something went wrong while connecting to the databse");
        console.log(error);
    })
}
