const mongoose = require('mongoose');

const itemSkillSchema = new mongoose.Schema({
    skill_id: { type: Number, required: true},
    skills: { type: String, require: true} 
}, 
    { timestamps: true}
)

module.exports = mongoose.model('skills', itemSkillSchema)