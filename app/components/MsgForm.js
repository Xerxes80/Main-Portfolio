var React = require("react");
var Link = require("react-router").Link;
var MsgForm = React.createClass({

  getInitialState: function() {
    return {
      name: "",
      email:"",
      message:""
    };
  },
  handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },
  handleSubmit: function(event){
      event.preventDefault();
      this.props.Msg(this.state.name, this.state.email, this.state.message);
      this.setState({name: "", email: "", message: "" });

    },
  render: function() {

    return (
      <div className="msgForm-wrapper">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>YOUR NAME</label>
            <input type="text" value={this.state.name} className="form-control" onChange={this.handleChange} id="name" required/>
          </div>
          <div className="form-group">
            <label>YOUR E-MAIL ADDRESS</label>
            <input type="email" value={this.state.email} className="form-control" onChange={this.handleChange} id="email" />
          </div>
          <div className="form-group">
            <label>YOUR MESSAGE</label>
            <textarea value={this.state.message} className="form-control" onChange={this.handleChange} id="message" rows="3" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-danger">Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = MsgForm;