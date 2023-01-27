// Can't forget the .env!
require('dotenv').config()
// Importing
const port = process.env.port || 3000;
const path = require('path')
const express = require('express')
const chalk = require('chalk')

// Express
const app = express()
const Main = require('./routes/index')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', Main)

// Are u listening bruh?
app.listen(port, () => {
    console.log(chalk.green(`App is up and running on port: ${port}!`))
})

