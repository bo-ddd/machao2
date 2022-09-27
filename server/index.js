const express = require('express')
const mount = require('./middleware/mount')
const app = express()
app.use(express.json())
app.use(mount)

const userRouter = require('./user')

app.use('/user', userRouter);

module.exports = {
    path: '/api',
    handler: app
}