var React = require("react");
var Link = require("react-router").Link;
var MsgForm = require("./MsgForm");
var helpers = require("../utils/helpers");
var Contact = React.createClass({

  getInitialState: function() {
    return {
      name: "",
      email: "",
      message: "",
      messages: [],
      submit: false,
      submited: false
    };
  },
  componentDidMount: function() {
    helpers.getMsg().then(function(results) {
      this.setState({ messages: results.data });

    }.bind(this));
  },
  componentDidUpdate: function() {
    
    if(this.state.submit == true){

      this.state.submit = false;
     
      helpers.postMsg(
                this.state.name,
                this.state.email, 
                this.state.message 
              ).then(function(cb) { 
          
           this.setState({ submited: true });
           
           

      }.bind(this)); 
      
    }
    if(this.state.submited == true){
      helpers.getMsg().then(function(results) {
        this.setState({ messages: results.data });
      }.bind(this));
      this.state.submited = false;
      
    }

  },
  setMsg: function(name, email, message){
    this.setState({ name: name, email: email, message: message, submit: true});
  },
  render: function() {

    return (
      <div className="container">

          <div className="row">
                  <div className="col-lg-5 offset-sm-1">
                    <br />
                    <h3>Let's get <span className="contact-title">in touch</span></h3>
                    <hr /><br />
                    <div className="msgForm">
                      <MsgForm Msg={this.setMsg} />
                    </div>
                  </div>
                  <div className="col-lg-4 offset-sm-1">
                    <br />
                    <h3>Messages</h3>
                    <hr /><br />
                    <div className="allMsgs"> 
                      {this.state.messages.map((eq, index) => 
                        <div key={index}>
                          <div className="msgBox">
                          <h5 className="msgTitle text-danger">{eq.name}</h5>
                          <p className="msgEmail">{eq.email}</p>
                           <p className="msgDate">{eq.date}</p>
                          <hr />
                          <p className="msgMessage">{eq.message}</p>
                        
                         
                          </div>
                        </div>
                      )} 
                    </div>
                  </div>
          </div>
        
      </div>
    );
  }
});

module.exports = Contact;