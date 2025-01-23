
import { empleadoModel } from "../models/empleados.model.js";


export const crearEmpleado = async (req, res) => {
    try {

      const {codigo, nombre,  apellido1, apellido2, codigo_departamento} = req.body;
  
      // password = panconchocolate;
      
      const nuevoEmpleado = await empleadoModel.create({
        codigo,
        nombre,  
        apellido1, 
        apellido2, 
        codigo_departamento
      });
  
      return res.status(201).json({
          mensaje: 'hola we, ya te cree un usuario',
          datos: nuevoEmpleado
      });
  
    } catch (error) {
      return res.status(400).json({
          mensaje: 'no se pudo we, estas muy feo para esta plataforma, perdon',
          problema: error || error.message
      });
    }
  };
  

  
  // get Mostrar usuarios
  export const mostrarEmpleados = async (req, res) => {
    //  errores
    try {

      let users = await empleadoModel.find();
      if(users.length === 0){
          return res.status(200).json({
              mensaje: 'tas solito we ;-;'
          })
      }
  
      return res.status(200).json({
          menasaje: 'ya no estas solito we',
          numeroUsuarios: users.length,
          datos: users
      })
  
    } catch (error) {
      return res.status(400).json({
          mensaje: 'no c pudo we ;-; no c moleste que es mi primer dia D:',
          problema: error || error.message
      });
    }
  };

