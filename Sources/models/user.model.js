const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String,
  roles: [String], // admin, user
})
const User = mongoose.model('User', UserSchema)
module.exports = mongoose.model('User')
