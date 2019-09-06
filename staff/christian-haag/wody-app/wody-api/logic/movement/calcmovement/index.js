const { validate } = require('wody-utils')
const { models: { User, Movement, Workout } } = require('wody-data')

/**
 * Returns movements following users profile
 * 
 * @param {string} id
 * 
 * @returns {Promise}
 */

module.exports = function (id) {


    validate.string(id, 'id')
    debugger
    return (async () => {
        const user = await User.findById(id)
        if (!user) throw new Error('user does not exist')
        user.gender === 'male' && user.goal === 'lose' && user.fitnesslevel === 'low'

        const case1 = await Movement.find({ gender: 'male', goal: 'lose', fitnesslevel: 'low' }).lean()



        return case1
    })()

}