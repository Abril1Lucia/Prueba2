// se importa el modelo
import { empleadoModel } from "../models/empleados.model.js";


//se exportan las peticiones

//post 


export const crearEmpleado = async (req, res) => {

  //logica de la peticion post
    try {

      const {codigo, nombre,  apellido1, apellido2, codigo_departamento} = req.body;
      
      const nuevoEmpleado = await empleadoModel.create({
        codigo,
        nombre,  
        apellido1, 
        apellido2, 
        codigo_departamento
      });
  
      return res.status(201).json({
          mensaje: 'listo, ya agregue al nuevo',
          datos: nuevoEmpleado
      });
  
    } catch (error) {
      //errores
      return res.status(400).json({
          mensaje: 'el empleado esta muy feo para la platafroma',
          problema: error || error.message
      });
    }
  };
  

  
  // get
  export const mostrarEmpleados = async (req, res) => {
    //logica de la peticion get
    //  errores
    try {

      let empleados = await empleadoModel.find();
      if(empleados.length === 0){
          return res.status(200).json({
              mensaje: 'tas solito we ;-;'
          })
      }
  
      return res.status(200).json({
          menasaje: 'por fin contrataron a alguien...',
          numeroUsuarios: empleados.length,
          datos: empleados
      })
  
    } catch (error) {
      //  error si no hay nada
      return res.status(400).json({
          mensaje: 'no hay nadie contratado...',
          problema: error || error.message
      });
    }
  };



  //put

export const ActualizarEmpleadoseById = async (request, response) => {

  //logica de la peticion put

  try {
    let idForput = request.params.id; //el parámetro id del producto que queremos actualizar
    let dataForUpdate = request.body; //pasarle la información actualizada

    const Actualizar = await empleadoModel.findByIdAndUpdate(idForput, dataForUpdate);

    //  errores
    if (!Actualizar) {
      return response.status(200).json({
        // validación cuando el id no es correcto o no existe
        mensaje: "no se pudo... pon bien el ID",
      });
    }

    return response.status(200).json({
      mensaje: "ya, listo... ",
      datos: Actualizar
    });

    //hubo errores al actualizar
  } catch (error) {
    return response.status(400).json({
      mensaje: "perdon, no pude ",
      problem: error || error.message
    });
  }
};







//delete

export const EliminarEmpleadosById = async (request, response) => {


  //logica de la peticion delete

try {

  //sale todo bien y se logra eliminar

    let idForDelete = request.params.id;

    await empleadoModel.findByIdAndDelete(idForDelete);

    return response.status(200).json({
        mensaje: "listo... el empleado fue ascendido a cliente"
      });
    
} catch (error) {

  //  errores
  // Ocurrió un error al eliminar empleado

    return response.status(400).json({
        mensaje: "no se pudo eliminar :c",
        problem: error || error.message
      });
} 
};