var React = require("react");
var Link = require("react-router").Link;
var AboutMe = React.createClass({

getInitialState: function() {
  return {
  };
},

render: function() {

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            
              <div className="article row">
                  <div className="article-left col-lg-4 text-center">
                     <img className="myPicture"  src="./assets/images/myPic.jpg" width="160px" alt="myPicture"/>
                  </div>
                  <div className="article-right col-lg-8">
                    <p className="article-p ">
                     I am a full stack web designer and developer. Technology, Design, and Creativity are my lifelong 
                     passions and obsessions. My lifetime goal is to use technology to change the World. I have been 
                     designing and developing websites and building interactive experiences for three years. I am 
                     proficient in design, web development, and UI/UX design.
                    </p>
                    <p className="article-p" >
                      I'm devoted to modern and clean designs. I am an advocate of structure, purity, and simplicity 
                      in both, design and code. Simple is better than complex. The complex is better than complicated. 
                      I believe that every line of code and element in design has to have purpose or function. 
                      Organization and consistency are significant to me.

                    </p>
                    <p className="article-p">
                      Regarding technology, my tools of trades are HTML5, CSS3, SASS, PostCSS, JavaScript (ES6/ES7) and 
                      version system Git. I also like to work with Bootstrap and Foundation frameworks, NodeJS platform 
                      and OOP. When I want to use some JavaScript library, it is ReactJS and jQuery. I like to use build 
                      tool Gulp and bundler Webpack.
                    </p>
                  </div>
              </div>

          </div>
        </div>
    </div>
  );
}
});

module.exports = AboutMe;