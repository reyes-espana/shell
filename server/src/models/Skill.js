const { db, Model, DataTypes, Sequelize } = require('../db/config.js');

class Skill extends Model {};

Skill.init({
    name: DataTypes.STRING
},{
    sequelize: db,
    modelName: "Skill"
})

module.exports = {Skill}