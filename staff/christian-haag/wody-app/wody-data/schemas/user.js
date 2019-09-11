const mongoose = require('mongoose')

const { Schema } = mongoose

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
    historic: [workout],
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    birthday: {
        type: String,
        match: /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    goal: {
        type: String,
        enum: ['lose', 'fit', 'gain']

    },
    fitnesslevel: {
        type: String,
        enum: ['low', 'mid', 'high']
    }

})

