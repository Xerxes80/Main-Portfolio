var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: {
    type: String
  },
  email:{
  	type: String
  },
  message:{
  	type: String
  },
  date: {
    type: String
  }
});

var Message = mongoose.model("Message", MessageSchema);
module.exports = Message;