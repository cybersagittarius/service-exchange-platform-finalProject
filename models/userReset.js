const mongoose = require('mongoose');

const userResetSchema = new mongoose.Schema ({
    email: { type: String, required: true },
    token: { token: String, required: true },
}, {
    timestamp: true
})

module.export = mongoose.model('userReset', userResetSchema)