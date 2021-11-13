const express = require("express");
const router = express.Router();
const cakeSchema = require("../models/cakes.model");

// Get All Cakes

router.get("", async (req, res) => {
  try {
    const cakes = await cakeSchema.find().populate("seller");
    console.log(cakes)
    return res.send({data: cakes})
  } catch (error) {
    return res.send({error: error});
  }
});

// Get Single cake By ID

router.get("/:id", async (req, res) => {
    try {
      const cake = await cakeSchema.findById(req.params.id);
      return res.send({data: cake})
    } catch (error) {
      return res.send({error: error});
    }
  });

/* create a cake */
router.post("/", async (req, res) => {
  try {
    const cake = await cakeSchema.create(req.body);
    return res.send({data: cake})
  } catch (error) {
    return res.send({error: error});
  }
});

module.exports = router;