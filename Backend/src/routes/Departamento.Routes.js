//los imports
import { crearDepartamento, mostrarDepartamento, ActualizarDepartamentoById, EliminarDepartamentoById } from "../controller/departamentos.controller.js";
import express from 'express'


// exportar el ROUTER para usarlo como con el del empleado
export const DepartamentoRouter = express.Router();


//ruta de Departamento para el producto para crear
DepartamentoRouter.post('/create', crearDepartamento);

//ruta de Departamento para el producto para mostrar
DepartamentoRouter.get('/show', mostrarDepartamento);

//ruta de Departamento para el producto para actualizar
DepartamentoRouter.put('/put/:id', ActualizarDepartamentoById);

//ruta de Departamento para el producto para ascender a cliente a un empleado
DepartamentoRouter.delete('/delete/:id', EliminarDepartamentoById);