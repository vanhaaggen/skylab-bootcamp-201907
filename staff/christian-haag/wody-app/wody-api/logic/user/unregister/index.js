const { validate } = require('wody-utils')
const { models: { User } } = require('wody-data')
/**
 * Unregisters a user.
 * 
 * @param {string} id
 * @param {string} password
 * 
 * @returns {Promise}
 */
module.exports = function (id, password) {

    validate.string(id, 'id')
    validate.string(password, 'password')

    return (async () => {
        const result = await User.deleteOne({ _id: id, password })

        if (!result.deletedCount) throw new Error(`wrong credentials`)


    })()
}