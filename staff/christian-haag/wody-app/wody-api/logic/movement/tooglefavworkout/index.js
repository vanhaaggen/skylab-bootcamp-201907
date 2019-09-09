const { validate } = require('wody-utils')
const { models: { User, Workout } } = require('wody-data')

/**
 * 
 * Toogles fav property. And pushes the object stored in 'current' into the 'historic' array.
 * 
 * If fav is set to true it upste's to false.
 * if fav is set to ture it update's to false.
 * 
 * @param {string} workoutId
 * @param {string} userId
 * 
 * @return {Promise}
 */

module.exports = function (workoutId, userId) {

    validate.string(workoutId, 'workoutId')
    validate.string(userId, 'userId')

    return (async () => {
        const workout = await Workout.findById(workoutId)
        const user = await User.findById(userId)

        if (!workout) throw new Error('workout does not exist')
        if (!user) throw new Error('user does not exist')

        const { fav } = workout

        workout.fav = !fav

        const { historic } = user

        historic.push(workout)

        //current array has to be reseted after each workout
        if (user.current.length !== 0) user.current = []

        await workout.save()

        await user.save()

        return workoutId

    })()

}