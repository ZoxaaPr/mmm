const {
  registration,
  login,
  logout,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUsers,
  updateUserRole,
  deleteUser,
} = require("../controller/userController");
const { isAuthUser, authorizeRoles } = require("../middleware/isAuth");

const route = require("express").Router();

route.post("/register", registration);
route.post("/login", login);
route.get("/logout", logout);

route.get("/me", isAuthUser, getUserDetails);
route.put("/password/update", isAuthUser, updatePassword);
route.put("/me/update", isAuthUser, updateProfile);

route.get("/all_users", isAuthUser, authorizeRoles("admin"), getAllUsers);
route.get(
  "/single_user/:id",
  isAuthUser,
  authorizeRoles("admin"),
  getSingleUsers
);
route.put(
  "/update_user_role/:id",
  isAuthUser,
  authorizeRoles("admin"),
  updateUserRole
);
route.delete(
  "/delete_user/:id",
  isAuthUser,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = route;
