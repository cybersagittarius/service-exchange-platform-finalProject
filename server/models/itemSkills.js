const mongoose = require('mongoose');

const itemSkillSchema = new mongoose.Schema({
    itemSkills: {type: [{ id: Number, value: String}], 
                 require: true }, 
},
    {timestamps: true}
)

module.exports = mongoose.model('itemSkills', itemSkillSchema)