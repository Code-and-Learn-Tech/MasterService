const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ethnicitySchema = new Schema({

    name:{
        type: String,
        required:true,
        unique:true,
    }

})

module.exports = mongoose.model('Ethnicity', ethnicitySchema);