const first = require('ee-first');
const { db, Model, DataTypes, Sequelize } = require('../db/config.js');

class Character extends Model {};

Character.init({
    firstName: DataTypes.STRING,
    familyName: DataTypes.STRING,
    nickName: DataTypes.STRING, 
    motivation: DataTypes.STRING
    // isActive:{
    //     selfPreservation: DataTypes.AbstractDataTypeConstructor,
    //     defaultValue: true
    // }
    },{
        sequelize: db,
        modelName: "Character"
    })

// Set family name to null unless the Animal is family; if the animal is family, they recieve their owner's familyName
class Animal extends Character {
    constructor(firstName, nickName, species, familyName=null){
        super(firstName, nickName)
        this.species = species;
        this.familyName = familyName;
    }
    fullName () {
        let fullName = '${this.firstName} ${this.familyName}'
        if (this.familyName == null){
            return ''
        }
        return (fullName)
    }
    // isAdopted(human){
    //     // method that takes familyName from the Human who wants to adopt
    //     // the Animal and passes it to the animal; 
    //     // this method also adds the 'adopted' attribute/skill? to the Animal
    // }
    // inGroup() {
    //         if owner is in a group, pet is in the same group
    // }
}

class Human extends Character {
    constructor(firstName, familyName, nickName){
        super(firstName, familyName, nickName)
    }
    fullName () {
        return ('${this.firstName}, ${nickName}, $familyName}')
    }
    // create a method that allows Humans to adopt Animals
    // adopt (animal) { 
        // 
     // }
    // create a method that adds a Human to a group 
}

module.exports = {
    Character,
    Human,
    Animal
};