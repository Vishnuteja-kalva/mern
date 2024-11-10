const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    token:String,
})
const UserModel = mongoose.model("userinfo",UserSchema)
module.exports = UserModel