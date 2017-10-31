var React = require("react");

var router = require("react-router");

var Route = router.Route;

var IndexRoute = router.IndexRoute;

var Router = router.Router;

var browserHistory = router.browserHistory;

var Main = require("../components/Main");
var Home = require("../components/Home");
var AboutMe= require("../components/AboutMe");
var Portfolio = require("../components/Portfolio");
var Contact = require("../components/Contact");

module.exports = (<Router history={browserHistory}>

    <Route path="/" component={Main}>
      <Route path="Home" component={Home} />
      <Route path="AboutMe" component={AboutMe} />
      <Route path="Portfolio" component={Portfolio} />
      <Route path="Contact" component={Contact} />
      <IndexRoute component={Home} />
    </Route>
  </Router>);

