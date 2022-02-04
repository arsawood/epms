import React, { useState } from "react";
import emailjs from "emailjs-com";

const FormMailer = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [yourMessage, setYourMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yijprh",
        "template_jym5jws",
        e.target,
        "user_Qc64YPmRhBEE4lAxcdlzh"
      )
      .then((res) => {
        console.log(res);
        alert("Your Email has Sent");
      })
      .catch((err) => console.log(err));

    setFullName("");
    setEmail("");
    setProject("");
    setYourMessage("");
  }
  return (
    <div style={{ marginLeft: "500px", marginTop: "20px" }}>
      <h4>Enter your details to send Email</h4>
      <hr style={{ width: "400px", boder: "5px solid red" }} />
      <form className="ui form" onSubmit={sendEmail}>
        <div className="field">
          <label>Full Name</label>
          <input
            style={{ width: "400px", boder: "5px solid red" }}
            type="text"
            name="name"
            // value={fullName}
            placeholder="Enter Full Name"
            onChange={(e) => fullName(e.target.value)}
          />
        </div>
        {/* <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="user_email"
            // value={email}
            placeholder="Enter Email"
            onChange={(e) => email(e.target.value)}
          />
        </div> */}
        <div className="field">
          <label>Project</label>
          <input
            style={{ width: "400px", boder: "5px solid red" }}
            type="text"
            name="project"
            // value={project}
            placeholder="Project"
            onChange={(e) => project(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            style={{ width: "400px", boder: "5px solid red" }}
            name="message"
            rows="2"
            // value={yourMessage}
            placeholder="Write your message here"
            onChange={(e) => yourMessage(e.target.value)}
          />
        </div>
        <div className="field"></div>
        <button className="ui primary button" type="submit" value="send">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default FormMailer;
