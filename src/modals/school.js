const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({

    name:{
        type: String,
        required:true,
        unique:true,
    }

})

module.exports = mongoose.model('School', schoolSchema);