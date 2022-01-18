//mongodb schema that allows to define content and shape of document
const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

//model is a method of mongoose
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;