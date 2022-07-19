const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname : {
        type: 'string',
        required: true
    },
    pprice : {
        type: 'number',
        required: true
    },
    pdesc : {
        type: 'string',
        required: true
    },
    pimg : {
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('Product',productSchema);