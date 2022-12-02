const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const schema = new mongoose.Schema(
  {
    order_id: "String",
    item_name: "String",
    cost: "String",
    order_date: { type: Date },
    delivery_date: { type: Date},
  }
  );

const Order = mongoose.model("Order", schema);
module.exports = Order;