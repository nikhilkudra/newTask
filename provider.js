const orderModel = require("./orderModel");

const createOrder = async (req) => {
  console.log("fghjkl;kjhg")
  const { order_id, item_name, cost,order_date,delivery_date} = req;
  console.log(delivery_date,"delivery_datedelivery_date")
  let data = await orderModel.findOne({order_id:order_id})
  console.log(data)
 if(data) return `the order of this ${order_id} order id is already crated`
    try {
      const newOrder = await orderModel.create({
    order_id: order_id,
    item_name: item_name,
    cost: cost,
    order_date: order_date,
    delivery_date: delivery_date,
      });
      await newOrder.save(newOrder)
      return newOrder;
    } catch (e) {
      throw e;
    }
};
const updateOrder = async (req) => {
  const { order_id,delivery_date} = req;
  try {
  let data = await orderModel.findOne({order_id:order_id})
  console.log(data,"daaaaaaaaaaaaaaa")
 if(!data) return `the order of this ${order_id} order id is not crated yet`
      const newOrder = await orderModel.findOneAndUpdate(order_id,{delivery_date:delivery_date});
      await newOrder.save(newOrder)
      return newOrder;
    } catch (e) {
      throw e;
    }
};
const listOrder = async (req) => {
  console.log("fghjkl;kjhg")
  const {order_date } = req;
  let data = await orderModel.find({order_date:order_date})
  console.log(data)
  if(!data[0]) return 'kk'
  return data
};
const searchOrder = async (req) => {
  try {
  const { order_id} = req;
  let data = await orderModel.findOne({order_id:order_id})
 if(!data) return `the order of this ${order_id} order id is not crated yet`
 return data
    } catch (e) {
      throw e;
    }
};
const deleteOrder = async (req) => {
  try {
  console.log("fghjkl;kjhg")
  const { order_id} = req;
  let data = await orderModel.findOneAndDelete({order_id:order_id})
  if(!data) return `the order of this ${order_id} order id is not found`
  return `item with this ${order_id} order_id deleted successfully `
    } catch (e) {
      throw e;
    }
};
module.exports = {
  createOrder,
  updateOrder,
  listOrder,
  searchOrder,
  deleteOrder
};
