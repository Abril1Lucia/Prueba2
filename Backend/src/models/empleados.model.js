// imports 
import mongoose from "mongoose";


// plantilla de los datos

const empleadoSchema = new mongoose.Schema ({
    // la info que quiere guardar
    codigo:{type: Number, required:true},
    nombre: {type: String, required:true},
    apellido1: {type: String, required:true},
    apellido2: {type: String, required:true},
    codigo_departamento: {type: Number, required: true}
});


export const empleadoModel = mongoose.model('empleado', empleadoSchema);