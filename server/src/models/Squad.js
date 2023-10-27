
const { db, DataTypes, Model } = require('../db/config.js');

class Squad extends Model {};

Squad.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
},{
    sequelize: db,
    modelName: "Squad"
})

module.exports = {Squad};