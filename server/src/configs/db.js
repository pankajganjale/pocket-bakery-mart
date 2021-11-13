const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://pankajganjale:pankajganjale@cluster0.av52i.mongodb.net/test");
}
// mongodb+srv://pankajganjale:pankajganjale@cluster0.av52i.mongodb.net/bakery?retryWrites=true&w=majority

module.exports = connect;