const mongoose = require("mongoose");

const shopsSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String, require: true},
    rating: {type: Number, require: true}
}, {
    versionKey: false,
    timestamps: true
});

const Shops = mongoose.model("shop", shopsSchema);

module.exports = Shops;