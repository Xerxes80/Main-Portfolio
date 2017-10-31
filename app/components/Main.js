var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  getInitialState: function() {
    return {
      github: "https://github.com/Xerxes80",
      linkedIn: "https://www.linkedin.com/in/kevin-tabesh",
      stackOverFlow: "https://stackoverflow.com/users/7771551/kevin-t"
    };
  },
  render: function() {

    return (
      <div className="main-container">

        <nav className="navbar navbar-expand-lg navbar-light bg-faded ">
          <Link className="navbar-brand text-danger offset-1" to="/Home"><h4>Kevin Tabesh</h4></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse offset-xl-5 offset-lg-4 text-center" id="navbarTogglerDemo02">
            <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0" >
              <li className="nav-item ">
                <Link className="nav-link" to="/AboutMe">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

              {this.props.children}

        <footer className="footer section-dark">
          <div className="wrapper">
            <div className="landingPageLogo" >
              <div className="logo-container row offset-4">
                <div className="github col-2 text-center">
                  <a href={this.state.github} target="_blank">
                    <img className="img" src="./assets/logo/github.png" width="35px" alt="github" />
                  </a>
                </div>
                <div className="linkedin col-2 text-center">
                  <a href={this.state.linkedIn} target="_blank">
                    <img className="img"  src="./assets/logo/linkedin.png" width="35px" alt="linkedIn" />
                  </a>
                </div>
                <div className="stackoverflow col-2 text-center">
                  <a href={this.state.stackOverFlow} target="_blank">
                    <img className="img" src="./assets/logo/stackoverflow.png" width="35px" alt="stackOverFlow" />
                  </a> 
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
});

module.exports = Main;
