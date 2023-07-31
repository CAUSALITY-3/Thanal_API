const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    photoUrls: {
        type: [String],
        required: true
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        immutable: true,
        
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product