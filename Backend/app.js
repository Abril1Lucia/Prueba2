// imports 
import connectionMongo from "./src/config/dataBase.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"

//rutas

import { empleadosRouter } from "./src/routes/Empleado.Routes.js";
import { DepartamentoRouter } from "./src/routes/Departamento.Routes.js";

// configurar uso de servidor y dependencias
const app = express(); 
dotenv.config(); 
const port = process.env.PORT;
connectionMongo();
app.use(cors())


// rutas que debe usar
app.use(express.json());
app.use('/empleados', empleadosRouter)
app.use('/Departamento', DepartamentoRouter)


app.listen(port, () => {
    console.log("lo logramos :)... que milagro ;-; ", port);
  });
  