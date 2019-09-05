const mongoose = require('mongoose')
const { onerm, user, workout, movement } = require('./schemas')

module.exports = {
    User: mongoose.model('User', user),
    Onerm: mongoose.model('Onerm', onerm),
    Workout: mongoose.model('Workout', workout),
    Movement: mongoose.model('Movement', movement)
}