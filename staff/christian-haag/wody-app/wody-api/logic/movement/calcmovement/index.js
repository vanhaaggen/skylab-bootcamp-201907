const { validate } = require('wody-utils')
const { models: { User, Movement, Workout } } = require('wody-data')
const { random, floor } = Math
/**
 * Returns movements following users profile
 * 
 * @param {string} id
 * 
 * @returns {Promise}
 */

module.exports = function (id) {

    validate.string(id, 'id')

    return (async () => {
        let wodies

        const user = await User.findById(id)

        if (!user) throw new Error('user does not exist')

        const { gender, goal, fitnesslevel } = user

        const movements = Movement.find({ gender: gender, goal: goal, fitnesslevel: fitnesslevel }).lean()

        wodies = movements.id

        for (let i = 0; i <= 6; i++) {

        }


    })()

}