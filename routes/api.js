const express = require('express');
const router = express.Router();
const { createCart,
     getAllCart,
     getSingleCart,
     updateCart,
     deleteCart } = require('../Controllers/cart');


// Create a new shopping cart
router.route('/')
     .post(createCart);

// Get all shopping carts
router.route('/')
     .get(getAllCart);

// Get a single shopping cart by ID
router.route('/:id')
     .get(getSingleCart);

// Update a shopping cart item quantity by ID
router.route('/:id')
     .patch(updateCart);

// Delete a shopping carts item by ID
router.route('/:id')
     .delete(deleteCart);
    
module.exports = router;
