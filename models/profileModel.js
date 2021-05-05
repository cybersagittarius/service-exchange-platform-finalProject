const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true }, 
    username: { type: String, required: true },   
    avatar: { type: String, required: true},
    skills: { type: String, required: true },
}, 
    {
    timestamps: true
    })

module.exports = mongoose.model('profile', profileSchema);