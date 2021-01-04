import React from "react";

const ViewProjects = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* project 1 */}
          <div className="card col-12 col-sm-6 col-md-4" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="./assets/images/book-v-movie.png" className="card-img-top" alt="landing page of Book vs Movie app" />
            <div className="card-body">
              <h5 className="card-title">Book vs Movie</h5>
              <p className="card-text">app to compare ratings of movie and source material</p>
              <a href="https://uofu-project-1.github.io/Book-vs-Movie/" className="btn btn-outline-success">Live site</a>
              <a href="https://github.com/UofU-Project-1/Book-vs-Movie" className="btn btn-outline-success">Repository</a>
            </div>
          </div>

          {/* project 2 */}
          <div className="card col-12 col-sm-6 col-md-4" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="/assets/images/among-us.png" className="card-img-top" alt="selection page from Smartest Among Us app" />
            <div className="card-body">
              <h5 className="card-title">Smartest Among Us</h5>
              <p className="card-text">Among Us themed quiz app</p>
              <a href="https://the-smartest-amoung-us.herokuapp.com/" className="btn btn-outline-success">Live Site</a>
              <a href="https://github.com/Diegopie/The-Smartest-Among-Us" className="btn btn-outline-success">Repository</a>
            </div>
          </div>

          {/* project 3  */}
          <div className="card col-12 col-sm-12 col-md-4" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="project pic" />
            <div className="card-body">
              <h5 className="card-title">CoLab</h5>
              <p className="card-text">A way for creatives to connect for collaborative projects</p>
              {/* <a href="" className="btn btn-outline-success">Live Site</a> */}
              <a href="https://github.com/Rxjas/CoLab/" className="btn btn-outline-success">Repository</a>
            </div>
          </div>
        </div>

        <div className="row">
          {/* code quiz  */}
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="/assets/images/js-quiz.gif" className="card-img-top" alt="project pic" />
            <div className="card-body">
              <h5 className="card-title">code quiz</h5>
              <p className="card-text">take a coding quiz! See high scores! (from local storage)</p>
              <a href="https://theykay.github.io/javascript-quiz-app/" className="btn btn-outline-success">Live Site</a>
              <a href="https://github.com/theykay/javascript-quiz-app" className="btn btn-outline-success">Repository</a>
            </div>
          </div>

          {/* day planner  */}
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="/assets/images/schedule-page.gif" className="card-img-top" alt="project pic" />
            <div className="card-body">
              <h5 className="card-title">day planner</h5>
              <p className="card-text">app that saves day planner to local storage</p>
              <a href="https://theykay.github.io/scheduler/" className="btn btn-outline-success">Live Site</a>
              <a href="https://github.com/theykay/scheduler" className="btn btn-outline-success">Repository</a>
            </div>
          </div>

          {/* weather dashboard */}
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3" style={{width: "18rem", padding: "6px", border: "none"}}>
            <img src="/assets/images/weather-dash.gif" className="card-img-top" alt="project pic" />
            <div className="card-body">
              <h5 className="card-title">weather dashboard</h5>
              <p className="card-text">search cities for current weather and 5-day forecast</p>
              <a href="https://theykay.github.io/weather-dashboard/" className="btn btn-outline-success">Live Site</a>
              <a href="https://github.com/theykay/weather-dashboard" className="btn btn-outline-success">Repository</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProjects;