const ShoppingCart = require('../Models/Cart');


//this function will be called when a user add a product to the cart
// it takes the user id and the product id in the body object
const createCart = async function (req, res) {
  const cartExist = await ShoppingCart.findOne({ userId: req.body.userId })
  if (cartExist) {
    const productUpdated = await ShoppingCart.updateOne({ userId: req.body.userId }, {
      $push: {
        products: {
          _id: req.body.productId,
          quantity: req.body.quantity
        }
      }
    });
    return res.status(401).send(productUpdated)
  }
  else {
    //if the the user is new then we will create a new shopping cart for him
    try {
      const shoppingCart = new ShoppingCart({
        userId: req.body.userId,
        products: [{
          _id: req.body.productId,    //this is the product id which is unique for each product od type objectId
          quantity: 1
        }]
      });
      await shoppingCart.save();
      res.status(201).send(shoppingCart);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}


//to get all the shopping cart present in the database
const getAllCart = async (req, res) => {
  try {
    const shoppingCarts = await ShoppingCart.find({});
    res.send(shoppingCarts);
  } catch (err) {
    res.status(500).send(err);
  }
}


//to get the shopping cart of only one user
//pass the user id in the url
//we can also use the cart id to get the cart of a particular user 
const getSingleCart = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.findOne({ userId: req.params.id })
    if (!shoppingCart) {
      return res.status(404).send("User logged out sign in again");
    }
    res.send(shoppingCart);
  } catch (err) {
    res.status(500).send(err);
  }
}

//to update the quantity of a particular product of the shopping cart of a user
//in this query we need to send the product id and the quantity to be updated in the body object
const updateCart = async (req, res) => {

  //if the request is valid then we will update the product
  try {
    const shoppingCart = await ShoppingCart.findOne({ _id: req.params.id });
    if (!shoppingCart) {
      return res.status(404).send("Oops! Something went wrong.");
    }

    await ShoppingCart.updateOne(
      { _id: req.params.id, "products._id": req.body.productId },
      { $set: { "products.$.quantity": req.body.quantity } }
    );

    // Query the database again to get the updated shopping cart object
    const updatedCart = await ShoppingCart.findOne({ _id: req.params.id });

    res.send(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

//to delete a particular product of the shopping cart of a user
//we have to include the productId in the body object
const deleteCart = async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.findById(req.params.id);
    if (!shoppingCart) {
      return res.status(404).send("Item does not exist in your cart");
    }else{
      //pull the item from the array
      await ShoppingCart.updateOne(
        { _id: req.params.id },
        { $pull: { products: { _id: req.body.productId } } }
      );
    }
    res.status(200).send(shoppingCart);
  } catch (err) {
    res.status(500).send(err);
  }
}

//export all the functions
module.exports = { createCart, getAllCart, getSingleCart, updateCart, deleteCart }