const express = require("express")
const { getAllProducts,getAdminProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts)
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route("/product/update/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
router.route("/product/delete/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);


router.route("/product/:id").get(getProductDetails)

module.exports = router