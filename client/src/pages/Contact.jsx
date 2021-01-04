import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("message sent");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("message failed to send");
    }
  };

  return (
    <>
      {/* email form */}
      <div class="card"
        style={{ width: "75%", marginLeft: "12.5%", marginRight: "12.5%", marginTop: "2rem", marginBottom: "2rem", padding: "2rem", justifyContent: "center" }}>
        <h2>contact</h2>
        <form
          method="POST"
          action="send"
          onSubmit={submitRequest}
        >
          <div class="form-group">
            <label for="formName">Name</label>
            <input
              type="name"
              class="form-control"
              id="formName"
              placeholder="name"
              onChange={e => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div class="form-group">
            <label for="formEmail"
              htmlFor="email"
            >Email</label>
            <input
              type="email"
              class="form-control"
              id="formEmail" placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div class="form-group">
            <label for="formMessage">Message</label>
            <textarea
              class="form-control"
              id="formMessage"
              rows="3"
              placeholder="message"
              onChange={e => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <button type="submit" class="btn btn-outline-success" style={{ width: "25%" }}>submit</button>
        </form>
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