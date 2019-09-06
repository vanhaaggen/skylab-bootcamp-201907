const { validate } = require('wody-utils')
const { models: { User } } = require('wody-data')

/**
 * Authenticates a user by its credentials.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns {Promise}
 */
module.exports = function (email, password) {

    validate.email(email, 'email')
    validate.string(email, 'email')
    validate.string(password, 'password')

    return (async () => {

        const user = await User.findOne({ email })

        if (!user) throw new Error(`wrong credentials`)

        if (user.password !== password) throw new Error('wrong credentials')

        return user.id

    })()
}