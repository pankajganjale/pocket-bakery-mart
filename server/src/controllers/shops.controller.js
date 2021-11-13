const express = require("express");
const router = express.Router();
const shopSchema = require("../models/shops.model");


// Get All Shops

router.get("", async (req, res) => {
  try {
    const shops = await shopSchema.find();
    return res.send({data: shops})
  } catch (error) {
    return res.send({error: error});
  }
});

// Get Single Shop By ID

router.get("/:id", async (req, res) => {
    try {
      const shop = await shopSchema.findById(req.params.id);
      return res.send({data: shop})
    } catch (error) {
      return res.send({error: error});
    }
  });

/* create a shop */
router.post("/", async (req, res) => {
  try {
    const shop = await shopSchema.create(req.body);
    return res.send({data: shop})
  } catch (error) {
    return res.send({error: error});
  }
});

module.exports = router;