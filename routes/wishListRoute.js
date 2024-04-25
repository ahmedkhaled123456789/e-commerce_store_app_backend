const express = require('express');

const authService = require('../services/authServices');
const {
   createWishlistValidator,
 } = require("../utils/validators/wishlistValidator");
const {
  addProductToWishlist,
  removeProductFromWishlist,
  getLoggedUserWishlist,
} = require('../services/wishlistService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));

router.route('/').post(createWishlistValidator,addProductToWishlist).get(getLoggedUserWishlist);

router.delete('/:productId', removeProductFromWishlist);

module.exports = router;