const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const squadRouter = require('./src/routes/squad')
const peopleRouter = require('./src/routes/human')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/squads', squadRouter);
app.use('/humans', peopleRouter);

app.use(express.static(path.join(__dirname, 'static')));

module.exports = { 
    app
}