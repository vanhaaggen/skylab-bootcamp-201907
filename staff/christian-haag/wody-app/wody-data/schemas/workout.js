const mongoose = require('mongoose')

const { Schema, ObjectId } = mongoose

module.exports = new Schema({
    fav: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    movements: [{ type: ObjectId, ref: 'Movement' }],

})