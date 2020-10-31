const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    budget: {
        type: Number,
        
    },
    color: {
        type: String,
        
    }
}, { collection: 'b_data'})

module.exports = mongoose.model('b_data', nameSchema)