var React = require("react");
var Link = require("react-router").Link;
var Home = React.createClass({

getInitialState: function() {
  return {
  };
},

render: function() {

  return (
     <div className="container">
      
        <div className="content-center">
          <br /><br /><br /><br />
            <div className="row">
              <div className="home-title col-md-8 offset-2 text-center">
                UI/UX/Web Design,
                    Development & beyond...
              </div>
              <div className="tech-title col-md-8 offset-2 text-center">
              <br />
                <p>Great products built with cutting-edge technologies</p> 
                <p>Creativity + Design + Innovation + Technology</p>
              </div>
            </div>
        </div>
      
    </div>
  );
}
});

module.exports = Home;
