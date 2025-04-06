const dotenv=require("dotenv");
dotenv.config();
import express from 'express';
import cors from 'cors'
import cookieparser from 'cookie-parser';
import { PatientRouter } from './router/patient';
const app=express();
app.use(cookieparser());
app.use(cors({
    origin: "http://localhost:5173", // Your frontend origin
    credentials: true, // Allow credentials (cookies)
}))
app.use(express.json());



app.use("/patient",PatientRouter);


app.listen(3000,()=>{
    console.log("Server started!!!");
})