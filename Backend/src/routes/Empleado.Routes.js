//importar controller
import { crearEmpleado, mostrarEmpleados, ActualizarEmpleadoseById, EliminarEmpleadosById } from '../controller/empleados.controller.js';
//importar el express
import express from 'express'


// exportar el ROUTER para usarlo mas tarde en el app

export const empleadosRouter = express.Router();


//ruta de Empleado para el producto para crear
empleadosRouter.post('/create', crearEmpleado);


//ruta de Empleado para el producto para mostrar
empleadosRouter.get('/show', mostrarEmpleados);


//ruta de Empleado para el producto para actualizar
empleadosRouter.put('/put/:id', ActualizarEmpleadoseById);

//ruta de Empleado para el producto para ascender a cliente a un empleado
empleadosRouter.delete('/delete/:id', EliminarEmpleadosById);