'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    year:{
        type: Date,
        required:true
    },
    brand:{
        type: String,
        trim: true,
        required:true
    },
    model:{
        type:String,
        required:true,
        trim: true
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    fuel:{
        type:String,
        required: true,
        trim: true
    },
    price:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Vehicle', schema);