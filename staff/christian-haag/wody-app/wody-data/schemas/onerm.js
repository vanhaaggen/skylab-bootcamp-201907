const mongoose = require('mongoose')

const { Schema } = mongoose

module.exports = new Schema({
    pullups: {
        type: Number,
        required: true
    },
    deadlift: {
        type: Number,
        required: true,
    },
    clean: {
        type: Number,
        required: true
    },
    backsquat: {
        type: Number,
        required: true
    }
})