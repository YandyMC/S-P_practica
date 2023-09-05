const {Schema, model, Types} = require('mongoose')

ResenaSchema = Schema({ // definicion de los atributos de la tabla de citas
    idhotel: {
        type: Types.ObjectId, 
        ref: "hotel"
    },
    idresena: {
        type: Types.ObjectId, 
        ref: "cliente"
    },
    Comentario:{
        type: String
    },
    Calificacion:{
        type: Number
    },
    Fecha_reseña:{
        type: Date,
        default: Date.now()
    }
});


module.exports= model('resena', ResenaSchema)