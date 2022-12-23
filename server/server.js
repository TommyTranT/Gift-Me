const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const path = require("path");

const wishlistRouter = require("./routes/wishlists");
const itemRouter = require("./routes/items");

// CONNECT TO DB
const pool = require("./db");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/wishlists", wishlistRouter);

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

// select all items based on wishlist_id | sort by oldest
app.get("/items/show/:id", async (req, res) => {
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
app.get("/items/show/sort/newest/:id", async (req, res) => {
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
app.get("/items/show/sort/price-lowest/:id", async (req, res) => {
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
app.get("/items/show/sort/price-highest/:id", async (req, res) => {
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
      "UPDATE items SET name = $1, description = $2, url = $3, img_url = $4, price = $5 WHERE Item_id = $6",
      [name, description, url, img_url, price, id]
    );

    res.json("Item updated!");
  } catch (error) {
    console.error(error.message);
  }
});

// delete an item
app.delete("/items/:id", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
