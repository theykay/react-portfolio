import React from "react";

const Contact = () => {
  return (
    <>
      {/* email form */}
      <div class="card"
        style={{ width: "75%", marginLeft: "12.5%", marginRight: "12.5%", marginTop: "2rem", marginBottom: "2rem", padding: "2rem", justifyContent: "center" }}>
        <h2>contact</h2>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
        </div>
        <button type="button" class="btn btn-outline-success" style={{width: "25%"}}>submit</button>
      </div>

      {/* links to relevant accounts */}
      <div class="container">
        <div class="row">
          {/* email */}
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <a href="mailto:murraykyleb@gmail.com">
              <i class="contacticon fas fa-envelope-square"></i>
            </a>
          </div>

          {/* github */}
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <a href="https://github.com/theykay">
              {/* <i class="fab fa-github"></i> */}
              <i class="contacticon fab fa-github-square"></i>
            </a>
          </div>

          {/* linkedin */}
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/theykay">
              {/* <i class="fab fa-linkedin-in"></i> */}
              <i class="contacticon fab fa-linkedin"></i>
            </a>
          </div>

          {/* discord */}
          <div class="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <a href="https://discord.gg/sKc5mWq">
              <i class="contacticon fab fa-discord"></i>
            </a>
          </div>
          {/* phone number */}
          {/* <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <i class="fas fa-phone-square"></i>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Contact;