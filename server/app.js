const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const squadRouter = require('./src/routes')
const peopleRouter = require('./src/routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.get('/', (_req, res) => {
    res.send('WELCOME :3')
})

app.use('/squad', squadRouter);
app.use('/characters', peopleRouter);

app.use(express.static(path.join(__dirname, 'static')));

module.exports = { 
    app
}