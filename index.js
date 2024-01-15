const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const userRouter = require('./user.router')
const { log } = require('console')
app.use('/user', userRouter)

app.listen(3000, () => console.log("****homework server is up****"))