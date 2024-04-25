const { check, body } = require("express-validator");
 const validatorMiddleWare = require("../../middleWares/validatorMiddleWare");

exports.createWishlistValidator = [
  check("productId")
    .isMongoId()
    .withMessage("Invalid product id format"),
  validatorMiddleWare,
];


