const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    created: Date,
    updated: Date,
    courses: [String]
})
//                              refers to teachers collection
module.exports = mongoose.model("teachers",teacherSchema);