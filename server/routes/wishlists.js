const express = require("express");
const router = express.Router();
const pool = require("../db.js");

// create a new wishlist
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newWishlist = await pool.query(
      "INSERT INTO wishlists(name, description) VALUES($1, $2) RETURNING *",
      [name, description]
    );

    res.json(newWishlist.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// select all wishlist
router.get("/", async (req, res) => {
  try {
    const allWishlist = await pool.query(
      "SELECT * FROM wishlists ORDER BY wishlist_id"
    );

    res.json(allWishlist.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// select a specific wishlist
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleWishlist = await pool.query(
      "SELECT * FROM wishlists WHERE wishlist_id = $1",
      [id]
    );

    res.json(singleWishlist.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
// update a wishlist
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateWishlist = await pool.query(
      "UPDATE wishlists SET name = $1, description = $2 WHERE wishlist_id = $3",
      [name, description, id]
    );

    res.json("Wishlist info updated!");
  } catch (error) {
    console.error(error.message);
  }
});

// delete a wishlist
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteWishlist = await pool.query(
      "DELETE FROM wishlists WHERE wishlist_id = $1",
      [id]
    );

    res.json("Wishlist deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
