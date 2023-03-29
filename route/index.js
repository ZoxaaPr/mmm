const Router = require("express");
const router = Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const orderRouter = require("./orderRouter");


// router.options("/user", function ( req, res, next ){
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', "Authorization");
//     res.header('Access-Control-Allow-Methods', "DELETE,PUT,POST,GET");
//     res.header('Access-Control-Allow-Credentials', true);
//     res.sendStatus(204);
// })
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);

module.exports = router;
