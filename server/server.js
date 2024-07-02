import express from "express";
import cors from "cors";
// Manual
import morgan from 'morgan';
import dotenv from 'dotenv';
 import connectDB from './db/connection.js'
dotenv.config({path:'./config.env' });
// In package.json added "type": "module", and change the main key value to this file name
//Manul
const PORT = process.env.PORT  ;
const app = express();
app.use(cors());
app.use(express.json());
// Manual
app.use(morgan('tiny'));
app.disable('x-powered-by'); 
//Manual

app.get('/', (req, res) => {
  res.status(201).json("FAHEEM GET Request");
});


connectDB().then((db) => {
  app.locals.db = db; 

  app.listen(PORT, () => {
    console.log(`Server Listening on Port: http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Could not connect to MongoDB:', error);
});