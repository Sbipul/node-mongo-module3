const express = require("express");
const productController = require("../../controllers/products.controller");
const apiLimiter = require("../../middlewares/apiLimiter");
const viewCount = require("../../middlewares/viewCount");
const router = express.Router()
router.route("/").get(productController.getAllProducts).post(productController.saveProduct)
router.route("/:id").get(viewCount,apiLimiter,productController.getAllDetails)
.patch(productController.updateProduct)
.delete(productController.deleteProduct)
// router.route("/:category/:id").get(viewCount,apiLimiter,productController.getAllDetails)

module.exports = router;
// Products all methods ends here