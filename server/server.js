const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const path = require("path");

// CONNECT TO DB
const pool = require("./db");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
const wishlistRouter = require("./routes/wishlists");
const itemRouter = require("./routes/items");
app.use("/wishlists", wishlistRouter);
app.use("/items", itemRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
