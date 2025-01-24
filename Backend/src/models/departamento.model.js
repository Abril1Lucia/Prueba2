// imports 
import mongoose from "mongoose";


// plantilla de los datos

const departamentoSchema = new mongoose.Schema({
     // la info que quiere guardar
    codigo: {type:Number},
    nombre: {type:String}
});


export const departamentoModel = mongoose.model('departamento', departamentoSchema);