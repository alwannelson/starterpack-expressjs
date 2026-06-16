const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./src/routes/router')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './src/public')))
app.use('/', router)
app.use('/', function (req, res) {
    return res.status(404).json({
        status: 'Not Found',
        message: 'Endpoint not found.'
    })
})

const port = process.env.APP_PORT || 3000
const appURL = process.env.APP_URL || 'http://localhost'

app.listen(port, function () {
    console.log('Bravo! Your application is running!')
    console.log(`${appURL}:${port}`)
} )