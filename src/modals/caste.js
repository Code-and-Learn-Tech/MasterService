const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const casteSchema = new Schema({

    name:{
        type: String,
        required:true,
        unique:true,
    }

})

module.exports = mongoose.model('Caste', casteSchema);