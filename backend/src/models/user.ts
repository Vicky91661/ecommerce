import mongoose from "mongoose";
import Validator  from "validator";

interface IUser extends Document{
    _id:string;
    name:string;
    email:string;
    photo:string;
    role:"admin"| "user";
    gender:"male"|"female"|"non-binary";
    dob:Date;
    createdAt :Date;
    updatedAt:Date;
    age:number;
}


const schema =new mongoose.Schema(
    {
        _id:{
            type:String,
            require:[true,"Please enter ID"],

        },
        name:{
            type:String,
            require:[true,"Please enter Name"],

        },
        email:{
            type:String,
            unique:[true,"Email already Exist"],
            require:[true,"Please enter Email"],
            validate:Validator.default.isEmail,

        },
        photo:{
            type:String,
            require:[true,"Please Add Photo"],

        },
        role:{
            type:String,
            enum:["admin","user"],
            default:"user"
        },
        gender:{
            type:String,
            enum:["male","female","non-binary"],
            require:[true,"Please enter gender"]
        },
        dob:{
            type:Date,
            require:[true,"please enter the Date of Birth"]
        }
    }
    ,{
        timestamps:true
    }
);

schema.virtual('age').get(function():number {
    const currentDate = new Date();
    const dobDate = this.dob
    if(!dobDate){
        return 0;
    }
    let age:number= currentDate.getFullYear()-dobDate.getFullYear();

    if(currentDate.getMonth()<dobDate.getMonth()||
    (currentDate.getMonth()===dobDate.getMonth()&&currentDate.getDate()<dobDate.getDate())){
        age--
    }
    return age;
  });

export const User = mongoose.model<IUser>("User",schema)