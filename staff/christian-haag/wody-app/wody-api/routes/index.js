const { Router } = require('express')
const tokenMiddleware = require('../helpers/token-middleware')
const bodyParser = require('body-parser')

const registerUser = require('./user-register')
const authenticateUser = require('./user-authenticate')
const retrieveUser = require('./user-retrieve')
const updateUser = require('./user-update')
const unregisterUser = require('./user-unregister')


const router = Router()
const jsonBodyParser = bodyParser.json()

/* USER */
router.post('/users', jsonBodyParser, registerUser)
router.post('/auth', jsonBodyParser, authenticateUser)
router.get('/users/:id', [tokenMiddleware, jsonBodyParser], retrieveUser)
router.patch('/users/:id', [tokenMiddleware, jsonBodyParser], updateUser)
router.delete('/users/:id', [tokenMiddleware, jsonBodyParser], unregisterUser)

// //CARD
// router.post('/users/:id/cards', [tokenMiddleware, jsonBodyParser], registerCard)
// router.get('/users/:id/cards/:cardId', [tokenMiddleware, jsonBodyParser], retrieveCard)
// router.delete('/users/:id/cards/:cardId', [tokenMiddleware, jsonBodyParser], unregisterCard)

/* PROPERTY */
// router.post('/users/:id/properties', [tokenMiddleware, jsonBodyParser], registerProperty)
// router.get('/users/:id/properties/', [tokenMiddleware, jsonBodyParser], retrieveAllProperty)
// router.get('/users/:id/properties/:propertyId', [tokenMiddleware, jsonBodyParser], retrieveProperty)
// router.patch('/users/:id/properties/:propertyId', [tokenMiddleware, jsonBodyParser], updateProperty)
// router.patch('/users/:id/properties/:propertyId/owners/:ownerId', [tokenMiddleware, jsonBodyParser], registerPropertyOwner)
// router.delete('/users/:id/properties/:propertyId/owners/:ownerId', [tokenMiddleware, jsonBodyParser], unregisterPropertyOwner)
// router.delete('/users/:id/properties/:propertyId', [tokenMiddleware, jsonBodyParser], unregisterProperty)




module.exports = router