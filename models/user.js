const mongoose = require('../db')();
const Role = require('./role');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: String,
    password: String,
    first_name: String,
    last_name: String,
    role_id: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('User', UserSchema);