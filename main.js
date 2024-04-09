const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const HTTP_PORT = process.env.PORT || 1212;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://sukhwindernoorpur:Sukhpb22@cluster0.ijdvrnz.mongodb.net/Assignment_4_WebTechnologies?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// MongoDB Models
const Product = require("./models/product");
const User = require("./models/user");
const Comment = require("./models/comment");
const Cart = require("./models/cart");
const Order = require("./models/order");

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to my Assignment_4_webTechnologies server");
});

// Product Endpoints

// GET all products
app.get("/product", (req, res) => {
  Product.find()
    .then(products => res.json(products));
});

// POST a new product
app.post("/product", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save()
    .then(product => res.status(201).json(product));
});

// DELETE a product
app.delete("/product/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.send("Product deleted successfully");
    });
});

// PUT (update) a product
app.put("/product/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.send(product);
    });
});

// User Endpoints
// Get all users
app.get("/user", (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    });
});

// Create a new user
app.post("/user", (req, res) => {
  let user = new User(req.body);
  user.save()
    .then((result) => {
      res.send(result);
    });
});

// Delete a user
app.delete("/user/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send("User deleted successfully");
    });
});

// Update a user
app.put("/user/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user);
    });
});

// Comment Endpoints

// Get all comments
app.get("/comment", (req, res) => {
  Comment.find()
    .then((comments) => {
      res.send(comments);
    });
});

// Create a new comment
app.post("/comment", (req, res) => {
  let comment = new Comment(req.body);
  comment.save()
    .then((result) => {
      res.send(result);
    });
});

// Update a comment
app.put("/comment/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((comment) => {
      if (!comment) {
        return res.status(404).send("Comment not found");
      }
      res.send(comment);
    });
});

// Delete a comment
app.delete("/comment/:id", (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => {
      if (!comment) {
        return res.status(404).send("Comment not found");
      }
      res.send("Comment deleted successfully");
    });
});

// Cart Endpoints
// Get all carts
app.get("/cart", (req, res) => {
  Cart.find()
    .then((carts) => {
      res.send(carts);
    });
});

// Create a new cart
app.post("/cart", (req, res) => {
  let cart = new Cart(req.body);
  cart.save()
    .then((result) => {
      res.send(result);
    });
});

// Update a cart
app.put("/cart/:id", (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((cart) => {
      if (!cart) {
        return res.status(404).send("Cart not found");
      }
      res.send(cart);
    });
});

// Delete a cart
app.delete("/cart/:id", (req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then((cart) => {
      if (!cart) {
        return res.status(404).send("Cart not found");
      }
      res.send("Cart deleted successfully");
    });
});

// Order Endpoints
// Get all orders
app.get("/order", (req, res) => {
  Order.find()
    .then((orders) => {
      res.send(orders);
    });
});

// Create a new order
app.post("/order", (req, res) => {
  let order = new Order(req.body);
  order.save()
    .then((result) => {
      res.send(result);
    });
});

// Update an order
app.put("/order/:id", (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }
      res.send(order);
    });
});

// Delete an order
app.delete("/order/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }
      res.send("Order deleted successfully");
    });
});

// Start the server
app.listen(HTTP_PORT, () => {
  console.log("Server listening on http://localhost:" + HTTP_PORT);
});
