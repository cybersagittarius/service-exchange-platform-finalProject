const mongoose = require('mongoose')

const itemSkillsArraySchema = new mongoose.Schema({
    id: Number,
    value: String
    }
)

const itemSkillsArrayModel = mongoose.model('itemSkillsArray', itemSkillsArraySchema)

module.exports = itemSkillsArrayModel