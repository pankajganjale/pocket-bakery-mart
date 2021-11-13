const mongoose = require("mongoose");

const cakesSchema = new mongoose.Schema({
    image: {type: String, require: true},
    name: {type: String, require: true},
    seller: {type: mongoose.Schema.Types.ObjectId, ref: "shop", required: true},
    description: {type: String, require: true},
    veg: {type: Boolean, require: true},
    rating: {type: Number, require: true},
    trend: {type: String, require: true},
    category: {type: String, require: true},
    small: {type: Number, require: true},
    medium: {type: Number, require: true},
    large: {type: Number, require: true},
    flavour: {type: String, require: true}
}, {
    versionKey: false,
    timestamps: true
});

const Cakes = mongoose.model("cake", cakesSchema);

module.exports = Cakes;