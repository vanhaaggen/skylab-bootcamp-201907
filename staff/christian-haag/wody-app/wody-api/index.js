require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { name, version } = require('./package')
const routes = require('./routes')
const cors = require('cors')

const { env: { PORT, DB_URL_API_LOGIC_TEST } } = process

mongoose.connect(DB_URL_API_LOGIC_TEST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express()

        app.use(cors())
        app.use('/api', routes)

        app.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))
    })

process.on('SIGINT', () => {
    console.log(`\n${name} ${version} shutting down, disconnecting from db...`)

    mongoose.disconnect()

    process.exit(0)
})
