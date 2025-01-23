import connectionMongo from "./src/config/dataBase.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"


const app = express(); 
dotenv.config(); 
const port = process.env.PORT;
connectionMongo();
app.use(cors())


app.use(express.json());


app.listen(port, () => {
    console.log("lo logramos :)", port);
  });
  