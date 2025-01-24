import { departamentoModel } from "../models/departamento.model.js";




export const crearDepartamento = async (req, res) => {

  //logica de la peticion post
    try {

      const {codigo, nombre} = req.body;
  
      
      const nuevoDepa = await departamentoModel.create({
        codigo,
        nombre
      });
  
      return res.status(201).json({
          mensaje: 'listo, hice el nuevo departamento',
          datos: nuevoDepa
      });
  
    } catch (error) {
      //errores
      return res.status(400).json({
          mensaje: 'no se pudo hacer... ',
          problema: error || error.message
      });
    }
  };
  

  
  // get
  export const mostrarDepartamento = async (req, res) => {
    //logica de la peticion get
    //  errores
    try {

      let mostrar = await departamentoModel.find();
      if(mostrar.length === 0){
          return res.status(200).json({
              mensaje: 'no hay ni un departamento.'
          })
      }
  
      return res.status(200).json({
          menasaje: 'finalmente creaste uno. ',
          numeroUsuarios: mostrar.length,
          datos: mostrar
      })
  
    } catch (error) {
      //  error si no hay nada
      return res.status(400).json({
          mensaje: 'no hay nada.',
          problema: error || error.message
      });
    }
  };



  //put

export const ActualizarDepartamentoById = async (request, response) => {

  //logica de la peticion put

  try {
    let idForput = request.params.id; //el parámetro id del producto que queremos actualizar
    let dataForUpdate = request.body; //pasarle la información actualizada

    const Departamentoactualizacion = await departamentoModel.findByIdAndUpdate(idForput, dataForUpdate);

    //  errores
    if (!Departamentoactualizacion) {
      return response.status(200).json({
        // validación cuando el id no es correcto o no existe
        mensaje: "no se pudo... pon bien el ID",
      });
    }

    return response.status(200).json({
      mensaje: "ya, listo... ",
      datos: Departamentoactualizacion
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

export const EliminarDepartamentoById = async (request, response) => {


  //logica de la peticion delete

try {

  //sale todo bien y se logra eliminar

    let idForDelete = request.params.id;

    await departamentoModel.findByIdAndDelete(idForDelete);

    return response.status(200).json({
        mensaje: "listo... los empleados se eliminaron con un avadakedabra"
      });
    
} catch (error) {

  //  errores
  // Ocurrió un error al eliminar departamento

    return response.status(400).json({
        mensaje: "no se pudo eliminar :c",
        problem: error || error.message
      });
} 
};