// const express = require("express");
import express from "express";
import cors from "cors";
import cart from "./routes/cart.route.js";
import products from "./routes/products.route.js";
import users from "./routes/users.route.js";
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/cart", cart);
app.use("/users", users);

app.get("/", function (request, response) {
  response.send("Products Available 🥳➡️");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
