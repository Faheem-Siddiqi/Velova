
import express from "express";
import cors from "cors";
import morgan from 'morgan';
import {PORT} from './config.js';
import {ATLAS_URI} from "./config.js";
import mongoose from "mongoose";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

//Route
app.get('/', (req, res) => {
  res.status(201).json("Welcome to Velovo backend");
});


app.listen(PORT, () => {
  console.log(`Server Listening on Port: http://localhost:${PORT}`);
});


//Mongodb connection
mongoose.connect(ATLAS_URI)
.then(()=>{
  console.log("App connected to database");
})
.catch((error)=>{
  console.log(error);
});

