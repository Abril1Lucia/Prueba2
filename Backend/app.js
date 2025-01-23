import connectionMongo from "./src/config/dataBase.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"

//rutas

import { empleadosRouter } from "./src/routes/Empleado.Routes.js";


const app = express(); 
dotenv.config(); 
const port = process.env.PORT;
connectionMongo();
app.use(cors())


app.use(express.json());
app.use('/empleados', empleadosRouter)


app.listen(port, () => {
    console.log("lo logramos :)", port);
  });
  