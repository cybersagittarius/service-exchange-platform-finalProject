const mongoose = require('mongoose');

const pwResetSchema = new mongoose.Schema ({
    email: { type: String, required: true },
    token: { token: String, required: true },
}, {
    timestamp: true
})

module.exports = mongoose.model('pwReset', pwResetSchema)