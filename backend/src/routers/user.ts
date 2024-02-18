import express  from "express";
const router = express.Router();
import { newUser,getAllUsers,getUser,deleteUser } from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";


//Route - /api/v1/user/new
router.post("/new",newUser)

//Route - /api/v1/user/all
router.get("/all",adminOnly,getAllUsers)

//Route - /api/v1/user/:id => Dynamic Id 

router.get("/:id",getUser)

//Route - /api/v1/user/:id => Dynamic Id 
router.delete("/:id",adminOnly,deleteUser)


export default router;
