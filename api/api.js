
const express = require("express");
const router = express.Router();

const db = require("./mongoose.js");

router.get('/products', async (req, res) => {

    const products = await db.product.find({});
    res.json(products);
});

router.get('/cart', async (req, res) => {
    
    const cartItems = await db.cart.find({});
    res.send(cartItems);
});

router.post('/cart', async (req, res) => {

    const cartItem = new db.cart(req.body);
    const item = await db.cart.findOne({id: cartItem.id});
    
    if (item === null) {
        cartItem.save();
        res.send(cartItem);
    }  
});

router.delete('/cart', async (req, res) => {

    await db.cart.deleteMany({});
    
});

router.post('/checkout', async (req, res) => {
    
});

module.exports = router;