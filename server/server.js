const express = require("express");
const app = express();
const PORT = 8080;

// CONNECT TO DB
const pool = require("./db");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
