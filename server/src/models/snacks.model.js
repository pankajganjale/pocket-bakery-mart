const mongoose = require("mongoose");

const shopsSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String, require: true},
    rating: {type: Number, require: true},
    seller: {type: mongoose.Schema.Types.ObjectId, ref: "shop", required: true}
}, {
    versionKey: false,
    timestamps: true
});

const Shops = mongoose.model("snack", shopsSchema);

module.exports = Shops;