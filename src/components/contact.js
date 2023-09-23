import React, { useState } from "react";
import emailjs from "emailjs-com";
import enquiry from "../assets/enquiry.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_0ozkcn4";
    const templateID = "template_rn1xbgm";
    const userID = "kxQuDkMvVW9WE7llN";
  
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        if (response.status === 200) {
          setSuccessMessage("Thank you for your interest. We'll assist you ASAP.");
          // Clear the form after successful submission
          setFormData({ name: "", mobile: "", email: "", message: "" });
  
          // Clear the success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        }
      })
      .catch((error) => {
        setSuccessMessage("Form sending failed.Please try again");
      });
  };
  

  return (
    <section className="home-enquiry space-default bg5">
      <div className="container">
        <h2 className="section-title">Have a project in mind?</h2>
        <h3 className="stories-title mb48 tac">
          Book a free consultation with tech experts
        </h3>
        <div className="home-enquiry-content df jcsb ais">
          <form
            className="home-enquiry-form mr24 df jcsb fww flx1"
            onSubmit={handleSubmit}
          >
            <div className="input-box">
              <label htmlFor="name">Name*</label>
              <input
                className="input"
                placeholder="First Name*"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="name">Mobile*</label>
              <input
                className="input"
                placeholder="Mobile*"
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email*</label>
              <input
                className="input"
                placeholder="Email*"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea
                className="textarea"
                placeholder="Write a message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="df fdc">
              {successMessage && <p className="fc4 fs16 mb16">{successMessage}</p>}

              <div className="all-industry-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1">
                <button type="submit" className="fc1 bg4">
                  Send
                </button>
              </div>
            </div>
          </form>

          <div className="home-enquiry-img v-center">
            <img src={enquiry} alt="Enquiry 01" className="w100 br16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
