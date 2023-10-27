const express = require("express");
const peopleRouter = express.Router();

const {Human} = require('../models')
const {check, validationResult} = require("express-validator")
// const app = require('../app')
peopleRouter.use(express.json())

// GET all characters
peopleRouter.get('/', async (req, res, next) => {
    try {
        const allPeople = await Human.findAll();
        res.json(allPeople)
    } catch (err) {
        next(err)
    }
})

// GET /characters/:id
peopleRouter.get('/:id', async (req, res, next) => {
    try {
        const found = await Human.findByPk(req.params.id);
        res.json(found)
    } catch (err) {
        next(err)
    }
})

module.exports = peopleRouter;