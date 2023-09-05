const {Schema, model, Types} = require('mongoose')


HotelSchema = Schema({ // definicion de los atributos de la tabla de citas
    idhotel: {
        type: Types.ObjectId, 
        ref: "cliente"
    },
    Nombre_Hotel:{
        type: String,
        require: true
    },
    Direccion_Hotel:{
        type: String,
        require: true
    },
    Categoria_Hotel:{
        type: String,
        require: true
    }
});


module.exports= model('hotel', Hotelchema)