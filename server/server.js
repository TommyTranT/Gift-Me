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

// USERS
// create a new user
app.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, password]
    );

    res.json(newUser.rows[0]);
    console.log("new user registered!");
  } catch (error) {
    console.error(error.message);
  }
});

// get a specific user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    res.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// WISHLIST
// create a new wishlist

// select all wishlist

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
