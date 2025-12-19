const express = require("express");

const router = express.Router();

let wishlist = [];

// ADD to wishlist
router.post("/", (req, res) => {
  wishlist.push(req.body);
  res.json({ message: "Added to wishlist" });
});

// GET wishlist
router.get("/", (req, res) => {
  res.json(wishlist);
});

// REMOVE from wishlist
router.delete("/:id", (req, res) => {
  wishlist = wishlist.filter((item) => item.id !== req.params.id);
  res.json({ message: "Removed from wishlist" });
});

module.exports = router;
