import express from 'express';
const app = express();
import UserRouter from './routers/user.js';
import { connectDB } from './utils/database.js';

const PORT = 4500;

app.use(express.json())
connectDB();

app.use("/api/v1/user",UserRouter)

app.listen(PORT,()=>{
    console.log("Express is runnnig at port number ",PORT)
})