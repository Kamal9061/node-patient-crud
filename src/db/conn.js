const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/newDataProject")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));