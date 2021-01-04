import React from 'react';

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{margin: "2rem"}}>
          <div className="col-md-4">
            <img id="profile" src="/assets/images/profile.jpg" alt="artsy pic of me through upside-down chair" />
          </div>
          <div className="col">
            <h3>Kay Murray ✌️</h3>
            <i id="locate" className="fas fa-map-marker-alt"> Salt Lake City, UT</i>
            <hr />
            <ul>
              <li>Experience: textiles</li>
              <li>Education: industrial design</li>
              <li>Focus: accessibility design</li>
            </ul>
            <p>See what I'm up to over on my <a href="https://github.com/theykay">github @theykay</a>
            </p>
            <a href="./assets/images/kmurray-resume.pdf" download>view/download resumé</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;