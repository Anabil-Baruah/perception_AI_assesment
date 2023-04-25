const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: true
  },
  products: [{
    // productId: {
    //   type: mongoose.Schema.Types.ObjectId, 
    //   required: true
    // },
    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  }]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;
