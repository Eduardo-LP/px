//criação de um modelo de produto
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
productSchema.plugin(mongoosePaginate);

mongoose.model('product', productSchema);