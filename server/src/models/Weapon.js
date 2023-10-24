const { db, DataTypes, Model } = require('../db/config.js');

class Weapon extends Model {};

Weapon.init({
    name: DataTypes.STRING
},{
    sequelize: db,
    modelName: "Weapon"
})

module.exports = { 
    Weapon
}