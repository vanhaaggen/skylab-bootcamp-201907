const { expect } = require('chai')
const logic = require('../../.')
const { models: { User } } = require('wody-data')
const mongoose = require('mongoose')
const { random, round } = Math


describe('logic - authenticate user', () => {
    before(() => mongoose.connect('mongodb://localhost/wodyDb', { useNewUrlParser: true }))

    let name, surname, email, password, id

    beforeEach(async () => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`
        fitnesslevel = round(random() * 3)
        goal = round(random() * 3)
        exp = round(random() * 3)

        await User.deleteMany()
        const user = await User.create({ name, surname, email, password, fitnesslevel, goal, exp })
        id = user.id
    })

    //email
    it('should fail on empty email', () =>
        expect(() =>
            logic.registerUser(name, surname, '', password, fitnesslevel, goal, exp)
        ).to.throw('email is empty or blank')
    )

    it('should fail on undefined email', () =>
        expect(() =>
            logic.registerUser(name, surname, undefined, password, fitnesslevel, goal, exp)
        ).to.throw(`email with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            logic.registerUser(name, surname, 123456798, password, fitnesslevel, goal, exp)
        ).to.throw(`email with value 123456798 is not a string`)
    )
    //password
    it('should fail on empty password', () =>
        expect(() =>
            logic.registerUser(name, surname, email, '', fitnesslevel, goal, exp)
        ).to.throw('password is empty or blank')
    )

    it('should fail on undefined password', () =>
        expect(() =>
            logic.registerUser(name, surname, email, undefined, fitnesslevel, goal, exp)
        ).to.throw(`password with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            logic.registerUser(name, surname, email, 123456798, fitnesslevel, goal, exp)
        ).to.throw(`password with value 123456798 is not a string`)
    )


    it('should succeed on correct data', async () => {
        const _id = await logic.authenticateUser(email, password)

        expect(_id).to.exist
        expect(_id).to.be.a('string')
        expect(_id).to.equal(id)

    })

    it('should fail on non existing email', async () => {
        const fakeMail = 'tedoy@conelMechero.sole'
        try {
            await logic.authenticateUser(fakeMail, password)
        } catch ({ message }) {
            expect(message).to.equal('wrong credentials')
        }
    })

    it('should fail on non existing email', async () => {
        const fakePass = '16519616'
        try {
            await logic.authenticateUser(email, fakePass)
        } catch ({ message }) {
            expect(message).to.equal('wrong credentials')
        }
    })



    after(() => mongoose.disconnect())
})