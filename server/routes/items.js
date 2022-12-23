const express = require("express");
const router = express.Router();
const pool = require("../db.js");

// add a new item
router.post("/", async (req, res) => {
  try {
    const { name, description, url, img_url, price, wishlist_id } = req.body;
    const addItem = await pool.query(
      "INSERT INTO items(name, description, url, img_url, price, wishlist_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, description, url, img_url, price, wishlist_id]
    );

    res.json(addItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// select all items based on wishlist_id | sort by oldest
router.get("/show/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allItem = await pool.query(
      "SELECT * FROM items WHERE wishlist_id = $1 ORDER BY item_id",
      [id]
    );

    res.json(allItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// sort by newest
router.get("/show/sort/newest/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allItem = await pool.query(
      "SELECT * FROM items WHERE wishlist_id = $1 ORDER BY item_id DESC",
      [id]
    );

    res.json(allItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// sort by lowest price
router.get("/show/sort/price-lowest/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allItem = await pool.query(
      "SELECT * FROM items WHERE wishlist_id = $1 ORDER BY price",
      [id]
    );

    res.json(allItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// sort by highest price
router.get("/show/sort/price-highest/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allItem = await pool.query(
      "SELECT * FROM items WHERE wishlist_id = $1 ORDER BY price DESC",
      [id]
    );

    res.json(allItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// select a specific item
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleItem = await pool.query(
      "SELECT * FROM items WHERE item_id = $1",
      [id]
    );

    res.json(singleItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update an item
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, url, img_url, price } = req.body;
    const updateItem = await pool.query(
      "UPDATE items SET name = $1, description = $2, url = $3, img_url = $4, price = $5 WHERE Item_id = $6",
      [name, description, url, img_url, price, id]
    );

    res.json("Item updated!");
  } catch (error) {
    console.error(error.message);
  }
});

// delete an item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query(
      "DELETE FROM items WHERE item_id = $1",
      [id]
    );

    res.json("Item was deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
