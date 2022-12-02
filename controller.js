
const userProvider = require("./provider");
const dataValidator = require("./validator");

let createOrder = async (req, res) => {
    console.log("sdfghjkl;",req.body)
    try {
        if (!req.body) {
            return  res.status(401).send({
                message: `Request body is missing!`,
              });
        }
        await dataValidator.createOrder(req.body);
        let response = await userProvider.createOrder(req.body);
       
        return  res.status(200).send({
            response
          });
    } catch (e) {
        return res.status(401).send({
           e
          });
    }
}
let updateOrder = async (req, res) => {
    console.log("sdfghjkl;",req.body)
    try {
        if (!req.body) {
            return  res.status(401).send({
                message: `Request body is missing!`,
              });
        }
        let response = await userProvider.updateOrder(req.body);
       
        return  res.status(200).send({
            response
          });
    } catch (e) {
        return res.status(401).send({
           e
          });
    }
}
let listOrder = async (req, res) => {
    console.log("sdfghjkl;",req.body)
    try {
        if (!req.body) {
            return  res.status(401).send({
                message: `Request body is missing!`,
              });
        }
        let response = await userProvider.listOrder(req.body);
       
        return  res.status(200).send({
            response
          });
    } catch (e) {
        return res.status(401).send({
           e
          });
    }
}
let searchOrder = async (req, res) => {
    console.log("sdfghjkl;",req.body)
    try {
        if (!req.body) {
            return  res.status(401).send({
                message: `Request body is missing!`,
              });
        }
        let response = await userProvider.searchOrder(req.body);
       
        return  res.status(200).send({
            response
          });
    } catch (e) {
        return res.status(401).send({
           e
          });
    }
}
let deleteOrder = async (req, res) => {
    console.log("sdfghjkl;",req.body)
    try {
        if (!req.body) {
            return  res.status(401).send({
                message: `Request body is missing!`,
              });
        }
        let response = await userProvider.deleteOrder(req.body);
       
        return  res.status(200).send({
            response
          });
    } catch (e) {
        return res.status(401).send({
           e
          });
    }
}
module.exports = {
    createOrder,
    updateOrder,
    listOrder,
    searchOrder,
    deleteOrder
}