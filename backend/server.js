const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Products route
app.get("/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
