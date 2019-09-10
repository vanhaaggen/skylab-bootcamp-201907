const { validate } = require('wody-utils')
const { models: { User } } = require('wody-data')
const bcrypt = require('bcryptjs')

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

    return (async () => {
        const user = await User.findOne({ email })

        if (user) throw new Error(`user already exist`)

        const hash = await bcrypt.hash(password, 10)

        const create = await User.create({ name, surname, email, password: hash, gender, birthday, weight, height, goal, fitnesslevel })
        return create
    })()
}