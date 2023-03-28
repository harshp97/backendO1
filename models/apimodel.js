const mongoose = require('mongoose')

const apischema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    mob:{
        type: Number,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    indate:{
        type: Date,
        required: true
    },
    outdate:{
        type: Date,
        required: true
    },
    idproof:{
        type: String,
        required: true
    },

})


module.exports =  mongoose.model('Apimodel', apischema)
