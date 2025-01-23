import { crearEmpleado, mostrarEmpleados } from '../controller/empleados.controller.js';
import express from 'express'


export const empleadosRouter = express.Router();

empleadosRouter.post('/create', crearEmpleado);

empleadosRouter.get('/show', mostrarEmpleados);