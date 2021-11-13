const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image : {type: String, require: false},
    email: {type: String, require: true, unique: true},
    phone: {type: String, require: true},
    password: {type: String, require: true},
    cart: [{type: String, require: false}],
    bought: [{type: String, require: false}]
}, {
    versionKey: false,
    timestamps: true
});

const Users = mongoose.model("user", usersSchema);

module.exports = Users;