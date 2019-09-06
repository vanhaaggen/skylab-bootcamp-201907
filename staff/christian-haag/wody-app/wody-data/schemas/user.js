const mongoose = require('mongoose')

const { Schema, ObjectId } = mongoose

const workout = require('./workout')

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true
    },
    current: [workout],
    historic: [{ type: ObjectId, ref: 'Workout' }],
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female'],
        default: undefined
    },
    birthday: {
        type: String,
        required: false,
        match: /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/
    },
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    goal: {
        type: String,
        required: true,
        enum: ['lose', 'fit', 'gain'],
        default: undefined
    },
    fitnesslevel: {
        type: String,
        required: true,
        enum: ['low', 'mid', 'high'],
        default: undefined
    }

})

