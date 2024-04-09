// main.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const HTTP_PORT = process.env.PORT || 1212;

// Middleware
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
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});

// POST a new product
app.post("/product", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save()
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json({ error: err.message }));
});

// DELETE a product
app.delete("/product/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.send("Product deleted successfully");
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// PUT (update) a product
app.put("/product/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.send(product);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// User Endpoints
// Get all users
app.get("/user", (req, res) => {
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.error("Error getting users:", err);
        res.status(500).send("Error getting users");
      });
  });
  
  // Create a new user
  app.post("/user", (req, res) => {
    let user = new User(req.body);
    user.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.status(500).send("Error saving user");
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
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        res.status(500).send("Error deleting user");
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
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        res.status(500).send("Error updating user");
      });
  });

// Comment Endpoints

// Get all comments
app.get("/comment", (req, res) => {
    Comment.find()
      .then((comments) => {
        res.send(comments);
      })
      .catch((err) => {
        console.error("Error getting comments:", err);
        res.status(500).send("Error getting comments");
      });
  });
  
  // Create a new comment
  app.post("/comment", (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error("Error saving comment:", err);
        res.status(500).send("Error saving comment");
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
      })
      .catch((err) => {
        console.error("Error updating comment:", err);
        res.status(500).send("Error updating comment");
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
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
        res.status(500).send("Error deleting comment");
      });
  });  

// Cart Endpoints
// Get all carts
app.get("/cart", (req, res) => {
    Cart.find()
      .then((carts) => {
        res.send(carts);
      })
      .catch((err) => {
        console.error("Error getting carts:", err);
        res.status(500).send("Error getting carts");
      });
  });
  
  // Create a new cart
  app.post("/cart", (req, res) => {
    let cart = new Cart(req.body);
    cart.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error("Error saving cart:", err);
        res.status(500).send("Error saving cart");
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
      })
      .catch((err) => {
        console.error("Error updating cart:", err);
        res.status(500).send("Error updating cart");
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
      })
      .catch((err) => {
        console.error("Error deleting cart:", err);
        res.status(500).send("Error deleting cart");
      });
  });

// Order Endpoints
// Get all orders
app.get("/order", (req, res) => {
    Order.find()
      .then((orders) => {
        res.send(orders);
      })
      .catch((err) => {
        console.error("Error getting orders:", err);
        res.status(500).send("Error getting orders");
      });
  });
  
  // Create a new order
  app.post("/order", (req, res) => {
    let order = new Order(req.body);
    order.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error("Error saving order:", err);
        res.status(500).send("Error saving order");
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
      })
      .catch((err) => {
        console.error("Error updating order:", err);
        res.status(500).send("Error updating order");
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
      })
      .catch((err) => {
        console.error("Error deleting order:", err);
        res.status(500).send("Error deleting order");
      });
  });
  

// Start the server
app.listen(HTTP_PORT, () => {
  console.log("Server listening on http://localhost:" + HTTP_PORT);
});
