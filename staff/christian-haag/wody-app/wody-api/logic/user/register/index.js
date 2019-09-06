const { validate } = require('wody-utils')
const { models: { User } } = require('wody-data')

/**
 * Registers a user.
 * 
 * @param {string} name 
 * @param {string} surname 
 * @param {string} email 
 * @param {string} password
 * @param {string} gender
 * @param {string} birthday
 * @param {number} weight
 * @param {number} height
 * @param {string} goal
 * @param {string} fitnesslevel
 *
 * 
 * @returns {Promise}
 */
module.exports = function (name, surname, email, password, gender, birthday, weight, height, goal, fitnesslevel) {

    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.string(password, 'password')
    validate.string(gender, 'gender')
    validate.string(birthday, 'birthday')
    validate.number(weight, 'weight')
    validate.number(height, 'height')
    validate.string(goal, 'goal')
    validate.string(fitnesslevel, 'fitnesslevel')


    return (async () => {
        const user = await User.findOne({ email })

        if (user) throw new Error(`user already exist`)

        const create = await User.create({ name, surname, email, password, gender, birthday, weight, height, goal, fitnesslevel })
        return create
    })()
}