const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

// CREATE property
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: "Error adding property" });
  }
});

// GET all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Error fetching properties" });
  }
});

// GET property by id
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: "Error fetching property" });
  }
});

module.exports = router;
