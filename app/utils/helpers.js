var axios = require("axios");

var helpers = {

  getMsg: function() {
    return axios.get("/api/messages")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  
  postMsg: function(name, email, message){
    var d = new Date();
    var n = d.toString();
    var newMsg = {name: name, email: email, message: message, date: n};
    return axios.post("/message", newMsg)
      .then(function(response) {
        console.log("axios results", response);
        return response;
      });
  }
  
};

module.exports = helpers;
