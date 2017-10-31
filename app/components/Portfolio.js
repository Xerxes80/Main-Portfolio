var React = require("react");
var Link = require("react-router").Link;
var Portfolio = React.createClass({

getInitialState: function() {
  return {
  };
},

render: function() {

  return (
    <div className="container">
      
        
          <div className="card-container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row content-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center" >
                            
                          <img className="card-img-top article-photo" src="./assets/images/PDR.png" alt="Card image cap" />
                          <h4 className="card-header">Peak Destination Rentals</h4>
                          <div className="card-body">
                            
                            <p className="card-text">This application would allow users to create an account and rent skis, snowboards etc.</p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/Peak-Destinations-Rentals.git" className="card-link" target="blank">
                              <img className="img-btn" src="./assets/logo/github-button.png"/>
                            </a>
                            <a href="https://github.com/Xerxes80/Peak-Destinations-Rentals.git" className="card-link" target="blank">
                              <img className="img-btn" src="./assets/logo/heroku-button.png"/>
                            </a>
                      
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center" >
                          <img className="card-img-top article-photo" src="./assets/images/NYT.png" alt="Card image cap" />
                          <h4 className="card-header">NYT-Scraper</h4>
                          <div className="card-body">
                           
                            <p className="card-text">Get the latest news by searching your desire topc and date and save them to your profile</p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/NYT-React-Search.git" className="card-link" target="blank">
                              <img className="img-btn" src="./assets/logo/github-button.png"/>
                            </a>
                            <a href="https://github.com/Xerxes80/NYT-React-Search.git" className="card-link" target="blank">
                              <img className="img-btn" src="./assets/logo/heroku-button.png"/>
                            </a>
                      
                          </div>
                        </div>
                    </div>
                </div>


                <div className="row ">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center">
                          <img className="card-img-top article-photo" src="./assets/images/Hangman.png" alt="Hangman-Game" />
                          <h4 className="card-header">Hangman Game</h4>
                          <div className="card-body">
                          
                            <p className="card-text">Hangman is a game in five levels that user can guess the hidden word </p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/Hangman-Game.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/github-button.png"/></a>
                            <a href="https://github.com/Xerxes80/Hangman-Game.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/heroku-button.png"/></a>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center" >
                            
                          <img className="card-img-top article-photo" src="./assets/images/RPS-Multi.png" alt="Card image cap" />
                          <h4 className="card-header">RPS-Multiplayer</h4>
                          <div className="card-body">
                          
                            <p className="card-text">Rock Paper Scissor a game for two players to experience unlimited challenge </p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/RPS-Multiplayer.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/github-button.png"/></a>
                            <a href="https://github.com/Xerxes80/RPS-Multiplayer.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/heroku-button.png"/></a>
                          </div>
                        </div>
                    </div>
                </div>
              
                <div className="row ">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center">
                          <img className="card-img-top article-photo" src="./assets/images/trivia-game.png" alt="Trivia Game" />
                          <h4 className="card-header">Trivia Game</h4>
                          <div className="card-body">
                          
                            <p className="card-text">Answer these interesting questions in-time and WIN </p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/Hangman-Game.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/github-button.png"/></a>
                            <a href="https://github.com/Xerxes80/Hangman-Game.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/heroku-button.png"/></a>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="card text-center" >
                            
                          <img className="card-img-top article-photo" src="./assets/images/reservation.png" alt="Card image cap" />
                          <h4 className="card-header">Restaurant Reservation</h4>
                          <div className="card-body">
                          
                            <p className="card-text">Reserve your table at the restaurant</p>
                          </div>
                          
                          <div className="card-body"><hr />
                            <a href="https://github.com/Xerxes80/RPS-Multiplayer.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/github-button.png"/></a>
                            <a href="https://github.com/Xerxes80/RPS-Multiplayer.git" className="card-link" target="blank"><img className="img-btn" src="./assets/logo/heroku-button.png"/></a>
                          </div>
                        </div>
                    </div>
                </div>



              </div>
            </div>
          </div>
        
      
    </div>
  );
}
});

module.exports = Portfolio;