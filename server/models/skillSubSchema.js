//this submodel is to prevent MongoDB from automatically assigning a generated _id to object
const mongoose = require('mongoose');

const skillSubSchema = mongoose.Schema(
    { id: Number, value: String },
    {_id: false}
    );

module.exports = skillSubSchema


