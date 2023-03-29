const {
  createProduct,
  getAllProducts,
  getProductDetails,
  deleteProduct,
  updateProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controller/productController");
const route = require("express").Router();
const { isAuthUser, authorizeRoles } = require("../middleware/isAuth");

route.get("/", getAllProducts);
route.get("/:id", getProductDetails);
route.put("/review", isAuthUser, createProductReview);
route.get("/reviews/:id", getProductReviews);
route.delete("/reviews_del/", isAuthUser, deleteReview);

route.delete("/:id", isAuthUser, authorizeRoles("admin"), deleteProduct);
route.put("/:id", isAuthUser, authorizeRoles("admin"), updateProduct);

route.post(
  "/createProduct",
  isAuthUser,
  authorizeRoles("admin"),
  createProduct
);

module.exports = route;
