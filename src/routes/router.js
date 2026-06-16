const express = require('express')
const Router = express.Router()

const homeController = require('../controllers/homeController')

const controller = {
    homeController
}

Router.get('/api/hello', controller.homeController.getHello)

module.exports = Router