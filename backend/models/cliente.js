const {Schema, model, Types} = require('mongoose')


ClienteSchema = Schema({ // definicion de los atributos de la tabla de citas
    Nombres:{
        type: String
    },
    Apellidos:{
        type: String
    },
    Fecha_N:{
        type: Date,
        default: Date.now()
    },
    Telefono:{
        type: String
    },
    Correo:{
        type: String
    },
    Cedula:{
        type: String
    }
});


module.exports= model('cliente', ClienteSchema)