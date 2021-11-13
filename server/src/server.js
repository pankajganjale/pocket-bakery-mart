const express = require("express");

const app = express();

const userController = require("./controllers/users.controller");
const shopController = require("./controllers/shops.controller");
const cakeController = require("./controllers/cakes.controller");
const snacksController = require("./controllers/snacks.controller");

const connect = require("./configs/db.js");

app.use(express.json());

app.use("/signup", userController);
app.use("/shops", shopController);
app.use("/cakes", cakeController);
app.use("/snacks", snacksController);

app.listen("1234", async function () {
    await connect();
    console.log("listening on port 1234");
})

// const start = async () => {
//     await connect();
//     app.listen(1234, () => {
//         console.log("Listening on port 1234....");
//     })
// }

// module.exports = start;