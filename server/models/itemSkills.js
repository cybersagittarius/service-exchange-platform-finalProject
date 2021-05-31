const mongoose = require('mongoose');
const skillSubSchema = require('skillSubSchema');

const itemSkillSchema = new mongoose.Schema({
    itemSkills: {type: [skillSubSchema], 
                 require: true }, 
},
    {timestamps: true}
)

module.exports = mongoose.model('itemSkills', itemSkillSchema)