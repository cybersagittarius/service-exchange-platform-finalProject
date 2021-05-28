const mongoose = require('mongoose');

const skillSubSchema = mongoose.Schema(
    { id: Number, value: String },
    {_id: false}
    );

module.exports = skillSubSchema


