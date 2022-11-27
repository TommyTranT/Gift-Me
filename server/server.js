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
    const { name, description, user_id } = req.body;
    const newWishlist = await pool.query(
      "INSERT INTO wishlists (name, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [name, description, user_id]
    );

    res.json(newWishlist.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// select all wishlist from a specific user
app.get("/wishlists", async (req, res) => {
  try {
    const { user_id } = req.body;
    const allWishlist = await pool.query(
      "SELECT * FROM wishlists WHERE user_id = $1",
      [user.id]
    );

    res.json(allWishlist.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// select a specific wishlist

// update a wishlist

// delete a wishlist

// ITEM
// add a new item

// select all items

// select a specific item

// update an item

// delete an item

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
