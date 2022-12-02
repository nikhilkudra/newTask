var express = require("express");
let router = express.Router();
const Controller = require("./controller");

router.post("/orders/create",  Controller.createOrder);
router.put("/orders/update",  Controller.updateOrder);
router.get("/orders/list",  Controller.listOrder);
router.get("/orders/search",  Controller.searchOrder);
router.delete("/orders/delete",  Controller.deleteOrder);

module.exports = router;
