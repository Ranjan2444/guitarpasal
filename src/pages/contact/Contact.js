import React from "react";
import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          recusandae mollitia autem eius laboriosam facere.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <LocationOnIcon />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Kathmandu,Nepal</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PhoneIcon />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>9839923488,01445321</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <EmailIcon />
            </div>
            <div className="text">
              <h3>Mail</h3>
              <p>guitarpasal@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
