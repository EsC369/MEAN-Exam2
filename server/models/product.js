const mongoose = require('mongoose')
const TableSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, 'name must have at least 3 characters']},
    qTY: {type: Number, required: [true, "Quantity is required"], min: [1, 'QTY must be greater than 0'], match: [/^[0-9]*$/, 'Please enter a number']},
    price: {type: Number, required: [true, "Price is required"], min: [1, 'Price must be greater than 0'], match: [/^[0-9]*$/, 'Please enter a number']}
}, {timestamps: true});
module.exports = mongoose.model('Product', TableSchema);