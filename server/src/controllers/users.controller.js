const express = require("express");
const router = express.Router();
const userSchema = require("../models/users.model");

// Get All Users

router.get("", async (req, res) => {
  try {
    const users = await userSchema.find();
    return res.send({data: users});
  } catch (error) {
      return res.send({error: error});
  }
});

// Get Single User By ID

router.get("/:id", async (req, res) => {
    try {
      const user = await userSchema.findById(req.params.id);
      return res.send({data: user});
    } catch (error) {
        return res.send({error: error});
    }
  });

// Create a User

router.post("/", async (req, res) => {
  try {
    const newUser = await userSchema.create(req.body);
    return res.send({data: newUser})
  } catch (error) {
    return res.send({error: error});
  }
});

module.exports = router;