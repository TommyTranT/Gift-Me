const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

// CONNECT TO DB
const pool = require("./db");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

// WISHLIST
// create a new wishlist
app.post("/wishlists", async (req, res) => {
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
app.get("/wishlists", async (req, res) => {
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
app.get("/wishlists/:id", async (req, res) => {
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
app.put("/wishlists/:id", async (req, res) => {
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
app.delete("/wishlists/:id", async (req, res) => {
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

// ITEM
// add a new item
app.post("/items", async (req, res) => {
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
// select all items based on wishlist_id
app.get("/items/show/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allItem = await pool.query(
      "SELECT * FROM items WHERE wishlist_id = $1",
      [id]
    );

    res.json(allItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// select a specific item
app.get("/items/:id", async (req, res) => {
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
app.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, url, img_url, price } = req.body;
    const updateItem = await pool.query(
      "UPDATE items SET name = $1, description = $2, url = $3, img_url = $4, price = $5",
      [name, description, url, img_url, price]
    );

    res.json("Item updated!");
  } catch (error) {
    console.error(error.message);
  }
});
// delete an item

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
