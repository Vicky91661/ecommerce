import express from 'express';
const app = express();
const PORT = 4500;

app.listen(PORT,()=>{
    console.log("Express is runnnig at port number ",PORT)
})