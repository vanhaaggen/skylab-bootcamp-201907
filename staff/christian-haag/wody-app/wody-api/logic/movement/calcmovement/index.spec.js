const { expect } = require('chai')
const logic = require('../../.')
const { models: { User } } = require('wody-data')
const mongoose = require('mongoose')
const { random, floor } = Math

describe('logic - register user', () => {
    before(() => mongoose.connect('mongodb://localhost/wody-server-test', { useNewUrlParser: true }))

    let name, surname, email, password, gender, birthday, weight, height, goal, fitnesslevel, id

    // let genderRandom = ['male', 'female']
    // let fitnessLvlRandom = ['low', 'mid', 'high']
    // let goalRandom = ['lose', 'fit', 'gain']
    // let rand = (param) => floor(random() * param.length)

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@domain.com`
        password = `password-${random()}`
        gender = 'male'
        fitnesslevel = 'low'
        goal = goal = 'lose'
        birthday = '29/06/1984'
        weight = floor(random() * ((130 - 50) + 1) + 50)
        height = floor(random() * ((215 - 50) + 1) + 50)

        await User.deleteMany()
        const user = await logic.registerUser(name, surname, email, password, gender, birthday, weight, height, goal, fitnesslevel)
        id = user.id
    })

    it('should return all filtered movements', async () => {
        const movement = await logic.calculateMovement(id)

        expect(movement).to.exist
        movement.forEach(mov => {
            expect(mov.gender).to.equal(gender)
            expect(mov.goal).to.equal(goal)
            expect(mov.fitnesslevel).to.equal(fitnesslevel)
        })
    })

    after(() => mongoose.disconnect())
})
