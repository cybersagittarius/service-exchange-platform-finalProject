const mongoose = require('mongoose');

const EssentialSchema = new mongoose.Schema ({
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { token: String },
}, {
    timestamp: true
})

module.exports = mongoose.model('essential', EssentialSchema)