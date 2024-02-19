import express from "express"
import { newProduct } from "../controllers/productController.js"
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router()
router.post("/new",singleUpload,newProduct)

export default router;