const {Schema, model, Types} = require('mongoose')

//citas se encargara de guardar los datos de una reservacion de un cliente a un taller
ReservaSchema = Schema({ // definicion de los atributos de la tabla de citas
    idcliente: {
        type: Types.ObjectId, 
        ref: "cliente"
    },
    Entrada: {
        type: Date,
        default: Date.now()
    },
    Salida: {
        type: Date
    },
    estado:{
        type: Boolean,
        default: false,
    },
});


module.exports= model('reserva', ReservaSchema)