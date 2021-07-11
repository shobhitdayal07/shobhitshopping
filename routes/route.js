const express = require('express')

const userController = require('../controllers/user')
const productController = require('../controllers/product')
const cartController = require('../controllers/cart')
const router = express.Router()
const auth = require('../middleware/auth_middleware')
const cart_auth = require('../middleware/cartauth_middleware')

router.post('/register', userController.register)
router.post('/login', userController.login)


router.post('/add', auth , productController.addProduct)
router.delete('/delete', auth, productController.deleteProduct)
router.get('/show', productController.showProduct)
router.patch('/update',auth, productController.updateProduct)


router.patch('/addincart', cart_auth, cartController.addToCart)
router.delete('/removefromcart', cart_auth, cartController.deleteFromCart)


module.exports = router