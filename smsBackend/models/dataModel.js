const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    Id: {
        type: Number,
        required: 'ID can\'t be empty'
    },
    city: {
        type: String,
        required: 'City name can\'t be empty'
    },
    startDate: {
        type: Date,
        required: 'Start Date can\'t be empty',
    },
    endDate: {
        type: Date,
        required: 'End Date can\'t be empty',
    },
    price: {
        type: Number,
        required: 'price can\'t be empty',
    },
    color: {
        type: String,
        required: 'Color can\'t be empty',
        
    },
    status: {
        type: String,
        required: 'Status can\'t be empty'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


module.exports=mongoose.model('Data', dataSchema);