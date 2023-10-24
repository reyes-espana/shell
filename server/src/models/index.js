// import Models
const { Squad } = require('./Squad');
const { Character, Human, Animal } = require('./Character')
const { Skill } = require('./Skill')
const { Weapon } = require('./Weapon');

// Define Associations
Human.hasOne(Weapon)
Weapon.belongsTo(Human)

Squad.hasMany(Character) 
Character.belongsTo(Squad)

// Character.belongsToMany(Skill)
// Skill.belongsToMany(Character)

//export
module.exports = {
    Squad,      
    Character,
    Human,
    Animal,
    Skill,
    Weapon
}