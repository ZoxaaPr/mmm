const {
  newOrder,
  getSinglOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");
const { isAuthUser, authorizeRoles } = require("../middleware/isAuth");

const route = require("express").Router();

route.post("/new", isAuthUser, newOrder);
route.get("/get/:id", isAuthUser, getSinglOrder);
route.get("/me", isAuthUser, myOrders);
route.get("/all", isAuthUser, authorizeRoles("admin"), getAllOrders);
route.put("/admin/:id", isAuthUser, authorizeRoles("admin"), updateOrder);
route.delete("/admin/:id", isAuthUser, authorizeRoles("admin"), deleteOrder);

module.exports = route;
