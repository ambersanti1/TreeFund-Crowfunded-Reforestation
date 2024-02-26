require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("./routes/stripe");
const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/stripe", stripe);

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
