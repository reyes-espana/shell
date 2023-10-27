const express = require("express");
const squadRouter = express.Router();

const {Squad} = require('../models')
const {check, validationResult} = require("express-validator")
const app = require('../../app')
squadRouter.use(express.json())

// GET All Squads
squadRouter.get('/', async (req, res, next) => {
    try{
        const allSquads = await Squad.findAll();
        res.json(allSquads)
    } catch (err) {
        next(err)
    }
})

// GET squad by ID
squadRouter.get('/:id', async (req, res, next) => {
    try {
        const found = await Squad.findByPk(req.params.id);
        res.json(found)
    } catch (err) {
        next(err)
    }
})

// POST a new Squad
squadRouter.post('/', async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.json({error:errors.array()})
    } else {
    try {
        let mkSquad = req.body;
        await Squad.create(req.body)
    } catch (err) {
        next(err)
    }}
})

// PUT request
squadRouter.put("/:id", async (req, res, next) => {
    try {
        const updated = await Squad.update(req.body, {where: {id:req.params.id}})
        res.json(200)
    } catch (err) {
        next(err)
    }
})

// DELETE squad by ID
squadRouter.put("/:id", async (req, res, next) => {
    try {
        const updated = await Squad.destroy({where: {id:req.params.id}})
        res.json(200)
    } catch (err) {
        next(err)
    }
})

module.exports = squadRouter