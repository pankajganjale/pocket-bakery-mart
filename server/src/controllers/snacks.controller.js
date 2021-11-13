const express = require("express");
const router = express.Router();
const snackSchema = require("../models/snacks.model");

// Get All Snacks

router.get("", async (req, res) => {
  try {
    const items = await snackSchema.find().populate("seller");
    return res.send({data: items})
  } catch (error) {
    return res.send({error: error});
  }
});

// Get Single snack By ID

router.get("/:id", async (req, res) => {
    try {
      const item = await snackSchema.findById(req.params.id);
      return res.send({data: item})
    } catch (error) {
      return res.send({error: error});
    }
  });

/* create a snack */
router.post("/", async (req, res) => {
  try {
    const item = await snackSchema.create(req.body);
    return res.send({data: item})
  } catch (error) {
    return res.send({error: error});
  }
});

module.exports = router;