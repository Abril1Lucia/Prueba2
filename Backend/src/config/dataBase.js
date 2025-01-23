import mongoose from "mongoose";


async function connectionMongo(){

    try{
        //conectar bases de datos we
         await mongoose.connect(process.env.DB_URL, {dbName:'Prueba2'} );
        console.log('LOGRAMOS VINCULAR ESTO WE ');

    }catch(error) {
        console.error ('no we, no pudiste ' + error);

    }
}

export default connectionMongo;