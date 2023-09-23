import React, { useState } from "react";
import emailjs from "emailjs-com";
import enquiry from "../assets/enquiry.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  

  return (
    <div
        className="hero pr zi1 v-center aft inside"
        style={{ backgroundImage: "url(../images/contact-hero.jpg)" }}
      >
        <div className="hero-grp hero-wrapper zi2">
          <div className="hero-content">
            <div className="hero-title-wrapper mb40">
              <h1 className="hero-title">
              Contact Us
              </h1>
            </div>
            <p className="hero-subtitle mb40">
              <span>
              Get in Touch with Our Software Development Team
              </span>
            </p>
          </div>
        </div>
      </div>
  
  );
};

export default ContactUs;
