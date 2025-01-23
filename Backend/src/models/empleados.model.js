import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema ({
    codigo:{type: Number, required:false},
    nombre: {type: String, required:true},
    apellido1: {type: String, required:true},
    apellido2: {type: String, required:true},
    codigo_departamento: {type: Number, required: true}
});


export const empleadoModel = mongoose.model('empleado', empleadoSchema);