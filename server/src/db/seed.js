
const { people, animals } = require('./sample')
const { Squad, Character, Human, Animal }  = require('../models')
const { db } = require('./config');


// write async () => function for CRUD 
const syncSeed = async ()=> {
    await db.sync({force:true});
    people.map(member => Human.create(member))
    animals.map(animal => Animal.create(animal))

    await Squad.create({name: 'rogue', location: null, active: true});
    const cast = await Character.findAll();
    const rogue = await Squad.findByPk(1);
    await rogue.addCharacters(cast);
}

syncSeed();