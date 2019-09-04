const mongoose = require('mongoose')

const { Schema } = mongoose

module.exports = new Schema({
    movementNames: {
        type: String,
        required: true
    },
    movementType: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true
    },
    restime: {
        type: Number,
        required: true
    },
    bord: {
        type: String,
        required: false
    },
    onerem: {
        type: Boolean,
        required: false
    },
    url: {
        type: String,
        required: false,
        match: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

    }
})

