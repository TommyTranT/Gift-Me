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
app.use("/items", itemRouter);

// ITEM

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
