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

// get a current user

// WISHLIST
// create a new wishlist

// select a wishlist

// edit a wishlist

// delete a wishlist

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
