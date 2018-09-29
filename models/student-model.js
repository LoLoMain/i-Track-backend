const mongoose = require('mongoose');

// Require additional Models
const userModel = require('./user-model');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

});


const studentModel = mongoose.model('Student', studentSchema);
// Collection name
// User -> users -> db.users.find()

module.exports = studentModel;
// Connects the  model above to the routes file