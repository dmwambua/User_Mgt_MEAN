//mongodb schema that allows to define content and shape of document
//after creating a model, a controller needs to be created as well to select, delete, update and create records.
const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

//model is a method of mongoose
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;