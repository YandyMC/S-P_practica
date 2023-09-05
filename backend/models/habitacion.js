const {Schema, model, Types} = require('mongoose')


HotelSchema = Schema({ // definicion de los atributos de la tabla de citas
    idhotel: {
        type: Types.ObjectId, 
        ref: "habitacion"
    },
    Numero_habitacion:{
        type: String,
        require: true
    },
    Tipo_habitacion:{
        type: String,
        require: true
    },
    Descripcion_habitacion:{
        type: String,
        require: true
    }
});


module.exports= model('habitacion', HabitacionSchema)