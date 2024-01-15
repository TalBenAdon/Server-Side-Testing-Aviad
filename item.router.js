const express = require('express')
const itemRouter = express.Router()
const itemService = require('./item.service.js')
itemRouter.get('/', function (req, res) {
    try {
        res.send(itemService.getAllItems)
    } catch (err) {
        res.status(401).send(err)
    }
})