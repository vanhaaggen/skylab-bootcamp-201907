const { validate, randomator } = require('wody-utils')
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
        //find user
        const user = await User.findById(id).lean()

        if (!user) throw new Error('user does not exist')
        //destructure needed queries
        const { gender, goal, fitnesslevel } = user
        //find movement that match with queries
        const movements = await Movement.find({ gender: gender, goal: goal, fitnesslevel: fitnesslevel }).lean()
        debugger
        //save id's in array
        movements.forEach(movement => {
            let repArr = movement.reps
            randomator(repArr)
            repArr.splice(1)
        })


        //order ids randomly in array
        randomator(movements)
        debugger
        //keep only the first 5 array values
        const workouts = movements.splice(0, 5)
        return workouts



    })()

}