
const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qydar3s.mongodb.net/task?retryWrites=true&w=majority`;
const connexion = mongoose
  .connect(uri,connectionParams)
  .then(() => {
  })
  .catch((err) => {
  });

module.exports = connexion;