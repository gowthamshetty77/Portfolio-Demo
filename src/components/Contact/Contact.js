import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebbok from "../../assets/facebook.png";

import FaceBookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t6xwul4", "template_wku4w6d", form.current, {
        publicKey: "0w3Vw0aHKOMESUz2h",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h2 className="clientTitle">My Clients</h2>
        <p className="clientDesc">
          I haave had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebbok} alt="Facebbok" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the below form to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Enter your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Enter your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Enter Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <img src={FaceBookIcon} alt="FaceBookIcon" className="link" />
            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={YouTubeIcon} alt="YouTubeIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
