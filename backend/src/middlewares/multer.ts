import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
    destination(req,file,callback){
        callback(null,"src/uploads")
    },
    filename(req,file,callback){
        console.log(file)
        const id = uuid();
        const extension = file.originalname.split(".").pop();
        const newFileName = id+"."+extension;
        callback(null,newFileName)
    }
})

export const singleUpload = multer({storage}).single("photo")