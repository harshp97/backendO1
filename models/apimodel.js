const mongoose = require('mongoose')

const apischema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }
})


module.exports =  mongoose.model('Apimodel', apischema)